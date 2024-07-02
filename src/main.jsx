import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'

import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login ,SetComp } from './components/index.js'

import AddPost from './pages/AddPost.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
          path: '/',
          element: <Home />
      },
      {
        path : "/login",
        element : (
          <AuthLayout authentication={false}>
            <Login></Login>
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element:(
          <AuthLayout authentication={false} >
            <Signup></Signup>
          </AuthLayout>
        ),
      },
      {
        path: '/all-posts',
        element:(
          <AuthLayout authentication={true} >
            {''}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element:(
          <AuthLayout authentication={true} >
            {''}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: '/edit-post/:slug',
        element:(
          <AuthLayout authentication={true} >
            {''}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />
      },
      {
        path : '/setting',
        element : <SetComp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>,
)
