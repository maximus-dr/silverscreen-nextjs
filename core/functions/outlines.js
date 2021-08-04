import { css } from 'styled-components';


// добавляет обводку компонентам
export function enableOutlines(isEnabled, color) {
  return isEnabled
    ? css`
      position: relative;
      outline: 1px dashed ${color};
      outline-offset: -1px;
    `
    : css``;
};

export function getOutlines() {
  return `
    outline: 2px solid #42a5f5;
    outline-offset: 1px;
  `;
}
