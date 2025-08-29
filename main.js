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


// coin added and removed function 



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










//call history function 
function addHistory(service, number) {
  const list = document.getElementById("callHistory");
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `${service} - ${number} (${time})`;
  list.prepend(li);
}

// Example usage: addHistory("Police", "999");
function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}