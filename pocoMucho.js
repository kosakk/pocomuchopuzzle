/* A solution to the "How many a POCO do you need to make a MUCHO" puzzle, as found on TheGuardian. */
/* link: https://www.theguardian.com/science/2020/jan/13/can-you-solve-it-the-poco-poco-puzzle */

createPocos = () => {
    let arr = new Array();
    for (let i = 1000; i < 10000; i++) {
        const j = i.toString();
        
        if (j[0] != j[1] && j[0] != j[2] && j[0] != j[3]) { 
        // e.g. in POCO => P != (1st) O && P != C && P != (2nd) O
            
            if (j[2] != [1] && j[2] != j[3]) {              
            // e.g. in POCO => C != (1st) O && C != (2nd) O
                
                if (j[1] == j[3]) {                         
                // e.g. in POCO => (1st) O == (2nd) O
                    
                    // If all above conditions are true, then push the number to array.
                    arr.push(parseInt(j));                  
                }
            }
        }
    }
    return arr;
}

createMuchos = (arr) => {
     let newArr = new Array();
     for (num of arr) {
            const newNum = num * 15;
            if (newNum.toString().length == 5) {
                newArr.push(parseInt(newNum));
            }
        }
    return newArr;
}

findFiveDigitMuchos = (arr) => {
    let sets = new Array();
    for (elem of arr) {
        const setElem = new Set(elem.toString());
        if (setElem.size == 5) {
            sets.push(Array.from(setElem).join(''));
        }
    }
    return sets;
}

findValidMuchos = (arr) => {
    let newArr = new Array();
    for (let el of arr) {
        newArr.push(el);
    }
    return newArr; 
}

arrIntToStr = (arr) => {
    let newArr = new Array();
    for (let el of arr)
        newArr.push(el.toString());
    return newArr;
}

comparePocosMuchos = (pocos, muchos) => {
    let p = arrIntToStr(pocos);
    let m = arrIntToStr(muchos);
    console.log(p);
    console.log(m);
    for (let mu of m) {
        for (let po of p) {
            let pocoSum = 0;
            let poInt = parseInt(po);
            for (let i = 0; i < 15; i++) {
                pocoSum += poInt;
            }
            if (pocoSum > 10000 && pocoSum < 100000) {
                // console.log(pocoSum+'\n');
                if (mu == pocoSum) {
                    if (mu[0] != po[0] && mu[0] != po[1] && mu[0] != po[2] && mu[0] != po[3]) {
                        if (mu[1] != po[0] && mu[1] != po[1] && mu[1] != po[2] && mu[1] != po[3]) {
                           if (mu[2] == po[2]) {
                              if (mu[3] != po[0] && mu[3] != po[1] && mu[3] != po[2] && mu[3] != po[3]) {
                                 if (mu[4] == po[1] && mu[4] == po[3]) {
                                         // console.log('Answer:\nPOCO = ' + po + '\nMUCHO = ' + mu);
                                         return 'Answer:\nPOCO = ' + po + '\nMUCHO = ' + mu;
                                 }
                              }
                           }
                        }
                    }
                }
            }                
        }
    }
}

let poco = new Array();
let mucho = new Array();
let fiveDigitMuchos = new Array();
let validMuchos = new Array();
let answer = '';

poco = createPocos();
mucho = createMuchos(poco);
fiveDigitMuchos = findFiveDigitMuchos(mucho);
validMuchos = findValidMuchos(fiveDigitMuchos);
answer = comparePocosMuchos(poco, validMuchos);
alert(answer);

// console.log('Items in poco: ' + poco.length + '\n');
// console.log('Poco = ' + poco + '\n\n');
// console.log('Items in mucho: ' + mucho.length + '\n');
// console.log('Mucho = ' + mucho + '\n\n'); 
// console.log('Items in fiveDigitMuchos: ' + fiveDigitMuchos.length + '\n');
// console.log(fiveDigitMuchos);
