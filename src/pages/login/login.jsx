import {Link, useNavigate} from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";

function Login(){

    const navigate = useNavigate();
    function ExecuteLogin(){
        navigate("/appointments");
    }

    return <div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-signin">
                <img src={logo} className="logo mb-4" />
                <h5 className="mb-5">Gerencie seus agendamento de forma descomplicada</h5>
                <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

                <div className="mt-4">
                    <input type="email" placeholder="E-mail"
                        className="form-control" />
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Senha"
                        className="form-control"/>
                </div>
                <div className="mt-3 mb-5">
                    <button onClick={ExecuteLogin} className="btn btn-primary w-100"  type="button">Login</button>
                </div>
                <div>
                    <span className="me-1">Não tenho uma conta.</span>
                    <Link to="/register">Criar agora!</Link>
                </div>
            </form>
        </div>

        <div className="col-sm-7 d-flex">
            <img src={fundo} className="background-login" />
        </div>
    </div>
}

export default Login;