import React from "react";

const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
  <path d="M12 10.6666L14.6667 7.99992L12 5.33325" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.00001 5.33325L1.33334 7.99992L4.00001 10.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.66668 2.66675L6.33334 13.3334" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
};

export default LogoIcon;