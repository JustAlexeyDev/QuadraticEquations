const Main = () => {
  var result = document.getElementById('result1');
  var result = document.getElementById('result2');
  var dout = document.getElementById('dout');
  // Числа
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
  // Уравнение искриминанта
  var D = Math.pow(b, 2) - (4 * (a * c));
  console.log('Дискриминант =', D);
  dout.innerHTML = (D);
  // Условия. Если D > 0, D < 0, D == 0
  // Если D > 0, то уравнение имеет 2 корня
  if (D > 0) {
    // Проверка числа b
    if (b > 0) {
      var x1 = (-b + Math.sqrt(D)) / (2 * a);
      var x2 = (-b - Math.sqrt(D)) / (2 * a);
      console.log('корни =', x1, x2);   
      result1.innerHTML = (x1);   
      result2.innerHTML = (x2);   
    }
    // Находим x1 и x2
    if (b < 0) {
      var x1 = (-b + Math.sqrt(D)) / (2 * a);
      var x2 = (-b - Math.sqrt(D)) / (2 * a); 
      console.log('корни =', x1, x2);  
      result1.innerHTML = (x1);   
      result2.innerHTML = (x2);       
    }
  }
  // Если D < 0, то уравнение не имеет корней
  if (D < 0) {
    console.log('Уравнение не имеет корней');
    result.innerHTML = ('Уравнение не имеет корней');
  }
  // Если D == 0, то уравнение имеет 1 корень
  if (D == 0) {
    if (b > 0) {
    // Находим x1
      var x1 = (-b + Math.sqrt(D)) / (2 * a);
      console.log('корень =', x1);
      result1.innerHTML = (x1);    
    }
    
    if (b < 0) {
      var x1 = (-b + Math.sqrt(D)) / (2 * a);
      console.log('корень =', x1);
      result1.innerHTML = (x1);     
    }
  }
}