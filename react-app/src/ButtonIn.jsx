// how to style react component with css
// (not including external frameworks or preprocessors)

// 1. external
// 2. modules
// 3. inline

function ButtonIn(){

    const styles = { /* จะไม่มีเครื่องหมาย - ใน func ทุกค่าเป็น string จะใช้ , แทน ;*/ 
        backgroundColor: "hsl(262, 54%, 63%)",
        color:" #ffffff",
        padding: "10px 20px", /*ความห่างจากขอบแกน x y  ตามลำดับ */
        borderRadius: "5px", /*ความมนของกรอบ*/
        border: "none", /*ไม่มีกรอบ*/
        cursor: "pointer", /*หากชี้เข้าไปที่ปุ่ม มันจะเป็นเปลี่ยนเป็นมือชี้*/
    }

    return(<button style={styles}>click me</button>); // จะเป็น external
    
}
export default ButtonIn