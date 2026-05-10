document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('search');
  var list  = document.getElementById('postList');
  var noRes = document.getElementById('noResults');
  if (!input || !list) return;

  var items = Array.from(list.querySelectorAll('.post-item'));

  input.addEventListener('input', function () {
    var q = this.value.toLowerCase().trim();
    var count = 0;

    items.forEach(function (item) {
      var text = (item.dataset.search || '').toLowerCase();
      var show = !q || text.includes(q);
      item.style.display = show ? '' : 'none';
      if (show) count++;
    });

    if (noRes) noRes.style.display = count === 0 ? '' : 'none';
  });
});
