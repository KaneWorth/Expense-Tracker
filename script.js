"use strict";
const product = document.querySelector(".product");
const cost = document.querySelector(".cost");
const addNewItem = document.querySelector(".addNewItem");
const items = document.querySelector(".items");
items.style.display = "none";

// Define the total variable in the global scope
let total = 0;

// Add new item with mouse click
addNewItem.addEventListener("click", function () {
  product.focus();

  // Getting value from input field
  const productName = product.value;
  const productCost = parseFloat(cost.value);

  // Add new items
  const container = document.createElement("div");
  container.className = "item-container";

  // Show the items element
  document.querySelector(".items").style.display = "";

  // Create price and remove container
  const priceAndRemoveContainer = document.createElement("div");
  priceAndRemoveContainer.className = "price-and-remove-container";

  // Create itemName container
  const itemName = document.createElement("label");
  itemName.className = "itemName";
  itemName.textContent = productName.charAt(0).toUpperCase() + productName.substr(1);

  const itemCost = document.createElement("label");
  itemCost.className = "price";
  itemCost.textContent = productCost;
  if (Number.isInteger(productCost)) {
    itemCost.textContent = productCost.toFixed(2);
  } else {
    itemCost.textContent = productCost;
  }

  const removeButton = document.createElement("button");
  removeButton.className = "remove";
  removeButton.textContent = "remove";
  priceAndRemoveContainer.appendChild(itemCost);
  priceAndRemoveContainer.appendChild(removeButton);

  // Appending items
  items.appendChild(container);
  container.appendChild(itemName);
  container.appendChild(priceAndRemoveContainer);

  product.value = "";
  cost.value = "";

  // Adding up total cost
  let test = document.querySelectorAll(".price");
  let sum = 0;
  for (let i = 0; i < test.length; i++) {
    sum += parseFloat(test[i].textContent);

    // document.querySelector(".total").innerHTML = `£${sum}`;
    if (Number.isInteger(sum)) {
      document.querySelector(".total").innerHTML = `£${sum.toFixed(2)}`;
    } else {
      document.querySelector(".total").innerHTML = `£${sum}`;
    }
  }
  console.log(sum);
  console.log(typeof sum);
});

// Add new item with enter key
cost.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("yes");
    addNewItem.click();
  }
});

// Removing Items
items.addEventListener("click", function (event) {
  if (event.target.className === "remove") {
    const container = event.target.parentNode.parentNode;
    const parent = container.parentNode;
    parent.removeChild(container);

    // Calculate the total cost of the items
    calculateTotal();
  }
});

// Calculating expense
function calculateTotal() {
  // Removing item amount from budget
  let test = document.querySelectorAll(".price");
  let sum = 0;
  for (let i = 0; i < test.length; i++) {
    sum += parseFloat(test[i].textContent);
  }
  // Update the total variable
  total = sum;

  if (Number.isInteger(total)) {
    document.querySelector(".total").innerHTML = `£${total.toFixed(2)}`;
  } else {
    document.querySelector(".total").innerHTML = `£${total}`;
  }
}
