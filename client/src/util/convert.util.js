function dateTimeToDate(dateTime) {
  let dateObject = new Date(dateTime);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear();
  return day + '/' + month + '/' + year;
}

export { dateTimeToDate };
