import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGeoData } from './dataSliceAPI';
import { initiateSocketConnection } from './socketSlice';
// import io from 'socket.io-client';
// import { endpoint } from '../../../endpoint';

// const socket = io.connect(endpoint, {
//   'sync disconnect on unload': true,
//   'query': { token: process.env.REACT_APP_HEROKU_KEY },
// });
export const fetchGeoLocationData = createAsyncThunk(
  'dataSlice/fetchGeoLocationData',
  async (_, { dispatch }) => {
    const response = await getGeoData();
    dispatch(initiateSocketConnection(response));
    return response;
  }
);

const initialState = {
  status: 'idle',
  date: new Date().getTime(),
  socketConnectionInitiated: false,
  geoDataLoaded: false,
  geoData: {},
  actions: {},
};

export const assetSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    updateActions: (state, action) => {
      if (state.actions[action.payload]) {
        state.actions[action.payload].push(new Date().getTime());
      } else {
        state.actions[action.payload] = [new Date().getTime()];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeoLocationData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchGeoLocationData.fulfilled, (state, action) => {
        state.geoData = {
          error: false,
          msg: 'Geo Data Fetched',
          ...action.payload,
        };
        state.geoDataLoaded = true;
        state.status = 'idle';
      })
      .addCase(fetchGeoLocationData.rejected, (state, action) => {
        state.geoData = { error: true, msg: 'Failed to fetch', ...action };
        state.geoDataLoaded = true;
        state.status = 'idle';
      });
  },
});
export const { updateActions } = assetSlice.actions;
export default assetSlice.reducer;
