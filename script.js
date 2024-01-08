// You can add JavaScript functionality here if needed
// Example: Adding a simple image carousel
// 获取输入框和按钮元素
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");

// 添加点击按钮事件
searchButton.addEventListener("click", function() {
  searchBaidu();
});

// 添加回车键事件
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchBaidu();
  }
});

// 搜索百度函数
function searchBaidu() {
  // 获取输入框的值
  var searchTerm = searchInput.value;

  // 使用百度搜索
  window.location.href = "https://www.baidu.com/s?wd=" + encodeURIComponent(searchTerm);
}

