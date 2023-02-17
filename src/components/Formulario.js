/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="666"
          />
        </View>
        <View>
          <Picker
            itemStyle={{ height: 120, backgroundColor: '#fff' }}
          >
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
      </View>

      <TouchableWithoutFeedback>
        <View style={styles.btnBuscar}>
          <Text style={styles.textoBuscar}>Buscar Clima</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
   );
};

const styles = StyleSheet.create({
  formulario: {},
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
