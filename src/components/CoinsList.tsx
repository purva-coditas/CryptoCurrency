import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CoinProps } from './CoinProps';

const CoinsList: React.FC = () => {
  const [coins, setCoins] = useState<CoinProps[] | undefined>();

  useEffect(() => {
    axios
      .get('https://api.coinstats.app/public/v1/coins?skip=0&limit=50')
      .then((response) => {
        setCoins(response.data.coins);
      });
  }, []);

  const columnDefs = [
    { field: 'rank', maxWidth: 80 },
    { field: 'name' },
    { field: 'symbol', maxWidth: 100 },
    { field: 'marketCap', sortable: true },
    { field: 'price', sortable: true },
    { field: 'volume', sortable: true },
    {
      headerName: '% 1h',
      field: 'priceChange1h',
      maxWidth: 80,
      sortable: true,
    },
    {
      headerName: '% 24h',
      field: 'priceChange1d',
      maxWidth: 80,
      sortable: true,
    },
    {
      headerName: '% 7d',
      field: 'priceChange1w',
      maxWidth: 80,
      sortable: true,
    },
  ];

  return (
    <>
      <h1>Coins List</h1>
      <div className="ag-theme-alpine" style={{ height: 900 }}>
        <AgGridReact rowData={coins} columnDefs={columnDefs} />
      </div>
    </>
  );
};

export default CoinsList;
