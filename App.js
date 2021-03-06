import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

export default function App() {
  const [state, setstate] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addItem = () => {
    if (inputValue !== "") {
      const todo = { value: inputValue };
      setTodos([todo, ...todos]);
      setstate(false);
      setInputValue("");
    }
  };
  const deleteItem = (index) => {
    const newArray = todos.filter((data, indexKey) => {
      return indexKey !== index;
    });
    console.log(newArray);
    setTodos(newArray);
  };

  return (
    <View style={styles.container}>
      <Header />
      {state && (
        <View style={styles.input}>
          <TextInput value={inputValue} onChangeText={(text) => setInputValue(text)} autoFocus placeholder='ADD TASK' />
        </View>
      )}
      {todos.length ? (
        <View style={styles.main2}>
          <TasksList todos={todos} deleteItem={deleteItem} />
        </View>
      ) : (
        <View style={styles.intialScreen}>
          <Image source={{ uri: "https://i.pinimg.com/originals/52/6a/bf/526abf16cc3e74882fa7304abc0f841c.png" }} style={{ width: 200, height: 200 }} />
          <Text style={styles.screenText}>Add Todo Tasks</Text>
        </View>
      )}
      <View style={styles.main3}>
        {!state ? (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setstate(true)} style={styles.addCont}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.addingItem}>
            <TouchableOpacity activeOpacity={0.7} onPress={addItem} style={styles.addBtn}>
              <Text style={styles.addText2}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setstate(false)} style={styles.addBtn}>
              <Text style={styles.addText2}>cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  main2: {
    width: "100%",
    flex: 8,
    marginTop: 50,
  },
  main3: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-end",
    flex: 1.4,
  },
  addCont: {
    backgroundColor: "#5682e8",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 20,
    zIndex: 99
  },
  addText: {
    color: "white",
    fontSize: 30,
  },
  addText2: {
    color: "white",
    fontSize: 18,
  },
  input: {
    width: "90%",
    padding: 5,
    borderBottomWidth: 1,
  },
  addBtn: {
    backgroundColor: "#5682e8",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  addingItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  intialScreen: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    color: "#333",
    fontSize: 25
  },
});
