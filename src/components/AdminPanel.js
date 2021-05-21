import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './AdminPanel.css';




function AdminPanel() {
    


    return (
        <div className="AdminPanel">
            
                  <div className="AdminPanel__menu">
                    <ul>
                         <Link to={`/panel/resource`} className="AdminPanel__menu-item">
                            Resources
                        </Link> 
                        

                        <Link to="/panel/blog" className="AdminPanel__menu-item">
                            Blog
                        </Link>

                        <Link to="/panel/feedback" className="AdminPanel__menu-item">
                            Feedback
                        </Link>
                     </ul>
           </div>
        </div>
    )
}

export default AdminPanel
