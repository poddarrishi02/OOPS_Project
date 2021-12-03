import React from 'react'
import AdminDash from '../components/AdminDash'
import UserDash from '../components/UserDash';
import WorkerDash from '../components/WorkerDash';
import styles from '../styles/dashboard.module.css'
function Dashboard() {
    var isAdmin=true;
    var isWorker=false;
    var isUser=false;
    return (
        <div className={styles.outer}>
            {isAdmin?<AdminDash/>:isWorker?<WorkerDash/>:<UserDash/>}
        </div>
        
    )
}

export default Dashboard
