import User from "./User";

import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Navigation />
      <User />
    </aside>
  );
};

export default Sidebar;
