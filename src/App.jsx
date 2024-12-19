import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from "./components/ui/button"
import RootLayout from "./layout/RootLayout";
import BlogListing from "./pages/BlogListing";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
      <Router>
        <Routes>
          {/* Pages with RootLayout */}
          <Route path="/" element={<RootLayout><BlogListing/></RootLayout>}/>
          <Route path="/blog/:id" element={<RootLayout><BlogDetails/></RootLayout>}/>

        </Routes>
      </Router>
  )
}

export default App
