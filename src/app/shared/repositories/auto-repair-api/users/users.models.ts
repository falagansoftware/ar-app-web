export interface User {
  uid: string;
  name: string;
  surname: string;
  email: string;
}
export interface FindUsersCriteria {
  limit?: number;
  offset?: number;
  sortBy?: string | null;
  sortOrder?: string | null;
  filters: Partial<User>;
}
