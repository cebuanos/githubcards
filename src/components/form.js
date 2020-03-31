import React, { Component } from "react";
import axios from "axios";
import { InputGroup, FormControl } from "react-bootstrap";
import Styled from "styled-components";

const Button = Styled.button`
  font-size: 0.9em;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  background: #db36a4;
  color: #eee;
  padding: 0px 10px 0px 10px;

  :hover {
    background: #f50cb3;
    color: white;
  }
`;

class Form extends Component {
  state = { userName: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`    
    );
    console.log(resp.data);
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3" style={{ width: "300px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Enter Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            required
          />
          <Button>Add Card</Button>
        </InputGroup>
      </form>
    );
  }
}

export default Form;
