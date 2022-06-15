import { NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import css from "./navbar.module.css";
import { logout } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";

const Navbar = ({ isAuth, name = "Kirill", url }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.root}>
            <div className={css.container}>
                <div className={css.logo}>Kaban in clouds</div>
                {!isAuth ? (
                    <div className={css.buttons}>
                        <div className={css.login}>
                            <NavLink to="login">Enter</NavLink>
                        </div>
                        <div className={css.registration}>
                            <NavLink to="registration">Registration</NavLink>
                        </div>
                    </div>
                ) : (
                    <div className={css.buttons}>
                        <div className={css.name}>{name}</div>
                        <div
                            className={css.logout}
                            onClick={() => dispatch(logout())}
                        >
                            Logout
                        </div>
                        <Avatar url={url} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
