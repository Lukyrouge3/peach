/** 请求失败使用统一的原因，不初始化界面或路由状态。 */
export function requestErrorMessage(cause:any,status=0):string{
  const text=String(cause?.message??cause??'');
  const code=Number(status||cause?.status||text.match(/\b(400|401|403|404|408|409|413|429|500|502|503|504)\b/)?.[1]);
  const messages:Record<number,string>={400:'The submission is invalid; check your input and try again.',401:'Your session has expired; refresh the page and sign in again.',403:'This device isn\'t allowed to do this; do it on the computer running Peach.',404:'The requested content no longer exists; refresh the list.',408:'The request timed out; try again later.',409:'This action isn\'t allowed in the current state; refresh and try again.',413:'The submission is too large; reduce the amount and try again.',429:'Too many requests; try again later.',500:'The Peach service failed to process this; try again, and check the tray log if it keeps failing.',502:'The Peach service didn\'t return a result; try again later, and check the tray log if it keeps failing.',503:'The Peach service is temporarily unavailable; try again later.',504:'Timed out waiting for the service; try again later.'};
  if(/Failed to fetch|fetch failed|NetworkError|Load failed|network request failed|ERR_CONNECTION/i.test(text))return 'Can\'t connect to the Peach service; make sure the network is up and the tray service is running.';
  /* 正文里的 timeout 字样只在没有状态码时才算超时：500 的堆栈里常带着某个库的 timeout 参数名。 */
  if(cause?.name==='TimeoutError'||(!code&&/timed? ?out|timeout/i.test(text)))return 'Timed out waiting for the service; check the connection and try again.';
  if(/[㐀-鿿]/.test(text)&&!/^请求失败[（(]/.test(text))return text;
  if(messages[code])return messages[code];
  return 'The action didn\'t finish; try again, and check the tray log if it keeps failing.';
}
