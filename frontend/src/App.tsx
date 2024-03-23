import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open")
  }
  return (
    /**
      <main className = "main">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/catalog" element = {<Products />} />
        </Routes>
      </main> /** */
    <Router>
    <div className="grid-container">
      <link rel = "stylesheet" href ="style.css" />
      <title> Green General </title>
      <body>
        <header className="header">
                <div className = "brand">
                <button onClick = {openMenu}>&#9776</button>
                 <a href="index.html"> Project Green General</a>
        </div>
        <div className = "header-links">
            <Link to = "/">Home</Link>
            <Link to = "/catalog">Catalog</Link>
        </div>
</header>
 <head>
<link rel='stylesheet' href="style.css"> </link>
<title> Green General </title>
</head> 
<body>
  <div>
  <header>
    Green General
  </header>
  <aside className = "sidebar">
    <h3>Shopping Categories</h3>
    <button className = "sidebar-close-button" onClick = {closeMenu}>x</button>
    <ul>
      <li>
        <a href = "index.html"> Pants </a>
      </li>

      <li>
      <a href = "index.html"> Shirts </a>
      </li>
    </ul>
  </aside>
 <div className = "content">
  <ul className = "products">
    <li>
      <div className = "product">
        <img className = "product-image" src = "images/d1.jng" alt = "product"/>
        <div className = "product-name"> 
        <a href = "product.html"> Slim Shirt </a>
        </div>
        <div className = "product-brand">Nike</div>
        <div className = "product-price">$60</div>
        <div className = "product-rating">4.5 Stars (10 Reviews)</div>
        </div>

        <div className = "product">
        <img className = "product-image" src = "images/d1.jng" alt = "product"/>
        <div className = "product-name"> 
        <a href = "product.html"> Slim Shirt </a>
        </div>
        <div className = "product-brand">Nike</div>
        <div className = "product-price">$60</div>
        <div className = "product-rating">4.5 Stars (10 Reviews)</div>
        </div>

        <div className = "product">
        <img className = "product-image" src = "images/d1.jng" alt = "product"/>
        <div className = "product-name"> 
        <a href = "product.html"> Slim Shirt </a>
        </div>
        <div className = "product-brand">Nike</div>
        <div className = "product-price">$60</div>
        <div className = "product-rating">4.5 Stars (10 Reviews)</div>
        </div>
    
        <div className = "product">
        <img className = "product-image" src = "images/d1.jng" alt = "product"/>
        <div className = "product-name"> 
        <a href = "product.html"> Slim Shirt </a>
        </div>
        <div className = "product-brand">Nike</div>
        <div className = "product-price">$60</div>
        <div className = "product-rating">4.5 Stars (10 Reviews)</div>
        </div>

        <div className = "product">
        <img className = "product-image" src = "images/d1.jng" alt = "product"/>
        <div className = "product-name"> 
        <a href = "product.html"> Slim Shirt </a>
        </div>
        <div className = "product-brand">Nike</div>
        <div className = "product-price">$60</div>
        <div className = "product-rating">4.5 Stars (10 Reviews)</div>
        </div>
    </li>
  </ul>
 </div>
        <footer>
            &copy; 2022 Project Green General
        </footer>
    </div>
</body>
</body>
</div>
</Router>
  );
}

export default App;
