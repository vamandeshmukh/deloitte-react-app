import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [parentData, setParentData] = useState(10);

    return (
        <div >
            <p>Parent component</p>
            <p>Parent data in parent component: {parentData}</p>
            <Child
                dataFromParent={parentData}
                anotherProperty='Abcd' />
        </div>
    );

}
export default Parent;
