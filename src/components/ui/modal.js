import styled from 'styled-components';

export default styled.div`
  position: absolute;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-50% - 0.5px));
  @media (max-width: 480px) {
    width: 80%;
  }
  & .content {
    padding: 10px;
  }
  & .buttonsOuter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
