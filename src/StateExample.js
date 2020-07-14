import React from "react";

class StatementExample extends React.Component {
  constructor(props) {
    /*state의 초기 값을 설정할 때는 constructor(생성자) 메소드에서 this.state={ }를 통하여 설정.*/
    super(props);

    this.state = {
      header: "header Initial State",
      content: "Content Initial State",
    };
  }

  updateHeader(text) {
    this.setState({
      header: "header has changed",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.header}</h2>
        <button onClick={this.updateHeader.bind(this)}>Update</button>
      </div>

      /*
      state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
      state 를 렌더링 할 때는 { this.state.stateName } 을 사용합니다.
      state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다. ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다. (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)
      */
    );
  }
}
