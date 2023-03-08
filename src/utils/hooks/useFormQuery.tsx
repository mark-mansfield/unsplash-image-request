import { useState } from "react";
import { IApi } from "../../types";

export const useFormQuery = () => {
  const [query, setQuery] = useState("");
  const [api, setApi] = useState<IApi>("fetch");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    // @ts-ignore
    // missing Iterator error
    const { input, api } = Object.fromEntries(formData);

    if (input.toString().trim().length === 0) return;

    setQuery(input.toString());
    setApi(api.toString());

    target.reset();
    target.focus();
  };

  const handleLoading = (loading: boolean) => setIsLoading(loading);

  return {
    query,
    api,
    isLoading,
    handleSubmit,
    handleLoading
  };
};
