import React, {Component} from 'react';


class HelloWorld extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        who: "world"
    };

    handleWorldClick = () => {
        this.setState({
        who: "world"
        });
    };

    handleFriendClick = () => {
        this.setState({
        who: "friend"
        });
    };

    handleReactClick = () => {
        this.setState({
            who: 'react',
        })
    }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button type="submit" id="world" onClick={this.handleWorldClick}>
          World
        </button>
        <button type="submit" id="friend" onClick={this.handleFriendClick}>
          Friend
        </button>
        <button type="submit" id="react" onClick={this.handleReactClick}>
          React
        </button>
      </div>
    );
  }
}

export default HelloWorld;