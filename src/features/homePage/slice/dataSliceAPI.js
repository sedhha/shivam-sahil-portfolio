import axios from 'axios';
export const getGeoData = async () => {
  const response = await fetch('https://geolocation-db.com/json/');
  const data = await response.json();
  const secondResponse = await fetch('https://ipapi.co/json/');
  const secondData = await secondResponse.json();

  if (process.env.NODE_ENV === 'production')
    axios({
      method: 'post',
      url: process.env.REACT_APP_SHEETS_URI,
      data: {
        apiKey: process.env.REACT_APP_SHEETS_API_KEY,
        operationType: process.env.REACT_APP_UPDATE_WEBSITE_PING,
        operationData: await data,
      },
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    })
      .then(function () {})
      .catch(function (error) {
        console.log('Error Occured = ', error);
      });
  return { data, secondData };
};
