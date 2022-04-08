import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { CoinProps } from '../CoinsList/CoinProps';
const CoinDisplayPage = () => {
  const [coin, setCoin] = useState<CoinProps | undefined>();
  const { id }: { id: string } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.coinstats.app/public/v1/coins/${id}`)
      .then((response) => {
        setCoin(response.data.coin);
      });
  }, [id]);

  return (
    <>
      <div>
        <div className="detail">
          <img src={coin && coin.icon} alt="icon" height={30} width={30} />
          <h1 className="coin-head">{coin && coin.name}</h1>
        </div>
      </div>
    </>
  );
};

export default CoinDisplayPage;
