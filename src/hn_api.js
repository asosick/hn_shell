import fetch from "node-fetch";
import ora from 'ora';

const HN_URL = 'https://hacker-news.firebaseio.com/v0';


export async function fetchWithSpinner(fetchMethod){
    const spinner = ora('Fetching Hacker News stories...')
    spinner.start()
    const fetchContent =  await fetchMethod()
    spinner.succeed()
    return fetchContent
}


export async function fetchTopStories(){
    return fetch(HN_URL + '/topstories.json?print=pretty').then((response) => {
        return response.json()
    }).catch(() => {
        console.error("Unable to fetch top stories from HN!")
    })
}


export async function fetchItem(id){
    return fetch(`${HN_URL}/item/${id}.json?print=pretty`).then((response) => {
        return response.json()
    }).catch(() => {
        console.error("Unable to fetch top stories from HN!")
    })
}