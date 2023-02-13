import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./stulist.css";





const StuList = () => {
    const [stuData, StuDataChange] = useState(null)
    const navigate = useNavigate();
    const Edit = (id) => {
        navigate('/sms/Edit/' + id)
    }
    const RemoveFunction = (id) => {
        if (window.confirm("Do You Want Delete?")) {
            fetch("http://localhost:8000/StuList/" + id, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            }).then((res) => {
                alert("Delete  succesfully")
                window.location.reload();

            })
        }
    }


    useEffect(() => {
        fetch(" http://localhost:3000/StuList").then((res) => {
            return res.json();
        }).then((resp) => {
            StuDataChange(resp);
        })
    }, [])

    return (
        <div className="container-fluid">
            <div className="card">
                <form className="form-inline">
                    <div className="Cart-title">
                        <h4>STUDENT MANAGEMENT SYSTEM</h4>
                    </div>
                </form>
                <div className="input-group">
                <div classNam="form-outline">
                    <input type="search" placeholder="Search" className="form-control" />
                </div>
            </div>
                <div>
                    <Link to="sms/Create"><button className="btn btn-dark">Add(+)</button></Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-light table-hover text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First_Name</th>
                                <th>Last_Name</th>
                                <th>Location</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Education</th>
                                <th>About</th>
                                <th>Action</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stuData && stuData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.First_Name}</td>
                                        <td>{item.Last_Name}</td>
                                        <td>{item.Location}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.DOB}</td>
                                        <td>{item.Education}</td>
                                        <td>{item.About}</td>
                                        <td><a onClick={() => { Edit(item.id) }} className="btn btn-dark">Edit</a></td>
                                        <td><a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Delete</a></td>



                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}
export default StuList;