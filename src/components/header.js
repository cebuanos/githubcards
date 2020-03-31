import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col>
              <div className="app-github-header">
                <h2>The GitHub Cards App</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="app-github-notes">
                <div className="app-github-notes-title">GitHub usernames:</div>
                <div className="app-github-notes-desc">
                  gaearon, sophiebits, sebmarkbage, bvaughn
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
