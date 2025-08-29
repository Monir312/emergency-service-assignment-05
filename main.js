function copyNumber(number) {
  navigator.clipboard.writeText(number);
  alert("Number copied: " + number);
}

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