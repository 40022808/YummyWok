const types = ["Snacks","Soups","Ramen","Vegetables","Rice bowl","Noodles wok Box","Rice wok Box","Ricenoodles wok Box","Mix dry noodles", "Drinks", "Desserts","Salads"];
let currentIndex = 0;

// 获取按钮和显示区域的元素
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentType = document.getElementById("current-type");
const dropdownMenu = document.getElementById("dropdown-menu");


// 更新显示的内容类型
function updateType() {
    currentType.childNodes[0].nodeValue = types[currentIndex]; // 修改显示文字
}

// 左按钮事件监听
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + types.length) % types.length; // 循环切换
    updateType();
});

// 右按钮事件监听
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % types.length; // 循环切换
    updateType();
});

// 显示菜单
currentType.addEventListener("click", () => {
    dropdownMenu.style.display = "block";
});

// 下拉菜单点击事件
dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // 阻止事件冒泡
    dropdownMenu.style.display = "none"; // 隐藏菜单
    if (e.target.tagName === "LI") {
        currentIndex = types.indexOf(e.target.textContent); // 更新当前索引
        updateType();
    }
});



// 初始化
updateType();
