import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setIsLoggedIn(true);
      setUserData(response);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          {!isLoggedIn ? (
            <>
              <h3>Login with Facebook</h3>
              <FacebookLogin
                appId="516518647986597"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            </>
          ) : (
            <div>
              <h3>Welcome, {userData.name}!</h3>
              <img src={userData.picture.data.url} alt="Profile" />
              <p>Email: {userData.email}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
