export default {
  padZero: (num) => {
    return ('0' + num).slice(-2);
  },
  formatCurrency: (currency) => {
    return Number(currency).toLocaleString();
  },
  formatDate: function(date){
    const myDate = new Date(date);
    const myDateString = `${this.padZero(myDate.getDate())}-${this.padZero(myDate.getMonth()+1)}-${myDate.getFullYear()}`;
    return myDateString;
  },
};
