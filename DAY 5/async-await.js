async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("ASYNC/AWAIT → User Name:", user.name);
  } catch (err) {
    console.error("ASYNC ERROR:", err);
  }
}
fetchUser();