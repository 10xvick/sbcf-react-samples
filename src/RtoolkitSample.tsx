import { legacy_createStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

export default function ReduxToolkitSample() {
  return (
    <>
      {' '}
      <ReduxToolkitApp />{' '}
    </>
  );
}

const initialState = { name: 'vishal' };
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'update': {
      state.name = payload;
      break;
    }
  }

  return { ...state };
};
const store = legacy_createStore(reducer);

function ReduxToolkitApp() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}

function Child() {
  const name = useSelector((state: any) => state.name);
  const dispatch = useDispatch();
  return (
    <>
      {name}{' '}
      <input
        value={name}
        onChange={(e) => dispatch({ type: 'update', payload: e.target.value })}
      />
    </>
  );
}
