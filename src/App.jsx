import './index.css'
import './App.css'
import { Outlet, useMatches } from 'react-router-dom'
import Header from './components/layout/Header.jsx'

import { useEffect } from 'react'
import { ProductsProvider } from './features/product/ProductsContext.jsx'
import { CategoriesProvider } from './features/categories/CategoriesContext.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import Footer from './components/layout/footer/Footer.jsx'


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

