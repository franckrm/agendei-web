import {Link, useNavigate} from "react-router-dom";
import "./register.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import { useState } from "react";
import api from "../../constants/api.js"

function Register(){

    const navigate = useNavigate();
    const [name, setName ] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState(""); 
    const [password2, setPassword2 ] = useState(""); 
    const [msg, setMsg ] = useState("");  

    async function ExecuteRegister(){
    
        setMsg("");

        if(password != password2)
            return setMsg("As senhas não conferem. Digite novamente")

        try{
            const response = await api.post("/admin/register", {
                name,
                email, 
                password
            });
    
            if(response.data){
                console.log(response.data)
                localStorage.setItem("sessionToken", response.data.token);
                localStorage.setItem("sessionId", response.data.id_admin);
                localStorage.setItem("sessionEmail", email);
                localStorage.setItem("sessionName",name);
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                navigate("/appointments");
            }else
                setMsg("Error ao criar conta");
            

        }catch (error){
            console.log(error)
            if(error.response?.data.error)
                setMsg(error.response?.data.error) ;
            else
                setMsg("Error ao efeturar login. Tenete novamente mais tarde");

            console.log(error)
        }

    
        
        //console.log(email, password)
        //navigate("/appointments");
    }
    

    return <div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-signin">
                <img src={logo} className="logo mb-4" />
                <h5 className="mb-5">Crie sua conta agora mesmo</h5>
                <h5 className="mb-4 text-secondary">Preencha os campos abaixo</h5>

                <div className="mt-4">
                    <input type="text" placeholder="Nome"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mt-2">
                    <input type="email" placeholder="E-mail"
                        className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Senha"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Confirme a senha"
                        className="form-control"
                        onChange={(e) => setPassword2(e.target.value)}/>
                </div>
                <div className="mt-3 mb-5">
                    <button onClick={ExecuteRegister}  type="button" className="btn btn-primary w-100">
                        Criar minha conta
                    </button>
                </div>
                {
                    msg.length > 0 &&
                    <div className="alert alert-danger" role="alert">
                        {msg}
                    </div> 

                }
                <div>
                    <span className="me-1">Já tenhoa uma conta.</span>
                    <Link to="/">Acessar agora!</Link>
                </div>
            </form>
        </div>

        <div className="col-sm-7 d-flex">
            <img src={fundo} className="background-login" />
        </div>
    </div>
}

export default Register;