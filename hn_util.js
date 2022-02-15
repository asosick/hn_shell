import { fetchItem } from "./hn_api.js"

export async function getNItems(top_stories){
    let tenLinks = []
    for(const id of top_stories){
        tenLinks.push(await fetchItem(id))
    }
    return tenLinks
}
