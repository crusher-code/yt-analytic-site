import React from "react"
import PropTypes from "prop-types"
class NotLoggedIn extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h2>You are not logged in, please log in to view this page.</h2>
      </React.Fragment>
    );
  }
}

export default NotLoggedIn
