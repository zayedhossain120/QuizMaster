import React from 'react';
import './TopicCard.css'
const TopicCard = ({ quizTopic }) => {
    const { logo, name, total } = quizTopic;
    return (
        <div className="card">
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <p>Total: {total}</p>
        </div>
    );
};

export default TopicCard;