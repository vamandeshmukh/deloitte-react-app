import { useState } from "react";

const Child = (props) => {

    const [childData, setChildData] = useState(20);
    const parentDataInChild = props.dataFromParent;

    const sendDataToParent = () => {
        console.log(`Child function invoked.`)
        props.passData(childData);
    }

    return (
        <div >
            <p>Child component</p>
            <p>Chld data in child component:
                {childData}
            </p>
            <p>Parent data in child component:
                {parentDataInChild}
            </p>
            <input type="button" value="Pass data" onClick={sendDataToParent} />

        </div>
    );
}
export default Child;




// const Child = (props) => {

//     const parentDataInChild = props.dataFromParent;

//     return (
//         <div >
//             <p>Child component</p>
//             <p>Parent data in child component:
//                 {parentDataInChild}
//                 {props.anotherProperty}
//             </p>
//         </div>
//     );
// }
// export default Child;
