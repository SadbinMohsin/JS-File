let course = {
    title: "Learn CSS Grid for free",
    lesson: 16,
    Creator: "Dani Danials",
    Length: 43,
    level: 2,
    isFree: true,
    tags: ["Html", "Css"],
    Type:"Hardcore"
}
for (let i in course) {
    console.log(course[i]);
}
//for single outptut
console.log(course.tags)