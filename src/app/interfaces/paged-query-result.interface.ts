export interface IPagedQueryResult<T> {
  pageSize: number;
  totalItems: number;
  pageNumber: number;
  totalPages: number;
  items: T[];
}
