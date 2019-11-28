import * as Type from '../constants/toast';
export const ToastTypes = Type.TYPE;
export const buildToast = (msg, opcoes) => ({
  msg,
  opcoes,
});

export default (msg,opcoes) => ({
  type: 'SHOW_TOAST',
  toast: buildToast(msg, opcoes),
});