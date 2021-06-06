import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    -webkit-filter: drop-shadow(0px 10px 3px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0px 10px 3px rgba(0, 0, 0, 0.1));
    margin-right: 20px;
  }
`;

const DisplayImage = (props) => {
  return (
    <Container className={props.className}>
      {props.children}
    </Container>
  );
};

export default DisplayImage;