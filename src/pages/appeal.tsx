import type { GetServerSideProps } from 'next';

const Appeal = () => {};

export default Appeal;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res
    .writeHead(301, {
      location:
        'https://docs.google.com/forms/d/e/1FAIpQLSf8EUYrPvDNErJ3bkubT6AnF4_Ku3dS-PPyN_VS9PYb8UODvw/viewform',
    })
    .end();
  return { props: {} };
};
