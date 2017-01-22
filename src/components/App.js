import React from 'react';
import MyNavbar from './common/MyNavbar';


class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <MyNavbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
