import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                animation: "fade",
                headerShadowVisible: false,
                contentStyle: { backgroundColor: "#fff" },
            }}
        >
            <Stack.Screen name="home/index" options={{ title: "Home" }} />
            <Stack.Screen
                name="products/index"
                options={{ title: "Products" }}
            />
            <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
            <Stack.Screen
                name="settings/index"
                options={{ title: "Settings" }}
            />
        </Stack>
    );
};

export default StackLayout;
