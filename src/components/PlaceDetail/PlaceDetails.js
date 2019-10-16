import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';

const PlaceDetail = props => {
let modalContent = null
console.log(props,'cscdsd')
if(props.selectedPlace){
    modalContent = (
        <View>
            <Image source={props.selectedPlace.image} style={styles.placeImage}></Image>
            <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
        </View>
    )
}
return(
    <Modal onRequestClose={props.onItemClose} visible={props.selectedPlace !== null} animationType="slide">
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
        marginBottom:50,
        margin:10
    },placeImage:{
        width:"100%",
        height:200
    },placeName:{
        fontWeight:"bold",
        padding:20,
        textAlign:"center",
        fontSize:20
    }

})
export default PlaceDetail