import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import constants from '../constants/Constants';
import Header from '../components/common/Header.tsx';
import BottomTab from '../routes/BottomTab';
import api from '../api_calls/api';
import NetworkLogger from 'react-native-network-logger';
import PokemonCard from '../components/home/PokemonCard.tsx';

const HomeScreen = () => {
  const [offset, setOffset] = useState(0);
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    fetchData(); // Initial data fetch
  }, [offset]);

  const fetchData = () => {
    setShowModal(true); // Show modal when making API call
    api
      .Get(`/pokemon?limit=20&offset=${offset}`)
      .then(response => {
        setPokemonData((prevData: any) => [
          ...prevData,
          ...response.data.results,
        ]); // Concatenate new data with previous data
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setShowModal(false); // Hide modal when response is received
      });
  };

  const handleEndReached = () => {
    setOffset(prevOffset => prevOffset + 5); // Increment offset by 5 when end of list is reached
  };

  //this Component will render in Flatlist
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <PokemonCard data={item} id={index + 1} />
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Find the best Pokemon for you</Text>
        <FlatList
          data={pokemonData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listsContainer}
          onEndReached={handleEndReached} // Call handleEndReached function when end of list is reached
          onEndReachedThreshold={0.5} // Load more data when the end is within half the visible length
        />
        <Modal transparent={true} visible={showModal}>
          <View style={styles.modalContainer}>
            <ActivityIndicator
              size="large"
              color={constants.colors.lightPeach}
              style={styles.activityIndicator}
            />
          </View>
        </Modal>
      </View>
      <View style={styles.bottomTab}>
        <BottomTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  innerContainer: {
    backgroundColor: constants.colors.background,
    paddingBottom: 120,
  },
  heading: {
    color: constants.colors.white,
    marginVertical: '4%',
    fontSize: 28,
    fontWeight: '700',
    width: '60%',
    marginLeft: '5%',
    fontFamily: 'Poppins-Regular',
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
  },
  listsContainer: {
    paddingHorizontal: '5%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  activityIndicator: {
    alignSelf: 'center',
  },
});

export default HomeScreen;
