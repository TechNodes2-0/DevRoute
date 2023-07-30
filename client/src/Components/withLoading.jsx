// withLoading.jsx (updated)
import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";

function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate some asynchronous data loading
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    if (loading) {
      return <LoadingComponent />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
