// heart added function 

  const heartButtons = document.querySelectorAll('.single-card .fa-heart');
  const headerHeart = document.querySelector('.react-heart strong');

  heartButtons.forEach(button => {
    button.addEventListener('click', () => {
      let count = parseInt(headerHeart.textContent);
      count += 1;
      headerHeart.textContent = count;
    });
  });


  // copy number function 
function copyNumber(number) {
  navigator.clipboard.writeText(number);

  // Counter update
  const copyCounter = document.querySelector('.count-copied');
  if (copyCounter) {
    let count = parseInt(copyCounter.textContent) || 0;
    copyCounter.textContent = count + 1;
  }
  alert("Number copied: " + number);
}




// coin added and removed function 
function makeCall(link, cost) {
  const coinCounter = document.querySelector('.count-coin strong');
  let coins = parseInt(coinCounter.textContent);
  const number = link.getAttribute('href').replace('tel:', '');

  const serviceTitle = document.querySelector('.service-title').textContent;

  const serviceText = document.querySelector('.service-text').textContent;

  if (coins <= 0 || coins < cost) {
    alert("আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে " + cost + " কয়েন লাগবে।");
    event.preventDefault(); 
    return false;
  }

  alert("Calling: " + serviceText + "  " + number + " ....");


  coins -= cost;
  coinCounter.textContent = coins;

  addHistory(serviceTitle, number);
}


//call history function 
function addHistory(service, number) {
  const list = document.getElementById("callHistory");
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");

  li.classList.add("addedHistory"); 
   li.innerHTML = `
    <div>
      <h3>${service}</h3>
      <p>${number}</p>
    </div>
    <div>${time}</div>
  `;

  list.prepend(li); // নতুন কল উপরে দেখাবে
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}
