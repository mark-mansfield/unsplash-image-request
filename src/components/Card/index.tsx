import { ICard } from '../../types';
import { useContext } from 'react';
import { Button } from 'react-daisyui';
import { copyText } from '../../utils/copyToClipboard';
import './style.scss';
import { AppContext } from '../../utils/context';
export const Card = ({ res }: ICard) => {
  const { urls, alt_description, description, likes } = res;

  const { showFn } = useContext(AppContext);

  const handleCopyToClipBoard = async (content: string) => {
    copyText(content);
    showFn();
  };

  function truncate(value: string) {
    return value.length > 30 ? `${value.slice(0, 30)}...` : `${value}`;
  }
  return (
    <div className="card" role="button" tabIndex={1}>
      <img className="card__image" src={urls.small} alt={alt_description || 'photo'} loading="lazy" />
      <div className="card__hidden">
        <h4>{description ? truncate(description) : ''}</h4>
        <Button onClick={() => handleCopyToClipBoard(urls.small || '')}>copy url to clipbord</Button>
        <b>{likes}</b>
      </div>
    </div>
  );
};
