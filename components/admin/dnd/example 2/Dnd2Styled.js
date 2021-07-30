import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Head = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  background-color: #CCCCCC;
  width:100%;
`;

export const Droppable = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  right: 0;
  top: 10;
  background-color: #9E9E9E;
  border-left: 2px dotted red;
`;

export const Draggable = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
  margin: 10px auto;
`;
  
export const InProgress = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0;
  top: 10;
  background-color: #EEEEEE;
  border-right: 2px dotted red;
`;
