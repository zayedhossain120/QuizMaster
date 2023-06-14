import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='card-container'>
            {
                data?.map(quizTopic =>
                    <TopicCard key={data.id} quizTopic={quizTopic} />
                )
            }
        </div>
    );
};

export default Topics;