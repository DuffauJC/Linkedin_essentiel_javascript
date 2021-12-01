setTimeout(() => {
    console.log('salut à la traine')
}, 5000)

let interval = setInterval(() => {
    console.log('salut à la traine')
}, 1000)

setTimeout(() => {
    clearInterval(interval)
},5500)