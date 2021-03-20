var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]

    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknow",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop){
    // Only change code below this line
    
    var contact = contacts.find(c => c.firstName == name);
    
    if(!contact) {
      return "No such contact";
    }
    
    if(!contact.hasOwnProperty(prop)) {
      return "No such property";
    }
    
    return contact[prop];
    // Only change code above this line
}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;