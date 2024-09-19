import React, { useEffect, useState } from "react";
import style from '../style/ShowEnquiry.module.css';
import Layout from "./Layout";
import axios from "axios";
import StudentView from "./StudentView";
import Cookies from "universal-cookie";
import {  useNavigate } from "react-router-dom";

function ShowEnquiry() {
    const [student,setStudent]=useState([]);
    const [view,setView]=useState({});
    const cookies=new Cookies();
    const navigate=useNavigate()
    const handleShow=async()=>{
        const result = await axios.get('http://localhost:4000/studentEnquiry');
        if(result.status===200){
            setStudent(result.data.data);
        }

    }
    useEffect(()=>{
        if(cookies.get('admin')===undefined){
          navigate('/login')
        }else{
          navigate('/showEnquiry')
        }
        handleShow();
    },[])
  return (
    <Layout>
    <div className={style.container}>
      <h1 className={style.h1}>Student Details</h1>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Course</th>
              <th>Student Detail</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {
               student.map((val,index)=>{
                 return(
                    <tr key={index}>
                            <td>{val.fullName}</td>
                            <td>{val.email}</td>  
                            <td>{val.phone_no}</td>
                            <td>{val.current_course}</td>
                            <td>
                                <div className="text-right me-3 p-3 placebtn">
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className="btn btn-primary"
                                    onClick={()=>setView(val)}
                                  >
                                    <span>view</span>
                                  </button>
                                </div>
                            <StudentView view={view}/>
                            </td>
                            <td><button onClick={()=>{navigate(`/fullDtails/${val._id}`)}} className='btn btn-success'>Convert</button></td>
                    </tr>

                 )
               }) 
            }
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
}

export default ShowEnquiry;
