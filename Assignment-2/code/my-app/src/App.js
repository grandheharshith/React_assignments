import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <center className="idcard">
    <img className="img" src={employee.profileImg} alt={employee.name}/>
    <div className="details">
      <h1> {employee.name}</h1>
      <h6> Location</h6>
      <h2>{employee.location}</h2>
      <h6> Blood Group</h6>
      <h2> {employee.bloodGroup}</h2>
      <h6> Age:</h6>
      <h2> {employee.age}</h2>

    </div>
  </center>
</div>
)
}



export default App;
