import "./App.scss";
import Logo from "./assets/logo.svg";
import Arrow from "./assets/icon-arrow.svg";
import Error from "./assets/icon-error.svg";
import ImgDesktop from "./assets/hero-desktop.jpg";
import ImgMobile from "./assets/hero-mobile.jpg";

function App() {
    const handleSubmit = () => {};
    return (
        <main>
            <div className="container">
                <div className="left">
                    <div className="left-content">
                        <img src={Logo} alt="" className="logo" />
                        <div className="content">
                            <h1>
                                <span>{`WE'RE`}</span> COMING SOON
                            </h1>
                            <p className="description">
                                {`Hello fellow shoppers! We're currently building our
                            new fashion store. Add your email below to stay
                            up-to-date with announcements and our launch deals.`}
                            </p>
                            <div className="input">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <form action="">
                                    <button type="submit">
                                        <img src={Arrow} alt="" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={ImgDesktop} alt="" className="img-desktop" />
                    <img src={ImgMobile} alt="" className="img-mobile" />.
                </div>
            </div>
        </main>
    );
}

export default App;
