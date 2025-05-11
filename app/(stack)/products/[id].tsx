import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreenID = () => {
    const { id } = useLocalSearchParams();
    const prod = products.find((item) => item.id == id);

    if(!prod) {
        return <Redirect href="/" />
    }

    return (
        <View className='p-5 flex flex-col gap-y-3'>
            <Text>ProductScreenID : {id}</Text>
            <Text className="font-work-bold text-lg">{prod.title}</Text>
            <Text className="font-work-light text-base">{prod.description}</Text>
            <Text className="font-work-bold text-lg">{prod.price}$</Text>
        </View>
    )
}

export default ProductScreenID