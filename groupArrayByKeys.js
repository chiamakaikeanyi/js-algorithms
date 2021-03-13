const list = [
    {
      question: "what is your name?",
      answer: "Noble",
      topic: "names"
    },
   {
      question: "what is your friend's name?",
      answer: "Great",
      topic: "names"
    },
    {
      question: "What is dog's name?",
      answer: "Snugglets",
      topic: "gender"
    },
    {
      question: "What is your age?",
      answer: 20,
      topic: "ages"
    },
    {
      question: "What is your brother's age?",
      answer: 18,
      topic: "ages"
    }
 ]

/* sample output
 {
    names: [...array of objects based on "names"...]
    gender: [...array of objects based on "gender"...]
    ages: [...array of objects based on "ages"...]
  }
*/

// Solution 1
function groupArrayByKeys(array, key) {
   return array
     .reduce((acc, curr) => {
       if(curr[key] === undefined) return acc; 
       return Object.assign(acc, { [curr[key]]:( acc[curr[key]] || [] ).concat(curr)})
     }, {})
}

// Solution 2
function groupArrayByKeys(array, key) {
  return array.reduce((acc, curr) => ((acc[curr[key]] = [...(acc[curr[key]] || []), curr]), acc),{});
};

groupArrayByKeys(list)
