//==================Exercise #1 ==========//

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_words = dog_string.split(' ')
console.log(dog_words)
dog_words = dog_words.map(element => {
    return element.toLowerCase()
})

const lower = dog_names.map(element => {
    return element.toLowerCase()
})

console.log(lower)
function findWords(dog_words, lower){
    for (i = 0; i < dog_words.length; i++){
        if(dog_words[i] in lower){
            return "Match"
        }
    return "No Matches" 
    }
}
console.log(findWords(dog_words, lower))

//I dont know why this isnt working


//============Exercise #2 ============//


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr))

