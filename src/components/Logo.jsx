import icon from "../images/icons.svg";

const Logo = () => {
  return (
    <div className="logo__wrapper">
      <svg className="icon__logo">
        <use href={icon + "#setting"} />
      </svg>
      <h1 className="logo__text">
        Dashboard <span className="logo__span">v.01</span>
      </h1>
    </div>
  );
};

export default Logo;
