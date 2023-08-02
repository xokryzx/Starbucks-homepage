const $search = document.querySelector('.submenu__search');
const $searchInput = $search.querySelector('.search__input');
const $searchIcon = $search.querySelector('.search__material-icons');

$searchIcon.addEventListener('click', () => {
  $searchInput.focus();
});
$searchInput.addEventListener('focus', () => {
  $search.classList.add('focused');
  $searchInput.setAttribute('placeholder', '통합검색');
});
$searchInput.addEventListener('blur', () => {
  $search.classList.remove('focused');
  $searchInput.setAttribute('placeholder', '');
});

const $badgeContainer = document.querySelector('.badge-container');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to($badgeContainer, 0.6, {
        display: 'none',
        opacity: 0,
      });
    } else {
      gsap.to($badgeContainer, 0.6, {
        display: 'block',
        opacity: 1,
      });
    }
  }, 300)
);
