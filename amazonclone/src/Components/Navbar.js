import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css"
import Sidebar from './Sidebar';

function Navbar() {
    const [showSidebar, setshowSidebar] = useState(false)
    const handleOpenCloseSidebar = () => {
        setshowSidebar(!showSidebar)
    }


    return (
        <div className='Navbar'>
            {
                showSidebar &&
                <Sidebar
                    funName={handleOpenCloseSidebar}
                />
            }


            <a
                onClick={handleOpenCloseSidebar}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}><AiOutlineMenu
                    style={{
                        marginRight: "4px",
                        fontSize: "20px"
                    }}
                />All</a>

            <a > Mobiles</a>
            <a > Amazon Mini Tv</a>
            <a > Sell</a>
            <a > Gift Card</a>
            <a > Amazon Bussiness</a>
            <a > Buy Again</a>
            <a > Browing History</a>
        </div>
    )
}

export default Navbar
