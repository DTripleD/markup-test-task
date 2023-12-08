import icon from "../images/icons.svg";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div>
      <Logo />
      <ul>
        <li className="pages__options">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#key-square"} />
            </svg>
            <p>Dashboard</p>
          </div>
          <svg className="icon__chevron">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
        <li className="pages__options">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#square"} />
            </svg>
            <p>Product</p>
          </div>
          <svg className="icon__chevron">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
        <li className="pages__options pages__options--active">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#user-square"} />
            </svg>
            <p>Customers</p>
          </div>
          <svg className="icon__chevron icon__chevron--active">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
        <li className="pages__options">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#wallet-money"} />
            </svg>
            <p>Income</p>
          </div>
          <svg className="icon__chevron">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
        <li className="pages__options">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#discount-shape"} />
            </svg>
            <p>Promote</p>
          </div>
          <svg className="icon__chevron">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
        <li className="pages__options">
          <div className="pages__text">
            <svg className="icon__navigation">
              <use href={icon + "#message-question"} />
            </svg>
            <p>Help</p>
          </div>
          <svg className="icon__chevron">
            <use href={icon + "#chevron-right"} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
