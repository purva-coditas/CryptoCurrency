//Formators to add commas and currency to the columns
export function currencyFormatter(params: any): string {
  return '£' + formatNumber(params.value);
}

function formatNumber(number: number) {
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// price formattor

export function priceFormattor(params: any) {
  return params.value >= 0 ? 'price-green' : 'price-red';
}
