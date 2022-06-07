let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
// Your Code Here
//window.prompt(weeklyExpenseQuestions[0])
for(let i =0;i<weeklyExpensesQuestions.length;i++){
let answer=window.prompt(weeklyExpenseQuestions[i])
console.log(answer)
let stringAnswer=window.prompt(weeklyExpenseQuestions[i])
let numberAnswer=parseFloat(stringAnswer)
console.log(numberAnswer)
weeklyExpenses=weeklyExpenes+numberAnswer}
for(let j=0;j<monthlyExpenseQuestions.length;j++){
window.prompt(monthlyExpenseQuestions[j])
let answer2=parseFloat(window.prompt(monthlyExpenseQuestions[j]))
console.log(answer2)
monthlyExpenses=monthlyExpenses+answer2
}
for(k=0;k<annualExpenseQuestions.length;k++){
    window.prompt(annualExpenseQuestions[k])
    let answer3=parseFloat(window.prompt(annualExpenseQuestions[k]))
    console.log(answer3)
    annualExpenses=annualExpenses+answer3
}
