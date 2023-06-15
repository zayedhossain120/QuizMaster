import React from 'react';
import './TopicCard.css'
import { Link } from 'react-router-dom';
const TopicCard = ({ quizTopic }) => {
    const { logo, name, total, id } = quizTopic;

    return (
        <div className="card">
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <div className='card-details'>
                <p>Quiz: {total}</p>
                <Link className='card-btn' to={`quiz/${id}`}>Start Quiz</Link>
            </div>
        </div>
    );
};

export default TopicCard;