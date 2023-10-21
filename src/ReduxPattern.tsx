import { createContext, useContext, useReducer, useState } from 'react';

const Ctx = createContext({ data: '' });

export default function ReduxPatternComponent() {
  const [state, dispatch] = useReducer(reducer, { data: 'abcd' });
  return (
    <Ctx.Provider value={state}>
      update:
      <input
        onInput={(e) => {
          dispatch({ action: 'update', payload: e.target.value });
        }}
      />
      async-update:
      <input
        onInput={(e) => {
          dispatch({
            action: 'async update',
            payload: { data: e.target.value, dispatch: dispatch },
          });
        }}
      />
      <ChildComponent />
    </Ctx.Provider>
  );
}

function ChildComponent() {
  const data = useContext(Ctx);
  return <>{data.data}</>;
}

function reducer(state, { action, payload }) {
  switch (action) {
    case 'update':
      {
        state.data = payload;
      }
      break;
    case 'async update': {
      setTimeout(() => {
        payload.dispatch({ action: 'update', payload: payload.data });
      }, 1000);
    }
  }
  return { ...state };
}
