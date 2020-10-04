import React from "react";
import axios from "axios";

async function getUserIp() {
  const response = await axios.get(`https://api.ipify.org?format=json`);

  const ip = response.data?.ip;

  return ip;
}

function Stalker() {
  React.useEffect(() => {
    const getCurrentUserIp = async () => await getUserIp();

    getCurrentUserIp();
  }, []);
  return <div></div>;
}

export default Stalker;
