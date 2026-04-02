export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight - 16,
      behavior: 'smooth',
    });
  }
}
