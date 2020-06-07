import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    this.props.history.push(`/edit/${itemId}`);
  }

  singleViewEvent = (e) => {
    e.preventDefault();
    const itemId = '67890';
    this.props.history.push(`/stuff/${itemId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link className="btn btn-secondary" onClick={this.editEvent}><i class="fas fa-pencil-alt"></i> Edit</Link>
        <Link className="btn btn-primary" onClick={this.singleViewEvent}><i class="fas fa-search"></i> View</Link>
      </div>
    );
  }
}

export default Home;
