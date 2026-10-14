document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  var price = Number(document.getElementById('type').value);
  var count = Number(document.getElementById('count').value);
  var delivery = document.getElementById('delivery').checked ? 150 : 0;
  var sum = price * count + delivery;
  document.getElementById('result').textContent = 'Итого: ' + sum + ' ₽';
});
