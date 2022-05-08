import React, {useState} from "react";
import CreateTestcase from "./CreateTestcase";
import EdittTestcase from "./EditTestcase"
import Header from "./Header";


function Testcase() {

  const [testcases, setTestcases] = useState([]);

  function addcase(newTestcase) {
    setTestcases((prevNotes) => {
      return [...prevNotes, newTestcase];
    });
  }
  return (
    <div>
    <Header/>
    <CreateTestcase onAdd={addcase}/>
    {testcases.map((caseItem, index) => {
        return (
          <EdittTestcase
            key={index}
            title={caseItem.title}
            description={caseItem.description}
            status= {caseItem.status}
          />
        );
      })}
    </div>
  );
}

export default Testcase;
