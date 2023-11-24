export interface SearchCriteria<T> {
  limit?: number;
  offset?: number;
  sortBy?: string | null;
  sortOrder?: string | null;
  filters?: Partial<T>;
}
