import { Children, Component, FC, Suspense, useRef, useState } from 'react';
import AxiosInterceptors from './AxiosInterceptors';
import ReduxPatternComponent from './ReduxPattern';
import ReduxToolkitSample from './RtoolkitSample';

import './style.css';
import SuspenseErrorBoundary from './SuspenseErrorBoundary';

export const App: FC<{ name: string }> = ({ name }) => {
  return <ReduxPatternComponent />;
  return <ReduxToolkitSample />;
  return <AxiosInterceptors />;

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <SuspenseErrorBoundary />
    </div>
  );
};
