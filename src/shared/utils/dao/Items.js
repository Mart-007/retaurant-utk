import { firestoreDb } from '../../helpers/Firebase';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

class Items {
  constructor() {
    this.multipleItemsPath = `RESTAURANT-UTK/ITEMS`;
  }

  getItem(fnCallback) {
    const queryRef = query(collection(firestoreDb, this.multipleItemsPath), orderBy('name'));

    this.getItemRef = onSnapshot(queryRef, querySnapshot => {
      const items = [];
      querySnapshot.forEach(snapshot => {
        const data = snapshot.data();
        items.push({
          itemId: snapshot.id,
          ...data,
        });
      });

      fnCallback(items);
    });
  }

  detachGetItem() {
    if (this.getItemRef) this.getItemRef();
  }

  createItem(item) {
    return addDoc(collection(firestoreDb, this.multipleItemsPath), item);
  }

  updateItem(id, item) {
    return updateDoc(doc(firestoreDb, this.multipleItemsPath, id), item);
  }

  deleteItem(id) {
    return deleteDoc(doc(firestoreDb, this.multipleItemsPath, id));
  }
}

export default Items;
