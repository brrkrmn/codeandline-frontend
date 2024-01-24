import React from 'react';
import loginService from "./services/login";

function App () {
  React.useEffect(() => {
    loginService.login().then(response => {
      console.log(response)
    })
  })
  return (
    <div>w
    </div>
  );
}

export default App;
