import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { avatar_url, login } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        style={{ width: "60px" }}
        className='round-img'
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  avatar_url: PropType.string,
  login: PropType.string,
  html_url: PropType.string,
};

export default UserItem;
