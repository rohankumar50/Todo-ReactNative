const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthNames = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const d = new Date();
const todaysDay = weekday[d.getDay()];
const date =
  monthNames[d.getMonth()] + ' ' + d.getDate() + ',' + d.getFullYear();

export {todaysDay, date};
