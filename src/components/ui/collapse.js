import styled from 'styled-components';

const border = '1px solid rgb(187, 186, 186)';
export default styled.div`
  &.closed {
    & .collapseHeader {
      border-radius: 4px;
    }
  }
  &.open {
    & .collapseHeader {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    & .ReactCollapse--collapse {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: ${border};
      padding: 0 10px;
    }
  }
  & .collapseHeader {
    margin-top: 10px;
    border: ${border};
    cursor: pointer;
    width: 100%;

    & h3 {
      margin: 0;
    }
    &:hover,
    &:focus {
      background: rgb(187, 186, 186);
    }
  }
`;
