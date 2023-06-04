// Implement saturdayFun function
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implement mondayWork function
  function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Implement wrapAdjective function
  function wrapAdjective(flair='*') {
    return function(adjective='special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("great")); // Output: You are !!!great!!!
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(saturdayFun("go shopping")); // Output: This Saturday, I want to go shopping!
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // Output: This Monday, I will work from home.
  
