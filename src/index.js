#!/usr/bin/env node
import { displayStories, displayStory } from './hn_display.js';

console.clear()
const choice = await displayStories()
displayStory(choice)
