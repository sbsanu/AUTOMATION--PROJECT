import React, {useState} from "react";

function CreateTestcase(props){
    const [testcase, setTestcase] = useState({
        title: "",
        description: "",
        status: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setTestcase((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitTestcase(event) {
        props.onAdd(testcase);
        setTestcase({
          title: "",
          description: "",
          status: ""
        });
        event.preventDefault();
      }
    
      return (
        <div>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
            <input
              name="title"
              onChange={handleChange}
              value={testcase.title}
              placeholder="Title"
            />
            </td>
            <td>
            <textarea
              className="text-type"
              name="description"
              onChange={handleChange}
              value={testcase.description}
              placeholder="Test Command"
              rows="3"
            />
            </td>
            <td>
            <input name="status" onChange={handleChange} value = {testcase.status} placeholder="Pass or Fail"></input>
            </td>
            <td>
            <button onClick={submitTestcase}>Add</button>
            </td>
            </tr>
            </tbody>
            </table>
          </form>
        </div>
      );
}


export default CreateTestcase;