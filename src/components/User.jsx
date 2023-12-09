import UserPhoto from "../images/userPhoto.png";

const User = () => {
  return (
    <div className="user">
      <img className="user__photo" src={UserPhoto} alt="user photo" />
      <div className="user__wrapper">
        <h2 className="user__name">Evano</h2>
        <p className="user__position">Project Manager</p>
      </div>
    </div>
  );
};

export default User;
