// import { useState } from 'react';
// import accountTypes from './AccountTypes';
import { useState } from 'react';
import DarkModeButton from './DarkModeButton';
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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div style={{display:"flex", flexDirection: "row", gap: "10px"}}>
        <h1>Task List</h1>
        <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        <h2>{darkMode ? "Dark mode on" : "Light mode on"}</h2>
      </div>
      <TaskList/>

    </div>
  );
}

export default App;
