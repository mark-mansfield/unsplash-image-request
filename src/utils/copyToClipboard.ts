export const copyText = (content: string) => {
  const _input = document.createElement('input');
  _input.value = content;
  document.body.appendChild(_input);
  _input.select();
  document.execCommand('Copy');
  document.body.removeChild(_input);

};
