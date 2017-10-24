export default {
  formatCurrency: (currency) => {
    return Number(currency).toLocaleString();
  },
  formatDate: (date) => {
    const myDate = new Date(date);
    const myDateString = `${padZero(myDate.getDate())}-${padZero(myDate.getMonth()+1))}-${myDate.getFullYear()}`;
    return myDateString;
  },
};
