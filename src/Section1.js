import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

function Section1(){
    return(
        <div className='Section1'>
            <div class="pt-4"></div>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"80px"}}>QR 스캔 메뉴로</p>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"10px"}}>사장님 혼자</p>
            <p style={{textAlign:'center',fontWeight:'bold', fontSize:'20px',paddingTop:"10px"}}>운영하는 가게</p>
            <div style={{paddingTop:'20px'}}></div>
            <Button
                variant="contained"
                style={{width: '140px',fontSize:'16px',fontWeight:'bold'}}
                sx={{backgroundColor:'#4942E4',borderRadius:'30px'}}>
                    지금 신청하기
                </Button>           
        </div>
    );
}

export default Section1;