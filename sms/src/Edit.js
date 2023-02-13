import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



const Edit = () => {
    const { id } = useParams();
    // const[stuData,StuDataChange]=({})
    useEffect(() => {
        fetch(" http://localhost:8000/StuList/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            First_Namechange(resp.First_Name);
            Last_Namechange(resp.Last_Name);
            Locationchange(resp.Location);
            Emailchange(resp.Email);
            DOBchange(resp.DOB);
            Educationchange(resp.Education);
            Aboutchange(resp.About);

        })
    }, []);
    const [First_Name, First_Namechange] = useState('');
    const [Last_Name, Last_Namechange] = useState('');
    const [Location, Locationchange] = useState('');
    const [Email, Emailchange] = useState('');
    const [DOB, DOBchange] = useState('');
    const [Education, Educationchange] = useState('');
    const [About, Aboutchange] = useState('');
    const navigate = useNavigate();

    const Handlesubmit = (e) => {
        e.preventDefault();
        const stuData = { id, First_Name, Last_Name, Location, Email, DOB, Education, About };

        fetch("http://localhost:8000/StuList/"+id,{
            method: "PUT",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(stuData)
        }).then((res) => {
            alert("Update succesfully")
            navigate('/')
        })

    }
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form className="container" onSubmit={Handlesubmit}>
                            <div className="Cart-title">
                                <h5>Edit Student Details</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>First_Name:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="text" required value={First_Name} onChange={(e) => First_Namechange(e.target.value)} className="form-control" placeholder="enter your first name" />
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>Last_Name:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="text" required value={Last_Name} onChange={(e) => Last_Namechange(e.target.value)} className="form-control" placeholder="enter your last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>Email:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="email" required value={Email} onChange={(e) => Emailchange(e.target.value)} className="form-control" placeholder="your@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>DOB:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="date" required value={DOB} onChange={(e) => DOBchange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>Education:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="text" required value={Education} onChange={(e) => Educationchange(e.target.value)} className="form-control" placeholder="Enter your location here" />
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>Location:</label>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="text" required value={Location} onChange={(e) => Locationchange(e.target.value)} className="form-control" placeholder="Enter your Education here" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1">
                                    <div className="form-group">
                                        <label>About:</label>
                                    </div>
                                </div>
                                <div className="col-sm-11 ">
                                    <div className="form-group">
                                        <textarea className="form-control" value={About} onChange={(e) => Aboutchange(e.target.value)} placeholder="Enter your details" rows="8"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning">Update</button>
                                <Link to="/"><button  className="btn btn-danger">Back</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Edit;