import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

function ApplyButton(){
    const handleClick = () => {
        window.open("https://forms.gle/PcWKo3KhH8AebBTq9", "_blank", "noopener,noreferrer");
      };

    return(
        <Button
            variant="contained"
            onClick={handleClick}
            style={{ width: '110px', fontSize: '16px', fontWeight: 'bold' }}
            sx={{
            backgroundColor: '#FF5F15', // Initial background color
            borderRadius: '10px',
            
                }}>
        상담하기
        </Button>
         );
      
}

export default ApplyButton;