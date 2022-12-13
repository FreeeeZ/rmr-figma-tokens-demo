export interface IToastStore {
  openedToasts: Array<IToastItem>;
}

export interface IToastItem {
  toastId?: number;
  toastName: string;
  toastType: string;
  toastTitle?: string;
  toastText: string;
  toastDuration: number;
}
