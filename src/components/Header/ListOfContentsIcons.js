import {
  FaHome,
  FaListAlt,
  FaUserCircle,
  FaPhone,
  FaWindowRestore,
} from "react-icons/fa";

export default function ListOfContentsIcons(props) {
  return (
    <ul>
      <li onClick={props.hideNav}>
        <a href="#home">
          <FaHome style={{ marginRight: "20px" }} />
          Home
        </a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#about">
          <FaUserCircle style={{ marginRight: "20px" }} />
          About
        </a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#skills">
          <FaListAlt style={{ marginRight: "23px" }} />
          Skills
        </a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#projects">
          <FaWindowRestore style={{ marginRight: "5px" }} />
          Projects
        </a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#contact">
          <FaPhone style={{ marginRight: "7px" }} />
          Contact
        </a>
      </li>
    </ul>
  );
}
