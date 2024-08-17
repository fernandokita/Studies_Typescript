// Working about Object's concept
var employer = {
    name: "Marshall",
    age: 35,
    totalSales: 2000,
    saudacao: function (name) { console.log("Hi, my name is" + name + "How can I help you ?"); }
};
console.log(employer);
// Exploring the enum's concept jointly about Object's concept
var goal;
(function (goal) {
    goal["red"] = "didn't reach goal";
    goal["green"] = "reach goal";
})(goal || (goal = {}));
console.log("Sales below 2000" + goal.red + "||" + "Above 2000" + goal.green);
// -----------
var weekDay;
(function (weekDay) {
    weekDay[weekDay["sunday"] = 0] = "sunday";
    weekDay[weekDay["monday"] = 1] = "monday";
    weekDay[weekDay["tuesday"] = 2] = "tuesday";
    weekDay[weekDay["wednesday"] = 3] = "wednesday";
    weekDay[weekDay["thursday"] = 4] = "thursday";
    weekDay[weekDay["friday"] = 5] = "friday";
    weekDay[weekDay["saturday"] = 6] = "saturday";
})(weekDay || (weekDay = {}));
console.log(weekDay[6] + "and" + weekDay[0] + "We don't work. " + "Until" + weekDay[5] + "everyone must reachs goal about week.");
