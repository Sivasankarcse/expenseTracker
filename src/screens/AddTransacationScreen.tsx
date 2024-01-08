import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TransForm from '../components/TransForm'
import LabelInputItem from '../components/LabelInputItem'
import { COLORS, theme } from '../../constants'

const AddTransacationScreen = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState("Expense");
    console.log("tabstatus", activeTab);
    useEffect(() => {
        setActiveTab("Income");
    }, [])

    return (
        <>
            <View style={{backgroundColor: theme.colors.card}}>
                <View style={{
                    marginHorizontal: 20,
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginVertical: 10,
                    gap: 5
                }}>
                    <TouchableOpacity 
                        onPress={() => setActiveTab("Income")}
                        style={{
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            borderWidth: 1, 
                            borderRadius: 8,
                            borderColor: activeTab == "Income" ? COLORS.blue : COLORS.lightGrayCustom,
                        }}
                    >
                        <Text style={{
                            color: activeTab == "Income" ? COLORS.blue : 'white'
                        }}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setActiveTab("Expense")}
                        style={{
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            borderWidth: 1, 
                            borderRadius: 8,
                            borderColor: activeTab == "Expense" ? 'red' : COLORS.lightGrayCustom,
                        }}
                    >
                        <Text style={{color: activeTab == "Expense" ? 'red' : 'white'}}>Expenses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    // flexDirection: "column",
                    margin: 16,
                    // borderRadius: 11,
                    // overflow: 'hidden'
                }}>
                    <LabelInputItem labelName='Date' inputType='Date' />
                    <LabelInputItem labelName='Account' inputType='Account' />
                    <LabelInputItem labelName='Category' inputType='Category' openModal={true} />
                    <LabelInputItem labelName='Amount' inputType='numberKeyboard' />
                    <LabelInputItem labelName='Note' inputType='textKeyboard' iconType='close' iconSize={22} iconName='close-circle-outline' />
                </View>
            </View>
            <View style={{ 
                flex: 1, 
                marginTop: 10, 
                backgroundColor: theme.colors.card,

            }}>
                <View style={{
                    marginTop: 30,
                    marginHorizontal: 16,
                }}>
                    <LabelInputItem inputType='Description' inputPlaceHolder="Description" iconType='camera' iconSize={26} iconName='camera-outline'/>
                </View>
                <View style={{flexDirection: 'row', margin: 16, gap: 5}}>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            width: '72%',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderWidth: 1,
                            borderColor: 'orange',
                            backgroundColor: COLORS.peach,
                            alignSelf: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Text style={{color: COLORS.white, textAlign: 'center'}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            width: '25%',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderWidth: 1,
                            borderColor: COLORS.lightGrayCustom,
                            alignSelf: 'center',
                            borderRadius: 10

                        }}
                    >
                        <Text style={{color: COLORS.white, textAlign: 'center'}}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default AddTransacationScreen