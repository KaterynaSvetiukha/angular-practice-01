import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('accessToken');

  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }

  const apiUrl = 'http://localhost:3000';
  const isRelative = !req.url.includes('http');

  const cloned = req.clone({
    url: isRelative ? apiUrl + req.url : req.url,
    setHeaders: token ? {
      Authorization: `Bearer ${token}`
    } : {},
  });

  return next(cloned);
};
