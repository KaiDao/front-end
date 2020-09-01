import React from "react";

function UserHome() {
return <p>{localStorage["jwtToken"]}</p>;
}

export default UserHome;
