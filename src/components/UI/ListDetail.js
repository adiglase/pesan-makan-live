import styled from "styled-components";

const StyledListDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

const ListDetail = (props) => {
  return (
    <StyledListDetail bold={props.bold}>
      <div className="point">{props.point}</div>
      <div className="value">{props.value}</div>
    </StyledListDetail>
  );
};

export default ListDetail;
