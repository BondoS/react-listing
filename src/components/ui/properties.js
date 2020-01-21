import styled from 'styled-components';

export default styled.div`
  padding: '10px 2%';
  text-align: center;
  & > div {
    width: '48%';
    margin: auto;
    @media only screen (min-width: 480px) {
      width: '98%';
    }
  }
`;
