const padZero = num => `0${num}`.slice(-2);

export default {
  formatCurrency: currency => Number(currency).toLocaleString(),
  formatDate: (date) => {
    const myDate = new Date(date);
    const myDateString = `${padZero(myDate.getDate())}-${padZero(myDate.getMonth() + 1)}-${myDate.getFullYear()}`;
    return myDateString;
  },
};
