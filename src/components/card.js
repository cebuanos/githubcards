import React, { Component } from "react";
import Styled from "styled-components";
import { Router, Route } from "react-router-dom";

const Button = Styled.button`
  font-size: 0.8em;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  background: #db36a4;
  color: #eee;
  margin-top:10px;
  padding: 4px 10px 4px 10px;

  :hover {
    background: #f50cb3;
    color: white;
  }
`;

const Avatar = Styled.div`
  width:100px;
  height:100px;
  border-radius: 50%;
  border: 5px solid #ffffff;
  background: url(${props => props.image.avatar_url});
  background-repeat: no-repeat;
  background-size: 100px 100px;
`;

class CardHub extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Router>
          <Route
            path="/external"
            component={() => {
              window.location =
                "https://domain.extension/external-without-params";
              return null;
            }}
          />
        </Router>
      );
    }
  };

  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ display: "flex" }}>
        <div className="github-profile-avatar">
          <Avatar image={profile} />
        </div>
        <div>
          <div className="github-profile-info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
            <Button>Followers: {profile.followers}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardHub;
