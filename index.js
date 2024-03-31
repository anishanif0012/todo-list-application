#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.yellow.bold("\n \t Welcome To Todo-List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your new Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.green("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todoList);
