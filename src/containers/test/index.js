import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { styles } from './style';

const LicenseAgreement = () => {
    const scrollY = useRef(new Animated.Value(0));
    const { diffClamp } = Animated;
    const headerHeight = 80 * 2;
    const handleScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: { y: scrollY.current },
                },
            },
        ],
        {
            useNativeDriver: true,
        },
    );

    const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

    const translateY = scrollYClamped.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -(headerHeight / 2)],
    });
    const translateYNumber = useRef();
    translateY.addListener(({ value }) => {
        translateYNumber.current = value;
    });


    useEffect(() => {
        console.log('scrollY', scrollY);
    }, [scrollY]);

    return (
        <View style={styles.mainWrap}>
            <Animated.ScrollView
                contentContainerStyle={styles.scrollWrap}
                scrollEventThrottle={30}
                bounces={false}
                onScroll={handleScroll}>
                <View style={styles.laWrapper}>
                    <Text style={styles.mainTitle}>End user license agreement</Text>
                    <Text style={styles.secondaryTitle}>UST GLOBAL INC</Text>
                    <Text style={styles.content}>
                        Please read this Software End User License Agreement (the
                        “Agreement”) carefully. By installing and using all or any portion
                        of the Software (as defined below), you (hereinafter “Customer,” as
                        defined below) accept all the terms and conditions of this
                        Agreement. If you do not agree to the terms of this Agreement, you
                        are not permitted to download, install, or use the Software. The
                        Software is licensed, not sold, only in accordance with the terms of
                        this Agreement.
                    </Text>

                    <Text style={[styles.secondaryTitle, styles.topSpace]}>
                        1. Definitions
                    </Text>

                    <Text style={styles.content}>
                        1.1 “Computer” means a virtual machine or physical personal
                        electronic device that accepts information in digital or similar
                        form and manipulates it for a specific result based on a sequence of
                        instructions, including without limitation desktop computers,
                        laptops, tablets, mobile devices, telecommunication devices,
                        Internet-connected devices, and hardware products capable of
                        operating a wide variety of productivity, entertainment, or other
                        software applications, that conforms to the system requirements of
                        the Software as specified in the Documentation.
                    </Text>
                    <Text style={styles.content}>
                        1.2 “Customer” or “you” means you and any legal entity that obtained
                        the Software and on whose behalf it is used; for example, and as
                        applicable, your employer.
                    </Text>
                    <Text style={styles.content}>
                        1.3 “Documentation” means the technical usage guidelines and
                        descriptions of the Software published or provided by UST.
                    </Text>
                    <Text style={styles.content}>
                        1.4 “Open Source Components” means any software component that is
                        subject to an open source license agreement, including any software
                        available under the GNU General Public License (GPL), GNU Lesser
                        General Public License (LGPL), Mozilla Public License (MPL), Apache
                        License, BSD license, MIT license, or any other open source license
                        that is approved by the Open Source Initiative (each, an “Open
                        Source License”).
                    </Text>
                    <Text style={styles.content}>
                        1.5 “Software” means all software files, data, information, content,
                        and documents provided to you by UST with or in connect with this
                        agreement, and any modified versions and copies of, and upgrades,
                        patches, error corrections, updates, and additions to such
                        information, as may be provided to you by UST from time to time.
                    </Text>
                    <Text style={styles.content}>
                        1.6 “Use” means to access, install, download, or otherwise benefit
                        from using the functionality of the Software during the period of
                        time UST makes the Software available to you.
                    </Text>
                    <Text style={styles.content}>
                        1.7 “UST,” “us” or “our” means UST Global Inc., a Delaware
                        corporation with its corporate office at 5 Polaris Way, Aliso Viejo,
                        California 92656.
                    </Text>

                    <Text style={[styles.secondaryTitle, styles.topSpace]}>
                        2. Software License
                    </Text>
                    <Text style={styles.content}>
                        2.1 License Grant. Subject to your compliance with the terms of this
                        Agreement, UST grants you a non-exclusive, non-transferrable,
                        revocable, limited license to Use the Software in a manner
                        consistent with its design and intended purpose.
                    </Text>
                    <Text style={styles.content}>
                        2.2 General Use. You may Use one copy of the Software on your
                        Computer. Your Use is restricted as set forth in Section 3
                        (Restrictions) of this Agreement.
                    </Text>
                    <Text style={styles.content}>
                        2.3 Termination. UST has the right to terminate such license grant
                        to the Software at any time.{' '}
                    </Text>
                    <Text style={[styles.secondaryTitle, styles.topSpace]}>
                        3. Restrictions
                    </Text>

                </View>

            </Animated.ScrollView>
            <Animated.View
                style={{
                    transform: [{ translateY: translateY }],
                    elevation: 4,
                    zIndex: 100,
                }}>
                <View
                    style={{
                        height: 80,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'yellow',
                    }}>
                    <Text>Show footer</Text>
                </View>
            </Animated.View>
        </View>
    );
};

export default LicenseAgreement;
