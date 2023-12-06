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
      <main className="content">
        <h2 className="hello__message">Hello Evano 👋🏼,</h2>
        <div className="table">
          <h3 className="table__name">All Customers</h3>
          <p className="table__active">Active Members</p>
          <input type="text" />
          <ul>
            {users.map((user) => (
              <li key={user.number} className="users-table__item">
                <p>{user.name}</p>
                <p>{user.company}</p>
                <p>{user.number}</p>
                <p>{user.email}</p>
                <p>{user.country}</p>
                {user.status ? (
                  <div>
                    <p>Active</p>
                  </div>
                ) : (
                  <div>
                    <p>Inactive</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
