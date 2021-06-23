import { useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { ButtonTooltip } from './components/ButtonTooltip';
import Island from './Island';
import islands from './islands.json';
import './charts.css';

const Charts = () => {
  const [ModalShow, setModalShow] = useState(false);
  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);
  const [rotated, rotate] = useState(false);
  const [chart, setChart] = useState('');

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

    setChart(charts[newIndex]);
  };

  const pChart = () => nChart(false);

  const openChart = () => {
    window.open(`/charts/${chart} Ground Chart.png`);
  };

  return (
    <>
      <div className="margined">
        <Alert variant="dark">
          <h3>These charts are not yet released!</h3>
          <h5>So don't use these for ATC 24 (yet)</h5>
          This is just a beta preview of the charts for feedback. Please message
          HotDog#6400 on Discord if you have any feedback or notice any mistakes
          on these charts. Thank you.
          <hr />
          The taxiway lettering not matching the ones in game is not a mistake;
          Orange will change the layout in game to match these ones.
        </Alert>
      </div>
      <div className="margined">
        {filteredIslands.map((island) => (
          <div key={island.Name}>
            <h3>{island.Name}</h3>
            <div className="chart-grid">
              {island.Airports.map((airport) => (
                <div key={airport.ICAO}>
                  <h6 style={{ display: 'inline' }}>{airport.ICAO}</h6>
                  <h4 style={{ display: 'inline' }}> {airport.Name}</h4>
                  <img
                    className="thumbnail"
                    src={`/charts/preview/${airport.ICAO} Ground Chart.png`}
                    width="100%"
                    alt={`Airport ground chart for the airport ${airport.ICAO}`}
                    onClick={() => {
                      setChart(airport.ICAO as string);
                      showModal();
                    }}
                  />
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
      <Modal show={ModalShow} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <a href={`/charts/${chart} Ground Chart.png`}>
            <img
              src={`/charts/preview/${chart} Ground Chart.png`}
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
