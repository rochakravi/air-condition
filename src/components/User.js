import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const User = (props) => {
  const [products, setProducts] = useState([]);
  const clickHandler = () => {
    props.updateUser();
  };
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <>
      {products.map((person, index) => (
        <p>{person.name}</p>
      ))}
      <p>
        current user - {props.loggedUser}- {props.email}
      </p>
      <button onClick={clickHandler}>Update User </button>
      {props.product.map((item) => {
        return <p key={item.id}>{item}</p>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.user,
    email: state.email,
    product: state.items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: () =>
      dispatch({
        type: "UPDATE_USER",
        payload: { user: "shailendra", email: "abc@gmail.com" },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
