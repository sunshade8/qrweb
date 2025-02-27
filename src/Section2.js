import React, { useRef } from 'react';
import './App.css'
import './Section.css';
import payImage from './images/payImage.png'
import tableImage from './images/tableqr.jpeg'
import ipadImage from './images/ipadmock.png'
import ipadCurrent from './images/ipadcurrent.png'
import ipadCurrent1 from './images/ipadcurrent1.png'
import qrimage from './images/qrimage.png'
import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen.js';
import soon from './images/soon.png';
import phoneImage2 from './images/submock.png'
import webExample from './images/webex.png'
import box1 from './images/box1.png'
import box2 from './images/box2.png'
import box3 from './images/box3.png'
import { useMediaQuery } from 'react-responsive'; 

function Section2(){
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const imageRef = useRef();
    const isImageVisible = useOnScreen(imageRef, "100px");
    const fadeInUp = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 1.3, ease: "easeOut" }
        }
      };
    return(
        <div className='Section2'>
            <div style={{marginTop:'-50px'}}></div>
            
            <div style={{marginTop:'70px'}}></div>
            <div style={{ textAlign: 'left',paddingLeft: isDesktop ? '220px' : '20px', }}>
                <img
                    ref={imageRef}
                    src={soon}
                    alt="Example"
 
                    style={{
                        width: isDesktop ? '8%' : '20%',
                    }}
                />
            </div>
            <p style={{textAlign:'left',fontWeight:'bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop:"10px",fontSize: isDesktop ? '40px' : '28px'}}>AI 매출 분석</p>
            <p style={{textAlign:'left',fontWeight:'semi-bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop: isDesktop ? '20px' : '10px',color:"#6C6C6C",fontSize: isDesktop ? '26px' : '16px'}}>사장님의 직감과 AI의 데이터 분석의 융합</p>
            <div style={{paddingTop: isDesktop ? '50px' : '30px'}}></div>
            <img
                ref={imageRef}
                src={ipadImage} // Ensure this is the correct path or URL to your image
                alt="QR Order"
                style={{
                    width: isDesktop ? '45%' : '90%',

                    borderRadius: '15px', // rounded corners for the image
                    justifyContent: 'center', // center the image (mostly for flex containers)
                    objectFit: 'cover', // ensures the aspect ratio is maintained while filling the area
                }}
            />
            <div style={{paddingTop: isDesktop ? '150px' : '70px'}}></div>
            <p style={{textAlign:'left',fontWeight:'bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop:"15px",fontSize: isDesktop ? '40px' : '28px'}}>최고의 가성비</p>
            <p style={{textAlign:'left',fontWeight:'semi-bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop: isDesktop ? '20px' : '10px',color:"#6C6C6C",fontSize: isDesktop ? '26px' : '16px'}}>저렴한 비용으로 AI 분석 & 웹사이트 제작 </p>
            <div style={{ paddingTop: isDesktop ? '40px' : '20px' }}></div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row', // Always row because wrapping will handle mobile layout
                flexWrap: isDesktop ? 'nowrap' : 'wrap', // No wrap on desktop, wrap on mobile
                justifyContent: 'center', // Center-align items horizontally on each row
                alignItems: 'center', // Center-align items vertically
                gap: isDesktop ? '40px' : '20px', // Adjust gap for desktop and mobile
              }}
            >
              <img
                ref={imageRef}
                src={box1}
                alt="Box 1"
                style={{
                  width: isDesktop ? '20%' : '45%', // Adjust width for desktop and mobile
                  objectFit: 'cover',
                }}
              />
              <img
                ref={imageRef}
                src={box2}
                alt="Box 2"
                style={{
                  width: isDesktop ? '20%' : '45%',
                  objectFit: 'cover',
                }}
              />
              <img
                src={box3}
                alt="Box 3"
                style={{
                  width: isDesktop ? '20%' : '45%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div style={{paddingTop: isDesktop ? '150px' : '70px'}}></div>
            <p style={{textAlign:'left',fontWeight:'bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop:"15px",fontSize: isDesktop ? '40px' : '28px'}}>심플한 매장관리 화면</p>
            <p style={{textAlign:'left',fontWeight:'semi-bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop: isDesktop ? '20px' : '10px',color:"#6C6C6C",fontSize: isDesktop ? '26px' : '16px',}}>기계를 잘 못다루는 분들도 바로 적응해요</p>
            <div style={{ paddingTop: isDesktop ? '40px' : '10px' }}></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: isDesktop ? 'row' : 'column', // Row for desktop, column for mobile
                  justifyContent: 'center',
                  alignItems: 'center', // Center items vertically when in column mode
                  gap: isDesktop ? '40px' : '20px', // Adjust gap for desktop and mobile
                }}
              >
                <img
                  ref={imageRef}
                  src={ipadCurrent} // First image
                  alt="QR Order"
                  style={{
                    width: isDesktop ? '35%' : '90%', // Adjust width for desktop and mobile
                    borderRadius: '15px',
                    objectFit: 'cover',
                  }}
                />
                <img
                  src={ipadCurrent1} // Second image (same as the first)
                  alt="QR Order"
                  style={{
                    width: isDesktop ? '35%' : '0%', // Adjust width for desktop and mobile
                    borderRadius: '15px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            <div style={{paddingTop: isDesktop ? '150px' : '70px'}}></div>
        
            <p style={{ textAlign: 'left', fontWeight: 'bold', paddingLeft: isDesktop ? '220px' : '20px', fontSize: isDesktop ? '40px' : '28px' }}>
  깔끔한 인테리어
</p>
<p style={{ textAlign: 'left', fontWeight: 'semi-bold', paddingLeft: isDesktop ? '220px' : '20px', paddingTop: isDesktop ? '20px' : '10px', color: "#6C6C6C", fontSize: isDesktop ? '26px' : '16px' }}>
  파리, 도쿄, 상하이 매장들도 사용하는 심플한 디자인
</p>
<div style={{ paddingTop: isDesktop ? '70px' : '30px' }}></div>

{/* Flexbox container for images */}
<div
  style={{
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column', // Row for desktop, column for mobile
    justifyContent: 'center',
    alignItems: 'center', // Center items vertically when in column mode
    gap: isDesktop ? '40px' : '20px', // Adjust gap for desktop and mobile
  }}
>
  <img
    ref={imageRef}
    src={tableImage} // First image
    alt="QR Order"
    style={{
      width: isDesktop ? '40%' : '90%', // Adjust width for desktop and mobile
      maxWidth: '500px',
      borderRadius: '15px',
      objectFit: 'cover',
    }}
  />
  <img
    src={qrimage} // Second image (same as the first)
    
    style={{
      width: isDesktop ? '20%' : '0%', // Adjust width for desktop and mobile
      maxWidth: '500px',
      borderRadius: '15px',
      objectFit: 'cover',
    }}
  />
</div>
            <div style={{paddingTop: isDesktop ? '150px' : '100px'}}></div>
            <div style={{ textAlign: 'left',paddingLeft: isDesktop ? '220px' : '20px' }}>
                <img
                    ref={imageRef}
                    src={soon}
                    alt="Example"
        
                    style={{
                        width: isDesktop ? '8%' : '20%',
                    }}
                />
            </div>
            <p style={{textAlign:'left',fontWeight:'bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop:"10px",fontSize: isDesktop ? '40px' : '28px'}}>온라인 결제 시스템</p>
            <p style={{textAlign:'left',fontWeight:'semi-bold',paddingLeft: isDesktop ? '220px' : '20px',paddingTop: isDesktop ? '20px' : '10px',color:"#6C6C6C",fontSize: isDesktop ? '26px' : '16px',}}>다양한 결제 방식으로 자리에서 결제 가능해져요</p>

            <div style={{ display: 'flex', justifyContent: 'center',paddingTop: isDesktop ? '100px' : '70px' }}>
                <img
                    src={payImage} // replace with the actual image URL or import path
                    alt="pay"
                    style={{
                        width: isDesktop ? '45%' : '50%',
                        maxWidth: '300px', // optional: limits the size on larger screens
                        borderRadius: '15px', // adjust as needed
                        justifyContent: 'center',
                        objectFit: 'cover',
                     }}
             />
            </div>
            
            <div style={{paddingTop: isDesktop ? '200px' : '100px'}}></div>
            
           
        </div>
    );
}

export default Section2;