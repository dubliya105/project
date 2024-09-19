import React, { useEffect, useState } from 'react'
import style from "../style/Registration.module.css";
import Layout from "./Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from 'react-router-dom';
function StudentFullDetails() {
    //state for manage student details
const [fullName,setFullName]=useState('')   
const [email,setEmail]=useState('')
const [phoneNo,setPhoneNo]=useState('')
const [collage,setcollage]=useState('')
const [course,setCourse]=useState('')
const [qualification,setQualification]=useState('')
const [reference,setReference]=useState(' ')
const [address,setAddress]=useState('')
const [language,setLanguage]=useState('')
const [interestedCourse,setInterestedCourse]=useState('')
const [startTime,setStartTime]=useState('')
const [endTime,setEndTime]=useState('')
const [joiningDate,setJoiningDate]=useState('')
const [date,setDate]=useState('')

const {id}=useParams();
const handleUdateDtail=async()=>{
    const result= await axios.patch(`http://localhost:4000/studentEnquiry/${id}`,{ 
        fullName:fullName,
        address:address,
        email:email,
        phone_no:phoneNo,
        collage_name:collage,
        language_known:language,
        current_course:course,
        interested_course:interestedCourse,
        qualification:qualification,
        reference_by:reference,
        start_time:startTime,
        end_time:endTime,
        joining_date:joiningDate,
        date:date
    })
    if(result.status===200){
        setFullName('')
        setEmail('')
        setPhoneNo('')
        setcollage('')
        setCourse('')
        setQualification('')
        setReference('')
        setAddress('')
        setLanguage('')
        setInterestedCourse('')
        setStartTime('')
        setEndTime('')
        setJoiningDate('')
        setDate('')
        toast.success("Update Successfully")
      }
}



useEffect(()=>{

})

  return (
    <div>
        <Layout>
      <center>
        <div className={style.container}>
          <header className="text-left">Registration</header>
          <form onSubmit={(e)=>{handleUdateDtail(e)}}>
           
                <span className={style.title}>Personal Details</span>
                    <div className="row">
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label for='name'>Full Name</label> 
                            <input value={fullName} name='name' className='form-control' type="text" placeholder="Enter your Full Name" onChange={(e)=>setFullName(e.target.value)} required />
                        </div>
                        </div>
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label for='email' >Email Address</label>
                            <input value={email} name='email' className='form-control' type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label>Mobile Number</label>
                            <input value={phoneNo} className='form-control' type="number" placeholder="Enter your Mobile Number" onChange={(e)=>setPhoneNo(e.target.value)} required />
                        </div>
                        </div>
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label >Collage Name</label>
                            <input value={collage} className='form-control' type="text" placeholder="Enter your Collage Name" onChange={(e)=>setcollage(e.target.value)} required />
                        </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-sm-6 text-left">
                            <div className={style.inputField}>
                                <label>Address</label>
                                <input value={address} className='form-control' type="text" placeholder="Enter your Course" onChange={(e)=>setAddress(e.target.value)} required />
                            </div>
                        </div>
                        <div className="col-sm-6 text-left">
                            <div className={style.inputField}>
                                <label >Language Known</label>
                                <input value={language} className='form-control' type="text" placeholder="Enter your Qualification" onChange={(e)=>setLanguage(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.inputField} text-left`}>
                            <label >Qualification</label>
                            <input value={qualification } className='form-control' type="text" placeholder="Enter your Qualification" onChange={(e)=>setQualification(e.target.value)} required />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label>Current Course</label>
                            <input value={course} className='form-control' type="text" placeholder="Enter your Course" onChange={(e)=>setCourse(e.target.value)} required />
                        </div>
                        </div>
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label >Intrested Course</label>
                            <input value={interestedCourse} className='form-control' type="text" placeholder="Enter your Qualification" onChange={(e)=>setInterestedCourse(e.target.value)} required />
                        </div>
                        </div>
                    </div>
                    <h6 className="text-left m-2">Reference By</h6>
                    <div className='d-flex m-3  '>
                    
                        <div className='mx-2' >
                            <input type='checkbox'  onClick={()=>setReference('News Paper')}/>News Paper
                        </div>
                        
                        
                        <div className='mx-2' >
                    
                            <input type='checkbox'  onClick={()=>setReference('pamphlet')}/>pamphlet
                        </div>
                        
                        
                        <div className='mx-2' >
                        
                            <input type='checkbox'  onClick={()=>setReference('Website')}/>Website
                        </div>
                        <div className='mx-2' >
                            <input type='checkbox'  onClick={()=>setReference('Friend')}/>Friend
                        </div>
            
                        <div className='mx-2' >
                            <input type='checkbox'  onClick={()=>setReference('Poster')}/>Poster
                        </div>
                        
                        
                        <div className='mx-2' >
                            <input type='checkbox'  onClick={()=>setReference('Other')}/>Other
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label>Suggested Start Time</label>
                            <input value={startTime} className='form-control' type="text" placeholder="Enter your Course" onChange={(e)=>setStartTime(e.target.value)} required />
                        </div>
                        </div>
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label >Suggested End Time</label>
                            <input value={endTime} className='form-control' type="text" placeholder="Enter your Qualification" onChange={(e)=>setEndTime(e.target.value)} required />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label>Expected Joining Date</label>
                            <input value={joiningDate} className='form-control' type="date" placeholder="Enter your Course" onChange={(e)=>setJoiningDate(e.target.value)} required />
                        </div>
                        </div>
                        <div className="col-sm-6 text-left">
                        <div className={style.inputField}>
                            <label >Date</label>
                            <input value={date } className='form-control' type="date" placeholder="Enter your Qualification" onChange={(e)=>setDate(e.target.value)} required />
                        </div>
                        </div>
                    </div>  
                        
                        <button type="submit">Submit</button>
                        <Toaster/>
                    
            </form>
            </div>
        </center>
        </Layout>
    </div>
  )
}

export default StudentFullDetails