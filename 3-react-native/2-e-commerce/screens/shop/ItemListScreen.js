


import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import * as itemsApi from '../../api/items'
import Item from '../../components/shop/Item';

const ItemListScreen = ({ navigation }) => {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(itemsApi.loadItems())
    }, [])
    const renderItem = item => {
        return (
            <Item
                value={item}
                onItemView={e => navigation.push('ItemView',{itemId:item.id,name:item.name})}
                onAddToCart={() => { dispatch({type:'BUY',item,qty:1}) }} />
        )
    }
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={itemData => renderItem(itemData.item)}
            />
        </View>
    )
}

export default ItemListScreen;
