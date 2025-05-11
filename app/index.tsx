import { Redirect } from "expo-router";
import React from "react";

const App = () => {
    return <Redirect href="/home" />;
    // return (
    //     <SafeAreaView className="bg-secondary">
    //         <View className="m-10">
    //             <Text className="text-3xl font-work-bold text-primary">
    //                 Welcome Salva
    //             </Text>
    //             <Link href="/products">Go to products</Link>
    //         </View>
    //     </SafeAreaView>
    // );
};

export default App;
