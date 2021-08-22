import React, {useState} from 'react'
import "../styles/App.css"
import Login from './login/Login'
import Welcome from './welcome/Welcome'

const App = () => {

const [user, setUser] = useState(null);

  return (
    <div className="container">
        <div className="row">
          <div className="col-12">
            {user?<Welcome/>:<Login/>}
          </div>
        </div>
      </div>
  )
}

export default App