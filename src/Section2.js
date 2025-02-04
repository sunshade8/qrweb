import React, { useRef } from 'react';
import './App.css'
import './Section.css';
import payImage from './images/payImage.png'
import tableImage from './images/tableqr.png'
import ipadImage from './images/ipadmock.png'
import ipadCurrent from './images/ipadcurrent.png'
import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen.js';
import phoneImage2 from './images/submock.png';


function Section2(){
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
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',marginTop:"-50px",}}>가게의 미감이 중요해</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",paddingBottom:"20px"}}>도입이 망설여지셨다면?</p>
            <img
                ref={imageRef}
                src={phoneImage2}
                alt="Example"
                className="resizable-image"
            />
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',marginTop:"-50px",}}>추가 금액 지불로</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',color:"#CC3F3F",paddingTop:"10px",}}>커스텀 디자인의 웹사이트 제작</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontSize:"14px",fontWeight:'bold',paddingTop:"20px",}}>✨✨ 웹사이트는 무제한으로 수정 가능해요</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontSize:"14px",fontWeight:'bold',color:"#5C5B5B",paddingTop:"10px",}}>⚠️ 금액은 추가 협의, 요구사항 별 상이</p>
            <div style={{paddingTop:'70px'}}></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                ref={imageRef}
                src={tableImage} // Ensure this is the correct path or URL to your image
                alt="QR Order"
                    style={{
                        width: '90%',
                        maxWidth: '500px', // limits the size on larger screens
                        borderRadius: '15px', // rounded corners for the image
                        justifyContent: 'center', // center the image (mostly for flex containers)
                        objectFit: 'cover', // ensures the aspect ratio is maintained while filling the area
                     }}
            />

            </div>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"70px",}}>지금 신청시</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",}}>3개월간 주문 & 분석</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',color:"#CC3F3F",paddingTop:"10px",}}>✨무료!✨</p>
            <div style={{ display: 'flex', justifyContent: 'center' ,paddingTop: '70px'}}>
            <img
                ref={imageRef}
                src={ipadCurrent} // Ensure this is the correct path or URL to your image
                alt="QR Order"
                    style={{
                        width: '90%',
                        maxWidth: '500px', // limits the size on larger screens
                        borderRadius: '15px', // rounded corners for the image
                        justifyContent: 'center', // center the image (mostly for flex containers)
                        objectFit: 'cover', // ensures the aspect ratio is maintained while filling the area
                     }}
            />

            </div>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"70px",}}>기계를 잘 못다루는 분들도</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",}}>바로 적응할 수 있는</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',color:"#CC3F3F",paddingTop:"10px",}}>매장 관리 화면</p>
            <p className='responsive-text-s' style={{textAlign:'center',fontWeight:'bold',paddingTop:"50px",color:"#4E5968",}}>❗️곧 추가될 기능❗️</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"50px",}}>AI 데이터 분석 서비스</p>
            
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"30px",color:"#4E5968"}}>AI가 동종 업계 가게와의 비교 분석 후</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",color:"#4E5968"}}>매출 상승 전략들을 추천해줘요</p>
            <div style={{paddingTop:'40px'}}></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                ref={imageRef}
                src={ipadImage} // Ensure this is the correct path or URL to your image
                alt="QR Order"
                style={{
                    width: '90%',
                    maxWidth: '500px', // limits the size on larger screens
                    borderRadius: '15px', // rounded corners for the image
                    justifyContent: 'center', // center the image (mostly for flex containers)
                    objectFit: 'cover', // ensures the aspect ratio is maintained while filling the area
                }}
            />

            </div>
            
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"50px",}}>온라인 결제 시스템</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"30px",color:"#4E5968"}}>카카오페이 네이버페이 토스페이</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",color:"#4E5968"}}>등으로 자리에서 결제 가능해져요</p>

            <div style={{ display: 'flex', justifyContent: 'center',paddingTop:'70px' }}>
                <img
                    src={payImage} // replace with the actual image URL or import path
                    alt="pay"
                    style={{
                        width: '50%',
                        maxWidth: '300px', // optional: limits the size on larger screens
                        borderRadius: '15px', // adjust as needed
                        justifyContent: 'center',
                        objectFit: 'cover',
                     }}
             />
            </div>
            
            <div style={{paddingTop:'100px'}}></div>
            
           
        </div>
    );
}

export default Section2;