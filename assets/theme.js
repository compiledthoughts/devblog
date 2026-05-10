// Apply saved theme before paint to prevent flash
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeBtn');
  if (!btn) return;

  function dark() { return document.documentElement.classList.contains('dark'); }

  function sync() {
    btn.textContent = dark() ? 'Light' : 'Dark';
  }

  sync();

  btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark() ? 'dark' : 'light'); } catch (_) {}
    sync();
  });
});
