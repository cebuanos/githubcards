import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/cardlist";
import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container, Row, Col } from "react-bootstrap";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faCrown);

class App extends Component {
  state = {
    profiles: []
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <main>
            <Container>
              <Row>
                <Col>
                  <div className="app-github-form">
                    <Form onSubmit={this.addNewProfile} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="app-github-list">
                    <CardList profiles={this.state.profiles} />
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
          <footer className="github-footer">
            <Footer />
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
