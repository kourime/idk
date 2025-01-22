
let a = parseFloat(prompt("Введите коэффициент a:"));
let b = parseFloat(prompt("Введите коэффициент b:"));
let c = parseFloat(prompt("Введите коэффициент c:"));


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Ошибка! Пожалуйста, введите числовые значения для всех коэффициентов.");
} else {
    
    let discr = b ** 2 - 4 * a * c;

    
    alert("Дискриминант D = " + discr.toString());
}