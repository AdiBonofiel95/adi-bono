import { useState } from 'react';
import accountTypes from './AccountTypes';

function App() {
  const [accountType, setAccountType] = useState(accountTypes.Manual);
  
  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  }

  const form = document.getElementById('frm');
    if (form){
    form.addEventListener('submit', function(event) {
      event.preventDefault();


    const formData = new FormData(form);


    const formDataJSON = {};

    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    console.log(formDataJSON);
  });
}

  return (
    <div className="App">
      <select onChange={handleAccountTypeChange}>
        <option value={accountTypes.Manual}>Manual</option>
        <option value={accountTypes.Advanced}>Advanced</option>
      </select>
      <form id='frm'>
        <p>User Name: <input type='text' id='user' name='user' placeholder='name@example.com' /></p>
        <p>Password: <input type='password' id='pass' name='pass' placeholder='Required'/></p>
        <p>Server Address: <input type='text' id='addr' name='addr' placeholder='example.com'/></p>
        { accountType === accountTypes.Advanced && 
        (<p>Server Path: <input type='text' id='path' name='path' placeholder='/calendars/user'/></p>)
        }
        { accountType === accountTypes.Advanced && 
          (<p>Port: <input type='text' id='port' name='port' /> <input type='checkbox' id='ssl' name='ssl'/>Use SSL</p>)
        }
        <button type="submit" id='submit' name='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
