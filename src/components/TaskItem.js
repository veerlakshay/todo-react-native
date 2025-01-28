import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';

const TaskItem = ({ task, toggleStatus, deleteTask }) => {
    return (
        <View style={styles.taskCard}>
            <Text
                style={[
                    styles.taskTitle,
                    { textDecorationLine: task.status === 'done' ? 'line-through' : 'none' },
                ]}
            >
                {task.title}
            </Text>
            <Text style={[styles.statusText, task.status === 'done' ? styles.done : styles.due]}>
                {task.status.toUpperCase()}
            </Text>
            <TouchableOpacity
                style={[
                    styles.toggleButton,
                    task.status === 'done' && styles.toggleButtonDone,
                ]}
                onPress={() => toggleStatus(task.id)}
            >
                <Text style={styles.toggleButtonText}>
                    {task.status === 'due' ? 'Mark Done' : 'Mark Due'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(task.id)}>
                <Icon name="trash-can-outline" size={24} color="#f44336" />
            </TouchableOpacity>
        </View>
    );
};

export default TaskItem;
