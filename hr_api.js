import fetch from "node-fetch";
const HR_URL = 'https://hacker-news.firebaseio.com/v0';


export async function fetchTopStories(){
    return fetch(HR_URL + '/topstories.json?print=pretty').then((response) => {
        return response.json()
    }).then((data) => {
        return data
    }).catch(() => {
        console.error("Unable to fetch top stories from HR!")
    })
}