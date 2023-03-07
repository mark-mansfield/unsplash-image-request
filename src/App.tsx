import { useFormQuery } from "./utils/hooks/useFormQuery";
import { Title, Form, GridLayout } from "./components";
import "./style.scss";

export default function App() {
  const { handleLoading, handleSubmit, isLoading, query, api } = useFormQuery();

  return (
    <div>
      <Title />
      <Form handleSubmit={handleSubmit} isLoading={isLoading} selected={api} />
      {query.length > 0 && (
        <GridLayout query={query} handleLoading={handleLoading} api={api} />
      )}
    </div>
  );
}
