import "./App.scss";
import { useState } from "react";
import Logo from "./assets/logo.svg";
import Arrow from "./assets/icon-arrow.svg";
import ErrorIcon from "./assets/icon-error.svg";
import ImgDesktop from "./assets/hero-desktop.jpg";
import ImgMobile from "./assets/hero-mobile.jpg";

function App() {
    const [formData, setFormData] = useState({
        // name: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        // name: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        // if (!formData.name.trim()) {
        //     errors.name = "Name is required";
        // }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            errors.email = "Please provide a valid email";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: "",
        });
    };

    return (
        <main>
            <div className="container">
                <img src={Logo} alt="" className="logo-mobile" />
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
                                <form onSubmit={handleSubmit}>
                                    <input
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className={
                                            formErrors.email
                                                ? "error"
                                                : undefined
                                        }
                                    />
                                    {formErrors.email && (
                                        <>
                                            <span className="error-span">
                                                {formErrors.email}
                                            </span>
                                            <img
                                                src={ErrorIcon}
                                                alt=""
                                                className="error-icon"
                                            />
                                        </>
                                    )}
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
