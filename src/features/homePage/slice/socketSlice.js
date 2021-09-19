import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import { endpoint } from '../../../endpoint';

const initialState = {
  status: 'idle',
  socket: null,
};
const trackUsageAction = 'track-usage';
const initTrackUsageAction = 'init-track-usage';
export const pushDataToBackend = createAsyncThunk(
  'dataSlice/pushToBackend',
  async (_, { getState }) => {
    const reducer = getState().dataReducer;
    const socket = getState().socketConnection.socket;
    await socket.emit(trackUsageAction, reducer);
  }
);

export const socketSlice = createSlice({
  name: 'socketSlice',
  initialState,
  reducers: {
    initiateSocketConnection: (state, action) => {
      state.socket = io.connect(endpoint, {
        'sync disconnect on unload': true,
        'query': {
          token: process.env.REACT_APP_HEROKU_KEY,
        },
      });
      state.socket.emit(initTrackUsageAction, action.payload);
    },
  },
});
export const { initiateSocketConnection } = socketSlice.actions;
export default socketSlice.reducer;
