import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { increment, decrement } from "../store/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Text>{count}</Text>
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <StatusBar style="auto" />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
