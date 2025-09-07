function checkout() {
  if (Object.keys(order).length === 0) {
    alert("Your cart is empty. Please add some items before checkout.");
  } else {
    let summary = "Your Order:\n";
    let total = 0;
    for (let item in order) {
      let qty = order[item];
      let price = menu[item].price * qty;
      total += price;
      summary += `${item} x${qty} = Rs${price}\n`;
    }
    summary += `\nTotal: Rs${total}`;

    document.getElementById("orderSummaryText").innerText = summary;
    document.getElementById("checkoutModal").style.display = "block";

    // Clear order after checkout
    for (let item in order) {
      delete order[item];
    }
    updateOrderDisplay();
  }
}

function closeModal() {
  document.getElementById("checkoutModal").style.display = "none";
}
