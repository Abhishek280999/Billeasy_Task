import React, { useState } from 'react';
import './Header.css'; // Import your CSS file

function Header() {



  return (
    <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="#">All</a></li>
            <li><a href="#">Women`s</a></li>
            <li><a href="#">Men`s</a></li>
            <li><a href="#">Kid`s</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Cosmetic</a></li>
        </ul>
        <h1 class="logo">NEW PRODUCTS</h1>
    </div>
</nav>
  );
}

export default Header;
