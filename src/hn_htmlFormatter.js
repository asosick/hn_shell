/*
typical hn item:

{
  by: 'greatatuin',
  descendants: 4,
  id: 30329762,
  kids: [ 30343040, 30343078, 30343015, 30343027, 30343018, 30343063 ],
  score: 54,
  text: 'What is the main thing that made your business take off and start to see success that you&#x27;re kicking yourself you didn&#x27;t start doing it much earlier?<p>Thanks HN!',
  time: 1644828478,
  title: "Ask HN: What made your business take off that you wish you'd done much earlier?",
  type: 'story'
}

*/

export function hnItemToHTML(item){
    return `<div>
    <h1>${item.title}</h1>
    <h5>Score:${item.score}</h3>
    ${item?.text != undefined ? `<h5>${item.text}</h5>`: ""}
    ${item?.url != undefined ? `<h5>${item.url}</h5>`: ""}
    </div>`
}