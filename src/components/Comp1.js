import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendComp1DataToStore } from '../redux/Comp1Slice';
const Comp1 = () => {

    const [dataFromComp1User, setDataFromComp1User] = useState('');

    const comp1DataFromStore = useSelector(store => store.comp1.data1);
    const comp2DataFromStore = useSelector(store => store.comp2.data2);

    const dispatch = useDispatch();

    const handleDataFromUser = (evt) => {
        console.log(dataFromComp1User);
        setDataFromComp1User(evt.target.value);
    }

    const submitDataFromUser = (evt) => {
        console.log(dataFromComp1User);
        dispatch(sendComp1DataToStore(dataFromComp1User));
    }
    return (
        <div className="container">
            <p className="display-4 text-primary">Comp1 component</p>
            <hr />
            <div>
                <p>Please enter data:</p>
                <form>
                    <input type="text" name="dataFromComp1User" value={dataFromComp1User} placeholder="Enter" onChange={handleDataFromUser} />
                    <input type="button" value="Submit" onClick={submitDataFromUser} />
                </form>
                <hr />
            </div>
            <div>
                <p>Data : </p>
                <p>dataFromComp1User: {dataFromComp1User}</p>
                <p>comp1DataFromStore: {comp1DataFromStore}</p>
                <p>comp2DataFromStore: {comp2DataFromStore}</p>
            </div>
        </div>
    );
}
export default Comp1;




