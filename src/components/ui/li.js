import styled from 'styled-components';

export default styled.li`
  padding: ${(props) => (props.header ? '4px 0' : '4px')};
  float: ${(props) => (props.header ? 'left' : 'none')};
  font-size: 0.9rem;
  color: '#0091EA';
  & a {
    text-decoration: none;
  }
  &:not(:first-child) a {
    border-left: ${(props) => (props.header ? '1px solid #0091EA' : '')};
  }
  & a {
    padding: 0 5px;
  }
`;
