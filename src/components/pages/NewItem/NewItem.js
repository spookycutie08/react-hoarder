import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

import './NewItem.scss';

class NewItem extends React.Component {
  state = {
    newItemName: '',
    newItemImage: '',
    newItemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ newItemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ newItemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ newItemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const {
      newItemName,
      newItemImage,
      newItemDescription,
    } = this.state;

    const newItem = {
      itemName: newItemName,
      itemImage: newItemImage,
      itemDescription: newItemDescription,
      uid: authData.getUid(),
    };
    itemsData.postNewItem(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save new item:', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="NewItem col-12">
        <h1>New Item</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.saveItem}>Save Item</button>
          </form>
      </div>
    );
  }
}

export default NewItem;
