import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3000';

  const cloned = req.clone({
    url: `${baseUrl}${req.url}`,
  });

  return next(cloned);
};
