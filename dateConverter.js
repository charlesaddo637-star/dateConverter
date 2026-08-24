let currentDate=new Date()
let currentDateFormat=`Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(date){
  let newD=date.toLocaleDateString();
  return `Formatted Date (MM/DD/YYYY): ${newD}`;
}
function formatDateLong(date){
  const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  }
  let newD=date.toLocaleDateString("en-US",options);
  return `Formatted Date (Month Day, Year): ${newD}`;
}
