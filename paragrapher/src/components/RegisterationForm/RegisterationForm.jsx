import React, {useState} from 'react';
import './RegisterationForm.css';
import PeopleDiscussion from '../../assets/PeopleDiscussion.png';



function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        username : "",
        password : "",
        confirmPassword : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            //sendDataToServer()    
        } else {
            
            alert("Passwords do not match!");
        }
    }
    return(
        // <div className="card border-primary col-12 col-lg-4 login-card mt-2 hv-center register-popup">
        //     <img src="../register.jpeg" className="card-img-top" alt="registerFormImage"/>
        //     <form className="p-2">
        //         <div className="form-group text-left">
        //             <label className="control-label">Email address</label>
        //             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={state.email} onChange={handleChange}/>
                    
        //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="form-group text-left">
        //             <label className="control-label">Username</label>
        //             <input type="text" className="form-control" id="username" aria-describedby="usernamelHelp" placeholder="Chose a username" value={state.username} onChange={handleChange}/>
                    
                    
                    
        //         </div>
        //         <div className="form-group text-left">
        //             <label>Password</label>
        //             <input type="password" className="form-control" id="password" placeholder="Password" value={state.password} onChange={handleChange}/> 
        //         </div>
                    
        //         <div className="form-group text-left">
        //             <label>Confirm Password</label>
        //             <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleChange}/>
        //         </div>
                
        //         <button 
        //             type="submit" 
        //             className="btn btn-lg btn-outline-primary w-100"
        //             onClick={handleSubmitClick}
        //             >
        //             Register
        //         </button>
        //     </form>
        // </div>
        <div className="register-popup container">
            <div className="row align-items-center">
                <div className="register-left col-8">
                    <div>
                        <img alt="People Discussion image" className="img-fluid" src={PeopleDiscussion}/>
                    </div>
                    <div className="m-2">
                        <h2>Paragrapher</h2>
                        <p>A place for sharing paragraphs</p>
                        <button className="btn btn-danger m-2">Click Here</button>
                    </div>
                </div>
                <div className="register-right col-4">
                    <div>
                        <h3>Hello!</h3>
                        <p>Sign Up to get started</p>
                    </div>
                    <div>
                        <input placeholder="Username" className="form-control"/>
                        <input placeholder="Email" className="form-control"/>
                        <input type="password" placeholder="Password" className="form-control"/>
                        <button type="submit" className="btn">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default RegistrationForm;
