import React from 'react'
import styles from './HEader.module.css'
function Sidebar(props) {
    const { funName } = props
    return (
        <div className={styles.Sidebar}>
            <h1 >sidebar</h1>
            <p onClick={funName}>close</p>
        </div>
    )
}

export default Sidebar
