import React from 'react';
import './App.css';
import Main from './Main';
import { useMediaQuery } from 'react-responsive';
import ArrowIndicator from './ArrowIndicator';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const App = () => (
  <div className='App'style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
    <ArrowIndicator/>
    <Main />

  </div>
);

export default App;
