import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h1>What is purpose of react router?

                </h1>
                <p>
                    React Router is a library for handling navigation in React applications. It allows you to define routes and associate them with specific components, enabling dynamic rendering based on the URL. React Router supports nested routes, dynamic routing, history management, and code splitting for optimized performance. It enhances the user experience by enabling seamless navigation between different views without full page reloads.





                </p>
            </div>
            <div>
                <h1>How to work context api?

                </h1>
                <p>
                    The Context API in React allows you to share data between components without manually passing props. It provides a central store of data that can be accessed by any component that needs it. You create a context, set up a provider component to wrap the relevant components, and consume the shared data using the useContext hook. This simplifies the process of sharing data and avoids prop drilling in large component trees.





                </p>
            </div>
            <div>
                <h1>What is useRef how its work?

                </h1>
                <p>
                    useRef is a React hook used to create mutable references to elements or values. It allows accessing and storing DOM elements directly and holding mutable values that persist across renders without triggering re-renders. It's useful for imperatively interacting with DOM elements and sharing data between different parts of a component.





                </p>
            </div>
        </div>
    );
};

export default Blog;