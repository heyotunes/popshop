import { useNavigate } from "react-router-dom"
import { db } from "../firebase-config";
import{ collection, onSnapshot} from 'firebase/firestore'
import { useEffect, useState } from "react";
import '../styles/user.styles.scss';
import logo from "../asset/logo.png"

const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
   setLoading(true);
   const unsub = onSnapshot(collection(db, "user"), (snapshot) => {
    let list:any = [];
    snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
 
    });
    setUser(list);
    setLoading(false)
   }, (error) => {
     console.log(error)
   }
   )
      return () => {
        unsub();
      }
    }, [])
    return (
        <div className="user-container">

        <div className="icon-container">
        <img className="icon" src={logo} alt=""></img>
        </div>  

        <div className="header">  
          <h1>
            Current<br/>
            Scores.
            </h1>
        </div>
        <table className="list-container">
        {user.sort((a:any,b:any) => b.scores - a.scores).map((item) => (
           <tr>
              <td className="first">{item['firstname']}</td>
              <td>{item['lastname']}</td>
              <td className="score">{item['scores']}</td>
            </tr>
        ))}
      
      </table>
         <div className="button-container">
         <button className="button" onClick={() => navigate("/add")}>Add Scores</button>
         </div>

       </div>
    
        
    )
}


export default UserList;