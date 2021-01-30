import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { addToCart } from '../store/cart';
import { Colors, Font } from '../constants/theme';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSiteDirection } from '../components/AppDirectionProvider';

const ProductDetailScreen = () => {
  //TODO: Make a way to fetch from API (Low Priority).
  const [product, setProduct] = useState<object>({});
  const [isInTheCart, setIsInTheCart] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();
  const { directionStyles } = useSiteDirection();

  useEffect(() => {
    setProduct({
      ...route.params
    });

    // Cleanup on unmount
    return () => {
      setProduct({});
      setIsInTheCart(false);
    };
  }, []);

  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <SafeAreaView
      style={[styles.root, { direction: directionStyles.direction }]}
    >
      <ScrollView>
        <View style={styles.imageWrapper}>
          {product.image ? (
            <Image style={styles.image} source={{ uri: product.image }} />
          ) : null}
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.category}>in {product.category}</Text>
          <Text style={styles.price}>
            <Text style={styles.currency}>AED</Text> {product.price}
          </Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.ctaWrapper}>
        <TouchableOpacity style={styles.cta} onPress={addItemToCart}>
          <MaterialCommunityIcons
            name="cart-plus"
            size={24}
            color={Colors.Grease}
          />
          <Text style={styles.ctaText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageWrapper: {
    width: '100%',
    height: 400,
    flex: 1,
    padding: 0
  },
  image: {
    height: '100%',
    resizeMode: 'cover'
  },
  detailsWrapper: {
    padding: 16
  },
  ctaWrapper: {
    padding: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  cta: {
    borderRadius: 6,
    backgroundColor: Colors.White,
    borderColor: Colors.Grease,
    paddingVertical: 16,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctaText: {
    fontFamily: Font.MavenProMedium,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.Grease,
    marginHorizontal: 8
  },
  title: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontFamily: Font.MavenProMedium,
    fontSize: 18,
    color: Colors.Grease,
    marginBottom: 12
  },
  category: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontFamily: Font.MavenProNormal,
    fontSize: 12,
    color: Colors.Clay,
    marginBottom: 12
  },
  description: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontFamily: Font.MavenProNormal,
    fontSize: 14,
    color: Colors.Grease,
    marginBottom: 100
  },
  price: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontFamily: Font.MavenProBold,
    fontSize: 18,
    color: Colors.Flame,
    marginBottom: 12
  },
  currency: {
    fontFamily: Font.MavenProBold,
    fontSize: 12,
    color: Colors.Flame
  }
});

export default ProductDetailScreen;
