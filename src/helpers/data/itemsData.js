import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&&equalTo="${uid}"`)
    .then((response) => {
      const fbItems = response.data;
      const itemsArray = [];
      if (fbItems) {
        Object.keys(fbItems).forEach((fbId) => {
          fbItems[fbId].id = fbId;
          itemsArray.push(fbItems[fbId]);
        });
      }
      resolve(itemsArray);
    })
    .catch((err) => console.error('could not get items:', err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

export default { getItemsByUid, getSingleItem };
