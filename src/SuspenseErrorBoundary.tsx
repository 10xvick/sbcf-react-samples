import { Component, Suspense } from 'react';

export default function SuspenseErrorBoundary() {
  return (
    <ErrorBoundary>
      <Suspense fallback={'loading...'}>
        <AsyncComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error) return <>error occured, {this.state.error}</>;
    return this.props.children;
  }
}

function promiseWrapper(promise) {
  let status = 'pending';
  let result = null;
  let suspender = promise
    .then((e) => {
      status = 'success';
      result = e;
    })
    .catch((e) => {
      status = 'error';
      result = e;
    });

  return {
    read() {
      if (status == 'pending') throw suspender;
      else if (status == 'error') throw result;
      else return result;
    },
  };
}

const asyncdata = promiseWrapper(
  new Promise((res, rej) => {
    setTimeout(() => res('jroi23jroi2'), 1000);
  })
);

function AsyncComponent() {
  const data = asyncdata.read();
  return <>data: {data}</>;
}
