import { useState, Fragment } from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Alert, ButtonGroup, Card, ToggleButton } from 'react-bootstrap';
import type Island from '../Island';
import islands from '../islands.json';
import Lightbox from 'react-awesome-lightbox';
import { useCookies } from 'react-cookie';

const Charts = ({ chartdarkmode = false }: { chartdarkmode: boolean }) => {
  const [lightboxEnabled, setLightbox] = useState(false);
  const [lighboxIdx, setLightboxIdx] = useState(0);
  const [chartDark, setChartDark] = useState(chartdarkmode);
  const [_, setCookie] = useCookies(['chart-dark-mode']);

  const goDark = (dark = true) => {
    setChartDark(dark);
    setCookie('chart-dark-mode', Number(dark));
  };
  const goLight = () => goDark(false);

  const dark = chartDark ? 'dark' : 'light';

  const filteredIslands = (islands as Island[]).filter(
    (island) => island.Airports.filter((airport) => airport.ICAO).length
  );

  const charts = filteredIslands
    .map((island) => island.Airports)
    .flat()
    .map((airport) => airport.ICAO) as string[];

  const showLightbox = (airportCode: string) => {
    const idx = charts.indexOf(airportCode);
    setLightboxIdx(idx);
    setLightbox(true);
  };

  return (
    <>
      <Head>
        <title>PTFS Charts - PTFS</title>
        <meta name="title" content="PTFS Charts" />
        <meta
          name="description"
          content="The official ground charts for Pilot Training Flight Simulator on Roblox."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ptfs.xyz/charts" />
        <meta property="og:title" content="PTFS Charts" />
        {/* <meta property="og:description" content="The official ground charts for Pilot Training Flight Simulator on Roblox." /> */}
        <meta
          property="og:image"
          content="/charts/light/IPPH Ground Chart.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={`margined${lightboxEnabled ? ' noscroll' : ''}`}>
        <Alert variant="dark">
          <h3>These charts are not yet released!</h3>
          <h5>So don&apos;t use these for ATC 24 (yet)</h5>
          This is just a beta preview of the charts for feedback. Please message
          HotDog#6400 on Discord if you have any feedback or notice any mistakes
          on these charts. Thank you.
          <hr />
          The taxiway lettering not matching the ones in game is not a mistake;
          Orange will change the layout in game to match these ones.
        </Alert>
        <Card bg="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              Navigation
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={0}
                  checked={!chartDark}
                  onChange={() => goLight()}
                >
                  Light
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={1}
                  checked={chartDark}
                  onChange={() => goDark()}
                >
                  Dark
                </ToggleButton>
              </ButtonGroup>
            </Card.Title>
            <Card.Text as="ol">
              {filteredIslands.map((island) => (
                <li key={island.Name}>
                  <a href={`#${island.Name}`}>{island.Name}</a>
                  <ol>
                    {island.Airports.map((airport) => (
                      // @ts-ignore
                      <li key={airport.ICAO} type="i">
                        <a href={`#${airport.ICAO}`}>{airport.Name}</a>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        {filteredIslands.map((island) => (
          <Fragment key={island.Name}>
            <h3 id={island.Name}>{island.Name}</h3>
            <div className="chart-grid">
              {island.Airports.map((airport) => (
                <div key={airport.ICAO}>
                  <h6 style={{ display: 'inline' }} id={airport.ICAO}>
                    {airport.ICAO}
                  </h6>
                  <h4 style={{ display: 'inline' }}> {airport.Name}</h4>
                  <img
                    className="thumbnail"
                    src={`/charts/${dark}/${airport.ICAO} Ground Chart.png`}
                    width="100%"
                    alt={`Airport ground chart for the airport ${airport.ICAO}`}
                    onClick={() => {
                      showLightbox(airport.ICAO as string);
                    }}
                  />
                </div>
              ))}
            </div>
            <br />
          </Fragment>
        ))}
      </div>
      {lightboxEnabled && (
        <Lightbox
          images={filteredIslands
            .map((island) => island.Airports)
            .flat()
            .map((airport) => ({
              url: `/charts/${dark}/${airport.ICAO} Ground Chart.png`,
              title: airport.Name,
            }))}
          onClose={() => setLightbox(false)}
          startIndex={lighboxIdx}
          doubleClickZoom={0}
        />
      )}
      <Footer />
    </>
  );
};

export default Charts;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: { chartdarkmode: req.cookies['chart-dark-mode'] === '1' },
  };
};
