import React from "react";
import './App.css';
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response)
  console.log(response.xt.du)
}

const style ={
  marginTop: '30px'
}

function App() {
  return (
    <div className="App" style={style}>
      <GoogleLogin
      clientId="yourKey"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      
      />
    </div>
  );
}

export default App;
