import User from "./User";
import PropTypes from "prop-types";
import icon from "../images/icons.svg";

import Navigation from "./Navigation";
import MediaQuery from "react-responsive";

const Sidebar = ({ isShown, setIsShown }) => {
  return (
    <aside className={`sidebar ${isShown ? "shown" : ""}`}>
      <MediaQuery maxWidth={1299}>
        <button
          onClick={() => setIsShown(false)}
          className="sidebar__button sidebar__button--close"
        >
          <svg className="icon__menu">
            <use href={icon + "#cross"} />
          </svg>
        </button>
      </MediaQuery>

      <Navigation />
      <User />
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  isShown: PropTypes.bool,
  setIsShown: PropTypes.func,
};
