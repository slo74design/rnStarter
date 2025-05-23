import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="p-10">
                <Link href="/products" asChild>
                    <CustomButton
                        className="mb-5"
                        bgcolor="bg-slate-100"
                        txtcolor="text-slate-800"
                    >
                        Link to products
                    </CustomButton>
                </Link>

                <CustomButton
                    className="mb-5"
                    bgcolor="bg-slate-800"
                    txtcolor="text-slate-50"
                    onPress={() => router.push("/profile")}
                >
                    Go to Profile
                </CustomButton>

                <CustomButton
                    className="mb-5"
                    bgcolor="bg-slate-800"
                    txtcolor="text-slate-50"
                    onPress={() => router.push("/settings")}
                >
                    Go to Settings
                </CustomButton>

                <CustomButton
                    txtcolor="text-slate-800"
                    variant="text-only"
                    className="my-5"
                    onPress={() => router.push("/products")}
                >
                    Variant Text-Only
                </CustomButton>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
