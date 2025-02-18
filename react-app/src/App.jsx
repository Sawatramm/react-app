// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
//import ButtonEx from './BTmoldule/Button.jsx'
//import ButtonMo from './BTmoldule/Button.module.jsx'
//import Button from './ButtonEx.jsx'
// import ButtonIn from './ButtonIn.jsx'
// import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {

  return( //จะสามารถ return ได้แค่ค่าเดียว เลยจะแก้ไขด้วย <></>
    
    <>
        {/* <Header/> เป็น sortcut */}
        {/* <Card/> */}
        {/* <ButtonEx/> */}
        {/* <ButtonMo/> */}
        {/* <Button/> */}
        {/* <ButtonIn/> */}
        {/* <Student name="Maneerat" age={21} isStudent={true}/>
            <Student name="Sawatram" age={30} isStudent={false}/>
            <Student name="Manee Sawatram" age={35} isStudent={false}/>
            <Student /> 
        */}
        <UserGreeting isLoggedIn = {true} username ="Maneerat"/>
        {/* <Food/> */}
        {/* <Footer/>  */}
    </>
  );

}

export default App
