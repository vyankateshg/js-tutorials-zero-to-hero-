// Step 1: Define the API URL jahan se data lana hai
const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

// Step 2: Use fetch() to call the API (async request hota hai bhai)
fetch(apiURL) // bhai ye promise return karta hai
    .then((response) => {
        // Step 3: Check if response is ok (200-299)
        if (!response.ok) {
            // Agar kuch gadbad hai to error throw karo
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Step 4: Convert response to JSON (bhai data ko samajhne layak banao)
        return response.json(); 
    })
    .then((data) => {
        // Step 5: Handle the actual data yahan aata hai sab kuch
        console.log("API se data mil gaya bhai:", data);
    })
    .catch((error) => {
        // Error handling (kuch bhi galat hua to yahan aayega)
        console.error("Arre bhai! API call fail ho gayi:", error.message);
    });

// Bhai's Note:
// - fetch() is asynchronous -> non-blocking
// - .then() handles success (jaise pizza time pe aa gaya)
// - .catch() handles error (jaise pizza cold ya cancel ho gaya)

// Bonus: Let's wrap it in a reusable async function too (professional touch)

async function fetchPost(postId) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(`Post ${postId} ka data:`, data);
    } catch (err) {
        console.error("Error aayi bhai:", err.message);
    }
}

// Calling function for demo (just like testing chai pyaali)
fetchPost(2);