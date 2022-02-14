#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { fetchTopStories } from "./hr_api.js";

console.clear()

async function displayLinks() {
    const choice = await inquirer.prompt({
        name: "Hacker Rank Board",
        type: 'list',
        choices: [
            'Click me',
            'No click me!',
        ],
    });
    console.log(choice['Hacker Rank Board']);
    console.log(await fetchTopStories())
}

await displayLinks()
