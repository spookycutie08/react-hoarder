import React from 'react';
import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';
import ItemCard from '../../shared/ItemCard/ItemCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('could not get items', err));
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;

    const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item}/>
    ));
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
        {/* <Link className="btn btn-secondary" onClick={this.editEvent}><i class="fas fa-pencil-alt"></i> Edit</Link> */}
        {/* <Link className="btn btn-primary" onClick={this.singleViewEvent}><i class="fas fa-search"></i> View</Link> */}
      </div>
    );
  }
}

export default Home;
