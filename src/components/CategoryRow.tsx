import { View, Text } from 'react-native'
import React from 'react'
import { Category } from '../types/category'
import { COLORS, theme } from '../../constants'

const CategoryRow = ({ color, name }: Category) => {
    return (
        <View
            style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: theme.colors.card
            }}
        >
            <View
                style={{
                    backgroundColor: color,
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    borderWidth: 2,
                    borderColor: COLORS.white
                }}
            />
            <Text style={{color: 'white', fontSize: 16, marginLeft: 14}}>{name}</Text>
        </View>
    )
}

export default CategoryRow