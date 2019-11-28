import {toast} from 'react-toastify';

const toastMiddleware = () => (next) => (action) => {
  if(action.toast) {
    toast(action.toast.msg, action.toast.opcoes);
  }
  return next(action);
}
export default toastMiddleware;
