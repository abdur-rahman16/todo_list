#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import showBanner from "node-banner";
(async () => {
    await showBanner('Todo List', 'This Todo List is made by "Abdur Rahman Akbar"', 'red', 'blue');
})();
let addList = [{
        name: "addTodo",
        type: "input",
        message: gradient.instagram("What do you want to add in your today's todo list?")
    }];
let options = [{
        name: "option1",
        type: "list",
        choices: ["Add another List", "Check your List"],
        message: gradient.fruit("What do you want to do?")
    }];
let again = [{
        name: "tryagain",
        type: "confirm",
        message: gradient.rainbow("Do you want to add another list or Check your List?")
    }];
let list = [];
async function main() {
    let condition = true;
    while (condition) {
        let { option1 } = await inquirer.prompt(options);
        if (option1 == "Add another List") {
            let { addTodo } = await inquirer.prompt(addList);
            let func = () => {
                list.push(addTodo);
                console.log(`"${addTodo}" is added to your Todo List`);
            };
            func();
            list.join(",");
        }
        else if (option1 == "Check your List") {
            console.log(list.join(","));
        }
        let { tryagain } = await inquirer.prompt(again);
        condition = tryagain;
        if (!condition) {
            console.log(chalk.yellow("Thank you for using my Todo List!"));
        }
    }
}
setTimeout(() => {
    main();
}, 500);
