import styled from "styled-components";

const Button = styled.button`
  margin-left: 10px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  height: 35px;
  width: 40px;
  border: none;
  border-radius: 8px;

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  svg {
    position: relative;
    fill: #111a2c;
    width: 18px;
  }

  &:hover {
    svg {
      fill: #ff6c44;
    }
  }
`;

const HeaderButton = (props) => {
  return <Button className={props.buttonClass} onClick={props.onHeaderButtonClick}>{props.children}</Button>;
};

export default HeaderButton;
