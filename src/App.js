import React from 'react';
import 'react-slidedown/lib/slidedown.css';
import HomePageSkeleton from './features/homePage/skeleton';
import './app.scss';

function App() {
  // React.useEffect(() => {
  //   ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  //   ReactGa.pageview('/');
  // }, []);
  return (
    <div>
      <HomePageSkeleton />
    </div>
  );
}

export default App;
