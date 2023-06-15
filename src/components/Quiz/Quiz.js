import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const { data } = useLoaderData();
    // console.log(data);
    return (
        <div className='quiz-main-container'>
            {data?.questions?.map((question, i) => {

                const questions = <div key={i} className='question-container' dangerouslySetInnerHTML={{ __html: question?.question }}></div>

                const options = question?.options?.map((option, i) =>
                    <div key={i} >
                        <input type='radio' value={option} name={question?.id}
                            id={option} onClick={(e) => {
                                const children = e.target.parentNode.parentNode.children
                                if (option === question?.correctAnswer) {
                                    for (let i = 0; i < children.length; i++) {
                                        const element = children[i];
                                        element.className = ""

                                    }
                                    e.target.parentNode.classList.add("quiz-correct")

                                }
                                else {
                                    for (let i = 0; i < children.length; i++) {
                                        const element = children[i];
                                        element.className = ""

                                    }
                                    e.target.parentNode.classList.add("quiz-incorrect")
                                }
                            }} /><label htmlFor={option}>{option}</label>
                    </div>
                )

                return (<div className='quiz-container' key={i}>

                    {[questions,
                        <div className='options-container'> {options} </div>]}
                </div>
                )
            })}
        </div>
    );
};

export default Quiz;