import NavBar from "../components/NavBar"

function Login() {
  return (
    <>
        <header>
            {/* Save space for NavBar */}
            <NavBar />
        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                   <label htmlFor="username">Username</label>
                   <input id="username" name="username" type="text" placeholder="Username" />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Enter password" />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </main>
    </>
  )
}

export default Login