import React from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import logo from "../asset/logo.png"
import '../styles/user.styles.scss';

export default function AddUser() {
    const navigate = useNavigate();
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [scores, setScores] = React.useState("0");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (  scores !== "") {
      await addDoc(collection(db, "user"), {
       
        firstname,
        lastname,
        scores
        
      });
      
      
      setFirstname("");
      setLastname("");
      setScores("");
    }
    navigate("/");
  };
  return (
    <div>
       <div className="icon-container">
        <img className="icon" src={logo} alt=""></img>
        </div>  
        <div className="header">  
        <h1>
            Add a<br/>
            Score.
            </h1>
        </div>
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="label-container">
         <label>First name</label>
          <input
          type="text"
          placeholder="Type here..."
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
         />
        </div>

  <div className="label-container">
        <label>Last name</label>
       <input
          type="text"
          placeholder="Type here..."
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </div>
         <label>Scores</label>
          <input
          className="score-input"
         type="text"
         placeholder=""
         value={scores}
         onChange={(e) => setScores(e.target.value)}
       />
       <div className="btn-container">
        <button className="btn">Submit</button>
      </div>
    </form>
    
    </div>
  );
}