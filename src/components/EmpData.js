import { useEffect, useState } from "react";
import Employee from '../models/Employee';

const EmpData = () => {

    const [emp, setEmp] = useState({});
    const [empToSubmit, setEmpToSubmit] = useState({});

    // useEffect is used to initilize state properties 
    // useEffect(arg1, arg2);
    // useEffect(() => {}, []);

    useEffect(() => {
        // setEmp({ eid: ``, firstName: ``, salary: `` });
        setEmp(new Employee());
        // setEmpToSubmit({ eid: ``, lastName: ``, salary: `` });
        setEmpToSubmit(new Employee());
    }, []);

    const handleEmp = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmp({ ...emp, [evt.target.name]: evt.target.value });
    }

    const submitEmp = () => {
        // code to send data to backend 
        // alert(`${emp.eid} is added successfully.`);
        setEmpToSubmit(emp);
        setEmp(new Employee());
    }

    return (
        <div className="container">
            <p>EmpData Component</p>
            <div>
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
        </div>
    );
}

export default EmpData;