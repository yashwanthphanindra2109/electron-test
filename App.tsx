import useCachedResources from "hooks/useCachedResources";
import React from "react";
import Apps from "./src/Apps";
export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return <Apps />;
  }
}
