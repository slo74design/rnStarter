import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductScreen = () => {
    return (
        <View className="p-5 flex flex-1 w-full">
            <Text className="text-xl font-work-bold mb-3 uppercase text-center w-full py-2 rounded-lg bg-red-200">Products List</Text>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id }
                renderItem={({item}) => (
                    <View className="py-2 border-b border-slate-200">
                        <Text className="font-work-bold text-lg">{item.title}</Text>
                        <Text className="font-work-light text-sm line-clamp-3">{item.description}</Text>
                        <View className="flex flex-row justify-between items-center font-work-regular text-sm mt-2">
                            <Text>{item.price}$</Text>
                            <Link href={`/products/${item.id}`}>
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductScreen;
