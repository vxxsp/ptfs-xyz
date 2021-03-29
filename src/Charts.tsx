import { useState } from "react";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";

const ChartModal = (props: {show: boolean; onHide: () => void; chart: string}) => {
  const {show, onHide, chart} = props;
  const link = `/charts/${chart} Ground Chart.png`
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {chart}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a href={link}>
          <img
            src={link}
            alt={`Airport ground chart for the airport ${chart}`}
            width="100%"
          />
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {window.open(link)}}>Open Image in New Tab</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Charts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [lastChart, setChart] = useState("");
  
  const codes = [
    'BIGK', 'KBLT', 'KGAR',
    'KMLR', 'KRFD', 'KTRC',
    'LCHS', 'LCLK', 'LCPH',
    'LCPR', 'LGSK', 'LJIO',
    'LJNF', 'LJSC', 'TFFJ',
    'TFFU', 'YPLK', 'YPPH'
  ]

  const cols = codes.map((code) =>
    <Col>
      <a href="#/" onClick={() => {
        setChart(code);
        setModalShow(true);
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
  }

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

      <ChartModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        chart={lastChart}
      />
    </>
  )
}


export { Charts };
