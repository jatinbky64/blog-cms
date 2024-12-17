import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from "./components/ui/button"
import RootLayout from "./layout/RootLayout";
import BlogListing from "./pages/BlogListing";

function App() {
  return (
      <Router>
        <Routes>
          {/* Pages with RootLayout */}
          <Route path="/" element={<RootLayout><BlogListing/></RootLayout>}/>
        </Routes>
      </Router>
  )
}

export default App
