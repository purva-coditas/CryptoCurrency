import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { CoinProps } from './CoinProps';
import columnDefs from './ColumnDef';

const CoinsList: React.FC = () => {
  const gridRef = useRef(null);
  const [coins, setCoins] = useState<CoinProps[] | undefined>();
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins').then((response) => {
      setCoins(response.data.coins);
    });
  }, []);

  return (
    <>
      <h1 className="table-head">Coins List</h1>
      <div className="ag-theme-alpine" style={{ height: 520 }}>
        <AgGridReact
          ref={gridRef}
          rowData={coins}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </>
  );
};

export default CoinsList;
