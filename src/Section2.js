import React from 'react';
import './App.css'
import './Section.css';
import payImage from './images/payImage.png'
import tableImage from './images/tableqr.png'
import ipadImage from './images/ipadmock.png'


function Section2(){
    return(
        <div className='Section2'>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",}}>지금 신청시 1년간</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',color:"#CC3F3F",paddingTop:"10px",}}>주문 & 분석 무료!</p>
            <div style={{paddingTop:'50px'}}></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
            src={tableImage} // replace with the actual image URL or import path
            alt="QR Order"
            style={{
                width: '90%',
                maxWidth: '500px', // optional: limits the size on larger screens
                borderRadius: '15px', // adjust as needed
                justifyContent: 'center',
                objectFit: 'cover',
                     }}
        />
            </div>
            <p className='responsive-text-s' style={{textAlign:'center',fontWeight:'bold',paddingTop:"50px",color:"#4E5968",}}>곧 추가될 기능</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"20px",}}>AI 데이터 분석 서비스</p>
            
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"30px",color:"#4E5968"}}>AI가 동종 업계 가게와의 비교 분석 후</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",color:"#4E5968"}}>매출 상승 전략들을 추천해줘요</p>
            <div style={{paddingTop:'40px'}}></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={ipadImage} // replace with the actual image URL or import path
                    alt="QR Order"
                    style={{
                        width: '90%',
                        maxWidth: '500px', // optional: limits the size on larger screens
                        borderRadius: '15px', // adjust as needed
                        justifyContent: 'center',
                        objectFit: 'cover',
                     }}
             />
            </div>
            
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"20px",}}>온라인 결제 시스템</p>

            <div style={{ display: 'flex', justifyContent: 'center',paddingTop:'30px' }}>
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
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"30px",color:"#4E5968"}}>토스페이/네이버페이/카카오페이</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px",color:"#4E5968"}}>등으로 자리에서 결제 가능해져요</p>
            <div style={{paddingTop:'40px'}}></div>
            
           
        </div>
    );
}

export default Section2;