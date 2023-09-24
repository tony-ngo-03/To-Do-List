function getDayOfWeek(dayIndex){
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayOfWeek[dayIndex];
}

function getNameOfMonth(monthIndex){
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[monthIndex];
}

function setHeader(){
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = getNameOfMonth(date.getMonth());
    let currentYear = date.getFullYear();
    let currentNameOfDay = getDayOfWeek(date.getDay());
    let currentDate = `${currentNameOfDay}, ${currentMonth} ${currentDay}, ${currentYear}`;
    document.getElementById('date').innerHTML = currentDate;
}

document.addEventListener("DOMContentLoaded", function(){
    setHeader();
})
