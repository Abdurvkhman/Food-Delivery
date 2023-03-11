import Search from '../assets/icons/Search.png';
import Calling from '../assets/icons/Calling.png';
import Profile from '../assets/icons/Profile.png';
import Buy from '../assets/icons/Buy.png';
import Location from '../assets/icons/Location.png';
import NavMenu from './NavMenu';
import React from 'react'
import { Section } from './Section';

const Header = () => {
    return (
        <div className="header">
           <div className="header-wrapper">
                <div className="header-left-items">
                    <div className="burger-block">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <p>Меню</p>
                    </div>
                    <p className="header-title">a.r.</p>
                    <div className='header-search'>
                        <p>search</p>
                        <img src={Search} alt="error" />
                    </div>
                </div>
                <div className="header-right-items">
                    <div className="first-item-inner">
                        <div className="img-block">
                            <img src={Calling} alt="error" />
                        </div>
                        <p><span>Контакты:</span><br />+7(917) 510-57-59</p>
                    </div>
                    <div className="third-item-inner">
                        <hr />
                        <div className="profile">
                            <img src={Profile} alt="error" />
                            <p>Войти</p>
                        </div>
                    </div>
                    <div className="second-item-inner">
                        <img src={Buy} alt="error" />
                        <hr className='first-hr' />
                        <p>Корзина</p>
                        <hr />
                        <div className="ellipse">4</div>
                    </div>
                </div>
           </div>
           <hr />
           <div className='address-input'>
            <img className='location' src={Location} alt='error' />
            <input type="text" placeholder='Введите адрес доставки' />
            <img className='search' src={Search} alt="error" />
           </div>
           <NavMenu/>
        </div>
    )
}

export default Header