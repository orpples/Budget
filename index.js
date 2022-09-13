let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    console.log(i);
    console.log(weeklyExpenseQuestions[i]);
    //Get user response to question
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i]);
    console.log(stringAnswer);
    //Convert sting to number for calculations
    let numberAnswer = parseFloat(stringAnswer)
    //Add numberAnswer to expenses total variable
    weeklyExpenses = weeklyExpenses + numberAnswer
}

//monthly expenses
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    console.log(i);
    console.log(monthlyExpenseQuestions[i]);
    //Get user response to question
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i]);
    console.log(stringAnswer);
    //Convert sting to number for calculations
    let numberAnswer = parseFloat(stringAnswer)
    //Add numberAnswer to expenses total variable
    monthlyExpenses = monthlyExpenses + numberAnswer
}

//annual expenses
for ( let i=0 ; i < annualExpenseQuestions.length ; i++ ) {
    console.log(i);
    console.log(annualExpenseQuestions[i]);
    //get user response to question
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    console.log(stringAnswer);
    //Convert sting to number for calculations
    let numberAnswer = parseFloat(stringAnswer);
    //add numberAnswer to expenses total variable
    monthlyExpenses = monthlyExpenses + numberAnswer
}