export interface ApiResponse {
  results: Result[] | undefined;
}

export interface Result {
  id: string;
  urls: Urls;
  description: string;
  alt_description: string;
  likes: number;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export type IApi = "fetch" | "axios";
