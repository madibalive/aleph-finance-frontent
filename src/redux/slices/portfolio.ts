import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';
// utils
import { fetchAddressData, fetchweb3Data } from '../../services';
import { sample2 } from 'src/mock/values';
import { filterWalletsData } from 'src/utils/formatArray';

// ----------------------------------------------------------------------

const initialState: any = {
  isLoading: false,
  success: false,
  error: false,
  networth: 0,
  nft_total: 0,
  avatar: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg',
  groupedProtocols: [],
  wallet_total: 0,
  protocol_total: 0,
  wallets: [],
  protocols: [],
  nfts: [],
  nodes: [],
};

const slice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.success = false;
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getDataSuccess(state, action) {
      // const data = sample2;
      const data = {
        ...state,
        ...action.payload.addresses,
        nodes: action.payload.web3,
      };

      state.nft_total = data.nft_total;
      state.nfts = data.nfts;
      state.protocol_total = data.protocol_total;
      state.groupedProtocols = data.groupedProtocols;
      state.protocols = data.protocols;
      state.wallet_total = data.wallet_total;
      state.wallets = data.wallets;
      // state.wallets = filterWalletsData(data.wallets);
      state.networth = data.networth;
      state.avatar = data.avatar;
      state.nodes = data.nodes;
      state.isLoading = false;
      state.success = true;
    },

    reset(state) {
      // state.isLoading = false;
      state.success = false;
      state.error = false;
      state.networth = 0;
      state.nft_total = 0;
      state.avatar = 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg';
      state.groupedProtocols = [];
      state.wallet_total = 0;
      state.protocol_total = 0;
      state.wallets = [];
      state.protocols = [];
      state.nfts = [];
      state.nodes = [];
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { reset } = slice.actions;

// ----------------------------------------------------------------------

export function getPortfolio(addressList: any) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.reset());
    try {
      const response = await Promise.all([
        fetchAddressData(addressList),
        fetchweb3Data(addressList),
      ]);

      const [addresses, web3] = response;
      dispatch(
        slice.actions.getDataSuccess({
          addresses,
          web3,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
