//async function
function getData(dataid, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating an API/data fetch call (3 sec delay for realism)
      console.log(` data with data id ${dataid}`);
      resolve("success"); // Task done ✅
      // reject("error")
      //  if(getnextdata){
      //      getnextdata();
      //  }
    }, 3000);
  });
}

// Simulating an API to fetch weather data 🌦️
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data"); // Mausam ka haal aaya bhai 📡
      resolve(200); // Everything's clear, over & out ✌️
    }, 2000);
  });
};

// A simple async function that waits for two API calls
async function getWeatherData() {
  await api(); //1st API call
  await api(); //2nd API call
}

///Async-await
//goooddddd as compare to all of them 
// Asynchronous flow made easy — like butter on toast 🍞🧈

async function getAllData() {
  console.log("getting Data1......")
  await getData(1); // waiting like a good boy 😅
  console.log("getting Data2......")
  await getData(2); // bas ek ek karke aate jao bhai log
  console.log("getting Data3......")
  await getData(3);
  console.log("getting Data4......")
  await getData(4);
  console.log("getting Data5......")
  await getData(5);
}

//but in async function we need to call it every time hmm but we have the slove IIFE 
// IIFE -> Immediately Invoked Function Expression 
// syntax -> (()=>{ //function ke ander function hai bas aur kuch nhi 
  
// })();

// One-time use async call — best for fire-and-forget 🔥
// Avoids writing function call again and again 🙏
// async + IIFE = chaand pe rocket 🚀
(async function () // you can't use this function another time one time investment hai bhaiya ye 
{
  console.log("getting Data1......")
  await getData(1);
  console.log("getting Data2......")
  await getData(2);
  console.log("getting Data3......")
  await getData(3);
  console.log("getting Data4......")
  await getData(4);
  console.log("getting Data5......")
  await getData(5);
})();

//callback hell what the hell is this callback back to back 
// Bhai yeh toh coding ka chakravyuh hai — andar ghus gaye toh baahar mushkil 😵‍💫

// getData(1,()=>{
//     console.log("getting data 2.....")
//     getData(2,()=>{
//         console.log("getting data 3.....")
//         getData(3,()=>{
//             console.log("getting data 4.....")
//             getData(4);
//         });
//     });
// });

//promise chain delho ye thoda complex dekh raha hai
// Looks cleaner than callback hell, but still thoda drama hai 😬

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });

// //chain of promises means chain of then 
// Structured way to handle dependent async calls 🧩
// getData(1).then((res)=>{
//   console.log("Getting data 2....")
//   return getData(2);
// }).then((res)=>{
//   console.log("Getting data 3....")
//   return getData(3);
// }).then((res)=>{
//   console.log("Getting data 4....")
//     console.log("success",res) // Bas chain ko todna mat 🪝
// })
