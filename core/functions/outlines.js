import { css } from 'styled-components';


// добавляет обводку компонентам
const enableOutlines = (isEnabled, color) => {
  return isEnabled
    ? css`
      position: relative;
      outline: 1px dashed ${color};
      outline-offset: -1px;
    `
    : css``;
};

const getOutlines = () => {
  return `
    outline: 2px solid #42a5f5;
    outline-offset: 1px;
  `;
}



export {
    enableOutlines,
    getOutlines
}
