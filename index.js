document.addEventListener("DOMContentLoaded" , (event => {
    let jokeUl = document.querySelector('ul')


    fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
    return response.json()
    }).then (random_ten => {
        debugger
        random_ten = jokeUl
        let jokeCards = document.createElement('li')
        jokeCards = ""

    })}))


    
//     })



// document.addEventListener("DOMContentLoaded", (event) => {
//     let jokeUL = document.querySelector('ul')

//     fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
//         return response.json()
//         }).then (random_ten => {
//         return random_ten = jokeUL.textContent
//         }).then ((random_ten => {
//         console.log(random_ten[1])
//         }))

//         document.createElement('li')
//     })
// })

    // button.addEventListener("click", (event)=> {
    //     event.preventDefault()

    //         fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
    //         return response.json()
    //         }).then (random_ten => {
    //         return random_ten
    //         }).then ((random_ten => {
    //         console.log(random_ten)
    //         }))

    //             console.log(joke)


    //             }
     
    //         )})

        //    fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
        //     return response.json()
        //     }).then (response => {
        //         let jokeSum = response

        //         for (joke in jokeSum) {
        //             let setup = joke.setup
        //             let punchline = joke.punchline
        //             jokeSum[setup] = punchline
        //         }
