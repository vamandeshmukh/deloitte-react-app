import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoggedInUser, setUserLoginStatus } from '../redux/AppUserSlice';
import { useNavigate } from "react-router-dom";


const Logout = () => {

    // useEffect(() => {
    //     if (sessionStorage.getItem(`loginStatus`))
    //         dispatch(setUserLoginStatus(sessionStorage.getItem(`loginStatus`)));
    // },
    //     []);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitLogout = () => {
        if (window.confirm('Are you sure to logout?')) {
            dispatch(setLoggedInUser(''));
            window.sessionStorage.removeItem(`loginStatus`);
            navigate(`/`);
            // window.location.reload();
        }
        else {
            navigate(-1);
        }
    };


    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Logout</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Logout</h1>
                <form className="form form-group form-dark ">
                    <div>
                        <input
                            type="button"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Click to Logout"
                            onClick={submitLogout}
                        />
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Logout;




