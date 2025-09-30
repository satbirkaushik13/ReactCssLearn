import { useSelector, useDispatch } from "react-redux";
import "./Redux.css";
import { useEffect, useRef } from "react";
import { setName } from "../../store/slices/nameSlice";
import { NavLink } from "react-router-dom";

function Redux() {
    const dispatch = useDispatch();
    const nameInputRef = useRef();

    const name = useSelector((state) => state.user.name);

    const handleNameChange = () => {
        const newName = nameInputRef.current.value;
        dispatch(setName(newName));
    };

    useEffect(() => {
        nameInputRef.current.focus();
    }, [name]);

    return (
        <div className="redux">
            <h1>Please enter your name:</h1>
            <div className="formGroup">
                <input
                    type="text"
                    className="nameInput"
                    ref={nameInputRef}
                    onChange={handleNameChange}
                    value={name}
                />
                <NavLink to="/" activeClassName="active" className={"homeLink"}>
                    Go to Home
                </NavLink>
            </div>
        </div>
    );
}

export default Redux;
