

const Login = () => {

    let myName = ``;

    const getMyName = (evt) => {
        myName = evt.target.value;
        console.log(myName);
        console.log(evt.target.value);
        console.log(evt.target.name);
    }

    return (
        <div>
            <p>Login Component</p>

            <p>Please enter your name:</p>
            <div>
                <input type="text" id="myName" name="myName" value={myName} onChange={getMyName} ></input>
            </div>
            <p>Your name: {myName}</p>


        </div >
    );
};

export default Login;




// import { Delete1, Delete2 } from "./deleteComponent";

// const Login = () => {

//     // component can declare all types of properties
//     const myName = `Vaman`;
//     const mySalary = 10.5;
//     const myData = { eid: 101, firstName: 'Sonu' };

//     // component can also declare functions
//     const fun = () => {
//         console.log(`fun function`);
//     };


//     return (
//         <div>
//             <p>Login Component</p>
//             {/* Properties can be invoked here  */}
//             {myName} {mySalary} {myData.firstName} {myData.eid}
//             <Delete1 />
//             <Delete2 />
//             {fun()}
//         </div >
//     );
// };

// export default Login;
