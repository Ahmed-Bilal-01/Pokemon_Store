import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/actions';
import TransparentView from '../components/common/TransparentView';
import Footer from '../components/common/Footer';
import constants from '../constants/Constants';
import {useRoute} from '@react-navigation/native';
import api from '../api_calls/api';
import QualitiesView from '../components/details-screen/QualitiesView';

const PokemonDetailsScreen = () => {
  const route = useRoute<any>();
  const id = route.params.id;
  const heading = route.params.name;

  const [itemId, setItemId] = useState(id);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  useEffect(() => {
    fetchData(); // Initial data fetch
  }, []);

  const fetchData = () => {
    setShowModal(true); // Show modal when making API call
    api
      .Get(`/pokemon/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setShowModal(false); // Hide modal when response is received
      });
  };

  //It will check if same id pokemon exists, if it exists it will add to its quanitity otherwise new object will be created
  const storeData = () => {
    const existingCartItem = cartData.items.find(
      (item: any) => item.id === itemId,
    );

    if (existingCartItem) {
      const updatedItems = cartData.items.map((item: any) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      dispatch({
        type: 'UPDATE_CART',
        payload: updatedItems,
      });
    } else {
      dispatch(
        addToCart({
          id: data.id,
          // image: props.data.image,
          heading: data.name,
          buttonLabel: 'Price',
          quantity: 1,
          price: 3.3,
        }),
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            resizeMode={'stretch'}
            style={styles.image}>
            <TransparentView
              headingText={heading}
              height={data.height}
              weight={data.weight}
            />
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <View style={styles.rowContainer}>
            <QualitiesView
              heading={'Abilities'}
              qualitiesStyle={{borderRightWidth: 2}}
              data={data.abilities}
              qualityName={'ability'}
              qualityKey={'name'}
            />
            <QualitiesView
              heading={'Species'}
              data={data.species}
              qualityName={'specie'}
              qualityKey={'name'}
            />
          </View>
          <View style={styles.rowContainer}>
            <QualitiesView
              heading={'Moves'}
              qualitiesStyle={{borderRightWidth: 2}}
              data={data.moves}
              qualityName={'move'}
              qualityKey={'name'}
            />
            <QualitiesView
              heading={'Types'}
              data={data.types}
              qualityName={'type'}
              qualityKey={'name'}
            />
          </View>
        </View>
      </ScrollView>
      <Footer
        price={3.3} // Set your price here
        buttonLabel={'Add to Cart'}
        functionOnPress={storeData}
      />
      {/* Modal with Activity Indicator */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal || loading}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color={constants.colors.lightPeach} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
  },
  scrollContainer: {
    backgroundColor: constants.colors.background,
    height: '80%',
  },
  imageContainer: {
    height: 350,
    width: '100%',
  },
  image: {
    height: '100%',
  },
  transparentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    paddingTop: 15,
  },
  body: {
    paddingHorizontal: '5%',
    paddingVertical: '4%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 70,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonDetailsScreen;