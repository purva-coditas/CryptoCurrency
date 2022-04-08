import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import { CoinProps } from '../CoinsList/CoinProps';
import axios from 'axios';
const CoinDisplayPage = (props: any) => {
  const [coin, setCoin] = useState<CoinProps | undefined>();
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
      <h1>coindetails Page</h1>
      {console.log(coin)}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link>crypto</Link>
        <Link>coin</Link>
        <Link>{coin && coin.name}</Link>
      </Breadcrumbs>
      <Grid container>
        <Grid item md={2}>
          <span>
            <img src={coin && coin.icon} alt="something" />
          </span>
          <span> {coin && coin.name}</span>
        </Grid>
        <Grid item md={10}>
          <div>
            <span>{coin && coin.name}</span> Price (
            <span>{coin && coin.symbol}</span>)
          </div>
          <div>
            <h3>${coin && coin.price}</h3>
          </div>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Paper elevation={2}>
                <div>
                  <span>Market Cap </span>
                  <span>
                    <InfoTwoToneIcon fontSize="small" />
                  </span>
                </div>
                <div>${coin && coin.marketCap}</div>
              </Paper>
            </Grid>

            <Grid item md={3}>
              <Paper elevation={3}>
                Fully Diluted Market Cap <InfoTwoToneIcon fontSize="small" />
              </Paper>
            </Grid>

            <Grid item md={3}>
              <Paper>
                <Grid container>
                  <Grid item>
                    <div>
                      Volume 24h <InfoTwoToneIcon fontSize="small" />
                    </div>
                    <div>${coin && coin.volume}</div>
                  </Grid>
                  <Grid item>
                    <div>Volume/Market Cap</div>
                    <div>${coin && coin.volume}</div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper>
                Curculating Supply <InfoTwoToneIcon fontSize="small" />
                {/* {coin && coin.totalSupply + coin && coin.availableSupply} */}
                <Grid container>
                  <Grid item md={6}>
                    Max Supply
                    <InfoTwoToneIcon fontSize="small" />
                  </Grid>
                  <Grid item md={6}>
                    {coin && coin.totalSupply}
                  </Grid>
                  <Grid item md={6}>
                    Total Supply
                    <InfoTwoToneIcon fontSize="small" />
                  </Grid>
                  <Grid item md={6}>
                    {coin && coin.totalSupply}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoinDisplayPage;
