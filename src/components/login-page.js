function LoginPage() {

    return(
        <div>
            <h1>Bem-vindo!</h1>
            <img src="https://via.placeholder.com/200.png" alt="Logo.png"></img>
                <label for="inputLogin">Login</label>
                <input type="text" id="inputLogin" placeholder="Login"></input>
                <label for="inputPassword">Senha</label>
                <input type="password" placeholder="Senha"></input>
        </div>    
    )

}

export default LoginPage