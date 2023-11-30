import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome, Scouting_basic_info } from '../components'
import { Footer } from '../components/common/footer/Footer'

export default function Home() {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black2 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.teal },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="125%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.tvhead} dimension="225%" />
                    ),
                    headerTitle: "Home"
                }}

            />

            <ScrollView showVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome

                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}