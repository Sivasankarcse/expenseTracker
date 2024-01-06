import { View, Text } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import Entypo from '@expo/vector-icons/Entypo'; 
import { COLORS } from '../../constants';

const SettingsScreen = () => (<View style={{ 
    flexDirection: "column", 
    margin: 16,
    borderRadius: 11,
    overflow: 'hidden'
}}>
    <ListItem
        label='Categories'
        detail={<Entypo name="chevron-thin-right" size={18} color={COLORS?.white} style={{opacity: 0.3}} />}
        onClick={() => {}}
    />
    <ListItem
        label='Report a bug'
        detail={<Entypo name="chevron-thin-right" size={18} color={COLORS?.white} style={{opacity: 0.3}} />}
        onClick={() => {}}
    />
    <ListItem
        label='Erase all data'
        isDestructive
        onClick={() => {}}
    />
</View>)

export default SettingsScreen