import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import constants from '../constants/Constants';
import Header from '../components/common/Header.tsx';
import CartCard from '../components/cart/CartCard.tsx';
import Footer from '../components/common/Footer';
import BottomTab from '../routes/BottomTab';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const CartScreen = () => {
  const cartData = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<any>(0);

  // Function to clear cart on payment
  const handlePay = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  // Function to calculate total price of items in cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.items.forEach((item: any) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  };

  // Effect hook to recalculate total price when cart data changes
  useEffect(() => {
    calculateTotalPrice();
  }, [cartData]);
  return (
    <View style={styles.mainContainer}>
      <Header label={'Cart'} />
      <ScrollView style={styles.scrollContainer}>
        {cartData &&
          cartData?.items.map((item: any) => (
            <CartCard key={item.id} data={item} />
          ))}
      </ScrollView>
      <Footer
        showBar={false}
        buttonLabel={'Pay'}
        price={parseFloat?.(totalPrice).toFixed(2)}
        functionOnPress={handlePay}
      />
      <View>
        <BottomTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: constants.colors.background,
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: constants.colors.background,
    paddingHorizontal: '5%',
  },
});

export default CartScreen;
