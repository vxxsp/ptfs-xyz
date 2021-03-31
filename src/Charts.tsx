import { useState } from "react";
import { Alert, Button, Col, Container, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const Charts = () =>{
  const [ModalShow, setModalShow] = useState(false);
  const [rotated, rotate] = useState(false);
  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);
  const [chart, setChart] = useState("");

  const codes = [
    'BIGK', 'KBLT', 'KGAR',
    'KMLR', 'KRFD', 'KTRC',
    'LCHS', 'LCLK', 'LCPH',
    'LCPR', 'LGSK', 'LJIO',
    'LJNF', 'LJSC', 'TFFJ',
    'TFFU', 'YPLK', 'YPPH'
  ];

  const cols = codes.map((code) =>
    <Col key={code}>
      <a href="#/" onClick={() => {
        setChart(code);
        showModal();
      }}>
        <img 
          src={`/charts/${code} Ground Chart.png`}
          width="100%"
          alt={`Airport ground chart for the airport ${code}`}
        />
      </a>
    </Col>
  );

  const genRows = () => {
    const rows = [];
    for (let i = 0; i <= codes.length; i +=3) {
      rows.push(
        <>
          <Row>
            {cols[(i)]}
            {cols[(i + 1)]}
            {cols[(i + 2)]}
          </Row>
          <br />
        </>
      )
    }
    return rows;
  };

  const nextChart = (next: boolean) => {
    const index = codes.indexOf(chart);
    const newIndex = index + (next ? 1 : -1);
    if (newIndex >= 0 && newIndex < codes.length)
      setChart(codes[newIndex]);
  };

  const ButtonTooltip = (props: {
    onClick: () => void,
    text: string,
    tooltip: string
    nodelay?: boolean
  }) => {
    return (
      <OverlayTrigger
        placement="top"
        delay={{ show: props.nodelay ? 0 : 500, hide: 0 }}
        overlay={<Tooltip id={props.tooltip}>{props.tooltip}</Tooltip>}
      >
        <Button onClick={props.onClick}>{props.text}</Button>
      </OverlayTrigger>
    )  
  };

  return (
    <>
      <Container>
        <Alert variant="dark">
          <h4>These charts are not released yet!</h4>
          <p>This is just a beta preview of the charts for feedback. Please message
            HotDog#6400 on Discord if you have any feedback or notice any mistakes
            on these charts. Thank you.</p>
          <hr />
          The taxiway lettering not matching the ones in game is not a mistake,
          it's a proposal.
        </Alert>
        {genRows()}
      </Container>

      <Modal
        show={ModalShow}
        onHide={closeModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{chart}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <a href={`/charts/${chart} Ground Chart.png`}>
            <img
              src={`/charts/${chart} Ground Chart.png`}
              alt={`Airport ground chart for the airport ${chart}`}
              width="100%"
              style={{transform: rotated ? "rotate(90deg)" : undefined}}
            />
          </a>
        </Modal.Body>

        <Modal.Footer>
          <ButtonTooltip onClick={() => {nextChart(false)}} text="<" tooltip="Previous Chart" />
          <ButtonTooltip onClick={() => {rotate(!rotated)}} text="⟳" tooltip="Rotate Chart (Experimental)" nodelay />
          <ButtonTooltip onClick={() => {nextChart(true)}} text=">" tooltip="Next Chart" />
          <Button variant="secondary" onClick={() => {window.open("link")}}>Open Image in New Tab</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Charts };
