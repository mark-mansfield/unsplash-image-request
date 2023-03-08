type ITitle = { text: string };

export const Title :React.FC<ITitle>  = ({ text }) => {
  return <h1>{text}</h1>;
};
