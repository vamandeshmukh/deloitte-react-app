import { useState } from "react";


const EmpData = () => {

    const [emp, setEmp] = useState({});

    const handleEmp = (evt) => {
        console.log(evt.target.value);

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
                {/* <input type="text" name="eid" value={} onChange={} /> */}

            </div>
            <p>{emp.eid} {emp.firstName} {emp.salary}</p>
        </div>
    );
}

export default EmpData;