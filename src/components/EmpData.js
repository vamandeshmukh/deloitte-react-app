import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employee from '../models/Employee';
import { setEmployee } from '../redux/EmpSlice';


import {
    findAllEmployees,
    findEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
    from '../services/EmpService';

const EmpData = () => {

    const [eid, setEid] = useState('');
    const emp = useSelector((store) => { return store.emp.empObj; });
    const [empToSubmit, setEmpToSubmit] = useState({});
    const empList = useSelector(store => store.emp.empList);
    const dispatch = useDispatch();

    useEffect(() => {
        setEmpToSubmit(new Employee());
    }, []);

    const handleEid = (evt) => {
        console.log(`${evt.target.name} ${evt.target.value}`);
        setEid(evt.target.value);
    };
    const handleEmp = (evt) => {
        console.log(`${evt.target.name} ${evt.target.value}`);
        setEmpToSubmit({ ...empToSubmit, [evt.target.name]: evt.target.value });
    };

    const submitFindEmpById = (evt) => {
        console.log(`submitFindEmpById ${eid}`);
        findEmployeeById(eid)
            .then((response) => {
                console.log(response.data);
                dispatch(setEmployee(response.data));
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee with ${eid} not found ${error.message}.`);
            });
        evt.preventDefault();
    };

    const submitAddEmp = (evt) => {
        console.log(empToSubmit);
        addEmployee(empToSubmit)
            .then((response) => {
                console.log(response.data);
                dispatch(setEmployee(response.data));
                alert(`Employee with eid ${response.data.id} added successfully!`);
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee could not be added ${error.message}.`)
            });
        evt.preventDefault();
    };

    return (
        <div className="container">
            <p className="display-4 text-primary">EmpData Component</p>
            <hr />

            <div>
                <div className="row justify-content-center">
                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Find an Employee by Id</p>
                        <form class="form-inline">
                            <input
                                type="number"
                                name="id"
                                value={eid}
                                onChange={handleEid}
                                className="form-control mr-2"
                                placeholder="Please enter eid"
                            />
                            <input
                                type="submit"
                                value="Search Employee"
                                className="btn btn-outline-primary form-control"
                                onClick={submitFindEmpById}
                            />
                        </form>
                        <hr />
                        <div>
                            <p>id: {emp.id}</p>
                            <p>firstName: {emp.firstName}</p>
                            <p>salary: {emp.salary}</p>
                        </div>
                    </div>

                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Add a new Employee</p>
                        <form>
                            <input
                                type="text"
                                name="firstName"
                                value={empToSubmit.firstName}
                                className="form-control mt-3 mb-3"
                                placeholder="Please enter firstName"
                                onChange={handleEmp}
                            />
                            <input
                                type="number"
                                name="salary"
                                value={empToSubmit.salary}
                                className="form-control mt-3 mb-3"
                                placeholder="Please enter salary"
                                onChange={handleEmp}
                            />
                            <input
                                type="submit"
                                value="Create Employee"
                                className="btn btn-outline-primary mt-3 mb-3"
                                onClick={submitAddEmp}
                            />
                        </form>
                    </div>
                </div>
            </div>




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