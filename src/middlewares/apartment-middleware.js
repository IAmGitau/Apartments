import { Middleware } from 'kasky';

@Middleware()
class ApartmentMiddleware {
  handle(req, res, next) {
    next();
  }
}

export default ApartmentMiddleware;
