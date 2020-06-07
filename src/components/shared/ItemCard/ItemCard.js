import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    scat: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
          <Link className="btn btn-secondary" to={editLink}><i className="fas fa-pencil-alt"></i> Edit</Link>
          <Link className="btn btn-primary" to={singleLink}><i className="fas fa-search"></i> View</Link>

          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
