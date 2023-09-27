import React from 'react'

import styles from './Home.module.scss'
import Topbar from '@/components/Topbar/index'

export default function Home() {
    return (
        <>
            <div className={styles.divBtn}>
                <Topbar/>
            </div>
        </>
    )
}
