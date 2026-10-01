document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const screenCards = document.querySelectorAll('.screen-card');

  const applyFilter = (filter) => {
    let visibleCount = 0;

    screenCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.group === filter;
      card.classList.toggle('is-hidden', !matches);
      if (matches) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    const gallery = document.querySelector('.screen-grid');
    if (gallery) gallery.setAttribute('aria-label', `${visibleCount} ${filter === 'all' ? '' : `${filter} `}prototype screens`);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((nav) => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const progressBar = document.querySelector('.progress-bar-fill');
  if (progressBar) {
    const setProgress = () => {
      const value = progressBar.style.width || '64%';
      progressBar.animate(
        [{ width: '0%' }, { width: value }],
        { duration: 900, easing: 'ease-out' }
      );
    };

    requestAnimationFrame(setProgress);
  }
});
