import icon from "../images/icons.svg";
import users from "../../users.json";
import Pagination from "./Pagination";
import MediaQuery from "react-responsive";

const Table = () => {
  return (
    <div className="table">
      <div className="table__form">
        <div>
          <h3 className="table__name">All Customers</h3>
          <p className="table__active">Active Members</p>
        </div>
        <div className="input__wrapper">
          <svg className="icon__search">
            <use href={icon + "#search"} />
          </svg>
          <input type="text" placeholder="Search" className="input" />
        </div>
      </div>
      <div>
        <MediaQuery minWidth={1300}>
          <ul className="table__header-wrapper">
            <li className="table__header-text table__item--width">
              Customer Name
            </li>
            <li className="table__header-text table__item--width">Company</li>
            <li className="table__header-text table__item--width">
              Phone Number
            </li>
            <li className="table__header-text table__item--width">Email</li>
            <li className="table__header-text table__item--width">Country</li>
            <li className="table__header-text table__item--width">Status</li>
          </ul>
        </MediaQuery>

        <ul className="user-table__list">
          {users.map((user) => (
            <li key={user.number} className="users-table__item">
              <p className="users-table__text table__item--width">
                {user.name}
              </p>
              <p className="users-table__text table__item--width">
                {user.company}
              </p>
              <p className="users-table__text table__item--width">
                {user.number}
              </p>
              <p className="users-table__text table__item--width">
                {user.email}
              </p>
              <p className="users-table__text table__item--width">
                {user.country}
              </p>
              {user.status ? (
                <div className="status__wrapper status__wrapper--active">
                  <p className="status__text status__text--active">Active</p>
                </div>
              ) : (
                <div className="status__wrapper status__wrapper--inactive">
                  <p className="status__text status__text--inactive">
                    Inactive
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Pagination />
    </div>
  );
};

export default Table;
