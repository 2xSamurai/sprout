import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { styles } from './style';

import { useSelector, useDispatch } from 'react-redux'
import {setOnboarding} from '../../redux/app/operations';

const Main = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text>Maio</Text>
            <Pressable onPress={() => {
                    dispatch(setOnboarding(1, true ));
            }}>
                <Text>Set Onboarding</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Main;
