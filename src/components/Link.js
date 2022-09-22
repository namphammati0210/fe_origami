import { Link as RouteLink } from "react-router-dom";
const Link = ({ name, path }) => {
  return <li>{path && <RouteLink to={path}>{name}</RouteLink>}</li>;
};

export default Link;
