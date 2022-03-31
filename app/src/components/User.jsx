import React from "react";
import { Card, Container, Box, Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import pin from "./pin.png";
import Map from './Map'

function User() {
  const location = useLocation();
  const user = location.state;
  
  return (
    <>
      <Grid item xs={12} style={{ overflow: "hidden" }}>
        <Box
          item
          xs={12}
          style={{ maxWidth: "500px", margin: "auto", margintop: "50px" }}
        >
          <Box
            item
            style={{ backgroundColor: "rgb(125 141 239 / 88%) !important" }}
          >
            <h2 style={{ textAlign: "center" }}>User Details</h2>
          </Box>
          <Box display="flex" justifyContent="center" height="100vh">
            <Card
              variant="outlined"
              style={{ width: "100%", height: "500px", border: "none" }}
            >
              <Box
                style={{
                  boxShadow: "10px 5px 8px gray",
                  border: "1px solid black",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    height: "300px",
                    display: "flex",
                    backgroundColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={user.picture.large}
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    padding: "10px",
                    borderRadius: "15px 15px 0px 0px",
                    margin: "auto",
                    textAlign: "center",
                    backgroundColor: "rgb(125 141 239 / 88%)",
                  }}
                >
                  <p>
                    <strong>UserName: </strong> {user.name.first}{" "}
                    {user.name.last}
                  </p>
                  <p>
                    <strong>Email: </strong> {user.email}
                  </p>
                  <p>
                    <strong>Gander:</strong>
                    {user.gender}
                  </p>
                  <p> {user.age}</p>
                  <p>
                    <strong>Login: </strong> {user.login.username}
                  </p>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      
        
        <Map zoom={11} lat={parseFloat(user.location.coordinates.latitude)} long={parseFloat(user.location.coordinates.longitude)}/>



      </Grid>
    </>
  );
}

export default User;
