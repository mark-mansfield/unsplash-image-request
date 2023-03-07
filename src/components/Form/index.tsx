import { IApi } from '../../types';
import { Button, Input } from 'react-daisyui';
interface IForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  selected: IApi;
}

export const Form = ({ handleSubmit, isLoading, selected }: IForm) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="ImagePreview__toolbar">
        <div className="input-group">
          <Input
            type="text"
            name="form"
            disabled={isLoading}
            placeholder="Example: superman"
            className="input input-bordered"
          />
          <select name="api" defaultValue={''}>
            <option label="use Fetch API" value="fetch"></option>
            <option label="use Axios" value="axios"></option>
          </select>
          <Button className="btn btn-square" disabled={isLoading}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
};

