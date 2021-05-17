import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css'




function AdminPanel() {

    return (
        <div className="AdminPanel">   
           <div className="AdminPanel__menu">
                    <ul>
                        <Link href="" className="AdminPanel__menu-item">
                        <li >
                            Resources
                        </li>
                        </Link>
                        

                        <Link href="" className="AdminPanel__menu-item">
                        <li >
                            Blog
                        </li>
                        </Link>

                        <Link href="" className="AdminPanel__menu-item">
                        <li>
                            Feedback
                        </li>
                        </Link>
                     </ul>
           </div>
        </div>
    )
}

export default AdminPanel
