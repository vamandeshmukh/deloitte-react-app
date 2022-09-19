import { useState } from "react";

const Child2 = (props) => {

    // const [dataFromChild1, setDataFromChild1] = useState(0);
    const dataFromChild1 = props.dataFromAnotherChild  ;

    return (
        <div >
            <p>Child2 component</p>
            <p>Data from Child to Parent to Child2:
                {dataFromChild1}
            </p>


        </div>
    );
}
export default Child2;



// Child to Parent to Child2 

