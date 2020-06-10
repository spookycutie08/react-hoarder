import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    scat: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
          <Link className="btn btn-secondary" to={editLink}><i className="fas fa-pencil-alt"></i> Edit</Link>
          <Link className="btn btn-primary" to={singleLink}><i className="fas fa-search"></i> View</Link>
          <button className="btn btn-danger" onClick={() => removeItem(item.id)}><i className="fas fa-times"></i> Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
