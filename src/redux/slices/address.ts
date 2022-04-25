import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const queueAdapter = createEntityAdapter<any>({
  // selectId: (book) => book.localKey,
  // @ts-ignore
  // sortComparer: (a, b) => a.localDate.localeCompare(b.localDate),
});

const Address = createSlice({
  name: 'Address',
  initialState: queueAdapter.getInitialState(),
  reducers: {
    addAddress(state, action) {
      // action.payload.date = new Date().toISOString();
      queueAdapter.addOne(state, action);
    },
    addAddresess: queueAdapter.addMany,
    AddressUpdate: queueAdapter.updateOne,
    removeAddress: queueAdapter.removeOne,
    clearAddresess: queueAdapter.removeAll,

    AddressSetAll(state, action) {
      queueAdapter.setAll(state, action.payload);
    },
  },
});

export const AddressSelector = queueAdapter.getSelectors<RootState>((state) => state.addresess);

export const {
  addAddress,
  addAddresess,
  removeAddress,
  AddressUpdate,
  AddressSetAll,
  clearAddresess,
} = Address.actions;

export default Address.reducer;
