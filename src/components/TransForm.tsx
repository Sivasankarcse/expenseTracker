import { View, Text, TextInput } from 'react-native'
import React from 'react'
import LabelInputItem from './LabelInputItem'

const TransForm = (props) => {
    return (
        <View style={{
            flexDirection: "column",
            margin: 16,
            borderRadius: 11,
            overflow: 'hidden'
        }}>
            <LabelInputItem labelName='Date' inputType='date' openModal={true}/>
            <LabelInputItem labelName='Account' inputType='account' openModal={true}/>
            <LabelInputItem labelName='Category' inputType='category' openModal={true}/>
            <LabelInputItem labelName='Amount' inputType='numberKeyboard' />
            <LabelInputItem labelName='Note' inputType='textKeyboard' />
        </View>
    )
}

export default TransForm