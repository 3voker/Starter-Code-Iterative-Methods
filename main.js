// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


//Kata 1a (Arrow Function)                                               //Kata 1b Functional Expression
const isActiveFunction = users.filter(user => user.isActive === true)
 //|| users.filter(function (user) {return user.isActive === true;})

//Kata 2a (Arrow Function)                         //Kata 2b  Functional Expression
const showEmail = users.map(user => user.email) || users.map(function (user) {return user.email;})

//Kata 3a (Arrow Function)                                            //Kata 3b  Functional Expression
const showCompany = users.some(user => user.company === "OVATION") || users.some(function (user) {return user.company;})
 
//Using || for functions for find can create buggy issues. 
//Kata 4a (Arrow Function).find                          //Kata 4b  Functional Expression
const showAge = users.find(user => user.age === 38) //|| users.find(function (user) {return user.age;})

//Kata 5a (Arrow Function) .filter .find                                                     //Kata 5b  Functional Expression
const toUsersOver38 = user => user.age >= 38
const active = user => user.isActive === true
const showGenXisActive = users
    .filter(toUsersOver38)
    .find(active)


new User('Bobby', 'bobbykins@hotmail.com')


//Kata 6a (Arrow Function) .filter .map
const showBalance = users.filter(user => users.company === "ZENCO").map(users.values === "balance")
//Kata 6b

//Kata 7a (Arrow Function) .filler .includes .map
const fugginAge = users.filter(user => users.age).includes("fugiat")  
//Kata 7b