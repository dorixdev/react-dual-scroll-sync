export function scrollToSectionView(
  container: HTMLElement | null,
  scrollTarget: HTMLElement | null
) {
  if (!container || !scrollTarget) return;

  const containerRect = container.getBoundingClientRect();
  const targetRect = scrollTarget.getBoundingClientRect();

  const scrollTop = container.scrollTop + (targetRect.top - containerRect.top);

  container.scrollTo({
    top: scrollTop,
    behavior: 'smooth',
  });
}
