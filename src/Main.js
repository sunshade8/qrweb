import React from 'react';
import './Main.css';
import Button from '@mui/material/Button';
import phoneImage from './images/iPhone12_Clay_Shadow.png';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import InfoSection from './InfoSection';

function Main() {
  return (
    <div
      className="Main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="Main_header"
          style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
              padding: '20px',
              paddingLeft: '20px'
          }}
      >
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>QRMENU</p>
          <Button
              variant="contained"
              style={{ width: '120px', fontSize: '14px', fontWeight: 'bold' }}
              sx={{ backgroundColor: '#4942E4', borderRadius: '30px' }}
          >
              지금 신청하기
          </Button>
      </div>  
      <Section1 />
      <img src={phoneImage} alt="Example" className="resizable-image" />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <InfoSection />
    </div>
  );
}

export default Main;
