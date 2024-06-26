export const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PROD_URL
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? process.env.NEXT_PUBLIC_STAGING_URL
      : process.env.NEXT_PUBLIC_LOCAL_URL;

export enum RoutePath {
  USER = 'user',
  AUTH = 'auth',
  PRODUCT = 'product',
  USER_GROUP = 'user-group',
}

export enum QueryKey {
  USERS = 'users',
  SEARCH = 'search',
  PRODUCTS = 'products',
  BRANDS = 'brands',
  SELLERS = 'sellers',
  PRODUCT_TYPES = 'productTypes',
  USER_GROUPS = 'userGroups',
}
