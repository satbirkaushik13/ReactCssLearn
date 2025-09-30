import "./Home.css";
import { useSelector } from "react-redux";
function Home() {
    const isNight = useSelector((state) => state.mode.isNight);
    const name = useSelector((state) => state.user.name);
    return (
        <div className={`landscape ${isNight ? "night" : "day"}`}>
            <div className="skySection">
                {name ? (
                    <div className="welcomeName">Welcome home {name}...</div>
                ) : null}
                <div className="landscapeElements sky">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={"skyElements" + index}
                            className={`${isNight ? "stars" : "birds"}`}
                        ></div>
                    ))}
                </div>
            </div>
            <div
                className={`landscapeElements mountains ${
                    isNight ? "night" : "day"
                }`}
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={"mountain" + index}
                        className={`mountain mountain${index + 1}`}
                    ></div>
                ))}
                <div className="sun"></div>
            </div>
            <div className="landscapeElements landRiver">
                <div className="land land1"></div>
                <div className="river river1">
                    <div className="waterMark"></div>
                    <div className="waterMark"></div>
                </div>
                <div className="land land2"></div>

                <div className="land land3"></div>
                <div className="river river2">
                    <div className="waterMark"></div>
                </div>
                <div className="land land4"></div>
                <div className="land land5"></div>
                <div className="river river3">
                    <div className="waterMark"></div>
                </div>
                <div className="land land6"></div>

                <div className="land land7"></div>
                <div className="land land8"></div>
                <div className="river river4"></div>
                <div className="land land9"></div>
                <div className="land land10"></div>
                <div className="land land11"></div>
            </div>
        </div>
    );
}

export default Home;
