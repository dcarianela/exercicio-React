import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/ENHA">ENHA</Link>
      <Link to="/TXT">TXT</Link>
      <Link to="/NJS">NJS</Link>
    </nav>
  );
}
