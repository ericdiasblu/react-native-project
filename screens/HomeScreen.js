import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Lista de Compras</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar produto"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={addTodo} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} onToggle={toggleTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: "#3881cf",
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row', // Coloca o input e o botão na mesma linha
    alignItems: 'center', // Alinha verticalmente
    marginBottom: 20,
  },
  input: {
    flex: 1, // O TextInput ocupa o máximo de espaço disponível
    padding: 10,
    backgroundColor: '#e3eefa',
    borderRadius: 5,
    color: '#0A0908',
  },
  hr: {
    width: '100%', // Define a largura da linha
    height: 1, // Define a espessura da linha
    backgroundColor: '#2a6cb5', // Define a cor da linha
    marginVertical: 20, // Adiciona um espaço acima e abaixo da linha
  },
  button: {
    backgroundColor: '#3881cf',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    height: 42,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default HomeScreen;
