#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { fetchTopStories, fetchItem } from "./hn_api.js";
import { displayStories, displayStory } from './hn_display.js';
import ora from 'ora';


console.clear()

const choice = await displayStories()
displayStory(choice)
