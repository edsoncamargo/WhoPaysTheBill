import { useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import { Text } from 'react-native-elements'

import getLoadingStyle from './styles'

export default function Loading() {
    const [position] = useState(new Animated.Value(-1))
    const interpolatedValue = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    })

    function startLoopingAnimation() {
        const forwardAnimation = Animated.timing(position, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
        })

        const backwardAnimation = Animated.timing(position, {
            toValue: -0.5,
            duration: 2000,
            useNativeDriver: false,
        })

        Animated.loop(
            Animated.sequence([forwardAnimation, backwardAnimation])
        ).start()
    }

    useEffect(() => {
        startLoopingAnimation()
    }, [])

    return (
        <View style={getLoadingStyle().container}>
            <View style={getLoadingStyle().loadingContainer}>
                <Animated.View
                    style={[
                        {
                            left: interpolatedValue,
                        },
                        getLoadingStyle().loadingAnimated,
                    ]}
                ></Animated.View>
            </View>
            <Text style={getLoadingStyle().title}>
                Who <Text style={getLoadingStyle().titleHighlighted}>pays</Text>{' '}
                the bill?
            </Text>
        </View>
    )
}
