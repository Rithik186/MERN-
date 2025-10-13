fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("FETCH+THEN → Post Title:", data.title))
  .catch(error => console.error("FETCH ERROR:", error));