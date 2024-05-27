const curDate =document.getElementById("date");
let weatherCon= document.getElementById("weathercon");

const tempStatus = "clouds";

const getCurrentDay = ()=>{
    var weekday= new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    // console.log(weekday)

    let currentDay =new Date();
    let day = weekday[currentDay.getDay()];
    return day;
}
// getCurrentDay();

const getCurrentTime = ()=>{
    var months = ["jan","feb","mar","apr","may","jun","july",
    "jul","aug","sep","oct","nov","dec"];
    var currentTime = new Date();
    var date = currentTime.getDate();
    var month = months[currentTime.getMonth() + 1];
    var year = currentTime.getFullYear();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    let period = "AM";
    if(hours>=12){
        period ="PM";
        if(hours>12) {
            hours -= 12;
        }
    } 
    if(minutes < 10){
        minutes =`0${minutes}`;
    }

    let fulldate = `${month} ${date} ${year} | ${hours}:${minutes}${period}`;
    return fulldate;

    // console.log(`${hours}:${minutes}${period}`);
    // console.log(`${month} ${date} ${year}`);
}

curDate.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`;
