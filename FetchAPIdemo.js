
// This code fetched website HTML.

let websiteData = fetch("https://www.garby.com").then(res => res.text()).then((data) => {
    return data;
}); 

// This contains a JSON object
let apiResponse = fetch("https://fjolt.com/api").then(res => res.json()).then((data) => {
    return data;
});

// Using more options 
fetch("https://fjolt.com/", {
    body: JSON.stringify({ someData: "value" })
    method: 'POST'
    mode: 'cors'
    cache: 'no-cache'
    credentials: 'same-origin'
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
    referrerPolicy: 'no-referrer'
});
