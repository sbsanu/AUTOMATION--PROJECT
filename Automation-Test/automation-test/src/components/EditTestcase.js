import React from "react";

function EditTestcase(props) {
    
  
    return (
      <div className="edittestcase">
        <table>
          <thead>
            <tr>
              <th> Title </th>
              <th>Description</th>
              <th>Test status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.title}</td>
              <td> {props.description} </td>
              <td> {props.status} </td>
            </tr>
          </tbody>
        </table>

      
      </div>
    );
  }
  
  export default EditTestcase;