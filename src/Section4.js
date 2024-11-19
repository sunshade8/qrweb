import React from 'react';
import './Section.css';
import Tabletx from './images/tabletx.png';
import phoneImage from './images/mainmock.png';



function Section4(){
    return(
        <div className='Section4'>
            
            <div style={{paddingTop:'10px'}}></div>  
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"20px",paddingLeft:"30px"}}>간단하고 직관적인</p>
            <p style={{textAlign:'start',fontWeight:'bold', fontSize:'20px',paddingTop:"10px",paddingLeft:"30px"}}>사장님들 전용 매장 관리 화면.</p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"20px",paddingLeft:"30px"}}>핸드폰, 태블릿, PC 중 사장님이 </p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"5px",paddingLeft:"30px"}}>편하신 아무 기기에서, 어느곳에서나  </p>
            <p style={{textAlign:'start',color:"#81809F",fontWeight:'bold', fontSize:'16px',paddingTop:"5px",paddingLeft:"30px"}}>매장 관리가 가능합니다.</p>  
            <div style={{paddingTop:'30px'}}></div>  
            <div className='images'
            style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
                <img src={phoneImage} alt="Example" className='resizable-image' />
            </div>
        </div>
    );
}

export default Section4;