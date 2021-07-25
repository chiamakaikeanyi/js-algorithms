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
[
    {
      topic: "names",
      content: [...array of objects based on "names"...]
    },
    {
      topic: "gender",
      content: [...array of objects based on "gender"...]
    },
    {
      topic: "ages",
      content: [...array of objects based on "ages"...]
    }
 ]
*/


function groupContentByKeys(list) {
  const obj = {};

  list.forEach(item => {
    if(obj.hasOwnProperty(item.topic)) {
      obj[item.topic].content.concat(item)
    }
    else{
       obj[item.topic] = {
        topic: item.topic,
        content: [item]
      }
    }
  })

  return Object.values(obj)
}

groupContentByKeys(list, 'topic')
