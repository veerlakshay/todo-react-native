import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Keyboard } from 'react-native';
import TaskItem from './src/components/TaskItem';
import styles from './src/styles/styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = () => {
    if (title.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), title: title.trim(), status: 'due' },
      ]);
      setTitle('');
      Keyboard.dismiss();
    } else {
      alert('Task title cannot be empty!');
    }
  };

  const toggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>To-Do App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task title..."
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask} disabled={!title.trim()}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleStatus={toggleStatus} deleteTask={deleteTask} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
