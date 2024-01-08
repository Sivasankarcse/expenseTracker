import { View, Text, Alert } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS } from '../../constants';

const SettingsScreen = (props) => (
    <View style={{
        flexDirection: "column",
        margin: 16,
        borderRadius: 11,
        overflow: 'hidden'
    }}>
        <ListItem
            label='Categories'
            detail={<Entypo name="chevron-thin-right" size={18} color={COLORS?.white} style={{ opacity: 0.3 }} />}
            onClick={() => props?.navigation.navigate("Categories")}
        />
        <ListItem
            label='Erase all data'
            isDestructive
            onClick={() => { 
                Alert.alert('Are you sure', 'This action can not be done', [{
                    text: 'Cancel',
                    onPress: () => console.log('cancel pressed'),
                    style:'cancel'
                },{
                    text: 'Erase Data',
                    style: 'destructive',
                    onPress: () =>  console.log('OK Pressed')
                }], {
                    userInterfaceStyle: 'dark'
                })
            }}
        />
    </View>
)

export default SettingsScreen