// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Comptnent key=value/> 

function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student : {props.inStudent}</p>
        </div>
    );
}
export default Student