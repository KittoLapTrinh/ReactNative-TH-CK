import React from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide } from '../redux/action';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { setA, setB} from '../redux/action';


    
const Calculator = ({a, b, result, setA, setB, add, subtract, multiply, divide}) => {

  const handleInputChange = (event, target) => {
      const num = parseInt(event.target.value);
      if (target === 'a') {
          setA(num);
      } else if (target === 'b') {
          setB(num);
      }
  };

  return(
      <View style={styles.container}>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30}}>Nhập a: </Text>
              <TextInput style={{ width: 200, height: 30, border: '1px solid black', padding: 5, borderRadius: 5, fontSize: 20}} value={a} onChange={(e) => handleInputChange(e, 'a')}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
              <Text style={{fontSize: 30}}>Nhập b: </Text>
              <TextInput style={{ width: 200, height: 30, border: '1px solid black', padding: 5, borderRadius: 5, fontSize: 20}} value={b} onChange={(e) => handleInputChange(e, 'b')}/>
          </View>
          <View style={{margin: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30}}>Kết quả: </Text>
              <Text style={{ width: 200, height: 30, border: '1px solid black', padding: 5, borderRadius: 5, color: 'red', fontWeight: 'bold', fontSize: 20}}>{result}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                  onPress={
                                      () => subtract()
                                  }>
                  <Text style={{fontSize: 50}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                  onPress={
                                      () => add()
                                  }>
                  <Text style={{fontSize: 50}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center', marginRight: 20}}
                                  onPress={
                                      () => multiply()
                                  }>
                  <Text style={{fontSize: 50}}>x</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center'}}
                                  onPress={
                                      () => divide()
                                  }>
                  <Text style={{fontSize: 50}}>/</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

var mapStateToProps = (state) =>({
  a: state.a,
  b: state.b,
  result: state.result,
})

var mapDispatchToProps = {
  setA,
  setB,
  add,
  subtract,
  multiply,
  divide,
};


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);