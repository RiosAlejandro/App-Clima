import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  keyboard,
} from 'react-native';
import Clima from '../components/Clima';
import Formulario from '../components/Formulario';

const Home = () => {

  const ocultarTeclado = () => {
    keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Clima />
            <Formulario />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
   );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(71, 149, 212)',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default Home;
