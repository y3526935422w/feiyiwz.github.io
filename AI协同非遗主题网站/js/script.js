// 导航栏滚动变色
window.addEventListener('scroll', function() {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) nav.classList.add('navbar-scroll');
  else nav.classList.remove('navbar-scroll');
});

// 返回顶部
window.addEventListener('scroll', function() {
  const toTop = document.getElementById('toTop');
  toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
document.getElementById('toTop').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 留言提交
document.getElementById('messageForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const content = document.getElementById('content').value.trim();
  if (!name || !content) { alert('请填写完整信息！'); return; }
  const div = document.createElement('div');
  div.className = 'border p-3 mb-2 rounded bg-white';
  div.innerHTML = `
    <h6>${name}</h6>
    <p class="mb-0">${content}</p>
    <small class="text-muted">${new Date().toLocaleString()}</small>
    <button class="btn btn-sm btn-danger mt-2" onclick="this.parentElement.remove()">删除</button>
  `;
  document.getElementById('messageList').prepend(div);
  this.reset();
  alert('留言成功！');
});

// 搜索框跳转到对应作品详情
function searchGo() {
  const kw = document.getElementById('searchInput').value.trim().toLowerCase();
  if (kw.includes('生肖')) location.href = 'detail1.html';
  else if (kw.includes('花鸟')) location.href = 'detail2.html';
  else if (kw.includes('福')) location.href = 'detail3.html';
  else alert('未找到该作品，请输入：生肖 / 花鸟 / 福字');
  return false;
}