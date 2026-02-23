document.addEventListener('DOMContentLoaded', () => {

  // Sidebar / Hamburger
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  const closeSidebar = () => {
    hamburger?.classList.remove('active');
    sidebar?.classList.remove('active');
    sidebarOverlay?.classList.remove('active');
  };

  hamburger?.addEventListener('click', () => {
    hamburger.classList.add('active');
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
  });

  closeBtn?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);
  sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Project Modal
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      modalTitle.textContent = btn.getAttribute('data-title');
      modalDescription.textContent = btn.getAttribute('data-description');
      modal.style.display = 'flex';
    });
  });

  closeModal?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
// 
// ===== Home Skills Toggle =====
const skillsToggle = document.getElementById('skillsToggle');
const skillsList = document.getElementById('skillsContainer');

if (skillsToggle && skillsList) {
  skillsToggle.addEventListener('click', () => {
    skillsList.classList.toggle('show');

    const toggleText = skillsToggle.querySelector('.toggle-text');
    if (skillsList.classList.contains('show')) {
      toggleText.textContent = 'Hide Skills';
    } else {
      toggleText.textContent = 'View My Skills';
    }
  });
}
});