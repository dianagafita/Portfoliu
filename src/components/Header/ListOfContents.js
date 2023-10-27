export default function ListOfContents(props) {
  return (
    <ul>
      <li onClick={props.hideNav}>
        <a href="#home">Home</a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#about">About</a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#skills">Skills</a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={props.hideNav}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
