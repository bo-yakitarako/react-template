import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { app } from '../modules/app';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useAppSelector(({ count }) => count);

  const handleCount = useCallback(
    (changeAmount: number) => () => {
      dispatch(app.actions.change(changeAmount));
    },
    [],
  );

  return (
    <>
      <button onClick={handleCount(-1)}>まいなす1</button>
      <span>{count}</span>
      <button onClick={handleCount(1)}>ぷらす1</button>
    </>
  );
};

export { App };
