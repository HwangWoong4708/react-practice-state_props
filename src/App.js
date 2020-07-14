import React from "react";
import Header from "./Header";
import Content from "./Content";
import MyName from "./MyName";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
        />

        <MyName name="hwang-woong" />
        <Counter />
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: "Default header",
  contentTitle: "Default contentTitle",
  contentBody: "Default contentBody",
};

export default App;
