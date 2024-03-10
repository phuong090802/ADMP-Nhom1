import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { fonts } from "../../../constant"
import MaterialIcon from "../../atom/material-icon"
import TitleLogo from "../../atom/title-logo/TitleLogo"
import { useCallback } from "react"

const AuthLayout = ({ title, children, onBack }) => {

    const handleBack = useCallback(() => {
        if(!onBack) return
        onBack()
    }, [onBack])

    return <LinearGradient
        colors={['#2785DC', '#1DDBD2']}
        start={[0, 0]}
        end={[1, 0]}
        style={style.container}>
        <TitleLogo />
        <View style={style.formContainer}>
            <TouchableOpacity style={style.formHeader}
                onPress={handleBack}>
                <MaterialIcon
                    name={'arrow-back-ios-new'}
                    size={24}
                    color={'#4E504E'} />
                <Text style={style.title}>{title}</Text>
            </TouchableOpacity>
            {children}
        </View>
    </LinearGradient>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#2785DC',
        fontFamily: fonts.BahnschriftRegular
    },
    formContainer: {
        backgroundColor: '#EDEDED',
        width: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 40,
        paddingHorizontal: 32,
        paddingBottom: 8
    },
    formHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#4E504E',
        marginLeft: 8,
        fontFamily: fonts.BahnschriftBold
    },
})

export default AuthLayout