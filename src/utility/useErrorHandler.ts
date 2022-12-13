import { useToastStore } from "@/store/ui/toastStore";

export default function useErrorHandler () {
  const toastStore = useToastStore();

  function showError (errorText: string) {
    toastStore.openToast({
      toastType: 'error',
      toastTitle: 'Error',
      toastName: 'error-handle-message',
      toastText: errorText,
      toastDuration: 5000
    });
  }

  return {
    showError
  }
}
