import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const MenuScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.view}><Text>Menu Screen</Text></View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    }
})

export default MenuScreen;