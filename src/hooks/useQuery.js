import { useLocation } from 'react-router-dom';
// A custom hook that builds on useLocation to parse
// the query string.
export default () => new URLSearchParams(useLocation().search);
