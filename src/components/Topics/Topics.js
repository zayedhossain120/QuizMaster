import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import Quiz from '../Quiz/Quiz';

const Topics = (id) => {
    const { data } = useLoaderData();


    return (
        <div className='topic-container'>

            <div className='card-container'>
                {
                    data?.map((quizTopic, i) =>
                        <TopicCard key={i} quizTopic={quizTopic} />
                    )
                }
            </div>
        </div>
    );
};

export default Topics;