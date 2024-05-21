import { Link } from "react-router-dom";
import "./styles.css";
export default function Login({result: resultState,setResult}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
  };

 

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={resultState.email}
            onChange={(e) =>setResult((draft)=>{
                draft.email = e.target.value
            })}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={resultState.password}
            onChange={(e) =>setResult((draft)=>{
                draft.password = e.target.value 
            })}
          />
        </div>
        <div className="form__controls">
          <button className="button">Login</button>
        </div>
        <Link to="/SignUp">SignUp</Link>
      </form>
    </div>
  );
}
