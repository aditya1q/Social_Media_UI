import "./login.css"

export default function Login() {
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
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="password"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot password ?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
