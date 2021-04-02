import { Container } from 'react-bootstrap';

const Redirect = ({ link }: { link: string }) => {
  window.location.href = link;
  let formatedLink = link.substr(0, 70);
  if (link !== formatedLink) formatedLink = link.substr(0, 67) + '...';

  return (
    <Container>
      Redirecting you to <a href={link}>{formatedLink}</a> ...
    </Container>
  );
};

export { Redirect };
