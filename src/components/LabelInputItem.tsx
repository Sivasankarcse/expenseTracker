import { View, Text, TextInput, Modal, TouchableOpacity, TouchableWithoutFeedback, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import { COLORS, theme } from '../../constants'
import GridItem from './GridItem';
import { useNavigation } from '@react-navigation/native';
import { CustomIcon } from './CustomIcon';

type LabelInputItemProps = {
    labelName?: string,
    inputType: string,
    iconType?: string,
    iconSize?: number,
    iconName?: string,
    inputPlaceHolder?: string,
    openModal?: boolean,
}

const LabelInputItem = ({ labelName, inputType, iconName, inputPlaceHolder, iconSize, iconType, openModal }: LabelInputItemProps) => {
    const [inputName, setInputName] = useState("");
    const [showListModal, setShowListModal] = useState(openModal || false)
    const inputValue = ["Date", "Account", "Category"];
    const categoriesList = [
        { id: 1, name: 'Lunch' },
        { id: 2, name: 'Transportation' },
        { id: 3, name: 'Money' },
        { id: 4, name: 'Add' },
    ];
    const navigation = useNavigation()

    const onChangeModal = (inpuval) => {
        if (inputType != inpuval) {
            if (inputValue.includes(inpuval)) {
                console.log("im clicked val", inpuval)
                setShowListModal(false);
            } else {
                setShowListModal(false)
            }
        }
    }

    const navigateScreen = () => {
        setShowListModal(false);
        navigation.navigate("Categories");
    }

    // FlatList RenderItem
    const renderItem = (item) => {
        console.log("itemmm", item?.item?.name)
        return (
            <GridItem itemName={item?.item?.name} navigateScreen={navigateScreen} />
        )
    }

    return (
        <>
            <View style={{
                flexDirection: 'row',
                padding: 8,
                marginBottom: 10,
            }}>
                {labelName &&
                    <Text style={{
                        color: COLORS.gray,
                        opacity: 0.7,
                        width: '20%',
                        fontSize: 16
                    }}>{labelName}</Text>
                }
                <TextInput
                    value={inputName}
                    style={{
                        width: labelName ? '80%' : '100%',
                        fontSize: 14,
                        color: 'white',
                        borderBottomColor: COLORS.lightGrayCustom,
                        borderBottomWidth: 1,
                    }}
                    placeholder={inputPlaceHolder || ""}
                    // editable={false}
                    onTouchStart={() => setShowListModal(true)}
                />
                {iconType && (
                    <View style={{ position: 'absolute', right: 10, bottom: 8 }}>
                        <CustomIcon name={iconName} size={iconSize} color={COLORS.white} type={iconType}/>                    
                    </View>
                )}
            </View>
            <Modal
                transparent={true}
                visible={showListModal}
                animationType='slide'
                onRequestClose={() => setShowListModal(false)}
            >
                <SafeAreaView style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: theme.colors.card,
                        width: '100%',
                        height: '50%',
                    }}>
                        {/* Header of the modal */}
                        <View style={{
                            height: 45,
                            backgroundColor: COLORS.gray,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 10,
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>{inputType}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-around', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={navigateScreen}>
                                        <AntDesign name="edit" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setShowListModal(false)}>
                                        <Ionicons name="close" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* Body of the modal */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <FlatList
                                keyExtractor={(item, index) => item.id}
                                numColumns={3}
                                data={categoriesList}
                                renderItem={(val) => renderItem(val)}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    )
}

export default LabelInputItem