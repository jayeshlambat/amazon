import React from 'react'
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import styles from "./HEader.module.css"
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

function Header() {
    const numberOfProduct = useSelector(state => state.cart.cart.length)
    return (
        <div className={styles.Parentheader}>
            <div className={styles.header}>

                <Link to={'/home'}>
                    <img src='images/amazon-logo.png ' alt='err' />
                </Link>

                {/* Location */}
                <div className={styles.block}>
                    <GrLocation style={{ marginRight: '8px', fontSize: "20px" }} />
                    <div>
                        <p>Deliver to Jayesh</p>
                        <h2>Nagpur 440009</h2>
                    </div>
                </div>

                {/* Input */}
                <div className={styles.headerSearch}>
                    <select>
                        <option value="">All</option>
                        <option>Eng</option>
                        <option>Hin</option>
                        <option>Mar</option>
                        <option>Guj</option>
                    </select>
                    <input type='tecxt' placeholder='Search Amazon.in' />
                    <IoSearchSharp style={{
                        fontSize: "20px",
                        width: "50px",
                        height: "45.5px",
                        backgroundColor: "orange",
                        borderRadius: "0 5px 5px 0",

                    }} />
                </div>

                {/* account and list */}
                <div className={styles.block}>

                    <div>
                        <p>hellow jayesh</p>
                        <h2>Account & List</h2>
                    </div>
                    <FaCaretDown style={{ marginLeft: "8px", fontSize: "20px" }} />
                </div>

                {/* return and order */}
                <div className={styles.block}>

                    <div>
                        <p>Return </p>
                        <h2>& Order</h2>
                    </div>
                </div>

                {/* cart */}
                <Link to={'/cart'}>
                    <div className={styles.block}>
                        <Badge badgeContent={numberOfProduct} color="primary">
                            <FaShoppingCart style={{ fontSize: "40px" }} />
                        </Badge>

                    </div>
                </Link>




            </div>
        </div>
    )

}

export default Header
