import React from 'react';

import './SingleItem.scss';
import itemsData from '../../../helpers/data/itemsData';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemsData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete item: ', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem col-6 offset-3">
        <h1>{item.itemName}</h1>
        <img src={item.itemImage} alt="item"/>
        <h5 className="card-text">{item.itemDescription}</h5>
          <button className="btn btn-danger" onClick={this.removeItem}><i className="fas fa-times"></i> Delete</button>
      </div>
    );
  }
}

export default SingleItem;
