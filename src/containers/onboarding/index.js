import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    Dimensions,
    Image,
    ScrollView,
    SliderBase,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import {setOnboarding} from '../../redux/app/operations';

import colors from '../../assets/styles/colors';


import OnboardingType1 from './type1/index';


const { width, height } = Dimensions.get('window');

const SLIDE_WIDTH = width;

const Onboarding = props => {
    const [type, setType] = useState(null);
    const navigation = useNavigation();
    const SliderRef = useRef(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
        // dispatch(setOnboarding(1, true, onboardingItems.length ));
    }, []);



    return (
        <>
        {!type && <SafeAreaView style={styles.container}>
            <Pressable style={styles.typeSelector} onPress={() => setType(1)}>
                <Text style={styles.typeBtnText}>Type 1</Text>
            </Pressable>
            <Pressable style={styles.typeSelector} onPress={() => setType(2)}>
                <Text style={styles.typeBtnText}>Type 2</Text>
            </Pressable>

        </SafeAreaView>}
        {type === 1 && <OnboardingType1></OnboardingType1>}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 10,
    },
    typeSelector: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20
    },
    typeBtnText: {
        fontWeight: 'bold',
        color: colors.pDarkFont
    }

});

export default Onboarding;
