const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const currentMonth = document.getElementById("current-month");
const calendarBody = document.getElementById("calendar-body");
const dayInput = document.getElementById("day-input");
const highlightButton= document.getElementById("highlight-button");
// console.log(yearSelect)
let selectedYear;
let selectedMonth;

function yearDropdown() {
  const currentYear = new Date().getFullYear();
  for (let year = 1900; year < 2099; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
    if (year == currentYear) {
      option.selected = true;
    }
  }
}

function monthDropDown() {
  const currentMonth = new Date().getMonth();
  for (let month = 1; month <= 12; month++) {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = new Date(2000, month - 1, 1).toLocaleString(
      "default",
      { month: "long" }
    );
    monthSelect.appendChild(option);
    if (month - 1 === currentMonth) {
      option.selected = true;
    }
  }
}

function calendar() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value) - 1;

    const date = new Date(selectedYear, selectedMonth, 1);

    currentMonth.textContent = date.toLocaleString("default", { month: "long" }) + " " + selectedYear;

    let day = new Date(date);
    let html = "";

    while (day.getMonth() === selectedMonth) {
        html += `<tr>`;
        for (let i = 0; i < 7; i++) {
            if (day.getDay() === i) {
                const dayOfMonth = day.getDate();
                
                html += `<td>${dayOfMonth}</td>`;
                day.setDate(day.getDate() + 1);
            } else {
                html += `<td></td>`;
            }
        }
        html += `</tr>`;
    }

    calendarBody.innerHTML = html;
}


function highlightDay() {
    const selectedDay = parseInt(dayInput.value);

    if (selectedDay >= 1 && selectedDay <= 31) {
        const dayCells = document.querySelectorAll("#calendar-body td");
        let dayIndex = 0;
        dayCells.forEach((cell, index) => {
            if (cell.textContent !== "") {
                dayIndex++;
            if (dayIndex === selectedDay) {
                cell.style.backgroundColor = "green"; 
            } else {
                cell.style.backgroundColor = "";
            }
        }
        });
    } else {
        alert("Please enter a valid day between 1 and 31.");
    }
}


yearSelect.addEventListener("click" , calendar);
monthSelect.addEventListener("click", calendar);
highlightButton.addEventListener("click", highlightDay);
yearDropdown();
monthDropDown();
calendar();

