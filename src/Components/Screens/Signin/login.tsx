import '../../../Assets/css/login.css';

function Login() {
    return (
        <>
            <div className="main">
                <p className="sign">Sign in</p>
                <form className="form1">
                    <input className="un" type="text" placeholder="Username" />
                    <input className="pass" type="password" placeholder="Password" />
                    <a className="submit">Sign in</a>
                    <p className="forgot"><a href="#">Forgot Password?</a></p>
                </form>

            </div>
        </>
    );
}

export default Login;