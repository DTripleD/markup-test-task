import MediaQuery from "react-responsive";
import icon from "../images/icons.svg";
import Table from "./Table";

import PropTypes from "prop-types";

const Main = ({ setIsShown }) => {
  return (
    <div className="main">
      <div className="header__wrapper">
        <h2 className="hello__message">Hello Evano 👋🏼,</h2>
        <MediaQuery maxWidth={1299}>
          <button onClick={() => setIsShown(true)} className="sidebar__button">
            <svg className="icon__menu">
              <use href={icon + "#menu"} />
            </svg>
          </button>
        </MediaQuery>
      </div>
      <Table />
    </div>
  );
};

export default Main;

Main.propTypes = {
  setIsShown: PropTypes.func,
};
