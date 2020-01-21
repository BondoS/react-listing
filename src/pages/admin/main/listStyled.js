import styled from 'styled-components';

export default styled.div`
  border: 1px solid #cdd0d2;
  border-radius: 9px;
  margin-bottom: 10px;
  & h3 {
    text-align: center;
  }
  & .editProperty {
    color: #0091ea;
    font-size: 1em;
    margin: 1em;
    padding: 0.1em 1em;
    border: 1px solid #0091ea;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
  }
  & li {
    display: flex;
    justify-content: space-between;
  }
  & .name {
    align-self: center;
  }
`;
