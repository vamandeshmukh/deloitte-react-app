import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employee from '../models/Employee';
import { setEmpObj, setEmpList } from '../redux/EmpSlice';

import {
    findAllEmployees,
    findEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} from '../services/EmpService';

const EmpData = () => {

    const [eid, setEid] = useState('');
    const emp = useSelector((store) => { return store.emp.empObj; });
    const [empToSubmit, setEmpToSubmit] = useState({});
    const allEmpsList = useSelector(store => store.emp.empList);
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

    const submitFindAllEmps = (evt) => {
        console.log(`submitFindAllEmps`);
        findAllEmployees()
            .then((response) => {
                console.log(response.data);
                dispatch(setEmpList(response.data));
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee with ${eid} not found ${error.message}.`);
            });
        evt.preventDefault();
    };

    const submitFindEmpById = (evt) => {
        console.log(`submitFindEmpById ${eid}`);
        findEmployeeById(eid)
            .then((response) => {
                console.log(response.data);
                dispatch(setEmpObj(response.data));
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
                dispatch(setEmpObj(response.data));
                alert(`Employee with eid ${response.data.id} added successfully!`);
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee could not be added ${error.message}.`)
            });
        evt.preventDefault();
    };

    const submitUpdateEmp = (evt) => {
        console.log(empToSubmit);
        updateEmployee(empToSubmit)
            .then((response) => {
                console.log(response.data);
                dispatch(setEmpObj(response.data));
                alert(`Employee with eid ${response.data.id} updated successfully!`);
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee could not be updated ${error.message}.`)
            });
        evt.preventDefault();
    };

    const submitDeleteEmpById = (evt) => {
        console.log(`submitDeleteEmpById ${eid}`);
        // if (window.confirm('Delete the employee?')) {
        deleteEmployee(eid)
            .then((response) => {
                console.log(response.data);
                dispatch(setEmpObj(response.data));
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Employee with ${eid} not found ${error.message}.`);
            });
        // }
        evt.preventDefault();
    };

    return (
        <div className="container">
            <p className="display-4 text-primary">EmpData Component</p>
            <hr />
            {/* <div>
                <p>Show and Hide: {(emp.firstName) && <span>Display this</span>}</p>
            </div> */}
            <div>
                <div className="row justify-content-center">

                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Add a new Employee 1</p>
                        <hr />
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
                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Update Employee Details</p>
                        <hr />
                        <form>
                            <input
                                type="number"
                                name="id"
                                value={empToSubmit.id}
                                onChange={handleEmp}
                                className="form-control mr-2"
                                placeholder="Please enter eid"
                            />
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
                                value="Update Employee"
                                className="btn btn-outline-primary mt-3 mb-3"
                                onClick={submitUpdateEmp}
                            />
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Find an Employee by Id 1</p>
                        <hr />
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
                        <p className="text-primary text-center lead">Employee Details 1</p>
                        <div>
                            <p>id: {emp.id}</p>
                            <p>firstName: {emp.firstName}</p>
                            <p>salary: {emp.salary}</p>
                        </div>
                    </div>

                    <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                        <p className="lead">Delete an Employee by Id</p>
                        <hr />
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
                                value="Delete Employee"
                                className="btn btn-outline-primary form-control"
                                onClick={submitDeleteEmpById}
                            />
                        </form>
                        <hr />
                        <p className="text-primary text-center lead">Employee Details 2</p>
                        <div>
                            <p>id: {emp.id}</p>
                            <p>firstName: {emp.firstName}</p>
                            <p>salary: {emp.salary}</p>
                        </div>
                    </div>


                </div>
                <div className="row justify-content-center ">
                    <div className="col-6 mx-3 my-3 px-3 py-3 bg-white shadow">
                        <p className="lead">List of All Employees</p>
                        <hr />
                        <div>
                            <input type="button" className="btn btn-outline-primary" value="Find All Emps" onClick={submitFindAllEmps} />
                        </div>
                        <div> {(allEmpsList.length !== 0) &&
                            <div>
                                <hr />
                                <p className="text-primary text-center lead">Employees List</p>
                                {
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Eid</th>
                                                <th>First Name</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        {allEmpsList.map((e =>
                                            <tbody>
                                                <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.firstName}</td>
                                                    <td>{e.salary}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                }
                            </div>
                        }
                        </div>
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