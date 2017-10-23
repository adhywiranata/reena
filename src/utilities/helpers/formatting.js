export default {
  formatCurrency: (currency) => {
	  return Number(currency).toLocaleString();
  },
  formatDate: (date) => {
    var myDate = new Date(date);
	var myDateString = (padZero(myDate.getDate()))+ '-' + (padZero(myDate.getMonth()+1))+ '-' +  myDate.getFullYear();
	return myDateString;
  },
};
