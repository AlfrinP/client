import Faculty from "./components/Dashboard/Faculty";
import Student from "./components/Dashboard/Student";
import Login from "./components/Login/Login";
import ViewCertificate from "./components/Dashboard/ViewCertificate";
function App() {
  return (
    <>
      <Login />
      <Student/>
      <Faculty />
      <ViewCertificate/>
    </>
  );
}

export default App;
