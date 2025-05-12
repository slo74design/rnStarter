import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>CustomDrawer</Text>
            </View>

            {/* Items del Drawer */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
