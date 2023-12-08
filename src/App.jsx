import Faculty from "./components/Dashboard/Faculty";
import Student from "./components/Dashboard/Student";
import Login from "./components/Login/Login";
import Print from "./components/Dashboard/Print";
function App() {
  return (
    <>
      <Login />
      <Student/>
      <Faculty />
      {/* <Print/> */}
    </>
  );
}

export default App;
