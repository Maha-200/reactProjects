
import { Link} from "react-router-dom";
import { useEffect } from "react";
import DashBoard from "./dashboard";
function Navbar(){
  useEffect(()=>{
  const data = [

    {noofdoc:"1",name:"AAA", patient:"ROR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"2",name:"BBB", patient:"RAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"3",name:"CCC", patient:"VAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"4",name:"DDD", patient:"UAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"5",name:"DDD", patient:"UAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"6",name:"DDD", patient:"UAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"7",name:"DDD", patient:"UAR", uploadedby:"opop", uploadedon:"jojojml"},
    {noofdoc:"8",name:"DDD", patient:"UAR", uploadedby:"opop", uploadedon:"jojojml"},


  ]
    sessionStorage.setItem('data',JSON.stringify(data));
  });

    
    return (
      
        <>
      <nav className="navbar navbar-expand-lg navbar-light color">
  <div className="container-fluid ">
    <h3>Home</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse color" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Medical Reports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/">Lab Results</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">prescriptions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">consent forms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/">others</Link>
        </li>
     </ul>
      <form className="d-flex wid">
        <input className="form-control me-2" type="search" placeholder="search by document name,patient name" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  {/* <div className="container-fluid tab">
          
           <div className="row">
           {data?.map((value)=>(
            <div className="col-md-3">
            <h1>{value.name}</h1>
            </div>
          ))}</div> 
        </div> */}
        <DashBoard/>
</>

 );
}
export default Navbar;