import { RouteConfig } from "vue-router";

export function auth({ next, router }: { next: any; router: any }) {
  if (!localStorage.getItem("jwt")) {
    return router.push({ name: "Home" });
  }
  return next();
}

export function withAuth(route: RouteConfig) {
  const _route = Object.assign({}, route)
  _route.meta = _route.meta || {};
  _route.meta.middleware = (_route.meta.middleware || [])
  _route.meta.middleware.push(auth)
  return _route
}
