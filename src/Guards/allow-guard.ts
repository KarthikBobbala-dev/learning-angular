import { CanActivateFn } from '@angular/router';

export const allowGuard: CanActivateFn = (route, state) => {
  console.log('checking***')
  return false;
};
