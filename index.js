#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { fetchTopStories, fetchItem } from "./hn_api.js";
import ora from 'ora';


console.clear()

async function displayLinks() {
    const spinner = ora('Fetchin HN stories...')
    spinner.start()
    const top_stories = await fetchTopStories()
    const stories = await getNItems(top_stories.slice(0,10))
    spinner.succeed()
    console.clear()
    //console.log(figlet.textSync('HR Board'));
    const choice = await inquirer.prompt({
        name: "Hacker News Board",
        type: 'list',
        loop: false,
        pageSize: 11,
        choices: [ ...stories.map(obj => `${obj.title} - ${obj.by}`), "Next Page.."]
    });

}

async function getNItems(top_stories){
    let tenLinks = []
    for(const id of top_stories){
        tenLinks.push(await fetchItem(id))
    }
    return tenLinks
}


await displayLinks()
