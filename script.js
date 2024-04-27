// api key - 1VHCsewtqLFYq3rYvoPfcA==jlGJpmcL3PVCRWSp

const btn = document.querySelector("#btn");

async function fetchData() {
  const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers: {
      "X-Api-Key": "1VHCsewtqLFYq3rYvoPfcA==jlGJpmcL3PVCRWSp",
    },
  });
  const result = await response.json();
  const data = await result[0].joke;

  return data;
}
const output = document.querySelector("#output");
btn.addEventListener("click", jokeCreate);

async function jokeCreate() {
  output.innerText = "";
  const para = document.createElement("p");
  para.classList.add("para");
  para.innerText = await fetchData();
  output.append(para);
  // console.log(joke);
  // await fetchData();
}
