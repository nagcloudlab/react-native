import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CartItem from '../../components/shop/CartItem';

const CartScreen = props => {
    const cart = useSelector(state => state.cart);

    let keys = Object.keys(cart)
    let cartLines = keys.map(key => {
        return cart[key];
    })

    return (
        <View style={styles.screen}>
            <FlatList
                data={cartLines}
                keyExtractor={line => line.item.id}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.qty}
                        name={itemData.item.item.name}
                        price={itemData.item.item.price}
                        amount={itemData.item.qty * itemData.item.item.price}
                        onRemove={() => { }}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
    }
});

export default CartScreen;