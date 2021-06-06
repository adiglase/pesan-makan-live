import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

const BackDrop = (props) => {
  return <StyledBackDrop onClick={props.onClose} />;
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 10vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 0 20px 20px 20px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 700px;
    left: calc(50% - 350px);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderOverlay = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 50;
  max-width: 100%;
  height: 60px;

  .modal-title {
    text-align: center;
    flex-grow: 1;
    font-weight: 600;
    letter-spacing: 5px;
  }
  .additional-button {
    position: absolute;
    left: 0;
    &.listed {
      svg {
        fill: #fff;
      }
      button {
        background-color: #ff6c44;
      }
    }
  }
  .close-button {
    position: absolute;
    right: 0;
  }
`;

const StyledModalContent = styled.div`
  max-height: 60vh;
  overflow-y: auto;
`;

const Overlay = (props) => {
  const iniClass = props.isWishlisted ? " listed" : " unlisted";
  return (
    <StyledOverlay>
      <HeaderOverlay>
        {props.additionalBtn && (
          <div className={"additional-button" + iniClass}>
            <Button bold onButtonClick={props.additionalBtnAction} pad={props.additionalBtnPad}>
              {props.additionalBtn}
            </Button>
          </div>
        )}
        <div className="modal-title">{props.title}</div>
        <div className="close-button">
          <Button primary bold onButtonClick={props.onClose}>
            X
          </Button>
        </div>
      </HeaderOverlay>
      <StyledModalContent>{props.children}</StyledModalContent>
    </StyledOverlay>
  );
};

const portalEl = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          onClose={props.onClose}
          additionalBtn={props.additionalBtn}
          additionalBtnAction={props.additionalBtnAction}
          isWishlisted={props.isWishlisted}
          additionalBtnPad={props.additionalBtnPad}
        >
          {props.children}
        </Overlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
