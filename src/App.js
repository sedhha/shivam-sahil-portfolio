import React from 'react';
import 'react-slidedown/lib/slidedown.css';
import HomePageSkeleton from './features/homePage/skeleton';
import './app.scss';
import ReactGa from 'react-ga';
import axios from 'axios';
import io from 'socket.io-client';
const socket = io.connect(
  'https://shivamsahil-backend-tracker.herokuapp.com/',
  {
    'sync disconnect on unload': true,
  }
);
socket.on('message-response', (msg) =>
  console.log('Response recieved = ', msg)
);
function App() {
  React.useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGa.pageview('/');
    const getData = async () => {
      //const res = await fetch("https://geolocation-db.com/json/");
      if (process.env.NODE_ENV === 'production')
        axios.get('https://geolocation-db.com/json/').then((response) => {
          axios({
            method: 'post',
            url: process.env.REACT_APP_SHEETS_URI,
            data: {
              apiKey: process.env.REACT_APP_SHEETS_API_KEY,
              operationType: process.env.REACT_APP_UPDATE_WEBSITE_PING,
              operationData: response.data,
            },
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
          })
            .then(function () {})
            .catch(function (error) {
              console.log('Error Occured = ', error);
            });
        });
    };
    getData();
  }, []);
  const onClickEmitter = () => {
    socket.emit('message', { shivam: 'Test Success' });
  };
  return (
    <div>
      <button onClick={onClickEmitter}>Click and Test</button>
      <HomePageSkeleton />
    </div>
  );
}

export default App;
