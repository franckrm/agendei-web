
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import {doctors} from "../../constants/data";

function Appointments(){
    return <div className="container-fluid mt-page">
        <Navbar/>
        
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h2 className="d-inline">Agendamentos</h2>
                <Link to="/appointments/add" 
                    className="btn btn-outline-primary ms-5">
                    Novo Agendamento
                </Link>
            </div>

            <div className="d-flex justify-content-end">
                <input id="startDate" className="form-control" type="date" />
                <span>Até</span>
                <input id="endDate" className="form-control" type="date" />
                <div className="form-control">
                    <select name="doctor" id="doctor">
                        <option value="">Todos os médicos</option>
                        {
                            doctors.map((doc)=>{

                            })
                        }
                    </select>
                </div>
            </div>
        
        </div>
    </div>
}

export default Appointments;