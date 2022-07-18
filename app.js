let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  "Any sufficiently advanced technology is indistinguishable from magic. Arthur C. Clarke",

  "People who are really serious about software should make their own hardware. Alan Kay",

  "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency. Bill Gates",
];

btn.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});

console.log("Hello");
