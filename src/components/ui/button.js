import styled from 'styled-components';

const btnColor = (type) => {
  switch (type) {
    case 'book':
    case 'confirm':
      return '#fff';
    case 'delete':
      return '#ff0000';
    case 'normal':
    default:
      return '#0091EA';
  }
};

const btnPadding = (type) => {
  switch (type) {
    case 'basic':
    case 'delete':
      return '0.1em 1em';
    case 'cancel':
      return '0.2em 1em';
    case 'normal':
    default:
      return '0.25em 1em';
  }
};

const btnMargin = (type) => {
  switch (type) {
    case 'basic':
    case 'delete':
    case 'book':
      return '0.5em 0.5em 0.5em auto';
    case 'confirm':
    case 'cancel':
      return '0';
    case 'normal':
    default:
      return '1em';
  }
};

const btnBorder = (type) => {
  switch (type) {
    case 'delete':
    case 'basic':
    case 'cancel':
      return `1px solid ${btnColor(type)}`;
    case 'book':
    case 'confirm':
      return `2px solid #ff0000`;
    case 'normal':
    default:
      return `2px solid ${btnColor(type)}`;
  }
};

const btnDisplay = (type) => {
  switch (type) {
    case 'basic':
    case 'delete':
      return `initial`;
    case 'normal':
    default:
      return `block`;
  }
};

const btnBackground = (type) => {
  switch (type) {
    case 'basic':
      return `#fff`;
    case 'book':
    case 'confirm':
      return '#ff0000';
    case 'normal':
    default:
      return `initial`;
  }
};

const btnFloat = (type) => {
  switch (type) {
    case 'submit':
      return 'right';
    case 'basic':
    case 'normal':
    default:
      return `initial`;
  }
};

const Button = styled.button`
  display: inline-block;
  color: ${(props) => btnColor(props.btnStyle)};
  font-size: 1em;
  margin: ${(props) => btnMargin(props.btnStyle)};
  padding: ${(props) => btnPadding(props.btnStyle)};
  border: ${(props) => btnBorder(props.btnStyle)};
  border-radius: 3px;
  display: ${(props) => btnDisplay(props.btnStyle)};
  cursor: pointer;
  background-color: ${(props) => btnBackground(props.btnStyle)};
  line-height: 1.3em;
  float: ${(props) => btnFloat(props.btnStyle)};
`;

export default Button;
