import PropTypes from "prop-types";
import React from "react";
import {FaShopify} from 'react-icons/fa'


import styles from './Header.module.css';

/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
      
    
 
      
    const userData = JSON.parse(localStorage.getItem('userDetails'))
    const finalUserName = userData?.slice(-1)
    
    const userName = finalUserName?.length>0? finalUserName[0].name : 'guest'
    console.log(userName)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={styles.logo}>
         <FaShopify style={{fontSize: "30px", color:'#3BB77E',marginRight:'18rem'}}/>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search for products, brands and more" />

        </div>
        <div className={styles.cart}>
          <h3>welcome</h3>
          <span><h2>{userName}</h2></span>
         
        </div>
      </header>
    </>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for Header
 *
 * @type {object}
 * @property {string} example='Header
 */

export const defaultProps = {
  example: "Header",
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
