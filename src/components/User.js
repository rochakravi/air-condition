import { connect } from "react-redux";

const User = (props) => {
  const clickHandler = () => {
    props.updateUser();
  };
  return (
    <>
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
