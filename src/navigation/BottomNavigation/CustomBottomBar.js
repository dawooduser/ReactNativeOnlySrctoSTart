import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { COLORS, commonStyles } from '../../constant/theme';
import NavigationIcon from './NavigationIcon';
import { genericRatio } from '../../helper/helper';
import { memo, useCallback, useMemo } from 'react';

function CustomBottomBar({ state, descriptors, navigation }) {
  return (
    <View style={[commonStyles.rowDirection, commonStyles.shadow, styles.tabContainer]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
              
        const isFocused = useMemo(() => state.index === index,[state])

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        }, [isFocused, route]);

        return (
          <TouchableOpacity key={index} activeOpacity={0.9}
            style={[styles.mainItemContainer, isFocused && styles.SelectItem]} onPress={onPress}>
            <NavigationIcon route={label} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default memo(CustomBottomBar)

const styles = StyleSheet.create({
  tabContainer: {
    // backgroundColor: COLORS.secondary,
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  mainItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectItem: {
    height: genericRatio(40),
    width: genericRatio(40),
    borderRadius: genericRatio(40),
    backgroundColor: '#F3F4F6',
    ...commonStyles.shadow,
  }
})

