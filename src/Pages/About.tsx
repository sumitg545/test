import data from '../json/user.json';
import React, { useEffect, useState } from 'react'
 
function About() {
  const [users, setUser]=useState();
  function deleteUser(id:any) {
  alert(id)
  }
  return (
    <>
       <div>
        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>class</th>
            <th>roll no.</th>
          </thead>
          <tbody>
            {data.map((user) => (
             <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.class}</td>
              <td>{user.rollNumber}</td>
              <td><button className="btn btn-primary" type="button" 
                onClick={()=> deleteUser(user.id)}>Delete</button></td>
             </tr>
            ),[])}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;