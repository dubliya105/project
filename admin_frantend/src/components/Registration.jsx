import React, { useState } from "react";
import style from "../style/Registration.module.css";
import Layout from "./Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Registration() {
const [fullName,setFullName]=useState('')
const [email,setEmail]=useState('')
const [phoneNo,setPhoneNo]=useState('')
const [collage,setcollage]=useState('')
const [course,setCourse]=useState('')
const [qualification,setQualification]=useState('')
const [reference,setReference]=useState('')

const handleNewEnquiry=async(e)=>{
    e.preventDefault()
    const result= await axios.post('http://localhost:4000/studentEnquiry',{
        fullName:fullName,
        email:email,
        phone_no:phoneNo,
        collage_name:collage,
        current_course:course,
        qualification:qualification,
        reference_by:reference
    })
    if(result.status===201){
      setFullName('')
      setEmail('')
      setPhoneNo('')
      setcollage('')
      setCourse('')
      setQualification('')
      setReference('')
        toast.success("Registration Successfull")
    }
}

  return (
    <Layout>
      <center>
        <div className={style.container}>
          <header className="text-left">Registration</header>
          <form onSubmit={(e)=>handleNewEnquiry(e)}>
           
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
                    <label>Course</label>
                    <input value={course} className='form-control' type="text" placeholder="Enter your Course" onChange={(e)=>setCourse(e.target.value)} required />
                  </div>
                 </div>
                 <div className="col-sm-6 text-left">
                 <div className={style.inputField}>
                    <label >Qualification</label>
                    <input value={qualification } className='form-control' type="text" placeholder="Enter your Qualification" onChange={(e)=>setQualification(e.target.value)} required />
                  </div>
                 </div>
            </div>
           <h6 className="text-left m-2">Reference By</h6>
            <div className="row">
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
                    <p className={style.originalButton} onClick={()=>setReference('News Paper')}>News Paper</p>
                  </div>
                 </div>
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
             
                      <p className={style.originalButton} onClick={()=>setReference('pamphlet')}>pamphlet</p>
                  </div>
                 </div>
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
                
                      <p className={style.originalButton} onClick={()=>setReference('Website')}>Website</p>
                  </div>
                 </div>
            </div>
            <div className="row">
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
                    <p className={style.originalButton} onClick={()=>setReference('Friend')}>Friend</p>
                  </div>
                 </div>
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
             
                      <p className={style.originalButton} onClick={()=>setReference('Poster')}>Poster</p>
                  </div>
                 </div>
                 <div className="col-sm-4 text-left">
                 <div className={style.inputField}>
                
                      <p className={style.originalButton} onClick={()=>setReference('Other')}>Other</p>
                  </div>
                 </div>
            </div>
            <button type="submit">Submit</button>
            <Toaster/>
            
          </form>
        </div>
      </center>
    </Layout>
  );
}

export default Registration;
