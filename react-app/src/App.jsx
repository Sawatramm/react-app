import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
//import ButtonEx from './BTmoldule/Button.jsx'
//import ButtonMo from './BTmoldule/Button.module.jsx'
//import Button from './ButtonEx.jsx'
import ButtonIn from './ButtonIn.jsx'
import Student from './Student.jsx'

function App() {

  return( //จะสามารถ return ได้แค่ค่าเดียว เลยจะแก้ไขด้วย <></>
    
    <>
        <Header/> {/* เป็น sortcut */}
        <Card/>
        {/* <ButtonEx/> */}
        {/* <ButtonMo/> */}
        {/* <Button/> */}
        <ButtonIn/>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Food/>
        <Footer/> 
    </>
  );

}

export default App
