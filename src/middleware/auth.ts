import { fetchToken } from "@/services";
import { fetchTokenAndCompare } from "@/utils/fetchTokenAndCompare";

export function getToken() {
  return localStorage.getItem("jwt");
}

export function setToken(token: string): void {
  localStorage.setItem('jwt', token);
}

export function auth({ next, router }: { next: any; router: any }) {
  const token = getToken();
  if (!token) {
    return router.push({ name: "Home" });
  }
  return next();
}

export async function validateToken({
  next,
  router,
}: {
  next: any;
  router: any;
}): Promise<void> {
  const token = getToken();
  if (!token) {
    return router.push({ name: "Home" });
  }
  let isValid = false;
  try {
    
    isValid = !!(await fetchTokenAndCompare(fetchToken, token))
    if (isValid) {
      return next();
    }
  } catch (error) {
    setToken('');
    return router.push({ name: "Home" });
  }
  return router.push({ name: "Home" });
}