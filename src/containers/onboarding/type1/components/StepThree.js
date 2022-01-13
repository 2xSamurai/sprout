import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import images from '../../../../assets/images/index';
import colors from '../../../../assets/styles/colors';

const StepThree = props => {
    const navigation = useNavigation();
    return (
            <View style={styles.wrapStep}>
                <Image style={styles.stepImage} source={images.girl3}/>
                <View style={styles.wrapContent}>
                    <Text style={styles.stepTitle}>Step Three</Text>
                    <Text style={styles.stepDescription}>There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.</Text>
                </View>
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
        color: colors.sDarkFont,
        lineHeight: 24
    }

});

export default StepThree;
