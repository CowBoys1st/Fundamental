// console.log("Task 1")
// setTimeout(() => console.log("Task 2"), 3000)
// console.log("Task 3")

// const tryPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false
//         if (success) {
//             resolve("Success")
//         } else {
//             reject("Error")
//         }
//     }, 2000)
// })

//  async await
// const myFunc = async () => {
//     console.log("Task 1")
//     await tryPromise
//         .then((res) => console.log (res))
//         .catch((err) => console.log(err))
//         .finally(() => console.log("Finally done"))
//     console.log("Task 2")
// }

// myFunc()
// try catch
// async function myFunc2() {
//     try{
//         const res = await tryPromise
//         console.log(res)
//         console.log("Hello Wolrd")
//     } catch(err) {
//         console.log(err)
//     }
// }

// myFunc2()

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response.ok == false) throw "error fetch data"
        const users = await response.json()
        console.log(users)
    } catch (err) {
        console.log(err)
    }
}

fetchData()

module.export = { fetchData } 





