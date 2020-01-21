import styled from 'styled-components';

export default styled.div`
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 5px;
  &.full {
    margin-top: 10px;
  }
  &.basic {
    border: 1px solid #bbbaba;
  }
  .mainContent {
    overflow: hidden;
  }
  & .txt,
  .images {
    float: left;
  }
  & .txt {
    width: 40%;
  }
  &.basic .images {
    max-height: 152px;
  }
  &.full .images {
    max-height: 255px;
  }
  & .images {
    width: 60%;
    overflow: hidden;
    &:not(:hover) {
      & img {
        width: 25% !important;
        &:first-child {
          width: 50% !important;
        }
      }
    }
    img {
      transition: width 500ms ease-in-out;
      &:hover {
        width: 50%;
      }
      &:not(:hover) {
        width: 25%;
      }
    }
  }
  & .field {
    margin-left: 5px;
    margin-right: 5px;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  & .label,
  .value {
    display: inline-block;
  }
  & .label {
    margin-right: 5px;
  }
  & a {
    text-decoration: none;
  }
  & .name {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 5px;
  }
  & .amenity {
    background: #3ea5ef;
    margin: 2px;
    padding: 3px 6px;
    border-radius: 4px;
    display: inline-block;
    color: white;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  & .open .collapseHeader {
    background: #b5b5b5;
  }
  & .close .collapseHeader {
    background: #ff0000;
  }
  & .collapseHeader {
    transition: background-color 500ms ease;
  }
  & .readMore,
  .collapseHeader {
    width: 100%;
    background: #ff0000;
    color: white;
    padding: 5px;
    border-radius: 4px;
    border: none;
    margin-top: 5px;
    cursor: pointer;
  }
  & .readMore {
    display: block;
    line-height: 1rem;
    text-align: center;
    font-weight: bold;
  }
  & .roomOuter {
    margin: 2px 1%;
    padding: 3px;
    &:not(:last-child) {
      border-bottom: 1px solid #bbbaba;
    }
  }
  & .roomName {
    margin-left: 10px;
  }
  & .noRooms {
    text-align: center;
    background: #b5b5b5;
    color: white;
    padding: 5px;
    border-radius: 4px;
    border: none;
    margin-top: 5px;
  }
`;
