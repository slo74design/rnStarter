import { Redirect } from "expo-router";
import React from "react";

const App = () => {
    // return <Redirect href="/(stack)/home" />;
    // return <Redirect href="/tabs" />;
    // return <Redirect href="/drawer" />;
    return <Redirect href="/(drawer)/(tabs)/(stack)/home" />;
};

export default App;
