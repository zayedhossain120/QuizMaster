import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import { Children } from 'react';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics'
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
        },
        {
          path: 'quiz/:id',
          loader: async ({ params }) => {
            return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz ></Quiz>
        },
        {
          path: '/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
