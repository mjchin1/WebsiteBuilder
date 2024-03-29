import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import AllWebsites from './components/AllWebsites'
import Website from './components/Website'
import WebsiteForm from './components/WebsiteForm'
import Navigations from './components/Navigations'
import Registration from './components/Registration'
import SavedWebsites from './components/SavedWebsites'
import Login from './components/Login'
import WebsiteCreatedMessage from './components/WebsiteCreatedMessage'
import WebsiteSavedMessage from './components/WebsiteSavedMessage'
import LogoutButton from './components/LogoutButton'




function App() {
  const [websites, setWebsites] = useState([]);
  const [website, setWebsite] = useState({});
  const [user, setUser] = useState({})
  const [savedWebsites, setSavedWebsites] = useState([])

  

  return (
    
    <> 
      <div className="app">

      
      <div className="appHeader"> 
      {user.user_id? <LogoutButton setWebsite={setWebsite} setSavedWebsite={setSavedWebsites} user={user} setUser={setUser}/> : null }
      <h1 className="appHeading">MOODBOARD</h1>
      <h2 className="appSubheading">A Website-Building App</h2>
      <Navigations setWebsite={setWebsite} setSavedWebsite={setSavedWebsites} user={user} setUser={setUser}/> <br/>
      <div className="pageDivider"></div>
      </div>
      
      <div className="appBody">
      <Routes>
      <Route path='/' element={<WebsiteForm website={website} setWebsite={setWebsite}/>} />
      <Route path='/all' element={<AllWebsites websites={websites} setWebsites={setWebsites}/>} />
      <Route path='/website/:id' element={<Website savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites} user={user} website={website} setWebsite={setWebsite}/>} />
      <Route path='/form' element={<WebsiteForm website={website} setWebsite={setWebsite}/>} />
      <Route path='/register' element={<Registration website={website} user={user} setUser={setUser}/>} />
      <Route path='/login' element={<Login website={website} user={user} setUser={setUser}/>} />
      <Route path='/websiteCreated' element={<WebsiteCreatedMessage website={website}/>} />
      <Route path='/websiteSaved' element={<WebsiteSavedMessage/>} />
      <Route path='/websites' element={<SavedWebsites user={user} setUser={setUser} website={website} setWebsite={setWebsite} savedWebsites={savedWebsites} setSavedWebsites={setSavedWebsites}/>} />
      </Routes>

      </div>

      </div>
    </>
  )
}

export default App
