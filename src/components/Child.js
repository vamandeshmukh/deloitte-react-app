
const Child = (props) => {

    const parentDataInChild = props.dataFromParent;

    return (
        <div >
            <p>Child component</p>
            <p>Parent data in child component:  
                {parentDataInChild} 
                {props.anotherProperty}
            </p>
        </div>
    );
}
export default Child;
