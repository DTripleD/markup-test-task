import "./App.css";
import users from "../users.json";

function App() {
  return (
    <>
      <aside className="sidebar">
        <h1 className="logo__text">
          Dashboard<span className="logo__span">v.01</span>
        </h1>
        <ul>
          <li className="pages__options">
            <p>Dashboard</p>
          </li>
          <li className="pages__options">
            <p>Product</p>
          </li>
          <li className="pages__options pages__options--active">
            <p>Customers</p>
          </li>
          <li className="pages__options">
            <p>Income</p>
          </li>
          <li className="pages__options">
            <p>Promote</p>
          </li>
          <li className="pages__options">Help</li>
        </ul>
        <div className="user">
          <img className="user__photo" src="" alt="" />
          <h2 className="user__name">Evano</h2>
          <p className="user__position">Project Manager</p>
        </div>
      </aside>
      <div className="main">
        <h2 className="hello__message">Hello Evano 👋🏼,</h2>
        <div className="table">
          <div className="table__form">
            <div>
              <h3 className="table__name">All Customers</h3>
              <p className="table__active">Active Members</p>
            </div>
            <div className="input__wrapper">
              <input type="text" placeholder="Search" className="input" />
            </div>
          </div>
          <div>
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
            <ul>
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
                      <p className="status__text status__text--active">
                        Active
                      </p>
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
          <div className="pagination__wrapper">
            <p className="shown-results">Showing data 1 to 8 of 256K entries</p>
            <div>
              <ul className="pagination__list">
                <li className="pagination__item">0</li>
                <li className="pagination__item pagination__item--active">1</li>
                <li className="pagination__item">2</li>
                <li className="pagination__item">3</li>
                <li className="pagination__item">4</li>
                <li className="pagination__item">...</li>
                <li className="pagination__item">40</li>
                <li className="pagination__item">0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
