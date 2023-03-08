import { IForm } from '../../types';
import { Button, Input } from 'react-daisyui';
import {Title} from '../'
import './style.scss'

export const Form = ({ handleSubmit, isLoading, selected }: IForm) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="toolbar">
         <Title text="Search Unsplash"/>
        <div className="input-group">
          <Input
            type="text"
            name="input"
            disabled={isLoading}
            placeholder="Example: superman"
            className="input input-bordered"
          />
          <select name="api" defaultValue={selected}>
            <option label="Fetch API" value="fetch"></option>
            <option label="Axios" value="axios"></option>
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

