import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { COLORS, theme } from '../../constants';

type ListItemProps = {
    label: string;
    detail?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
}

const ListItem = (props: ListItemProps) => {

    const item = useMemo(() => (
        <TouchableOpacity
            onPress={props?.onClick}
            style={{
                width: '100%',
                flexDirection: "row",
                justifyContent: props?.detail ? "space-between" : "flex-start",
                alignItems: "center",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: theme.colors.card
            }}
        >
            <Text style={{fontSize: 18, color: props?.isDestructive ? COLORS?.red : COLORS.white}}>{props?.label}</Text>
            {props?.detail}
        </TouchableOpacity>
    ), [])

    if(props?.swipeToDelete) {
        <Swipeable 
            renderRightActions={() => (
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                    }}
                    onPress={props?.onDelete}
                >
                    <Text style={{color: COLORS?.white}}>Delete</Text>   
                </TouchableOpacity>
            )}
            onSwipeableOpen={props?.onDelete}
        >
            {item} 
        </Swipeable>
    }

    return item
}

export default ListItem