export function scrollToTargetAdjusted(id: string, numberTop: number) {
  const element = document.getElementById(id);
  const elementPosition = element?.getBoundingClientRect().top ?? 0;

  const offsetPosition = elementPosition + globalThis.window.pageYOffset - numberTop;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
