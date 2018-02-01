import React from "react";
import  './TopNav.scss';
import './TopNav.css';
//require('./TopNav.scss');

export default class Title extends React.Component {

    
    render() {
        //console.log(styles);
        return (
            
            <div className="top-nav" id="TopNav">
                <a className="go-to-home">
                    <router-link to="/">
                        <svg>
                            <use xlinkHref="#square-grid" />
                        </svg>
                    </router-link>
                </a>
                <div className="application-header">
                    <h1>DataGlitter</h1>
                </div>
                <div className="app-sign-in">
                    <button className="btn btn-outline-primary" type="button">Sign in</button>
                </div>
            </div>
        )
    }
}
