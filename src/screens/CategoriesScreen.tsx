import { View, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { EvilIcons } from '@expo/vector-icons';

import { COLORS, theme } from '../../constants';
import { Category } from '../types/category';
import CategoryRow from '../components/CategoryRow';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

const CategoriesScreen = ({ color, name }: Omit<Category, 'id'>) => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary)
    const [newCategoryName, setNewCategoryName] = useState("");

    const [categories, setCategories] = useState<Category[]>([
        {
            id: '1',
            color: theme.colors.primary,
            name: 'Groceries',
        }, {
            id: '2',
            color: theme.colors.card,
            name: 'Clothes'
        }
    ]);

    const onSelectColor = ({ hex }) => {
        setSelectedColor(hex)
    }

    const createNewCategory = () => {
        if (newCategoryName.length === 0) {
            return
        }
        setCategories([
            ...categories,
            { id: Math.random().toString(), color: selectedColor, name: newCategoryName }
        ]);
        setNewCategoryName("")
        setSelectedColor(theme.colors.primary)
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior='padding'
                keyboardVerticalOffset={112}
                style={{ margin: 16, flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        borderRadius: 11,
                        overflow: 'hidden'
                    }}>
                        {categories.map(({ id, name, color }) => (
                            <GestureHandlerRootView key={id} >
                                <Swipeable
                                    renderRightActions={() => {
                                        return (
                                            <View
                                                style={{
                                                    backgroundColor: COLORS.red,
                                                    width: 70
                                                }}
                                            >
                                                <RectButton
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                    onPress={() =>
                                                        setCategories(
                                                            categories.filter((category) => category.id !== id)
                                                        )
                                                    }>
                                                    <EvilIcons name="trash" size={24} color={COLORS.white} />
                                                </RectButton>
                                            </View>
                                        );
                                    }}>
                                    <CategoryRow name={name} color={color} id={''} />
                                </Swipeable>
                            </GestureHandlerRootView>
                        ))}
                    </View>
                </ScrollView>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 8 }}>
                    <TouchableOpacity onPress={() => setShowColorPicker(!showColorPicker)}>
                        <View style={{
                            backgroundColor: selectedColor,
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: COLORS.white
                        }} />
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={(val) => setNewCategoryName(val)}
                        value={newCategoryName}
                        style={{
                            flex: 1,
                            color: COLORS.white,
                            borderColor: theme.colors.border,
                            borderWidth: 1,
                            height: 40,
                            borderRadius: 8,
                            paddingLeft: 8,
                            marginLeft: 12,
                        }}
                        placeholder='Category name'
                    />
                    <TouchableOpacity
                        onPress={createNewCategory}
                        style={{ padding: 11 }}
                    >
                        <FontAwesome name="send" size={24} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <Modal
                transparent={true}
                visible={showColorPicker}
                animationType='fade'
                onRequestClose={() => setShowColorPicker(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
                    <View style={{
                        // flex: 1,
                        padding: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: theme.colors.card,
                        borderRadius: 12,
                        marginTop: 22
                    }}>
                        <ColorPicker
                            hideSliders
                            color={selectedColor}
                            onColorChange={(color) => onSelectColor({ hex: fromHsv(color) })}
                            style={{ width: 200, height: 200 }}
                        />
                        <Button onPress={() => setShowColorPicker(false)} title='Select' />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CategoriesScreen