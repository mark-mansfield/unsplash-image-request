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
    //  missing Iterable error
    // couldnt get my ts config set correctly to remove this
    const { form, api } = Object.fromEntries(formData);

    if (form.toString().trim().length === 0) return;

    setQuery(form.toString());
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
