import React from "react";
import { useState,useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";
import { Modal} from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
function DashBoard(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        setData(JSON.parse(sessionStorage.getItem("data")))
  },[])
  const Navigate=useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const[noofdoc,setNoofdoc]=useState("");
  const [name, setName] = useState("");
  const [patient, setPatient] = useState("");
  const [uploadedby, setUploadedby] = useState("");
  const [uploadedon, setUploadedon] = useState("");

      const data1={
      columns:[
          {label:"NoOfDocument",field:"noofdoc"},
          {label:"DocumentName",field:"name"},
          {label:"Patient",field:"patient"},
          {label:"UploadedBy",field:"uploadedby"},
          {label:"UploadedOn",field:"uploadedon"},
          {label:"Action",field:"action"},
   ],
      rows:data.map((value)=>{
          return{
            noofdoc:value.noofdoc,
             name:value.name,
             patient:value.patient,
             uploadedby:value.uploadedby,
             uploadedon:value.uploadedon,
            action:(<div className="row">
               <div className="col-md-6 tcolor">
              <button onClick={(e)=>handleView(value)}>View</button>
              </div>
              <div className="col-md-6 tcolor">
            <button onClick={(e)=>handleDelete(value)}>delete</button>
            </div>
            </div>)
          }
         
        })}
function handleView(value){
    setNoofdoc(value.noofdoc);
    setName(value.name);
    setPatient(value.patient);
    setUploadedby(value.uploadedby);
    setUploadedon(value.uploadedon);
    setShow(true);
         
}
// function handleDelete(value){
//   window.alert("Do you want to delete");
//   if(window.alert){
//     var row=data.findIndex((user)=>user.noofdoc===value.noofdoc)
//     data.splice(row,1)
//     setData(data);
//     sessionStorage.setItem('data',JSON.stringify(data));
//     Navigate('/')
// }
// }
function handleDelete(value){
  confirmAlert({
      title: 'Delete Field',
      message: 'Are you sure you want to delete this field.',
      buttons:[
        {
          label: 'Yes',
          onClick: (e) => data.map((user,i)=>{
          if(user.noofdoc===value.noofdoc){
            console.log(value.noofdoc);
            data.splice(i,1);
            sessionStorage.setItem('data',JSON.stringify(data));
            Navigate('/')
          }
        })
        },
        {
          label: 'No',
        }
      ]
    });
   }
return(
  <>
  <div className="container-fluid tab">
    <MDBDataTable striped bordered data={data1}/>
  </div>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>DETAILS</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="forms">
               
         <table className="tables">
         <tr>
            <td><label>Docno:</label></td>
             <td><input type="text"  value={noofdoc} onChange={(e) => setNoofdoc(e.target.value)} ></input></td>
          </tr> 
          <tr>
            <td><label>Name:</label></td>
             <td><input type="text"  value={name} onChange={(e) => setName(e.target.value)}></input></td>
          </tr> 

          <tr>
        <td><label> Patient:</label></td>
        <td><input type="text" value={patient} onChange={(e) => setPatient(e.target.value)}></input></td>
        </tr> 
        <tr>
        <td><label> UploadedBy:</label></td> 
        <td><input type="text" value={uploadedby} onChange={(e) => setUploadedby(e.target.value)}></input></td><br/> 
       </tr>
       <tr>

       <td><label> UploadedOn:</label></td> 
       <td><input type="text" value={uploadedon} onChange={(e) => setUploadedon(e.target.value)}></input></td> 
        </tr>
      
       </table>
    </form>

        </Modal.Body>
       
      </Modal>

        </>
    )
};
export default DashBoard;
