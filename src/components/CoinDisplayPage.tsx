import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const CoinDisplayPage = (props: any) => {
  const [coin, setCoin] = useState();
  const { id }: { id: string } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.coinstats.app/public/v1/coins/${id}`)
      .then((response) => {
        setCoin(response.data.coin);
      });
  }, []);

  return (
    <div>
      <h1>coindetails</h1>
      {/* <img src={props.coin.icon} alt="something" /> */}
      {console.log(coin)}
    </div>
  );
};

export default CoinDisplayPage;
