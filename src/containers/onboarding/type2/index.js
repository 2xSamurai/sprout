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
import {setOnboarding} from '../../../redux/app/operations';

import colors from '../../../assets/styles/colors';

import Slider from '../../../components/Slider';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

const { width, height } = Dimensions.get('window');

const SLIDE_WIDTH = width;

const StepHeader = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <View style={styles.wrapHeader}>
            <Pressable style={styles.btnSkip} onPress={() => dispatch(setOnboarding('', false))}>
                <Text style={styles.btnSkipText}>Skip</Text>
            </Pressable>
        </View>
    );
}
const StepFooter = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const oboardingData = useSelector((state) => state?.app?.onboarding);

    return (
        <View style={styles.wrapFooter}>
            <View style={styles.wrapStep}>
                <Text style={styles.stepText}>
                    Step {oboardingData.step} of {oboardingData.total}
            </Text>
            </View>
            <Pressable style={styles.btnNext} onPress={() => {
                
                (oboardingData.step < oboardingData.total) ? 
                props.nextSlide(oboardingData.step) : dispatch(setOnboarding(oboardingData.step, false));
            }}>
                <Text style={styles.btnNextText}>{oboardingData.total === oboardingData.step ? 'Start': 'Next'}</Text>
            </Pressable>
        </View>
    );
}


const OnboardingType1 = props => {
    const navigation = useNavigation();
    const SliderRef = useRef(null);
    

    const dispatch = useDispatch();
    const onboardingItems = [
        { id: 1, component: <StepOne /> },
        { id: 2, component: <StepTwo />  },
        { id: 3, component: <StepThree />  },
    ]

    useEffect(() => {
        dispatch(setOnboarding(1, true, onboardingItems.length ));
    }, []);

    const renderItem = ({item, index}) => {
        return (
            <View style={{ flex: 1, width: SLIDE_WIDTH }} key={index}>
                {item.component}
            </View>
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <StepHeader />
            <View style={styles.wrapContent}>
                <Slider
                    ref={SliderRef}
                    renderItem={renderItem}
                    data={onboardingItems}
                    onSlideChange={(slide) => {
                        const currentSlide = slide + 1;
                        dispatch(setOnboarding(currentSlide));
                        // if (slide === (onboardingItems.length - 1) ) {
                        //     dispatch(setOnboarding(currentSlide));
                        // } else {
                        //     dispatch(setOnboarding(currentSlide));
                        // }
                    }}
                    slideWidth={SLIDE_WIDTH}
                />
            </View>
            <StepFooter nextSlide={(index) => SliderRef.current.slideTo(index)}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapHeader: {
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    wrapContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapFooter: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    btnSkip: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSkipText: {
        color: colors.primary
    },
    btnNext: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.primary
    },
    btnNextText: {
        color: '#fff'
    },
    wrapStep: {

    },
    stepText: {
        color: colors.primary
    }

});

export default OnboardingType1;
