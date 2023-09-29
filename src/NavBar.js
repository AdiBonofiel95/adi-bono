import TaskList from "./TaskList";
import EmptyPage from "./EmptyPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function NavBar(){
    return(
        <BrowserRouter>
        <nav className='navBar' style={{display:'flex', gap:4}}>
          <Link to="/" >Task List</Link>
          <Link to="/empty" >Empty Page</Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/empty' element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default NavBar;