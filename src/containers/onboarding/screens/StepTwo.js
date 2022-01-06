import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import images from '../../../assets/images/index';
import colors from '../../../assets/styles/colors';

const StepTwo = props => {
    const navigation = useNavigation();
    return (
            <View style={styles.wrapStep}>
                <Image style={styles.stepImage} source={images.girl2}/>
                <View style={styles.wrapContent}>
                    <Text style={styles.stepTitle}>Step Two</Text>
                    <Text style={styles.stepDescription}>Live as if you were to die tomorrow. Learn as if you were to live forever.</Text>
                </View>
                
                {/* Live as if you were to die tomorrow. Learn as if you were to live forever.
                Without music, life would be a mistake.
                There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. */}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapStep: {
        padding: 30,
        justifyContent: 'center',
        flex: 1,
    },
    stepImage: {
        maxWidth: '100%',
        maxHeight: '60%',
        resizeMode: 'contain',
    },
    wrapContent: {
        paddingVertical: 30,
    },
    stepTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.pDarkFont
    },
    stepDescription: {
        paddingTop: 15,
        fontSize: 17,
        textAlign: 'center',
        color: colors.sDarkFont
    }

});

export default StepTwo;
