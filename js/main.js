alert("salom");
let money = Number(prompt("pul miqdorini kiriting"));
let usd = 10896;
let eur = usd + 1351;
let content = document.querySelector(".money-value");
let elContent = document.querySelector(".content");

console.log((750 * usd)+ (120 * eur));

if (money >= ((750 * usd)+ (120 * eur))){

  console.log("sayohatga boramiz");
  content.textContent = `sizda ${(money / usd).toFixed(2)} $ bor, yoki ${(money / eur).toFixed(2)} € bor`;
  elContent.textContent = "sayohatga goo";

}else{

  console.log("azgina sabr qilamiz");
  content.textContent = `sizda ${(money / usd).toFixed(2)} $ bor, yoki ${(money / eur).toFixed(2)} € bor`;
  elContent.textContent = "azgina sabr qilamiz";

}

