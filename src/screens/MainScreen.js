import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const MainScreen = ({ navigation }) => {
  const groups = useSelector(state => state.todos.groups);

  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      {groups.map(group => (
        <View key={group.id} style={{ marginTop: 10,  }}>
          <Button
            title={`${group.name} (${group.tasks.length})`}
            onPress={() => navigation.navigate('Group', { groupId: group.id })}
          />
        </View>
      ))}
    </View>
  );
};

export default MainScreen;