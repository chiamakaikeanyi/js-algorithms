// Sort states from highest to lowest based on name length and find the state at the middle

function getMiddleStateByNameLength(states) {
  const sortedStates = states.sort((a, b) => b.length - a.length);

  return sortedStates[Math.floor(sortedStates.length / 2)];
}

function testCase() {
  const allStates = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

  if (getMiddleStateByNameLength(allStates) === 'Delta') {
    console.log("Correct result - Test PASSED");
    return;
  }

  console.log("Test FAILED", arguments[0]);
}

testCase();





