import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../constants'
import ListItem from '../components/ListItem';

const TrackListScreen = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ListItem
                    label='Categories'
                    detail={<Text style={{color: 'white'}}>Hello</Text>}
                    onClick={() => {}}
                />
            </View>
            <TouchableOpacity 
                onPress={() => props?.navigation?.navigate("AddTransacation")}
                style={{ 
                    position: 'absolute', 
                    alignSelf: 'flex-end', 
                    backgroundColor: COLORS.peach,
                    bottom:20,
                    right: 20,
                    borderRadius: 40,
                }}>
                <Ionicons 
                    name="add-sharp" 
                    size={30} 
                    color={COLORS.white} 
                    style={{
                        padding: 10,
                    }}
                />        
            </TouchableOpacity>
        </View>
    )
}

export default TrackListScreen