import { useState } from "react";


const EmpData = () => {

    const [emp, setEmp] = useState({});
    const [empToSubmit, setEmpToSubmit] = useState({});

    const handleEmp = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmp({ ...emp, [evt.target.name]: evt.target.value });
    }

    const submitEmp = () => {
        alert(`${emp.eid} is added successfully.`);
        setEmpToSubmit(emp);
    }

    return (
        <div>
            <p>EmpData Component</p>
            <div>
                <input type="number" name="eid" value={emp.eid} onChange={handleEmp} />
                <br />
                <input type="text" name="firstName" value={emp.firstName} onChange={handleEmp} />
                <br />
                <input type="number" name="salary" value={emp.salary} onChange={handleEmp} />
                <br />
                <input type="button" name="submit" value="Submit" onClick={submitEmp} />
            </div>
            <p>EmpData as entered: {emp.eid} {emp.firstName} {emp.salary}</p>
            <p>EmpData to submit: {empToSubmit.eid} {empToSubmit.firstName} {empToSubmit.salary}</p>
        </div>
    );
}

export default EmpData;