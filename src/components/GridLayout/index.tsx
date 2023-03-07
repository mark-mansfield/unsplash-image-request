import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { Card } from "../Card";
import { ApiResponse, IApi } from "../../types";
import {
  getImagesFetch,
  getImagesAxios,
  requestApiFactory
} from "../../utils/imageRequests";
import { Loading } from "../Loading";

interface IGridResults {
  handleLoading: (e: boolean) => void;
  query: string;
  api: IApi;
}

export const GridLayout = ({ query, api, handleLoading }: IGridResults) => {
  const { data, isLoading, error, isError } = useQuery<ApiResponse>(
    [query, api],
    () => requestApiFactory(api, query, getImagesFetch, getImagesAxios)
  );

  useEffect(() => handleLoading(isLoading), [isLoading, handleLoading]);

  if (isLoading) return <Loading />;

  if (isError) return <p>{(error as AxiosError).message}</p>;

  const hasData = data?.results && data?.results?.length > 0;

  return (
    <>
      <p className="no-results">
        {hasData ? "Results with: " : "No Results with: "}
        <b>{query}</b>
      </p>

      <div className="grid">
        {data?.results?.map((res) => (
          <Card key={res.id} res={res} />
        ))}
      </div>
    </>
  );
};
