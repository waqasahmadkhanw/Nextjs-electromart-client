export interface PublicApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}