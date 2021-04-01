import { useState } from 'react';
import { Alert, Button, Container, Modal } from 'react-bootstrap';
import { ButtonTooltip } from './components/ButtonTooltip';
import './charts.css';

const Charts = () => {
  const [ModalShow, setModalShow] = useState(false);
  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);
  const [rotated, rotate] = useState(false);
  const [chart, setChart] = useState('');

  const codes = [
    'BIGK',
    'KBLT',
    'KGAR',
    'KMLR',
    'KRFD',
    'KTRC',
    'LCHS',
    'LCLK',
    'LCPH',
    'LCPR',
    'LGSK',
    'LJIO',
    'LJNF',
    'LJSC',
    'TFFJ',
    'TFFU',
    'YPLK',
    'YPPH',
  ];

  const nChart = (next = true) => {
    const index = codes.indexOf(chart);
    const length = codes.length;
    let newIndex = index + (next ? 1 : -1);

    if (newIndex < 0) newIndex = length - 1;
    else if (newIndex >= length) newIndex = 0;

    setChart(codes[newIndex]);
  };

  const pChart = () => nChart(false);

  const openChart = () => {
    window.open(`/charts/${chart} Ground Chart.png`);
  };

  return (
    <>
      <Container>
        <Alert variant="dark">
          <h4>These charts are not released yet!</h4>
          <p>
            This is just a beta preview of the charts for feedback. Please
            message HotDog#6400 on Discord if you have any feedback or notice
            any mistakes on these charts. Thank you.
          </p>
          <hr />
          The taxiway lettering not matching the ones in game is not a mistake,
          it's a proposal.
        </Alert>
        <div className="chart-grid">
          {codes.map((code) => (
            <a
              href="#/"
              onClick={() => {
                setChart(code);
                showModal();
              }}
            >
              <img
                src={`/charts/preview/${code} Ground Chart.png`}
                width="100%"
                alt={`Airport ground chart for the airport ${code}`}
              />
            </a>
          ))}
        </div>
      </Container>
      <Modal show={ModalShow} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{chart}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href={`/charts/${chart} Ground Chart.png`}>
            <img
              src={`/charts/${chart} Ground Chart.png`}
              alt={`Airport ground chart for the airport ${chart}`}
              width="100%"
              style={{ transform: rotated ? 'rotate(90deg)' : undefined }}
            />
          </a>
        </Modal.Body>
        <Modal.Footer>
          <ButtonTooltip onClick={nChart} text="<" tooltip="Previous Chart" />
          <ButtonTooltip
            onClick={() => {
              rotate(!rotated);
            }}
            text="⟳"
            tooltip="Rotate Chart (Experimental)"
            nodelay
            className="hide-on-portrait"
          />
          <ButtonTooltip onClick={pChart} text=">" tooltip="Next Chart" />
          <Button variant="secondary" onClick={openChart}>
            Open Image in New Tab
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Charts };
