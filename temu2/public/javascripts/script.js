// Tombol untuk hide/show sidebar di layar kecil
const btn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
  if (sidebar.style.width === '0px' || sidebar.style.width === '') {
    sidebar.style.width = '220px';
  } else {
    sidebar.style.width = '0px';
  }
});