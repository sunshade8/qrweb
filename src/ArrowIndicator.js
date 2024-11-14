import React from 'react';

// Define styles directly in the JS file for clarity
const styles = {
  container: {
    position: 'fixed',
    left: '50%',
    bottom: '20px',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: '0',  // Change width and height to 0 for the arrow tip
    height: '0',
    borderLeft: '15px solid transparent',  // Adjust the size of the arrow
    borderRight: '15px solid transparent',
    borderTop: '25px solid #8F8F8F',  // Make the arrow point downwards and change the color
    animation: 'bounce 2s infinite',
  }
};

// Define keyframes within a global style tag (optional)
const KeyframesStyle = () => (
  <style>
    {`
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(20px);  // Adjust the animation to translate in Y-axis
        }
        60% {
          transform: translateY(10px);
        }
      }
    `}
  </style>
);

function ArrowIndicator() {
  return (
    <>
      <KeyframesStyle />
      <div style={styles.container}>
        <div style={styles.arrow}></div>
      </div>
    </>
  );
}

export default ArrowIndicator;
