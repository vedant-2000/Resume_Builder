import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import './Comp1.css';
import Comp2 from './Comp2';
export const UserContext = React.createContext();
let data;
function Comp1() {
  window.alert("Please upload photo and sign first then fill all the details to get better resume")
  const [Photo, setPhoto] = useState({photo:"", sign:""});
  const [Name, setName] = useState({Name:""})
  const [Email, setEmail] = useState({Email:""})
  const [Mob, setMob] = useState({Mobile:""})
  const [Carrer, setCarrer] = useState({Carrer:""})
  const [Secondary, setSecondary] = useState({ Subjects: "", Board: "", Marks: "" })
  const [Srsecondary, setSrsecondary] = useState({ Subjects: "", Board: "", Marks: "" })
  const [bachelor, setbachelor] = useState({ Subjects: "", Board: "", Marks: "" })
  const [masters, setmasters] = useState({ Subjects: "", Board: "", Marks: "" })
  const [Skill, setSkill] = useState()
  const [Hobby, setHobby] = useState({Hobbies:""})
  const [Basic, setBasic] = useState({ FName: "", MName: "", DOB: "", MS:"",LK:"",HT:"" })
  const [Exp, setExp] = useState({CName: null, DName: null, Exp: null})
 
  const navigate=useNavigate();
  function handleSubmit() {
    
    data=[ Photo, Name, Email,Mob, Carrer, Secondary,Srsecondary,bachelor,masters,Skill,Hobby,Basic, Exp]
  
    
   return(

    
     navigate("/tobeprinted")
    
   )
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setSecondary({
      ...Secondary,
      [evt.target.name]: value
    });
  }
  function handleChange1(evt) {
    const value = evt.target.value;
    setSrsecondary({
      ...Srsecondary,
      [evt.target.name]: value
    });
  }
  function handleChange2(evt) {
    const value = evt.target.value;
    setbachelor({
      ...bachelor,
      [evt.target.name]: value
    });
  }
  function handleChange3(evt) {
    const value = evt.target.value;
    setmasters({
      ...masters,
      [evt.target.name]: value
    });
  }
  function handleChange4(evt) {
    const value = evt.target.value;
    setBasic({
      ...Basic,
      [evt.target.name]: value
    });
  }
  function handleChange5(evt) {
    const value = evt.target.value;
    setExp({
      ...Exp,
      [evt.target.name]: value
    });
  }

  function handleChange7(evt) {
  
    let value = URL.createObjectURL(evt.target.files[0]);
    setPhoto({
      ...Photo,
      [evt.target.name]:value});
 
  }


  return (
    <div className='Comp1 Back col-12'>
      <p> Fill The Details To Get A Resume</p>
      <div className='row'>

        <div className='img col-md-6 m-1 '>
          <div className='row'>
            <div className='col-6 pos'>
            <input className="form-control" name="photo" type="file" id="image"  onChange={handleChange7} required />             
            {Photo.photo && <img src={Photo.photo} alt="Not Available" width="220rem" height="200rem"></img>}
             {!Photo.photo && <p> Upload Your Passport Size Photo</p>}
            </div>
            <div className='col-6 pos'>
            <input className="form-control" name="sign" type="file" id="image"  onChange={handleChange7} required />             
            {Photo.sign && <img src={Photo.sign} alt="Not Available" width="220rem" height="200rem"></img>}
             {!Photo.sign && <p> Upload Your Signature</p>}
            </div>
          </div>
        </div>
        <div className='basic_details col-md-5'>

          <div className='p-1'>
            <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className='p-1'>
            <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='p-1'>
            <input type="tel" placeholder='Enter Your Mobile No' onChange={(e) => setMob(e.target.value)}></input>
          </div>
          <div className='p-1'>
            <input type="text" placeholder='Enter Your Career Objective' onChange={(e) => setCarrer(e.target.value)}></input>
          </div>
        </div>
      </div>
      <div className='aca_details p-2'>
        Enter Your Academic Details :
        <div className='quali'>
          <table className="table mt-2 ">
            <thead>
              <tr className='lefty'>

                <th scope="col">Qualifications</th>
                <th scope="col">Subject / Field / Branch</th>
                <th scope="col">Board / University</th>
                <th scope="col">Marks in Percentage / CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">X Or Secondary</th>
                <th scope="col">   <input type="text" name="Subjects" value={Secondary.Subjects} onChange={handleChange}></input></th>
                <th scope="col">  <input type="text" name="Board" value={Secondary.Board} onChange={handleChange}></input></th>
                <th scope="col">  <input type="text" name="Marks" value={Secondary.Marks} onChange={handleChange}></input></th>
              </tr>
              <tr>
                <th scope="col">XII Or Senior Secondary</th>
                <th scope="col"> <input type="text" name="Subjects" value={Srsecondary.Subjects} onChange={handleChange1}></input></th>
                <th scope="col"><input type="text" name="Board" value={Srsecondary.Board} onChange={handleChange1}></input></th>
                <th scope="col"><input type="text" name="Marks" value={Srsecondary.Marks} onChange={handleChange1}></input></th>
              </tr>
              <tr>
                <th scope="col">Bachelor's Degree</th>
                <th scope="col"> <input type="text" name="Subjects" value={bachelor.Subjects} onChange={handleChange2}></input></th>
                <th scope="col"><input type="text" name="Board" value={bachelor.Board} onChange={handleChange2}></input></th>
                <th scope="col"><input type="text" name="Marks" value={bachelor.Marks} onChange={handleChange2}></input></th>
              </tr>
              <tr>
                <th scope="col">Master's Degree</th>
                <th scope="col"> <input type="text" name="Subjects" value={masters.Subjects} onChange={handleChange3}></input></th>
                <th scope="col"><input type="text" name="Board" value={masters.Board} onChange={handleChange3}></input></th>
                <th scope="col"><input type="text" name="Marks" value={masters.Marks} onChange={handleChange3}></input></th>
              </tr>
            </tbody>
          </table>
          <p> If any of the details is not present leave it blank </p>
        </div>
      </div>


      <div className='row'>
    
        <div className='skills_details p-2 col-md-6'>
          Write Your Skills Seperated By Commas :
          <input type="text" placeholder='Enter Your Skills Seperated By Commas' name="skill" onChange={(e) => setSkill(e.target.value)}></input>
        </div>
        <div className='hobbies_details p-2 col-md-6'>
          Write Your Hobbies Seperated By Commas :
          <input type="text" placeholder='Enter Your Hobbies Seperated By Commas' name="hobbies" onChange={(e) => setHobby(e.target.value)}></input>
        </div>
      </div>
      <div className='col-md-12'>
        Enter Your Work Experience
       
        <div className='col-md-12 d-flex justify-content-around p-2 m-1'>
      
       
      <input type="text" name="CName" value={Exp.CName} placeholder='Enter Company Name' onChange={handleChange5}></input>
      <input type="text" name="DName" value={Exp.DName}  placeholder='Enter Designation / Job Description' onChange={handleChange5}></input>
     <input type="tel" name="Exp" placeholder='Enter Experience in Months' value={Exp.Exp}  onChange={handleChange5}></input>
       </div>
     
      </div>


      <div className='col-md-12 p-2 justify-content-center'>Enter Basic Information
      <div className='col-md-12 d-flex justify-content-around p-2 m-1'>
      <input type="text" name="FName" value={Basic.FName} placeholder='Enter Your Father Name' onChange={handleChange4}></input>
      <input type="text" name="MName" value={Basic.MName}  placeholder='Enter Your Mother Name' onChange={handleChange4}></input>
     <input type="date" name="DOB" placeholder='Enter Your Date Of Birth' required value={Basic.DOB}  onChange={handleChange4}></input>
      </div>
      <div className='col-md-12  d-flex justify-content-around p-2 m-1 '>
     <input type="text" name="LK" value={Basic.LK}  placeholder='Languages Known' onChange={handleChange4}></input>
     <input type="text" name="HT" value={Basic.HT}  placeholder='Home Town' onChange={handleChange4}></input>
     <input type="text" list="MS" name="MS" value={Basic.MS}  placeholder='Marital Status' onChange={handleChange4}></input>
      
<datalist id="MS">
  <option>Unmarried</option>
  <option>Married</option>
  
</datalist>
     
      </div>
      </div>
      <div> <button type="button" className="btn btn-success" onClick={handleSubmit}> Submit Data To Generate Resume</button></div>
      </div>
   

  )
}

export default Comp1; 
export {data};

