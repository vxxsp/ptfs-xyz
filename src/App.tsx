import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Header } from './common/header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const PTFSCarousel = [
  ['https://t7.rbxcdn.com/ae5c6fe3e68db7d7f11d05ecdddbb549', 'HMS Queen Elizibeth'],
  ['https://t6.rbxcdn.com/4f77e374c7406d60cf2a4dc4a511ca14', 'Light aircraft on final aproach'],
  ['https://t3.rbxcdn.com/3c193231b093768fcc426769f4548470', 'Fighter jet at night'],
  ['https://t1.rbxcdn.com/a6ac22a9e9fa6bdab3ecfea4bd239565', 'Airliner in cruise'],
  ['https://t1.rbxcdn.com/edec81d06a58ecc39d967b96b6402be5', 'Airliner during landing'],
  ['https://t1.rbxcdn.com/8bdaa98ed59c5b827bfdd67071986977', 'Small airport on a mountain side'],
  ['https://t7.rbxcdn.com/aa9586039d4f94237fc91b60713908ff', 'All in-game islands taken from above']
];

const PTRSCarousel = [
  ['https://t7.rbxcdn.com/d535bfe5adfdc6d340881dfc3da4decb', 'Helicopter landing on an oil rig'],
  ['https://t6.rbxcdn.com/09e4a1bdf6883d765c491c7ea495a684', 'Sall raft at the base of an oil rig'],
  ['https://t2.rbxcdn.com/93686946c969efd0ce52a9bd6e5aa47d', 'Large rescue ship at port'],
  ['https://t2.rbxcdn.com/1e557f9ee7b54326276f948d0654e0e9', 'Helicoptor crash site'],
  ['https://t0.rbxcdn.com/1cdc53384fc680393db225a645090a51', 'Sail-boat with a broken sail']
];

const genGameTab = (
  name: string,
  description: string,
  id: number,
  carousel: string[][]
) => (
  <>
    <br />
    <Row>
      <Col sm={5}>
        <Carousel indicators={false}>
          {
            carousel.map(arr => (
              <Carousel.Item>
                <img
                  src={arr[0]}
                  alt={arr[1]}
                  width="100%"
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Col>
      <Col sm={5}>
        <h2>{name}</h2>
        <p>
          {description}
        </p>
        <Button block>
          <a
            href={`https://www.roblox.com/games/${id}`}
            style={{ color: 'white' }}
          >
            Play {name} on Roblox!
          </a>
        </Button>
      </Col>
    </Row>
  </>
);

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br />
        
        <Container>
          <Alert variant="dark">
            <h4>
              This website is currently under development. In the meantime,
              feel free to check out our games on Roblox.
            </h4>
          </Alert>
        </Container>
        
        <Container>
          <Tabs defaultActiveKey="ptfs" >

            <Tab eventKey="ptfs" title="Pilot Training Flight Simulator">
              {genGameTab(
                "Pilot Training Flight Simulator",
                `Welcome to Pilot Training, where you can fly a wide range of
                different aircraft ranging from the mighty A380, to the
                adorable Piper Cub.`,
                20321167,
                PTFSCarousel
              )}
            </Tab>

            <Tab eventKey="ptrs" title="Pilot Training Rescue Squadron">
              {genGameTab(
                "Pilot Training Rescue Squadron",
                `Welcome to Pilot Training Rescue Squadron. The aim of this
                game is for the team of rescuers to go out to different
                islands, an oil rig, a damaged sail boat and a stricken
                aircraft carrier to rescue the stranded players. They do this
                using helicopters, planes and boats which can be spawned at the
                Rescue Squadrons base. Once the stranded players have been
                brought back to the base they can touch the main door of the
                Rescue Squadron's building and they too will then become a
                rescuer.`,
                470170393,
                PTRSCarousel
              )}
            </Tab>

          </Tabs>
        </Container>
      </>
    )
  }
};

export default App;
