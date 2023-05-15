import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {productAPI} from '../../redux/api/productAPI';
import {IProduct} from '../../interfaces/products';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import {GlobalStyles} from '../../global/styles';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {addToCart} from '../../redux/slices/cartSlice';

const SingleProducts = ({route, navigation}: any): any => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.cart);
  const [product, setProduct] = useState<IProduct>();
  const findItem = cartItems.find(item => item.id === product?.id);

  const {params} = route;
  navigation.setOptions({
    headerTitle: params.title,
  });

  const {data, error, isLoading, refetch} = productAPI.useFetchOneProductQuery(
    params.id,
    {},
  );
  console.log(params);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  console.log(product);
  const onHandleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      console.log('added');
    }
  };

  if (!data && isLoading) {
    return (
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '800'}}>
        Loading ...
      </Text>
    );
  } else if (data) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
          }}>
          {product?.brand} {product?.title}
        </Text>
        <View style={styles.swiperWrapper}>
          {product && (
            <Swiper autoplay={true} loop={true} style={styles.swiperWrapper}>
              {product?.images.map(link => {
                return (
                  <Image
                    key={link}
                    source={{
                      uri: link,
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                );
              })}
            </Swiper>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 2,
            }}>
            {product?.rating &&
              new Array(5).fill(<></>).map((_, index) => {
                return (
                  <Entypo
                    key={_}
                    name="star"
                    style={{
                      color: index + 1 <= product.rating ? 'red' : 'black',
                    }}
                  />
                );
              })}
          </View>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {product?.price} $
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 15,
            fontSize: 14,
            fontWeight: '500',
            color: 'gray',
          }}>
          {product?.description}
        </Text>

        <TouchableOpacity
          onPress={onHandleAddToCart}
          style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View
            style={{
              padding: 5,
              backgroundColor: GlobalStyles.colors.main,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: GlobalStyles.colors.borderGrayColor,
                fontSize: 14,
                fontWeight: '600',
              }}>
              Add to cart {findItem && `(${findItem.count})`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default SingleProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    gap: 10,
  },
  swiperWrapper: {
    height: Dimensions.get('window').height / 2,
  },
});
