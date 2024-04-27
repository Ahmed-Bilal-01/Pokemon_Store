import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import constants from '../../constants/Constants';
import {useDispatch, useSelector} from 'react-redux';

interface OrderedItemProps {
  id?: number;
  selectedQuantity?: number;
  customStyle?: any;
  selectedSizeName?: string;
}

const OrderedItemCounter = (props: OrderedItemProps) => {
  const [orderCounter, setOrderCounter] = useState<any>(props.selectedQuantity);
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);

  //When click on minus button it will trigger when it reach 1 quantity on further press will deleted item from cart
  const handleDecrement = () => {
    setOrderCounter(orderCounter - 1);
    const existingCartItem = cartData.items.find(
      (item: any) => item.id === props.id,
    );
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      if (updatedItem.quantity === 0) {
        dispatch({
          type: 'REMOVE_FROM_CART',
          payload: props.id,
        });
      } else {
        dispatch({
          type: 'UPDATE_CART',
          payload: [updatedItem],
        });
      }
    }
  };
  // Will trigger for plus button to add quantity of item
  const handleIncrement = () => {
    setOrderCounter(orderCounter + 1);
    const existingCartItem = cartData.items.find(
      (item: any) => item.id === props.id,
    );
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      dispatch({
        type: 'UPDATE_CART',
        payload: [updatedItem],
      });
    }
  };

  useEffect(() => {
    setOrderCounter(props.selectedQuantity);
  }, [props.selectedQuantity]);

  const handleInputChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const updatedValue =
      numericValue === '' || numericValue === '0' ? '1' : numericValue;
    setOrderCounter(updatedValue);
    const existingCartItem = cartData.items.find(
      (item: any) => item.id === props.id,
    );
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: parseInt(updatedValue),
      };
      dispatch({
        type: 'UPDATE_CART',
        payload: [updatedItem],
      });
    }
  };

  return (
    <View style={[props.customStyle, {justifyContent: 'space-between'}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
            -
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.orderQuantityText}
          value={orderCounter.toString()}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: constants.colors.lightPeach,
    height: 34,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  orderQuantityText: {
    width: 57,
    paddingVertical: 0,
    marginHorizontal: 12,
    backgroundColor: constants.colors.darkGray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: constants.colors.lightPeach,
    fontFamily: 'Poppins-Regular',
    color: constants.colors.white,
    textAlign: 'center',
  },
});

export default OrderedItemCounter;
