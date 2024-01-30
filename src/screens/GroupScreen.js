import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../redux/todosSlice';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const GroupScreen = ({ route }) => {
  const { groupId } = route.params;
  const group = useSelector(state => state.todos.groups.find(group => group.id === groupId));
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.length > 0) {
      dispatch(addTask({ groupId, task: { name: taskName } }));
      setTaskName('');
    } else {
      Alert.alert('Please enter a task.');
    }
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask({ groupId, taskId }));
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 15, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        Group {groupId}
      </Text>
      <View style={{ paddingBottom: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingHorizontal: 10 }}>
        <TextInput
          style={{ fontSize: 17, flex: 1, borderWidth: 1, padding: 10 }}
          placeholder="Enter task"
          value={taskName}
          onChangeText={text => setTaskName(text)}
        />
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleAddTask}>
          <Text style={{ color: 'blue' }}>Add</Text>
        </TouchableOpacity>
      </View>
      {group.tasks.map(task => (
        <View key={task.id} style={{  flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingRight: 30, marginBottom: 5 }}>
          <Text style={{ padding: 5, fontSize: 17, flex: 1 }}>{task.name}</Text>
          <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default GroupScreen;