import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/landingpage"
import Ministries from "./components/ministries"
import NewsTitles from "./components/news_titles"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/news.titles" element={<NewsTitles />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
