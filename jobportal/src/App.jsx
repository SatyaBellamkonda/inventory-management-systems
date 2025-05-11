import React, {Component, component} from 'react';
import './App.css';
class App extends Component{
    render(){
        return(
        <div id="container">
            <div id='popup'>
                <div id='popupwindow'>
                    <div id='popupheader'>Login</div>
                    <div id='signin'>
                      <label className='usernameLabel'>Username</label>
                              <input type='text' id='username'
                    </div>
                </div>
            </div>
            <div id="header">
            <img className='logo' src='/logo.png' alt=''/>
            <div className='logotext'><span>Job</span>Portal</div>
            <img className='signinIcon' src='/user.png' alt=''/>
            <label className='signinText'> Sign In</label>
            </div>
          
           <div id="content">
            <div className='text1'>#INDIAS NO.1 JOB PLATFORM </div>
            <div className='text2'>Your Job Search Ends Here</div>
            <div className='text3'>Discover career opportunities</div>
            <div className='searchBar'>
                <input type="text" className='searchText'/>
                <input type="text" className='searchLocation'/>
                <button className='searchButton'>Search Jobs</button>
            </div>
           </div>

           <div id="footer">
             <label className='copyrightText'>
                Copy Right@2024 all rights reserved
             </label>
            <img className='socialmediaicon' src='/facebook.png' alt=''/>
            <img className='socialmediaicon' src='/twitter.png' alt=''/>
            <img className='socialmediaicon' src='/linkedin.png' alt=''/>
           </div>
        </div>
        );
    }
}
export default App;