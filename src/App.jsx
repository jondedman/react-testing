import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        name="Jon"
        job="Junior Developer"
        birthdate="11/0976"
      />
    </>
  );
}

export default App;
