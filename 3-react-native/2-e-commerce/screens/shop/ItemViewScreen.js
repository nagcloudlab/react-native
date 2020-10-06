import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet,
} from 'react-native';

import { ListItem} from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux';

import * as itemsApi from '../../api/items'

const ProductDetailScreen = ({ route, navigation }) => {
   
    const { itemId } = route.params;
    const dispatch = useDispatch()
   
    const item = useSelector(state => state.items.find(item => item.id === itemId))
    const reviews = useSelector(state => state.reviews[itemId] || []);

    return (
        <View>
            <ScrollView>
                <Image style={styles.image} source={{ uri: item.imageUri }} />
                <View style={styles.actions}>
                    <Button title="Add to Cart" onPress={() => { dispatch({type:'BUY',item,qty:1}) }} />
                </View>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <Text style={styles.description}>{item.description}</Text>


                <View style={styles.comments}>
                    <Button title="view comments" 
                            onPress={e => dispatch(itemsApi.loadReviews(itemId))} />
                </View>


                <View>
                    {
                        reviews.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Text>{l.author}</Text>
                                <ListItem.Content>
                                    <ListItem.Title>{l.stars}</ListItem.Title>
                                    <ListItem.Subtitle>{l.body}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>



        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    comments: {
        margin: 20
    }
});

export default ProductDetailScreen;