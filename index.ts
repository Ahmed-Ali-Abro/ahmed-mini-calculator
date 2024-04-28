#! /usr/bin/env node
import inquirer from "inquirer"
const user_input=await inquirer.prompt([{
    name:"Q1",
    message:"inter your first number",
    type:"number"
},
{
    name:"Q2",
    message:"inter your last number",
    type:"number"
},
{
    name:"Q3",
    message:"select the operator",
    type:"list",
    choices:["addition","subtraction","multipilication","division"]
}
])

if (user_input.Q3 === "addition"){
    console.log(`${user_input.Q1 + user_input.Q2}`)
}

else if (user_input.Q3 === "subtraction"){
    console.log(`${user_input.Q1 - user_input.Q2}`)
}
else if (user_input.Q3 === "multipilication"){
    console.log(`${user_input.Q1 * user_input.Q2}`)
}
else if (user_input.Q3 === "division"){
    console.log(`${user_input.Q1 / user_input.Q2}`)
}
