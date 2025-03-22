import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { doctors, doctors_services } from "../../constants/data.js";

function AppointmentAdd(){

    const {id_appointment} = useParams();

    return <>
        <Navbar/>
        <div className="container-fluid mt-page">
            <div className="row col-lg-4 offset-lg-4">
                <div className="col-12 mt-2">
                    <h2>
                        {
                            id_appointment > 0 ? "Editar Agendamento" : "Novo Agendamento"
                        }
                    </h2>
                </div>

                <div className="col-12 mt-4">
                    <label htmlFor="doctor" className="form-label">Médico</label>
                    <div className="form-control mb-2">
                        <select name="doctor" id="doctor">
                            <option value="0">Selecione o médico</option>

                            {doctors.map((doc)=>{
                                return <option key={doc.id_doctor} value={doc.id_doctor}>{doc.name}</option>
                            })}

                        </select>
                    </div>
                                             
                </div>

                <div className="col-12 mt-3">
                    <label htmlFor="service" className="form-label">Serviço</label>
                    <div className="form-control mb-2">
                        <select name="service" id="service">
                            <option value="0">Selecione o serviço</option>

                            {doctors_services.map((d)=>{
                                return <option key={d.id_service} 
                                value={d.id_service}>{d.description}</option>
                            })}

                        </select>
                    </div>
                                             
                </div>

                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Data</label>
                    <input type="date" className="form-control"  name="bookingDate" id="bookingDate" />                   
                </div>
                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Horário</label>
                    <div className="form-control mb-2">
                        <select name="bookingHours" id="bookingHours">
                            <option value="0">Horário</option>
                            <option value="0">09:00</option>
                            <option value="0">09:30</option>
                            <option value="0">10:00</option>
                            <option value="0">10:30</option>
                            <option value="0">11:00</option>
                        </select>
                    </div> 

                    <div className="col-12 mt-4">
                        <div className="d-flex justify-content-end">
                            <Link to="/appointments" className="btn btn-outline-primary me-3">
                                Cancelar
                            </Link>
                            <button className="btn btn-primary">Salvar Dados</button>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    </>
}

export default AppointmentAdd;