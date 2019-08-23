import React from "react";
import { connect } from "react-redux";

const ReduxExample = props => {
  let content = null;
  if (props.toShow) {
    content = props.secretVal;
  }
  return (
    <div>
      {content}
      <button onClick={props.onToggle}>Toggle</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    secretVal: state.secretVal,
    toShow: state.toShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch({ type: "Toggle" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);
