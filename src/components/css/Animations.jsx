import "./Animations.css";

function Animations() {
    return (
        <div className="elementsGrid">
            <div className="animations">
                <div className="animationBox">
                    <div className="animationBoxLoader"></div>
                </div>
            </div>
            <div className="orbitContainer">
                <div className="orbitBox">
                    <div className="orbitLoader"></div>
                </div>
            </div>
            <div className="snakeContainer">
                <div className="snakeLoader">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={`snakeDot${index + 1}`}
                            className={`snakeDot snakeDot${index + 1}`}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="circleDotContainer">
                <div className="circleDotLoader">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={`circleDot${index + 1}`}
                            className={`circleDot circleDot${index + 1}`}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="sections">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={`section${index + 1}`}
                        className={`sectionBox section${index + 1}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Animations;
