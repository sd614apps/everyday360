import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const Popup = ({ content, onClose }) => {
    useEffect(() => {
        // Add event listener for click outside popup to close it
        const handleClickOutside = (e) => {
            if (e.target.classList.contains('popup-overlay')) {
                onClose();
            }
        };

        document.addEventListener('click', handleClickOutside);

        // Remove event listener on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <div className="popup-overlay">
            <div className="popup-content">
                {content}
            </div>
        </div>,
        document.getElementById('popup-root')
    );
};

export default Popup;
