import React from 'react';
import Weather from '../Weather/Weather';
import SportsScores from '../SportsScores/SportsScores';
import StockPrices from '../StockPrices/StockPrices';
import TaskList from '../TaskList/TaskList';

import './MainContent.css';

function MainContent() {
    return (
        <div className="main-content">
        <table>
            <tbody>
            <tr>
                <td className="cell">
                <Weather />
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
        </div>
    );
}

export default MainContent;
