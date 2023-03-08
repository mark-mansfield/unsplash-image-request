import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { ApiResponse, IGridResults } from "../../types";
import {
  getImagesFetch,
  getImagesAxios,
  requestApi
} from "../../utils/imageRequests";
import { Loading } from "../Loading";
import { Card } from "../Card";
import "./style.scss"

export const GridLayout = ({ query, api, handleLoading }: IGridResults) => {
  const { data, isLoading, error, isError } = useQuery<ApiResponse>(
    [query, api],
    () => requestApi(api, query, getImagesFetch, getImagesAxios)
  );

  useEffect(() => handleLoading(isLoading), [isLoading, handleLoading]);

  if (isLoading) return <Loading />;

  if (isError) return <p>{(error as AxiosError).message}</p>;

  const hasData = data?.results && data?.results?.length > 0;

const headerText = hasData ? "Results with: " : "No Results with: ";

  const results = data?.results?.map((res) => (
          <Card key={res.id} res={res} />
        ))

  return (
    <div className="results">
      <p>
        {headerText}
        <span className="results__query">{query}</span>
      </p>

      <div className="results__images__wrapper">
      <div className="results__images__wrapper__grid">
        {results}
      </div>
      </div>
    </div>
  );
};
