import React, { useEffect, useState } from "react";
import "./CardUI.scss";
import LinkIcon from "@mui/icons-material/Link";
import IosShareIcon from "@mui/icons-material/IosShare";
import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CustomizedProgressBars from "./Progressbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CoinProps } from "../CoinsList/CoinProps";
import CoinsList from "../CoinsList";

const CoinDisplayPage = (props: any) => {
  const [coin, setCoin] = useState<CoinProps | undefined>();
  const { id }: { id: string } = useParams();

  const progress = Math.floor(
    (coin && coin.availableSupply / coin.totalSupply) * 100
  );

  useEffect(() => {
    axios
      .get(`https://api.coinstats.app/public/v1/coins/${id}`)
      .then((response) => {
        setCoin(response.data.coin);
      });
  }, []);

  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link>crypto</Link>
        <Link>coin</Link>
        <Link>{coin && coin.name}</Link>
      </Breadcrumbs>

      <Grid container style={{ margin: "20px" }}>
        <Grid item xs={3}>
          <span>
            <img
              src={coin && coin.icon}
              alt="coin Logo"
              height={30}
              width={30}
            />
          </span>
          <span
            style={{ marginLeft: "10px", fontSize: "30px", fontWeight: "600" }}
          >
            {coin && coin.name}
          </span>
          <span className={"symbolsummary"}>{coin && coin.symbol}</span>
        </Grid>
        <Grid item xs={9}>
          <div style={{ color: "rgb(169, 169, 169)" }}>
            <span>{coin && coin.name}</span>
            Price (<span>{coin && coin.symbol}</span>)
          </div>

          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            ${coin && coin.price}
          </span>
          <span className={"pricesummary"}>
            <ArrowDropDownIcon /> 0.70%
          </span>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <div>
              <span className={"ranksummary"}>Rank # {coin && coin.rank}</span>
              <br />
              <span className={"linksummary"}>
                <LinkIcon fontSize="small" /> {coin && coin.websiteUrl}
                <IosShareIcon fontSize="small" />
              </span>
            </div>
          </Grid>
          <Grid item xs={9}>
            <div
              style={{
                display: "flex",
                marginTop: "40px",
                borderTop: "2px solid #dee2e6",
              }}
            >
              <div className={"flexcard"}>
                <span className={"headings"}>
                  Market Cap{" "}
                  <InfoTwoToneIcon
                    style={{ verticalAlign: "middle" }}
                    fontSize="small"
                  />
                </span>

                <span className={"price"}>${coin && coin.marketCap}</span>
                <br />
                <div
                  className={
                    coin && coin.priceChange1w > 0
                      ? "marketpositive"
                      : "marketnegative"
                  }
                >
                  <div style={{ top: 10 }}>
                    {coin && coin.priceChange1w > 0 ? (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                    <span>{coin && coin.priceChange1w}%</span>
                  </div>
                </div>
              </div>
              <div className={"flexcard"}>
                <span className={"headings"}>
                  Fully Diluted Market Cap{" "}
                  <InfoTwoToneIcon
                    style={{ verticalAlign: "middle" }}
                    fontSize="small"
                  />
                </span>

                <span className={"price"}>
                  $
                  {coin &&
                    (coin && coin.availableSupply + coin.totalSupply) *
                      coin.price}
                </span>
                <br />
                <div
                  className={
                    coin && coin.priceChange1h > 0
                      ? "marketpositive"
                      : "marketnegative"
                  }
                >
                  <div style={{ top: 10 }}>
                    {coin && coin.priceChange1h > 0 ? (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                    <span>{coin && coin.priceChange1h}%</span>
                  </div>
                </div>
              </div>
              <div className={"flexcard"}>
                <span className={"headings"}>
                  Volume <span className={"symbolsummary"}>24h</span>{" "}
                  <InfoTwoToneIcon
                    style={{ verticalAlign: "middle" }}
                    fontSize="small"
                  />
                </span>

                <span className={"price"}>
                  ${coin && Math.floor(coin.volume)}
                </span>
                <div
                  className={
                    coin && coin.priceChange1d > 0
                      ? "marketpositive"
                      : "marketnegative"
                  }
                >
                  <div style={{ top: 10 }}>
                    {coin && coin.priceChange1d > 0 ? (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span style={{ verticalAlign: "middle" }}>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                    <span>{coin && coin.priceChange1d}%</span>
                  </div>
                </div>
                <span className={"headings"}>Volume/Market Cap</span>
                <br />
                <span className={"price"}>
                  ${coin && (coin.volume / coin.marketCap).toFixed(5)}
                </span>
              </div>

              <div
                className={"flexcard"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <span className={"headings"}>
                    Circulating Supply{" "}
                    <InfoTwoToneIcon
                      style={{ verticalAlign: "middle" }}
                      fontSize="small"
                    />
                  </span>

                  <br />
                  <span className={"price"}>
                    ${coin && Math.floor(coin.marketCap / coin.price)}
                  </span>
                  <span
                    style={{
                      textAlign: "right",
                      color: "grey",
                      marginLeft: "50px",
                    }}
                  >
                    {progress}%
                  </span>
                </div>
                <span style={{ margin: "20px 0" }}>
                  <CustomizedProgressBars value={progress} />
                </span>

                <div style={{ textAlign: "left", margin: "5px" }}>
                  <span className={"headings"}>
                    Max Supply{" "}
                    <InfoTwoToneIcon
                      style={{ verticalAlign: "middle" }}
                      fontSize="small"
                    />
                  </span>

                  <span
                    className={"price"}
                    style={{ marginLeft: "15px", textAlign: "left" }}
                  >
                    {Math.floor(
                      coin && coin.availableSupply + coin.totalSupply
                    )}
                  </span>
                  <br />
                  <span className={"headings"}>
                    Total Supply{" "}
                    <InfoTwoToneIcon
                      style={{ verticalAlign: "middle" }}
                      fontSize="small"
                    />
                  </span>

                  <span
                    className={"price"}
                    style={{ marginLeft: "15px", textAlign: "left" }}
                  >
                    {Math.floor(coin && coin.totalSupply)}
                  </span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoinDisplayPage;
