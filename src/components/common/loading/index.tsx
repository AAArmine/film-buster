import styled from "styled-components";

export const LoaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: secondary;
  min-height: 100vh;
  min-width: 100vw;
`;

const Loading = () => {
  return <LoaderCont>Loading ... </LoaderCont>;
};

export default Loading;
