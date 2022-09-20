import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [appUser, setAppUser] = useState({});

    useEffect(() => {
        setAppUser({
            userName: ``,
            password: ``
        });
    }, []);

    const handleAppUser = (event) => {
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(appUser);
        alert(`User ${appUser.userName} regisetred successfully!`);
        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Register</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Register</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Register"
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/login" className="btn btn-outline-primary col-3">Already registered? Login</Link>
            </div>
        </div >
    );

}
export default Register;