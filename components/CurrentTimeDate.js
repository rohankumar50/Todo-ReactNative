
const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const monthNames = ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE",
    "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
];


const d = new Date();
const todaysDay = weekday[d.getDay()];
const date = monthNames[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear()



export { todaysDay, date };

