import Faculty from "./components/Dashboard/Faculty";
import Student from "./components/Dashboard/Student";
import Login from "./components/Login/Login";
import CheckCertificate from "./components/Dashboard/CheckCertificate";

function App() {
  return (
    <>
      <Login />
      <Student/>
      <Faculty />
      <CheckCertificate/>
    </>
  );
}

export default App;
