import React from "react";
import 'react-native-gesture-handler';

import NavigationComponent from "./src/navigation";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


function App(): JSX.Element {


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationComponent />
    </Provider>
  );
}

export default App;
