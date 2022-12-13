import { computed, onMounted, onUnmounted, ref } from "vue";

export default function useWindowBreakpoints () {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => windowWidth.value = window.innerWidth;
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const screenBreakpointType = computed(() => {
    if (windowWidth.value < 575.98) return 'sm';
    if (windowWidth.value >= 767.98 && windowWidth.value < 991.98) return 'md';
    if (windowWidth.value >= 991.98 && windowWidth.value < 1199.98) return 'lg';
    if (windowWidth.value >= 1199.98) return 'xl';
    return null;
  });

  const width = computed(() => windowWidth.value);

  return { width, screenBreakpointType };
}
