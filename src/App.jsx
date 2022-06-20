import { Route, Routes } from "react-router-dom";
import Dars from "./components/Dars";
import Gruhlar from "./components/Group";
import Hisob from "./components/Hisob/Hisob";
import Hisobotlar from "./components/Hisobotlar";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Students from "./components/Students";
import AddStudents from "./components/Students/AddStudents";
import Teacher from "./components/Teacher";
import AddTeacher from "./components/Teacher/AddTeacher";
import Umumiy from "./components/Umumiy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/students" element={<Students />} />
        <Route path="/hisob" element={<Hisob />} />
        <Route path="/group" element={<Gruhlar />} />
        <Route path="/" element={<Umumiy />} />
        <Route path="/jadval" element={<Dars />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hisobotlar" element={<Hisobotlar />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addstudents" element={<AddStudents />} />
      </Routes>
    </>
  );
}

export default App;
