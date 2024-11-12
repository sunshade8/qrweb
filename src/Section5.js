import React from 'react';
import './Section.css';
import Tabletx from './images/tabletx.png';
import phoneImage from './images/iPhone12_Clay_Shadow.png';
import payImage from './images/payexample.jpg'
import analysis from './images/analysis.png'




function Section5(){
    return(
        <div className='Section5'>
            <div style={{paddingTop:'40px'}}></div>
            <p style={{textAlign:'start',color:"#4942E4",fontWeight:'bold', fontSize:'16px',paddingTop:"10px",paddingLeft:"30px"}}>추가 예정 기능</p>
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"20px",paddingLeft:"30px"}}>온라인 결제 </p>
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"10px",paddingLeft:"30px"}}>시스템 도입</p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"20px",paddingLeft:"30px"}}>토스페이/네이버페이/카카오페이</p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"5px",paddingLeft:"30px"}}>등으로 자리에서 결제 가능합니다.</p>
            <div style={{paddingTop:'20px'}}></div>  
            <div style={{paddingTop:'30px'}}></div> 
            <div className='images'
            style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
                <img src={payImage} alt="Example" className='pay-image' />
            </div>
            <div style={{paddingTop:'50px'}}></div>  
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"20px",paddingLeft:"30px"}}>데이터 분석을 </p>
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"10px",paddingLeft:"30px"}}>통한 매출 상승 전략 추천</p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"20px",paddingLeft:"30px"}}>동종 업계 가게와의 비교분석 후 </p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"5px",paddingLeft:"30px"}}>매출 상승 전략을 추천해드립니다. </p>
            <div style={{paddingTop:'50px'}}></div>  
            <div className='images'
            style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
                <img src={analysis} alt="Example" className='tablet-image' />
            </div>
            <div style={{paddingTop:'70px'}}></div>  
        </div>
    );
}

export default Section5;