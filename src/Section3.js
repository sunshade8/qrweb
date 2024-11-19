import React from 'react';
import './Main.css';
import './Section.css';
import Waiter from './images/waiter.png';
import Down from './images/down.png';

function Section3(){
    return(
        <div className='Section3'
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <div style={{paddingTop:'30px'}}></div>
            <div className='images'
            style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
              
            </div>
            <div className='responsive-text-m'style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
            <p style={{textAlign:'center',fontWeight:'bold',paddingTop:"60px"}}>테이블 당 한달</p> 
            <p style={{textAlign:'center',fontWeight:'bold',color:"#FF0000", paddingTop:"60px",paddingLeft:"5px"}}>9,900원</p> 
            <p style={{textAlign:'center',fontWeight:'bold', paddingTop:"60px"}}>의</p> 
            </div>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold',paddingTop:"10px"}}>저렴한 가격으로,</p>
            <p className='responsive-text-m' style={{textAlign:'center',fontWeight:'bold', paddingTop:"10px"}}>초기 설치시 발생되는 비용</p> 
            <div className='responsive-text-m'style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
            <p style={{textAlign:'start',fontWeight:'bold', paddingTop:"10px"}}>외엔</p> 
            <p style={{textAlign:'start',fontWeight:'bold',color:"#FF0000", paddingTop:"10px",paddingLeft:"5px"}}>전혀 들지 않습니다!</p>
            <div style={{paddingTop:'50px'}}></div>

            </div>     
        </div>
    );
}

export default Section3;