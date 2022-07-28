import PropTypes from'prop-types'
function LoginPage({labelLogin,labelPassword}) {

    return(
        <div className="loginArea">
            <h1>Bem-vindo!</h1>
            <img src="https://via.placeholder.com/200.png" alt="Logo.png"></img>
                <div>
                    <div><label htmlFor="inputLogin">{labelLogin}</label></div>
                    <div><input type="text" id="inputLogin"></input></div>
                </div>
                <div>
                    <div><label htmlFor="inputPassword">{labelPassword}</label></div>
                    <div><input type="password" id="inputPassowrd"></input></div>
                </div>
        </div>    
    )

}
LoginPage.propTypes={
    labelLogin:PropTypes.string,
    labelPassword:PropTypes.string,
}

export default LoginPage