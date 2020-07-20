import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PrivacyPolicy from './views/privacyPolicy'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul style={{ display: 'none' }}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}/>
        <Route path="/list/" component={List}/>
      </BrowserRouter>
    </div>
  )
}

function Index() {
  return <PrivacyPolicy />
}
function List() {
  return <h2>List</h2>
}

export default App
