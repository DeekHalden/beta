export type MiddlewareType = Function[]

export interface Context {
  to: any;
  from: any;
  next: Function;
  router: any;
}

export interface TokenRecord {
  id: number;
  bearer: string;
}