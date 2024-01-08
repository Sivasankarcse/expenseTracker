import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width

type GridItemProps = {
  itemName: string,
  navigateScreen?: () => void;
}

const GridItem = ({ itemName, navigateScreen }: GridItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigateScreen()}
      style={{
        borderWidth: 1,
        borderColor: COLORS.lightGrayCustom,
        padding: 15,
        width: width / 3,
      }}>
      <Text style={{ textAlign: 'center', color: 'white' }}>{itemName}</Text>
    </TouchableOpacity>
  )
}

export default GridItem