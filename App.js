import store from "./store/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Gallery from "./Components/Gallery";
import Counter from "./Components/Counter";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Counter" component={Counter} />
          <Tab.Screen name="Gallery" component={Gallery} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
