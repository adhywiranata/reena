export default {
  padZero: num => `0${num}`.slice(-2),
  formatCurrency: currency => Number(currency).toLocaleString(),
  formatDate: (date) => {
    const myDate = new Date(date);
    const myDateString = `${this.padZero(myDate.getDate())}-${this.padZero(myDate.getMonth() + 1)}-${myDate.getFullYear()}`;
    return myDateString;
  },
};
