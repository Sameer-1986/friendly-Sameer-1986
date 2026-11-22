(() => {
  const search = document.querySelector('#search');
  const controls = document.querySelector('#directory-controls');
  const cards = [...document.querySelectorAll('.card')];
  const sections = [...document.querySelectorAll('.link-section')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  let filter = 'all';
  controls.hidden = false;
  function update() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      const match = (filter === 'all' || card.dataset.category === filter) && card.dataset.search.includes(query);
      card.hidden = !match;
      if (match) visible++;
    }
    for (const section of sections) {
      const shown = section.querySelectorAll('.card:not([hidden])').length;
      section.hidden = shown === 0;
      section.querySelector('.section-title > span').textContent = `${shown} ${shown === 1 ? 'link' : 'links'}`;
    }
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    count.textContent = visible === cards.length ? `Showing all ${visible} links` : `Showing ${visible} of ${cards.length} links`;
    empty.hidden = visible !== 0;
  }
  search.addEventListener('input', update);
  for (const button of buttons) button.addEventListener('click', () => { filter = button.dataset.filter; update(); });
  const theme = document.querySelector('#theme-toggle');
  theme.hidden = false;
  theme.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark';
  });
  update();
})();
