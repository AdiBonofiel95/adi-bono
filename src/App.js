// import { useState } from 'react';
// import accountTypes from './AccountTypes';
import TaskList from './TaskList';

function App() {
  // const [accountType, setAccountType] = useState(accountTypes.Manual);

  // const handleAccountTypeChange = (event) => {
  //   setAccountType(event.target.value);
  // }

//   const form = document.getElementById('frm');
//     if (form){
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();


//     const formData = new FormData(form);


//     const formDataJSON = {};

//     formData.forEach((value, key) => {
//       formDataJSON[key] = value;
//     });

//     console.log(formDataJSON);
//   });
// }

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskList/>

    </div>
  );
}

export default App;
