import { createSlice } from '@reduxjs/toolkit';

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collections: [],
  },
  reducers: {
    addCollection: (state, action) => {
      //console.log(state.collections);
      state.collections.push(action.payload);
    },
    removeCollection: (state, action) => {
      state.collections = state.collections.filter(
        (collection) => collection.id !== action.payload
      );
    },
    addElementToCollection: (state, action) => {
      const { id, element } = action.payload;
      const collection = state.collections.find(
        (collection) => collection.id === id
      );
      collection.elements.push(element);
    },
  },
});

export const { addCollection, removeCollection, addElementToCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
