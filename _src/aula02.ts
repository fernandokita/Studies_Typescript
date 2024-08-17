class Curso{
    channel 
    course
    constructor(channel:string,course:string){
        this.channel = channel
        this.course = course
    }
    let c1 = new Curso("CFBCourse","Typescript")

    console.log(c1.channel)
    console.log(c1.course)
}