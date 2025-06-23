const form = document.querySelector("#form");

async function fetchName(name) {
  const res = await fetch("https://api.genderize.io/?name=" + name);
  const data = await res.json();
  console.log(data);
  return data;
}
let currentName = "";
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
   currentName = event.target.name.value;
  const result =await fetchName(currentName);
  const p = document.createElement("p");
  p.textContent = p.textContent = "Name: " + result.name +
    " Gender: " + result.gender;
  form.append(p);
  event.target.name.value= "";
});

