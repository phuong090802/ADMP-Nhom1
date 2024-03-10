import { Image, Text, Touchable, TouchableOpacity, View } from "react-native"
import user_avatar from '../../../assets/img/user_avatar.jpg'
import { headerStyle } from "./const"
import MaterialIcon from "../../atom/material-icon"
import Octicon from "../../atom/octicon"

const Header = () => {
    return <View style={headerStyle.container}>
        <View style={headerStyle.userInforContainer}>
            <View
                style={headerStyle.avatarContainer}>
                <Image
                    source={user_avatar}
                    style={headerStyle.avatar} />
            </View>
            <Text
                style={headerStyle.text}>
                Trần Nhật Hào
            </Text>
        </View>
        <View style={headerStyle.function}>
            <TouchableOpacity>
                <Octicon
                    name={'comment-discussion'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicon
                    name={'bell'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicon
                    name={'sign-out'} />
            </TouchableOpacity>
        </View>
    </View>
}

export default Header