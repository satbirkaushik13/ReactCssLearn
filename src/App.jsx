import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import Animations from "./components/css/Animations";
import Home from "./components/home/Home";
import State from "./components/state/state";
import Reducer from "./components/reducer/Reducer";
import Redux from "./components/redux/Redux";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "./store/slices/modeSlice";

function App() {
    const dispatch = useDispatch();
    const isNight = useSelector((state) => state.mode.isNight);
    const location = useLocation();
    const hideMode = location.pathname !== "/";
    return (
        <div className="app">
            <div className="header">
                <div className="headerBar">
                    <div className="logo">Logo</div>
                    <NavBar />
                    <div
                        className="mode"
                        title="Example of Redux State Management"
                    >
                        <input
                            type="checkbox"
                            id="modeToggle"
                            checked={isNight}
                            disabled={hideMode}
                            onChange={() => dispatch(toggleMode())}
                        />
                        <label htmlFor="modeToggle" className="toggle"></label>
                        <span>Day/Night</span>
                    </div>
                </div>
            </div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/css" element={<Animations />} />
                    <Route path="/state" element={<State />} />
                    <Route path="/reducers" element={<Reducer />} />
                    <Route path="/redux" element={<Redux />} />
                </Routes>
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}

export default App;
