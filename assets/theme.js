(function(){
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  const sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = stored ? stored === 'dark' : sysDark;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');

  const btn = document.querySelector('[data-theme-toggle]');
  if (btn) btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();