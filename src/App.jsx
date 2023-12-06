import Faculty from "./components/Dashboard/Faculty";
import Student from "./components/Dashboard/Student";
import Login from "./components/Login/Login";
import ViewCertificate from "./components/Dashboard/ViewCertificate";
import Print from "./components/Dashboard/Print";
function App() {
  return (
    <>
      <Login />
      <Student/>
      <Faculty />
      <ViewCertificate/>
      <Print/>
    </>
  );
}

export default App;
