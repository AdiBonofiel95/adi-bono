// import { useState } from 'react';
// import accountTypes from './AccountTypes';
import NavBar from "./NavBar";

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
      <NavBar />
      {/* Still need to be done - save states in "Task List" so it saves the tasks once page switched */}
    </div>
  );
}

export default App;
