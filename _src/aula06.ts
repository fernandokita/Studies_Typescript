// Working about Object's concept
let employer : Object = {
    name : "Marshall",
    age : 35,
    totalSales : 2000,
    saudacao:(name:string)=>{console.log("Hi, my name is"+ name + "How can I help you ?")},
    login:(user:string,password:string)=>{
        let login:boolean = false
        if(user === user && password === password){
            login = true
        }
        login = false
    } // class 07. Exploring function's concept..
}
console.log(employer)

// Exploring the enum's concept jointly about Object's concept
enum goal{
    red = "didn't reach goal",
    green = "reach goal"
}
console.log("Sales below 2000" + goal.red + "||" +"Above 2000" + goal.green)

//-----------------
const saleCalculate = (totalSales:number)=>{
    return totalSales*0.07
}

// -----------
enum weekDay{
    sunday = 0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6
}

console.log(weekDay[6] + "and" + weekDay[0] + "We don't work. " + "Until" + weekDay[5] + "everyone must reachs goal about week.")
saleCalculate(2000)
console.log(`Sale total by employer ${saleCalculate(2000)}`)


