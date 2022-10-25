// Необходимо создать
// алгоритм, который попросит пользователя ввести часы и минуты, когда будильник должен прозвонить.
// Если введенное значение 'часы' будет находиться в диапазоне от 0 до 23, а минуты в диапазоне от 0 до 59,
// то будильник должен ответить: 'Да, хозяин, прозвоню!'. Иначе, алгоритм должен ответить: 'Я этого делать
// не буду'.
// Пример:
// Вас приветствует умный будильник!
// Во сколько часов позвонить? 7
// Во сколько минут позвонить? 0
// Ответ: Да, прозвоню!

// let hello = alert("Вас приветствует умный будильник!");
let press_ok = document.querySelector(".press");
press_ok.addEventListener("click", click_clock);
function click_clock() {
  let click_h = document.querySelector("#clock_id_h").value;
  click_h = Number(click_h);
  let click_min = document.querySelector("#clock_id_min").value;
  click_min = Number(click_min);
  //   if (click_h.includes(<= 23) || click_min.includes(<= 59)) {
  //   if (click_h.includes("<= 23") || click_min.includes("<= 59")) {
  if (click_h > 0 && click_h < 23 && click_min > 0 && click_min < 59) {
    // Если click_h > 0 && click_h< 23&& click_min....
    // alert("Да, прозвоню!");
  } else {
    // alert("Я этого делать не буду");
  }
}

// Создайте алгоритм, при выполнении которого программа попросит пользователя задать какой-нибудь
// вопрос. Если в вопросе пользователя будет содержаться подстрока 'кот', то программа должна ответить
// МЯУ, иначе ГАВ.
// Пример 1: который час? Ответ: МЯУ
// Пример 2: ты собака? Ответ: ГАВ

let animal_press_block = document.querySelector(".press_animal");
animal_press_block.addEventListener("click", question_animal);
function question_animal() {
  let question_animal_id = document.querySelector("#animal_id").value;
  if (question_animal_id.includes("кот")) {
    alert("МЯУ");
  } else {
    alert("ГАВ");
  }
}

// при нажатии на input type = checkbox, зачёркивать слово JavaScript
// Cмотри изображение.
let check_box_js = document.querySelector(".checkbox");
check_box_js.addEventListener("click", check_js);
function check_js() {
  check_box_js.classList.toggle("checkbox_new");
}
// exercise 2
function greet(time, name) {
  let hello = `Good ${time}, ${name}`;
  
  return hello;
}
greet("evening", "Helena");
console.log(greet("evening", "Helena"));

// exercise 3
// Есть функция, первый параметр принимает строку, второй цифру. Ваша задача проверить,
// количество символов в строке больше чем цифрв или нет. В зависимомти от результата
// в console.log() вывести true или false.

function lenStr(words, num) {
  num = String(num);

  if (words.length > num.length) {
    console.log("true");
  } else {
    console.log("false");
  }
  return lenStr;
}
lenStr("string", 555);
// exercise 4
// Используя функцию посчитайте скидку

function sale(startPrice, discountPercent) {
let result = startPrice / 100 * discountPercent
return(result)
}
sale(35, 10)
console.log(sale(35, 10)
)

// exercise 4
// ПРЕОБРАЗОВАНИЕ ТЕМПЕРАТУРЫ
// ->Сохраните температуру по Цельсию в переменной.
// ->Преобразуйте его в градусы Фаренгейта и выведите "___°C is ____°F".
// Температура в градусах Фаренгейта (° F) равна температуре  в градусах Цельсия (° C), умноженной на 9/5 плюс 32:
// ° F = ° C × 9/5 + 32
// или
// ° F = ° C × 1,8 + 32
function convertTemp(celsius) { 
let tempFar = celsius * 9/5 + 32
let result = `${celsius}°C is ${tempFar }°F`
return(result)
} 
convertTemp(23)
console.log(convertTemp(23));