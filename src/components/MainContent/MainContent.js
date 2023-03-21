import React, { useState } from 'react';
import Weather from '../Weather/Weather';
import SportsScores from '../SportsScores/SportsScores';
import StockPrices from '../StockPrices/StockPrices';
import TaskList from '../TaskList/TaskList';
import Popup from '../Popup/Popup';

import './MainContent.css';

function MainContent() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="main-content">
            <table>
                <tbody>
                <tr>
                    <td className="cell">
                        <div className="main-content-item" onClick={togglePopup} role="button">
                            <Weather togglePopup={togglePopup} />
                        </div>
                    </td>
                    <td className="cell">
                    <SportsScores />
                    </td>
                </tr>
                <tr>
                    <td className="cell">
                    <StockPrices />
                    </td>
                    <td className="cell">
                    <TaskList />
                    </td>
                </tr>
                </tbody>
            </table>
            {showPopup && (
                <Popup
                togglePopup={togglePopup}
                content={
                    <>
                    <Weather togglePopup={togglePopup} />
                    </>
                }
                />
            )}
        </div>
    );
}

export default MainContent;
