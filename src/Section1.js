import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ApplyButton from './applyButton';
import webQr from './images/webqr.png'

function Section1(){
    return(
        <div className='Section1'>
            <div class="pt-4"></div>
            <div className='qrimage'
            style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%', 
            height: 'auto'
            }}>
                <img src={webQr} alt="Qr" className='responsive-image' />
            </div>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"80px"}}>QR 스캔 메뉴로</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px"}}>사장님 혼자</p>
            <p className='responsive-text-b' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px"}}>운영하는 가게</p>
            <div style={{paddingTop:'20px'}}></div>
       
        </div>
    );
}

export default Section1;