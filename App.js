import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  keyboard,
} from 'react-native';
import Formulario from './src/components/Formulario';

function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: '',
  });

  const ocultarTeclado = () => {
    keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => ocultarTeclado}>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
