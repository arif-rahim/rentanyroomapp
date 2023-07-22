
import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const SearchDropdown = ({ data, onSelect }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
  
    const handleSearch = (text) => {
      setSearchText(text);
  
      const filteredItems = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filteredItems);
    };
  
    const renderItem = ({ item }) => (
      <ListItem
        title={item}
        onPress={() => onSelect(item)}
        bottomDivider
      />
    );
  
    return (
      <View>
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };
  export default SearchDropdown;
  