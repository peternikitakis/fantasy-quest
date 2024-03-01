const apiKey = generateKey(); // define a constant variable `apiKey` and generate a random key using the `generateKey` function.
const items = await getItemData(); // call the `getItemData` function asynchronously to fetch item data from an external API and store the result in the `items` variable.

logItems(items)

async function getItemData() { // declare an asynchronous function 'getItemData' to fetch item data from an API endpoint
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items',{ // sent a GET request to the API endpoint to retrieve item data.
    method: 'GET', // use the GET method for the request.
    mode: 'cors', // specify the request mode as 'cors' for cross-origin requests.
    headers: {
        'X-API-Key': apiKey, // include the generated API key in the request headers.
        'Content-Type': 'application/json' // specify the content type of the request as JSON
    }
  })
  return response.json()   // parse the response data from JSON format and return it.
}

function generateKey() { // define a function `generateKey` to generate a random 16-character API key.
    const characters = 'ABCDEF01234567689' // define a string containing characters from which the API key will be generated.
    let result = ''
    for (let i = 0; i < 16; i++){   // generate a 16-character key by randomly selecting characters from the defined set
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

// define a function `logItems` to log the names of items fetched from the API.
function logItems(items) {
    for (const item of items) {  // Iterate over each item in the `items` array.
        console.log(item.name)
    }
}
