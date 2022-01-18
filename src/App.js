import React from 'react'
import './App.css';
import './Footer.css';
import './ShopVila.css';
import './order.css';
import './bana.css';
import './bootstrap.min.css';
import Header from './components/Header';
import MyBanner from './components/MyBanner';
import MyFooter from './components/MyFooter';
import ShopVila from './components/ShopVila';



function App() {

  return (
    <div className="ap">
      <Header />
      <MyBanner />
      <ShopVila />
      <MyFooter />
      
    </div>
  );
}

export default App;
