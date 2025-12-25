import './index.css'
import './App.css'
import { Outlet, useMatches } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useEffect } from 'react'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {

  const matches = useMatches()
  useEffect(() => {

    const title = matches[matches.length - 1].handle?.title;
    if (title) {
      document.title = title
    }
  }, [matches]);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <ProductsProvider>
        <CategoriesProvider>
          <ScrollToTop />
          <Outlet />
        </CategoriesProvider>
      </ProductsProvider>
      <Footer />
    </div>
  )
}

export default App

