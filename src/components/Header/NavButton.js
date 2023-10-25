import Icon from "./Icon";

function NavButton(props) {
  return (
    <button className="hamburger" onClick={props.navHandler}>
      <Icon />
    </button>
  );
}
export default NavButton;
