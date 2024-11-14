import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ApplyButton from './applyButton';
import webQr from './images/webqr.png'
import ArrowIndicator from './ArrowIndicator';

function Section1(){
    return(
        <div className='Section1' style={{}}>
            <div class="pt-4"></div>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"80px"}}>사용하시는 포스기 그대로,</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"15px"}}>테이블에 부착된 QR코드로</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"15px"}}>매장의 모든 주문 관리</p>


            <ArrowIndicator></ArrowIndicator>
            
            
            <div style={{paddingTop:'20px'}}></div>
       
        </div>
    );
}

export default Section1;