import { Link } from "react-router-dom";



const Header = () => {

    return (
        <div>
            <p>Header Component</p>
            <Link to='/emp'>Emp</Link>
            <Link to='/parent'>Parent</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Home</Link>
        </div>
    );

}
export default Header;
