import React from 'react';
import './Section.css';




function InfoSection(){
    return(
        <div className='InfoSection'>
            <div style={{paddingTop:'10px'}}></div>
            <p style={{textAlign:'start',color:"#E6E5ED",fontWeight:'bold', fontSize:'12px',paddingTop:"10px",paddingLeft:"20px"}}>주식회사 로트렉</p>
            <p style={{textAlign:'start',fontWeight:'semi-bold', color:"#E6E5ED",fontSize:'12px',paddingTop:"20px",paddingLeft:"20px"}}>사업자 등록번호: 631-81-02908 | 대표이사: 박우진, 장채민</p>
            <p style={{textAlign:'start',fontWeight:'semi-bold', color:"#E6E5ED",fontSize:'12px',paddingTop:"10px",paddingLeft:"20px"}}>입점 문의: 010-6216-2522 </p>
            <div style={{paddingTop:'50px'}}></div>  
            <div style={{paddingTop:'70px'}}></div>  
        </div>
    );
}

export default InfoSection;