import React from "react";

const LanguageIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M16 18L22 12L16 6" stroke="#7C3BED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6L2 12L8 18" stroke="#7C3BED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default LanguageIcon;