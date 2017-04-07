import React, { Component } from 'react';
import { Input, InlineForm } from 'rebass';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address1: '',
      address2: '',
    };
  }

  setAddress1 = (e) => this.setState({ address1: e.target.value })

  setAddress2 = (e) => this.setState({ address2: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();

    const { address1, address2 } = this.state;

    // if (address1 && address2) {
    //   this.props.fetchSongByName(songNameText, artistText || 'null');
    // }

    this.setState({
      address1: '',
      address2: '',
    });
  }

  render() {
    return (
      <div className="container">
        <div className="home">
          <h1>Home</h1>
        </div>

        <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <Input
            label=""
            name="address1"
            rounded
            type="text"
            placeholder="Address 1"
            onChange={this.setAddress1}
            value={this.state.address1}
          />
          <InlineForm
            label=""
            name="address1"
            onSubmit={this.handleSubmit}
            placeholder="Address 2"
            rounded
            buttonLabel="Search"
            onChange={this.setAddress2}
            value={this.state.address2}
          />
        </div>
      </div>
    );
  }
}

export default Home;
