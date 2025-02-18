//conditional rendering = allow you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, r change components)

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
    // ทั้ง 2 อันนี้ใช้ได้เหมือนกัน จะดูเงื่อนไขว่าตรงไหม
    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : 
                              <h2>Please log in to continue</h2> );

}
export default UserGreeting