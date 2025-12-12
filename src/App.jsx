import './App.css'
import { Outlet, useMatches } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useEffect } from 'react'

function App() {

  const matches = useMatches()
  useEffect(() => {

    const title = matches[matches.length - 1].handle?.title;
    if (title) {
      document.title = title
    }
  }, [matches]);



  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
