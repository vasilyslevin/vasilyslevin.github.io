(function(){
  const html = document.documentElement;
  const dark = matchMedia('(prefers-color-scheme: dark)').matches;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  const btn = document.querySelector('[data-theme-toggle]');
  if (btn) btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  });
})();