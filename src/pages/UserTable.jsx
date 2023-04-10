import React, { useEffect,useState} from 'react'
import bookDataService from '../Services/BookServices'
import { Link } from 'react-router-dom'

function UserTable({getBookId}) {
  
  const[books ,setBooks]=useState([])
  useEffect(()=>{
   getBooks()
  },[])

 

  const getBooks = async()=>{
    const data = await bookDataService.getAllBook()
    console.log(data.docs)
    setBooks(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }
  
const deleteHandler=async(id)=>{
  await bookDataService.deleteBook(id)
  getBooks();
}
  
  
  return (
    <>
    <div className="user">
    <h3>BOOKED APOIMENT </h3> 
  </div>
  <div className="class-name">
    <h2>Check All Apoiment </h2>
    <table className="table">
      <tbody>
        <tr>
          <th>SR no </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Age</th>
          <th>Slot</th>
          <th>Date</th>
          
          <th>Message</th>
          <th>mobile no</th>
          <th>Action</th>
        </tr>
       
          {books.map((doc , index)=>{
            return(
              <tr key ={doc.id}>
              <td>{index+1}</td>
          <td>{doc.name}</td>
          <td>{doc.email}</td>
          <td>{doc.address}</td>
          <td>{doc.age}</td>
          <td>{doc.slot}</td>
          <td>{doc.date}</td>
          <td>{doc.message}</td>
          <td>{doc.phone}</td>
          <td className="btn1">
          <Link to='/edit'><button className="edit" onClick={(e) =>getBookId (doc.id)}>Edit</button></Link>
            <button className="delete" onClick={(e)=>deleteHandler(doc.id)}>Delete</button>
           
          </td>
          </tr>

          )
           })} 
          
       
      </tbody>
    </table>
  </div>
 
 </>
  
)
  }


export default UserTable