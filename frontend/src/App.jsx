import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from './pages/UserRegister/UserRegister';
import UserLogin from './pages/UserLogin/UserLogin';
import UserCursos from './pages/UserCursosHomepage/UserCursos';

function App() {

return (
	<BrowserRouter>
		<Routes>
			<Route path='/cadastro' element={<UserRegister />} />
			<Route path='/login' element={<UserLogin />} />
			<Route path='/cursos' element={<UserCursos />} />
		</Routes>
	</BrowserRouter>
)}

export default App
