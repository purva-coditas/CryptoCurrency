import { AgGridReact } from "ag-grid-react";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CoinProps } from "./CoinProps";
import IconRenderer from "./IconRenderer";
import NameLinks from "./NameLinks";

const CoinsList: React.FC = () => {
  const gridRef = useRef(null);
  const [coins, setCoins] = useState<CoinProps[] | undefined>();
  useEffect(() => {
    axios
      .get(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR"
      )
      .then((response) => {
        setCoins(response.data.coins);
      });
  }, []);

  //Formators to add commas and currency to the columns
  function currencyFormatter(params: any): string {
    return "£" + formatNumber(params.value);
  }

  function formatNumber(number: number) {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // price formattor

  function priceFormattor(params: any) {
    return params.value >= 0 ? "price-green" : "price-red";
  }
  // columns in table;
  const columnDefs = [
    { field: "rank", maxWidth: 80 },
    {
      field: "icon",
      headerName: "",
      cellRenderer: IconRenderer,
      maxWidth: 40,
    },
    {
      field: "name",
      cellRenderer: NameLinks,

      // maxWidth: 500,
      valueGetter: "data.id",
    },
    { field: "symbol", maxWidth: 100 },
    {
      field: "marketCap",
      sortable: true,
      valueFormatter: currencyFormatter,
    },
    {
      field: "price",
      sortable: true,
      valueFormatter: currencyFormatter,
    },
    {
      field: "volume",
      sortable: true,
      cellClass: ["volume-column-color"],
      valueFormatter: currencyFormatter,
    },
    {
      headerName: "% 1h",
      field: "priceChange1h",
      maxWidth: 80,
      sortable: true,
      cellClass: priceFormattor,
    },
    {
      headerName: "% 24h",
      field: "priceChange1d",
      maxWidth: 80,
      sortable: true,
      cellClass: priceFormattor,
    },
    {
      headerName: "% 7d",
      field: "priceChange1w",
      maxWidth: 80,
      sortable: true,
      cellClass: priceFormattor,
    },
  ];

  return (
    <>
      <h1>Coins List</h1>
      <div className="ag-theme-alpine" style={{ height: 900 }}>
        <AgGridReact ref={gridRef} rowData={coins} columnDefs={columnDefs} />
      </div>
    </>
  );
};

export default CoinsList;
