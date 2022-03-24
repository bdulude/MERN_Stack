/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) { 
    let hashTable = {};
    for (med of meds) {
        for (symp of med.treatableSymptoms) {
            if (hashTable.hasOwnProperty(symp)) {
                hashTable[symp].push(med.name);
            }
            else {
                hashTable[symp] = [med.name];
            }
        }
    }
    let possibleMeds = [];
    for (symp of ailments) {
        if (hashTable.hasOwnProperty(symp)){
            possibleMeds.push(hashTable[symp])
        }
    }
    let output = [];
    // console.log(hashTable);
    // console.log(possibleMeds);

    for (pMed of possibleMeds) {
        if (output.length < 1) {
            // console.log("Push");
            output.push(pMed);
        }
        else {
            console.log("Filter");
            
            let differences = output.filter(med => {
                console.log("med",med);
                console.log("pmed", pMed);
                
                return pMed.includes(med)
            });
            // console.log(differences);
            // console.log(pMed);
            // console.log('---------');
            output = differences;
            // // console.log(output);
            // // console.log(pMed);
            // console.log('---------');
        }
        // console.log(output);
    }

    return output;
}

// console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
// console.log(webMD(["existential dread"], medications));