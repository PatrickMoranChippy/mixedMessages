//Start of MixedMessages Project.

let quoteStructure = [{}, {}, {}];                  //Initialise array of three empty objects.
let inputIndex = Math.floor(Math.random() * 3);     //Initialise random index number between 0 and 2 (inclusive).

//TEST PURPOSES: DELETE LATER
//console.log(inputIndex);

quoteStructure[0] = {
    _structure: "1 to 2 each 3 your 4.",
    _firstSigWord: ["Try", "Strive", "Endeavor"],
    _secondSigWord: ["make", "create", "envision"],
    _thirdSigWord: ["day", "week", "project"],
    _forthSigWord: ["masterpiece", "magnum opus", "piece de resistance"]
};

quoteStructure[1] = {
    _structure: "There 1 two ways of 2 light, to be the 3, or the 4 that reflects it.",
    _firstSigWord: ["are", "exists", "happens to be"],
    _secondSigWord: ["spreading", "illuminating", "sharing"],
    _thirdSigWord: ["candle", "torch", "fire"],
    _forthSigWord: ["mirror", "disco ball", "surface"]
};

quoteStructure[2] = {
    _structure: "No 1 2, no 3 4.",
    _firstSigWord: ["great ", "unrelenting ", "motivating "],
    _secondSigWord: ["pressure", "hardship", "adversity"],
    _thirdSigWord: ["beautiful ", "breathtaking ", "stunning "],
    _forthSigWord: ["diamonds", "outcome", "result"]
};

const generateMessage = index => {
    let arrayToPrint = [];      //Empty array for randomised message.
    let stringToPrint = [];     //Empty array for future joined string.

    for (let i = 0; i < (quoteStructure[index]._structure).length; i++){
        if (quoteStructure[index]._structure[i] == 1){
            arrayToPrint.push(quoteStructure[index]._firstSigWord[Math.floor(Math.random() * 3)])
        }
        else if (quoteStructure[index]._structure[i] == 2){
            arrayToPrint.push(quoteStructure[index]._secondSigWord[Math.floor(Math.random() * 3)])
        }
        else if (quoteStructure[index]._structure[i] == 3){
            arrayToPrint.push(quoteStructure[index]._thirdSigWord[Math.floor(Math.random() * 3)])
        }
        else if (quoteStructure[index]._structure[i] == 4){
            arrayToPrint.push(quoteStructure[index]._forthSigWord[Math.floor(Math.random() * 3)])
        }
        else {
            arrayToPrint.push(quoteStructure[index]._structure[i]);
        }
    }

    stringToPrint = arrayToPrint.join("");      //Joins elements of the array to a single string.
    
    console.log(stringToPrint);                 //Prints string.
};

generateMessage(inputIndex);                    //Function call.