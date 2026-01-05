import './index.css'
import './App.css'
import { Outlet, useMatches } from 'react-router-dom'
import Header from './components/layout/Header.jsx'

import { useEffect, useState } from 'react'
import { ProductsProvider } from './features/product/ProductsContext.jsx'
import { CategoriesProvider } from './features/categories/CategoriesContext.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import Footer from './components/layout/footer/Footer.jsx'
import AuthModal from './components/auth/AuthModal.jsx';


function App() {

  const matches = useMatches()
  useEffect(() => {

    const title = matches[matches.length - 1].handle?.title;
    if (title) {
      document.title = title
    }
  }, [matches]);

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header setIsOpen={setIsOpen} />
      <ProductsProvider>
        <CategoriesProvider>
          <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <ScrollToTop />
          <Outlet />
        </CategoriesProvider>
      </ProductsProvider>
      <Footer />
    </div>
  )
}

export default App

