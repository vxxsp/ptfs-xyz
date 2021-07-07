import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Tabs,
  Tab,
} from 'react-bootstrap';

const Home = () => {
  const PTFSCarousel = [
    ['/carousel/ae5c6fe3e68db7d7f11d05ecdddbb549.png', 'HMS Queen Elizibeth'],
    [
      '/carousel/4f77e374c7406d60cf2a4dc4a511ca14.png',
      'Light aircraft on final aproach',
    ],
    ['/carousel/3c193231b093768fcc426769f4548470.png', 'Fighter jet at night'],
    ['/carousel/a6ac22a9e9fa6bdab3ecfea4bd239565.png', 'Airliner in cruise'],
    [
      '/carousel/edec81d06a58ecc39d967b96b6402be5.png',
      'Airliner during landing',
    ],
    [
      '/carousel/8bdaa98ed59c5b827bfdd67071986977.png',
      'Small airport on a mountain side',
    ],
    [
      '/carousel/aa9586039d4f94237fc91b60713908ff.png',
      'All in-game islands taken from above',
    ],
  ];

  const PTRSCarousel = [
    [
      '/carousel/d535bfe5adfdc6d340881dfc3da4decb.png',
      'Helicopter landing on an oil rig',
    ],
    [
      '/carousel/6bf8191341a7013c52c3550cb4dee88f.png',
      'Small raft at the base of an oil rig',
    ],
    [
      '/carousel/b84a1c252c7bd2608dde2fb4177f6840.png',
      'Large rescue ship at port',
    ],
    ['/carousel/1e557f9ee7b54326276f948d0654e0e9.png', 'Helicoptor crash site'],
    [
      '/carousel/3f026a827ef420cedf0f21e3f42bb1ee.png',
      'Sail-boat with a broken sail',
    ],
  ];

  const GameTab = ({
    name,
    description,
    id,
    carousel,
  }: {
    name: string;
    description: string;
    id: number;
    carousel: string[][];
  }) => (
    <>
      <br />
      <Row>
        <Col sm={5}>
          <Carousel indicators={false}>
            {carousel.map((arr, i) => (
              <Carousel.Item key={i}>
                <img src={arr[0]} alt={arr[1]} width="100%" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col sm={5}>
          <h2>{name}</h2>
          <p>{description}</p>
          <Button href={`https://www.roblox.com/games/${id}`} block>
            Play {name} on Roblox!
          </Button>
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <Head>
        <title>Home | PTFS</title>
        <meta name="title" content="Pilot Training Flight Simulator" />
        <meta property="og:title" content="Pilot Training Flight Simulator" />
        <meta
          name="description"
          content="A free-to-play open world flight simulator on Roblox."
        />
        <meta
          property="og:description"
          content="A free-to-play open world flight simulator on Roblox."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://ptfs.xyz/" />
        <meta
          property="og:image"
          content="/carousel/edec81d06a58ecc39d967b96b6402be5.png"
        />
      </Head>
      <Header />
      <Container>
        <Tabs defaultActiveKey="ptfs">
          <Tab eventKey="ptfs" title="Pilot Training Flight Simulator">
            <GameTab
              name="Pilot Training Flight Simulator"
              description="Welcome to Pilot Training, where you can fly a wide
                range of different aircraft ranging from the mighty A380, to
                the adorable Piper Cub."
              id={20321167}
              carousel={PTFSCarousel}
            />
          </Tab>
          <Tab eventKey="ptrs" title="Pilot Training Rescue Squadron">
            <GameTab
              name="Pilot Training Rescue Squadron"
              description="Welcome to Pilot Training Rescue Squadron. The aim
                of this game is for the team of rescuers to go out to different
                islands, an oil rig, a damaged sail boat and a stricken
                aircraft carrier to rescue the stranded players. They do this
                using helicopters, planes and boats which can be spawned at the
                Rescue Squadrons base. Once the stranded players have been
                brought back to the base they can touch the main door of the
                Rescue Squadron's building and they too will then become a
                rescuer."
              id={470170393}
              carousel={PTRSCarousel}
            />
          </Tab>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
