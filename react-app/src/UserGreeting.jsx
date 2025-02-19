//conditional rendering = allow you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, r change components)

import PropTypes from 'prop-types';

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
    // ทั้ง 2 อันนี้ใช้ได้เหมือนกัน จะดูเงื่อนไขว่าตรงไหม
    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : 
    //                           <h2>Please log in to continue</h2> );
    
    //conditional rendering 

    const welcomeMessage = <h2 className="welcome-message">
                               Welcome {props.username}
                            </h2>
    const loginPrompt = <h2 className="login-prompt">
                            Please log in to continue
                        </h2>                    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt); //เช็คเงื่อนไข ถ้าเข้าเงื่อนไขจะ print welcomeMessage 
                                                             // ถ้าไม่จะ print loginPrompt 
    
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting