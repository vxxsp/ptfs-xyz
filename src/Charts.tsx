import { useState, Fragment } from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Modal,
  ToggleButton,
} from 'react-bootstrap';
import { ButtonTooltip } from './components/ButtonTooltip';
import Island from './Island';
import islands from './islands.json';
import './charts.css';
import { useCookies } from 'react-cookie';

const Charts = () => {
  const [cookies, setCookie] = useCookies(['chart-dark-mode']);
  const [chartDark, setChartDark] = useState(
    cookies['chart-dark-mode'] === 'true'
  );
  const [chart, setChart] = useState('');
  const [ModalShow, setModalShow] = useState(false);
  const closeModal = () => setModalShow(false);

  const showModal = (ICAO: string) => {
    setModalShow(true);
    window.location.hash = ICAO;
  };

  const [rotated, rotate] = useState(false);

  const changeChartDark = (str: string) => {
    console.log(str);
    setCookie('chart-dark-mode', str === '1');
    setChartDark(str === '1');
  };

  const dark = chartDark ? ' dark' : '';

  const filteredIslands = (islands as Island[]).filter(
    (island) => island.Airports.filter((airport) => airport.ICAO).length
  );

  const charts = filteredIslands
    .map((island) => island.Airports)
    .flat()
    .map((airport) => airport.ICAO) as string[];

  const nChart = (next = true) => {
    const index = charts.indexOf(chart);
    const length = charts.length;
    let newIndex = index + (next ? 1 : -1);

    if (newIndex < 0) newIndex = length - 1;
    else if (newIndex >= length) newIndex = 0;

    const newChart = charts[newIndex];
    window.location.hash = newChart;
    setChart(newChart);
  };

  const pChart = () => nChart(false);

  const openChart = () => {
    window.open(`/charts/full${dark}/${chart} Ground Chart.png`);
  };

  return (
    <>
      <div className="margined">
        <Alert variant="dark">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 style={{ display: 'inline' }}>
              These charts are not yet released!
            </h3>
            <ButtonGroup toggle>
              <ToggleButton
                type="radio"
                variant="secondary"
                name="radio"
                value={0}
                checked={!chartDark}
                onChange={(e) => changeChartDark(e.currentTarget.value)}
              >
                Light
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant="secondary"
                name="radio"
                value={1}
                checked={chartDark}
                onChange={(e) => changeChartDark(e.currentTarget.value)}
              >
                Dark
              </ToggleButton>
            </ButtonGroup>
          </div>
          <h5>So don't use these for ATC 24 (yet)</h5>
          This is just a beta preview of the charts for feedback. Please message
          HotDog#6400 on Discord if you have any feedback or notice any mistakes
          on these charts. Thank you.
          <hr />
          The taxiway lettering not matching the ones in game is not a mistake;
          Orange will change the layout in game to match these ones.
        </Alert>
        <Card bg="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Navigation</Card.Title>
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
                    src={`/charts/thumb${dark}/${airport.ICAO} Ground Chart.png`}
                    width="100%"
                    alt={`Airport ground chart for the airport ${airport.ICAO}`}
                    onClick={() => {
                      setChart(airport.ICAO as string);
                      showModal(airport.ICAO as string);
                    }}
                  />
                </div>
              ))}
            </div>
            <br />
          </Fragment>
        ))}
      </div>
      <Modal
        show={ModalShow}
        onHide={closeModal}
        size="lg"
        centered
        dialogClassName={chartDark ? 'dark-modal' : ''}
      >
        <Modal.Body>
          <a href={`/charts/full${dark}/${chart} Ground Chart.png`}>
            <img
              src={`/charts/thumb${dark}/${chart} Ground Chart.png`}
              alt={`Airport ground chart for the airport ${chart}`}
              width="100%"
              style={{ transform: rotated ? 'rotate(90deg)' : undefined }}
            />
          </a>
        </Modal.Body>
        <Modal.Footer>
          <ButtonTooltip onClick={pChart} text="<" tooltip="Previous Chart" />
          <ButtonTooltip
            onClick={() => {
              rotate(!rotated);
            }}
            text="⟳"
            tooltip="Rotate Chart (Experimental)"
            nodelay
            className="hide-on-portrait"
          />
          <ButtonTooltip onClick={nChart} text=">" tooltip="Next Chart" />
          <Button variant="secondary" onClick={openChart}>
            Open in New Tab
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Charts };
