import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ApplyButton from './applyButton';

function Section1(){
    return(
        <div className='Section1'>
            <div class="pt-4"></div>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"80px"}}>QR 스캔 메뉴로</p>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"10px"}}>사장님 혼자</p>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"10px"}}>운영하는 가게</p>
            <div style={{paddingTop:'20px'}}></div>
            <ApplyButton></ApplyButton>           
        </div>
    );
}

export default Section1;