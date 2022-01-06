import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import {
    FlatList,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

const WINDOW_WIDTH = width;

/** 
* Available Props 
* @param {Array} data - Flatlist Data
* @param {Function} renderItem - function that returns the Item to render
* @param {number} initialSlideIndex
* @param {number} decelerationRate
* @param {Function} onSlideChange - function that fires when slide has changed
**/

const Slider = forwardRef((props, ref) => {
    const slideWidth = props.slideWidth ? props.slideWidth : WINDOW_WIDTH;
    const flatListRef = useRef(null);
    console.log('flatListRef:', flatListRef.current)
    useImperativeHandle(ref, () => ({
        slideTo (index) {
            flatListRef.current.scrollToIndex({ animated: true, index });
        }
    
      }));
    
    return props.data ? (
        <FlatList
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={item => item.id}
            horizontal
            snapToInterval={slideWidth}
            disableIntervalMomentum={true}
            directionalLockEnabled={true}
            bounces={false}
            initialScrollIndex={props.initialSlideIndex ? props.initialSlideIndex : 0}
            getItemLayout={(data, index) => (
                { length: slideWidth, offset: slideWidth * index, index }
            )}
            decelerationRate={props.decelerationRate ? props.decelerationRate : 'fast'}
            pagingEnabled
            onMomentumScrollEnd={(event) => {
                const currentIndex = event.nativeEvent.contentOffset.x / slideWidth;
                props.onSlideChange && props.onSlideChange(currentIndex);
            }}
        />
    ) : null;
})

export default Slider;
