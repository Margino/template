// удаляем класс для фокуса если есть загрузился js
document.body.classList.remove('tabbing');

// показываем фокус при использовании клавиши tab
window.addEventListener('keydown', handleFirstTab);

// обратная связть
// console.info('%c%s', 'font-weight: bold', 'Нашли ошибку!? Напишите, пожалуйста, мне об этом https://github.com/Margino/');

// ========== Functions ========== //

// используем tab
function handleFirstTab(event) {
    if (event.keyCode === 9) {
        document.body.classList.add('tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
    }
}

// используем мышь
function handleMouseDownOnce() {
    document.body.classList.remove('tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
}