const coding = ["js", "cpp", "swift", "java", "python"]

coding.forEach( function (item) {
    console.log(item);
}  )

// coding.forEach( (anyvalue)=> {

//     console.log(anyvalue);
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

coding.forEach((item, index, arr) => {

    // console.log(item, index, arr);
})

const Mycoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "Py"
    }
]

Mycoding.forEach ( (item)=> {
    console.log(item.languageName);
})