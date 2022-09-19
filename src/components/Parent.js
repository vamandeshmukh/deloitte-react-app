import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [parentData, setParentData] = useState(10);
    const [childDataInParent, setChildDataInParent] = useState(0);

    const receiveDataFromChild = (arg) => {
        console.log(`Parent function invoked.`)
        setChildDataInParent(arg);
    }

    return (
        <div >
            <p>Parent component</p>
            <p>Parent data in parent component: {parentData}</p>
            <p>Child data in parent component: {childDataInParent} </p>
            <Child
                dataFromParent={parentData}
                passData={receiveDataFromChild}
            />
        </div>
    );

}
export default Parent;





// import { useState } from 'react';
// import Child from './Child';

// const Parent = () => {

//     const [parentData, setParentData] = useState(10);

//     return (
//         <div >
//             <p>Parent component</p>
//             <p>Parent data in parent component: {parentData}</p>
//             <Child
//                 dataFromParent={parentData}
//                 anotherProperty='Abcd' />
//         </div>
//     );

// }
// export default Parent;



