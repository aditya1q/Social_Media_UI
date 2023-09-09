import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="LoginLogo">AadiSocial</h3>
                    <span className="loginDesc"></span>
                    Connent with friends and world around you on AadiSocial
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username" />
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="password"/>
                        <input className="loginInput" placeholder="Confirm password"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
