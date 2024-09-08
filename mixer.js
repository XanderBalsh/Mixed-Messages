// Below I will store message components.
const messages = ["You shall find ", "You shall not find ", "What you seek is ", "Consider... "];
const messages2 = ["Mr Monkey is not what you expect.", "the answers at the bottom of a bottle.", "more questions than answers.", "the famous Ginge."];

// Below is a function that randomly picks one of each messages and combines them.

const messageMaker = () => {
    let opt1 = messages[Math.floor(Math.random() * 3)];
    console.log(opt1);
    let opt2 = messages2[Math.floor(Math.random() * 3)];
    console.log(opt2);
    let prophecy = opt1 + opt2;
    
    return prophecy;
};

console.log(messageMaker());

