import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import api from "/Api";

export default function Dashboard() {



  const [error, setError] = useState("");
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const produtos = await api.getProdutos();
    setProdutos(produtos);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <View style={styles.container}>
       
        <Text style={styles.title}>   OceanoCafé</Text>
        <StatusBar style="auto" />

        <ScrollView>

        {produtos.map(() => (

            
))}
          
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173c74',
    alignItems: 'center',
    justifyContent: 'center',

  },
  postContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 3
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFF"

  },
  postDescripition: {
    color: "#FFF"

  },
  title: {
    fontSize: 25,
    padding: 20,
    marginTop: 30,
    color: "#FFF"


  }

});