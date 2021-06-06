import styled from "styled-components";

const Stats = styled.div`
  position: absolute;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  background-color: #ff6c44;
  color: #fff;
  border-radius: 100%;
  font-size: 8px;
`;

const StatsNumber = (props) => {
  return <Stats>{props.number}</Stats>;
};

export default StatsNumber;
