import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: #111a2c;
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink href="#">@adiglase</StyledLink>
    </StyledFooter>
  );
};

export default Footer;