const box = document.querySelectorAll(".box");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const hours = document.querySelectorAll(".hour");
const previous = document.querySelectorAll(".previous");

 
daily.addEventListener("click", () => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < hours.length; i++) {
                hours[i].innerHTML = json[i].timeframes.daily.current + "hrs";
                previous[i].innerHTML = "Last day - " + json[i].timeframes.daily.previous + " hrs";
            }
        })
})



weekly.addEventListener("click", () => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < hours.length; i++) {
                hours[i].innerHTML = json[i].timeframes.weekly.current + "hrs";
                previous[i].innerHTML = "Last week - " + json[i].timeframes.weekly.previous + " hrs";
            }
        })
})

monthly.addEventListener("click", () => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < hours.length; i++) {
                hours[i].innerHTML = json[i].timeframes.monthly.current + "hrs";
                previous[i].innerHTML = "Last month - " + json[i].timeframes.monthly.previous + " hrs";
            }
        })
})
