import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";


export default function ShortcutsDetail(props) {
  const {shortcut, onPress} = props;
  // console.log(shortcut);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.resultContainer}
      > 
      <View>
        <Text style={styles.resultTitle}>{shortcut.title}</Text>
        <Text style={styles.resultSoft}>{shortcut.software.name}</Text>
        <View style={styles.catContainer}>
          {shortcut.categories.map((c) => (
            <Text style={styles.resultCat} key={c.id}>{c.name}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  resultContainer: {
    backgroundColor: 'white',
    width: '90%',
    paddingHorizontal:10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#114A8A",
    borderRadius: 5,
    marginBottom:10,
  },
  catContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  resultSoft: {
    backgroundColor: '#186BC9',
    color: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight:"500",
    textAlign: 'center',
  },
  resultCat: {
    backgroundColor: '#6AAFFD',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight:"500",
    textAlign: 'center',
  },
  resultTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: "600",
    fontSize:18,
  },
});