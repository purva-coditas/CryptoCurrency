import { currencyFormatter, priceFormattor } from './Formattor';
import IconRenderer from './IconRenderer';
import NameLinks from './NameLinks';

// columns in table;
const columnDefs = [
  { field: 'rank', maxWidth: 80 },
  {
    field: 'icon',
    headerName: '',
    cellRenderer: IconRenderer,
    maxWidth: 40,
  },
  {
    field: 'name',
    cellRenderer: NameLinks,
    valueGetter: 'data.id',
  },
  { field: 'symbol', maxWidth: 100 },
  {
    field: 'marketCap',
    sortable: true,
    valueFormatter: currencyFormatter,
  },
  {
    field: 'price',
    sortable: true,
    valueFormatter: currencyFormatter,
  },
  {
    field: 'volume',
    sortable: true,
    cellClass: ['volume-column-color'],
    valueFormatter: currencyFormatter,
  },
  {
    headerName: '% 1h',
    field: 'priceChange1h',
    maxWidth: 80,
    sortable: true,
    cellClass: priceFormattor,
  },
  {
    headerName: '% 24h',
    field: 'priceChange1d',
    maxWidth: 80,
    sortable: true,
    cellClass: priceFormattor,
  },
  {
    headerName: '% 7d',
    field: 'priceChange1w',
    maxWidth: 80,
    sortable: true,
    cellClass: priceFormattor,
  },
];

export default columnDefs;
