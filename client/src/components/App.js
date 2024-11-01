import '../styles/index.css';
import '../styles/App.css';
import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

/** Import Components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result'
/** react routes */
const router = createBrowserRouter([
  {
    path:'/',element:<div><Main/> </div>
  },
  {
    path:'/quiz',element:<div>
      <Quiz/>
    </div>
  },
  {
    path:'/result',element:<div>
      <Result/>
    </div>
  }
])
const App = () => {
  return (
<>
<RouterProvider router={router}></RouterProvider>
</>
  )
}

export default App