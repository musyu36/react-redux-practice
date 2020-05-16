import React, { Component } from "react";
import { Link } from "react-router-dom";

// stateとactionsの紐付けに必要
import { connect } from "react-redux";

// import { postEvents } from "../actions";

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>asdfasdf</div>
      </React.Fragment>
    );
  }
}

// const mapDispatchToProps = { postEvents };

export default connect(null, null)(EventsNew);
