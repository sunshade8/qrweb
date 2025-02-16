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
            style={{ width: '120px', fontSize: '14px', fontWeight: 'bold' }}
            sx={{
            backgroundColor: '#CC3F3F', // Initial background color
            borderRadius: '10px',
            '&:hover': {
                backgroundColor: '#b03535' // Slightly darker shade for the hover state
            }
                }}>
        지금 신청하기
        </Button>
         );
      
}

export default ApplyButton;