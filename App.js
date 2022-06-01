import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.coulumBox}>
      <Text style={styles.columnText}>Column</Text>
        <View style={styles.childBox}>
          <Text style={styles.boxText}>Child</Text> 
        </View>
          <View style={styles.childBox}>
             <Text style={styles.boxText}>Child</Text> 
           </View>
              <View style={styles.childBox}>
                <Text style={styles.boxText}>Child</Text>
              </View>
  
       <View style={styles.rowAligned}>
          <Text style={styles.rowstyele}>Row</Text>
        </View>
        <View style={styles.rowBox}> 
          <View style={styles.childRow}>
            <Text style={styles.boxText}>Child</Text>
          </View>
          <View style={styles.childRow}>
            <Text style={styles.boxText}>Child</Text>
          </View>
            <View style={styles.childRow}>
              <Text style={styles.boxText}>Child</Text>
            </View>
      </View>
    </View>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    marginRight: '25%',
    

  },
 
coulumBox:{
    width: 150,
    height: 250,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    marginVertical: '1%',
    marginLeft: '15%',
    marginRight: '70%',
    justifyContent: 'left'
},



childBox: {
    
    width: 100,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green',
    marginVertical: '5%',
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly'
},

rowBox:{
  
  flexDirection: 'row',
  justifyContent:'flex-start',
  alignItems:'flex-end',
  width: 400,
  height: 115,
  alignItems: 'center',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gree',
  marginLeft: '170%',
  marginTop: '-55%',
  justifyContent: 'space-evenly'
},

childRow: {
  width: 100,
  height: 50,
  alignItems: 'center',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'green',
  marginVertical: '5%',
  marginBottom: '1%',
  backgroundColor: 'lightgray',
  justifyContent: 'center'
},

rowAligned: 
{ 
 padding: 55,
 justifyContent: 'left',
 


},

rowstyele:{
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold',
  enum: 'top'

},


boxText:{
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold'

},

columnText:{
  color:'black',
  fontSize: 20,
  fontWeight: 'bold'
}


});
