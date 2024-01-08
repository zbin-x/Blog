// You can add JavaScript functionality here if needed
// Example: Adding a simple image carousel
document.getElementById("searchButton").addEventListener("click", function() {
  // 获取输入框的值
  var searchTerm = document.getElementById("searchInput").value;

  // 使用百度搜索
  window.location.href = "https://www.baidu.com/s?wd=" + encodeURIComponent(searchTerm);
});

