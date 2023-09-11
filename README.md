# CALENDAR

A simple web-based calendar application users can select a year and a month, and the application will display a calendar for that month.
Additionally, users can highlight a specific day on the calendar by entering a day number and clicking the "Enter" button.

const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const currentMonth = document.getElementById("current-month");
const calendarBody = document.getElementById("calendar-body");
const dayInput = document.getElementById("day-input");
const highlightButton = document.getElementById("highlight-button");
These lines retrieve references to various HTML elements using their id attributes. These elements are essential for interacting with the web page's content.

let selectedYear;
let selectedMonth;
These variables are declared outside of any function and will be used to store the selected year and month, which will be updated by user interactions.

yearDropdown Function: function provides the year dropdown  with a range of years from 1900 to 2098.
highlightDay Function:This function is called when the user clicks the "Enter" button to highlight a specific day on the calendar.
It retrieves the selected day from the dayInput element and ensures that it is a valid day between 1 and 31.

yearSelect.addEventListener("click" , calendar);
monthSelect.addEventListener("click", calendar);
highlightButton.addEventListener("click", highlightDay);
These event listeners are attached to the year dropdown, month dropdown, and the "Enter" button.
