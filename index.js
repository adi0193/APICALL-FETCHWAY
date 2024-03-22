const postListContainer = document.querySelector(".posts-list-container");

//fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("some error occured");
    }
  };
}

// here the below function is how we can fetch teh fata usnf fetch method

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

//below the code represent the how we can fetch the data api using async and await.

async function fetchUsingAsyncAwait(){
const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"GET",
});
const result=await response.json();

displayResults(result);
}
function displayResults(posts) {
  postListContainer.innerHTML = posts
    .map(
      (postItems) => `
  <div class="post-item">
  <h3>${postItems.title}</h3>
  <p>${postItems.body}</P>
  </div>


  `
    )
    .join(" ");
}

// fetchUsingXHR();

// fetchUsingFetchMethod();

fetchUsingAsyncAwait();
