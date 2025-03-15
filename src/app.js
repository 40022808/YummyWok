
const en_btn = document.getElementById('en_btn');
const zh_btn = document.getElementById('zh_btn');
const hu_btn = document.getElementById('hu_btn');

hu_btn.addEventListener('click', () => {
    window.location.href = "hu.html";
});
en_btn.addEventListener('click', () => {
    window.location.href = "en.html";
});
zh_btn.addEventListener('click', () => {
    window.location.href = "zh.html";
});

