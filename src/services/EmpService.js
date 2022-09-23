import axios from 'axios';

const url = `http://localhost:12345/emps`;

const findAllEmployees = () => {
    console.log(`findAllEmployees`);
    return axios.get(url);
}

// http://localhost:12345/emps/102

const findEmployeeById = (id) => {
    console.log(`findEmployeeById/${id}`);
    return axios.get(`${url}/${id}`);
}

const addEmployee = (emp) => {
    console.log(`addEmployee${emp}`);
    return axios.post(url, emp);
}

const updateEmployee = (emp) => {
    console.log(`updateEmployee${emp.id}`)
    return axios.put(`${url}/${emp.id}`, emp);
}

const deleteEmployee = (id) => {
    console.log(`deleteEmployee${id}`)
    return axios.delete(`${url}/${id}`);
}


export { findAllEmployees, findEmployeeById, addEmployee, updateEmployee, deleteEmployee };