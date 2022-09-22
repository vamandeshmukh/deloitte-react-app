import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendComp2DataToStore } from '../redux/Comp2Slice';
const Comp2 = () => {

    const [dataFromComp2User, setDataFromComp2User] = useState('');

    const comp1DataFromStore = useSelector(store => store.comp1.data1);
    const comp2DataFromStore = useSelector(store => store.comp2.data2);

    const dispatch = useDispatch();

    const handleDataFromUser = (evt) => {
        console.log(dataFromComp2User);
        setDataFromComp2User(evt.target.value);
    }

    const submitDataFromUser = (evt) => {
        console.log(dataFromComp2User);
        dispatch(sendComp2DataToStore(dataFromComp2User));
    }
    return (
        <div className="container">
            <p className="display-4 text-primary">Comp2 component</p>
            <hr />
            <div>
                <p>Please enter data:</p>
                <form>
                    <input type="text" name="dataFromComp2User" value={dataFromComp2User} placeholder="Enter" onChange={handleDataFromUser} />
                    <input type="button" value="Submit" onClick={submitDataFromUser} />
                </form>
                <hr />
            </div>
            <div>
                <p>Data : </p>
                <p>dataFromComp2User: {dataFromComp2User}</p>
                <p>comp1DataFromStore: {comp1DataFromStore}</p>
                <p>comp2DataFromStore: {comp2DataFromStore}</p>
            </div>
        </div>
    );
}
export default Comp2;




