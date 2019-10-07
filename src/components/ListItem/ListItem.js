import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
const ListItem = (prop)=>{
    console.log(prop,'csdcssss')
    return(
        <TouchableOpacity onPress={prop.selectedItem}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" styles={styles.placeImage} source = {prop.placeImage}/>
            <Text>
                {prop.placeName.value}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles  = StyleSheet.create({
    listItem:{
        width:"100%",
        marginBottom:5,
        padding:10,
        backgroundColor:'#eee',
        flexDirection:'row',
        alignItems:"center",

    },
    placeImage:{
        marginRight:8,
        maxHeight:30,
        maxWidth:30
    }
})
export default ListItem