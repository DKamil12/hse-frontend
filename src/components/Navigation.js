import React from 'react';
import '../assets/style/navigation.css';
import logo from '../assets/images/AGP-logoauthorization-form-logo.svg';
import logOut from '../assets/images/header-logout.svg';
import userInfo from '../assets/images/sidebar-user-info.svg';
import reports from '../assets/images/sidebar-reports.svg';
import laborSafety from '../assets/images/sidebar-labor-safety.svg';
import ecology from '../assets/images/sidebar-ecology.svg';

function Navigation() {
    return ( 
        <div>
            <header class="header">
            <img src={logo} alt="agp_logo" class="header__logo"/>
            <div class="header__search-and-logout">
                <input type="search" name="header-search-field" id="#" class="header__search-field"/>
                <a href="#"><img src={logOut} alt="header-logout-icon" class="header__logout-icon"/></a>
            </div>
        </header>
        <aside class="sidebar">
            <a href="#"><img src={userInfo} alt="user-info"/></a>
            <p class="sidebar__module-title">Инфо для пользователя</p>
            <a href="#"><img src={reports} alt="reports"/></a>
            <p class="sidebar__module-title">Отчеты</p>
            <a href="#"><img src={laborSafety} alt="labor-protection"/></a>
            <p class="sidebar__module-title">Охрана труда </p>
            <a href="#"><img src={ecology} alt="ecology"/></a>
            <p class="sidebar__module-title">Экология</p>
        </aside>
        <nav class="inner-nav">
            <a href="#" class="inner-nav__link inner-nav__link_active">Организационная структура</a>
            <a href="#" class="inner-nav__link">Документация HSE</a>
            <a href="#" class="inner-nav__link">Документация по промышленной безопасности</a>
        </nav>
        </div>
     );
}

export default Navigation;