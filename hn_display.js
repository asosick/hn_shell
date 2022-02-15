import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import ora from 'ora';
import {fetchWithSpinner, fetchTopStories} from './hn_api.js'
import { getNItems } from './hn_util.js';

const STORY_PREVIEW_COUNT = 10
let head = 0

export async function displayStories() {
    const spinner = ora('Fetchin HN stories...')
    spinner.start()
    const top_stories = await fetchTopStories()
    const nStories = await getNItems(top_stories.slice(head, STORY_PREVIEW_COUNT))
    spinner.succeed()
    console.clear()
    const choice = await inquirer.prompt({ 
        name: "Hacker News Board",
        type: 'list',
        loop: false,
        pageSize: 11,
        choices: [ ...nStories.map(obj => `${obj.title}`), "Next Page.."]
    });
    return nStories.find((obj) => obj.title === choice['Hacker News Board'])
}

