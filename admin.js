document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  let newOrder = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    order: document.getElementById("order").value
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("تم إرسال الطلب بنجاح ✅");
  this.reset();
});
