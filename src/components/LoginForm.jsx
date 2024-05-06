const LoginForm = ({ handleSubmit, username, password, handleUserNameChange, handlePasswordChange }) => {

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    username
                    <input
                        value={username}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div>
                    password
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default LoginForm