import React from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";

function User(props) {
  return (
    <>
      <h2> name is {props.name}</h2>
      <h2> age is {props.age}</h2>
    </>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  // age: PropTypes.string.isRequired,
};

export default User;
