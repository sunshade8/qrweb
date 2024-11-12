import React from 'react';
import './Section.css';




function InfoSection(){
    return(
        <div className='InfoSection'>
            <div style={{paddingTop:'40px'}}></div>
            <p style={{textAlign:'start',color:"#E6E5ED",fontWeight:'bold', fontSize:'12px',paddingTop:"10px",paddingLeft:"30px"}}>주식회사 로트렉</p>
            <p style={{textAlign:'start',fontWeight:'semi-bold', color:"#E6E5ED",fontSize:'12px',paddingTop:"20px",paddingLeft:"30px"}}>사업자 등록번호: 631-81-02908 | 대표: 박우진, 장채민</p>
            <p style={{textAlign:'start',fontWeight:'semi-bold', color:"#E6E5ED",fontSize:'12px',paddingTop:"10px",paddingLeft:"30px"}}>고객센터: 010-8610-3488 </p>
            <div style={{paddingTop:'50px'}}></div>  
            <div style={{paddingTop:'70px'}}></div>  
        </div>
    );
}

export default InfoSection;