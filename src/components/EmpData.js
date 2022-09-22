import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Employee from '../models/Employee';

const EmpData = () => {

    const [emp, setEmp] = useState({});
    const [empToSubmit, setEmpToSubmit] = useState({});

    // access data from redux store - useSelector(); 
    const empDataFromStore = useSelector((store) => { return store.emp.empObj; });
    // const empDataFromStore = useSelector(store => store.emp.empObj);

    useEffect(() => {
        setEmp(new Employee());
        setEmpToSubmit(new Employee());
    }, []);

    const handleEmp = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmp({ ...emp, [evt.target.name]: evt.target.value });
    }

    const submitEmp = () => {
        setEmpToSubmit(emp);
        setEmp(new Employee());
    }

    return (
        <div className="container">
            <p className="display-4 text-primary">EmpData Component</p>
            <div className="bg-white shadow col-6 mx-3 my-3 px-3 py-3">
                <input type="number" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Please enter eid" />
                <br />
                <input type="text" name="firstName" value={emp.firstName} onChange={handleEmp} placeholder="Please enter firstName" />
                <br />
                <input type="number" name="salary" value={emp.salary} onChange={handleEmp} placeholder="Please enter salary" />
                <br />
                <input type="button" name="submit" value="Submit" onClick={submitEmp} />
            </div>
            <p>EmpData as entered: {emp.eid} {emp.firstName} {emp.salary}</p>
            <p>EmpData to submit: {empToSubmit.eid} {empToSubmit.firstName} {empToSubmit.salary}</p>
            <p>empDataFromStore: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary}</p>
        </div>
    );
}

export default EmpData;

// import { useEffect, useState } from "react";
// import Employee from '../models/Employee';

// const EmpData = () => {

//     const [emp, setEmp] = useState({});
//     const [empToSubmit, setEmpToSubmit] = useState({});


//     useEffect(() => {
//         setEmp(new Employee());
//         setEmpToSubmit(new Employee());
//     }, []);

//     const handleEmp = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setEmp({ ...emp, [evt.target.name]: evt.target.value });
//     }

//     const submitEmp = () => {
//         setEmpToSubmit(emp);
//         setEmp(new Employee());
//     }

//     return (
//         <div className="container">
//             <p>EmpData Component</p>
//             <div>
//                 <input type="number" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Please enter eid" />
//                 <br />
//                 <input type="text" name="firstName" value={emp.firstName} onChange={handleEmp} placeholder="Please enter firstName" />
//                 <br />
//                 <input type="number" name="salary" value={emp.salary} onChange={handleEmp} placeholder="Please enter salary" />
//                 <br />
//                 <input type="button" name="submit" value="Submit" onClick={submitEmp} />
//             </div>
//             <p>EmpData as entered: {emp.eid} {emp.firstName} {emp.salary}</p>
//             <p>EmpData to submit: {empToSubmit.eid} {empToSubmit.firstName} {empToSubmit.salary}</p>
//         </div>
//     );
// }

// export default EmpData;