import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';

const PlaceDetail = props => {
let modalContent = null
if(props.selectedPlace){
    modalContent = (
        <View>
            <Image source={props.selectedPlace.image} style={styles.placeImage}></Image>
            <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </View>
    )
}
return(
    <Modal visible={props.selectedPlace !== null} animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent}
            <Button style={styles.buttons} color="red" title="Delete" onPress={props.onItemDeleted}></Button>
            <Button style={styles.buttons} color="red" title="Close" onPress={props.onItemClose}></Button>
        </View>
    </Modal>
)

}
const styles = StyleSheet.create({
    modalContainer:{
        margin:40
    },buttons:{
        paddingBottom:10
    },placeImage:{
        width:"100%",
        height:200
    },placeName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    }

})
export default PlaceDetail