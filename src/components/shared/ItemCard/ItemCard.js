import React from 'react';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
