const types = ["Snacks","Soups","Ramen","Vegetables","Rice bowl","Noodles wok Box","Rice wok Box","Ricenoodles wok Box","Mix dry noodles", "Drinks", "Desserts","Salads"];
let currentIndex = 0;

// 获取按钮和显示区域的元素
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentType = document.getElementById("current-type");
const dropdownMenu = document.getElementById("dropdown-menu");

const menu_Snacks = document.querySelector(".menu-Snacks");
const menu_Soups = document.querySelector(".menu-Soups");
const menu_Ramen = document.querySelector(".menu-Ramen");
const menu_Vegetables = document.querySelector(".menu-Vegetables");
const menu_Rice_bowl = document.querySelector(".menu-Rice_bowl");
const menu_Noodles_wok_Box = document.querySelector(".menu-Noodles_wok_Box");
const menu_Rice_wok_Box = document.querySelector(".menu-Rice_wok_Box");
const menu_Ricenoodles_wok_Box = document.querySelector(".menu-Ricenoodles_wok_Box");
const menu_Mix_dry_noodles = document.querySelector(".menu-Mix_dry_noodles");
const menu_Drinks = document.querySelector(".menu-Drinks");
const menu_Desserts = document.querySelector(".menu-Desserts");
const menu_Salads = document.querySelector(".menu-Salads");

function 显示内容初始化() {
    menu_Snacks.style.display = "none";
    menu_Soups.style.display = "none";
    menu_Ramen.style.display = "none";
    menu_Vegetables.style.display = "none";
    menu_Rice_bowl.style.display = "none";
    menu_Noodles_wok_Box.style.display = "none";
    menu_Rice_wok_Box.style.display = "none";
    menu_Ricenoodles_wok_Box.style.display = "none";
    menu_Mix_dry_noodles.style.display = "none";
    menu_Drinks.style.display = "none";
    menu_Desserts.style.display = "none";
    menu_Salads.style.display = "none";
}

function 显示内容(type) {
    显示内容初始化();
    if (type === "Snacks") { menu_Snacks.style.display = "block"; }
    else if (type === "Soups") { menu_Soups.style.display = "block"; }
    else if (type === "Ramen") { menu_Ramen.style.display = "block"; }
    else if (type === "Vegetables") { menu_Vegetables.style.display = "block"; }
    else if (type === "Rice bowl") { menu_Rice_bowl.style.display = "block"; }
    else if (type === "Rice bowl") { menu_Rice_bowl.style.display = "block"; }
    else if (type === "Noodles wok Box") { menu_Noodles_wok_Box.style.display = "block"; }
    else if (type === "Rice wok Box") { menu_Rice_wok_Box.style.display = "block"; }
    else if (type === "Ricenoodles wok Box") { menu_Ricenoodles_wok_Box.style.display = "block"; }
    else if (type === "Mix dry noodles") { menu_Mix_dry_noodles.style.display = "block"; }
    else if (type === "Mix dry noodles") { menu_Mix_dry_noodles.style.display = "block"; }
    else if (type === "Drinks") { menu_Drinks.style.display = "block"; }
    else if (type === "Desserts") { menu_Desserts.style.display = "block"; }
    else if (type === "Salads") { menu_Salads.style.display = "block"; }

}


// 更新显示的内容类型
function updateType() {
    currentType.childNodes[0].nodeValue = types[currentIndex]; // 修改显示文字
    显示内容(types[currentIndex]); // 显示对应内容
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


document.getElementById('map-btn').addEventListener('click', function() {
    // 店铺地址在Google地图上的链接
    const googleMapLink = "https://www.google.com/maps/place/%E7%A6%8F%E5%A4%9A%E5%A4%9AYummy+wok/@47.4978706,19.0687986,21z/data=!4m6!3m5!1s0x4741dd4da0dcaf79:0x944ef15b6d31b71d!8m2!3d47.4979123!4d19.0687936!16s%2Fg%2F11h3ddcwf_?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D";
    // 跳转到Google地图
    window.open(googleMapLink, '_blank');
});
