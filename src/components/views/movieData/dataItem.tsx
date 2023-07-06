import { FC } from "react";
import styled from "styled-components";
import { main, secondaryTitle } from "constants/colors";

const MovieDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  .dataName {
    color: ${secondaryTitle};
    border-right: 1px solid ${main};
    margin: 15px;
    display: inline-block;
    padding-right: 10px;
    width: 70px;
    text-align: right;
    width: 20%;
  }
  .dataValue {
    width: 80%;
  }
`;
type DataItemPropsType = {
  name: string;
  value: string | undefined;
};
const DataItem: FC<DataItemPropsType> = ({ name, value }) => {
  return (
    <MovieDataContainer>
      <span className="dataName">{name}</span>
      <span className="dataValue">{value}</span>
    </MovieDataContainer>
  );
};

export default DataItem;
