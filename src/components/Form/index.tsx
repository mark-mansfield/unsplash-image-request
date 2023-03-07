import { IApi } from '../../types';

interface IForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  selected: IApi;
}

export const Form = ({ handleSubmit, isLoading, selected }: IForm) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="form" disabled={isLoading} placeholder="Example: superman" />
      <select name="api" defaultValue={""}>
        <option label="use Fetch API" value="fetch"></option>
        <option label="use Axios" value="axios"></option>
      </select>
      <button disabled={isLoading}>Search</button>
    </form>
  );
};
