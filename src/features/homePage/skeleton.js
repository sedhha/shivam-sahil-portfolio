import React from 'react';
import TopView from './components/TopView';
import Main from './components/Main';
import TopNavigation from './components/NavItem';
import Footer from './components/Footer';

import { useDispatch } from 'react-redux';
import { fetchGeoLocationData } from './slice/dataSlice';

export default function Skeleton() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchGeoLocationData());
  }, [dispatch]);
  return (
    <div>
      <TopNavigation />
      <TopView />
      <Main />
      <Footer />
    </div>
  );
}
