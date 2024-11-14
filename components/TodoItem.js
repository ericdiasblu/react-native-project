import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        <Icon
          name={item.completed ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color="#22333B"
        />
      </TouchableOpacity>
      <Text style={[styles.text, item.completed && styles.completed]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Icon name="delete" size={24} color="#3881cf" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#cbdff5',
    borderRadius: 5,
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#0A0908',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#5E503F',
  },
});

export default TodoItem;
