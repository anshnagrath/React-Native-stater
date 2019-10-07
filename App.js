
import React, {useState} from 'react';
import {Button,View,TextInput,FlatList,Image} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetails'
const changingInput = (e,text,setText) => {
  const {places} = text
  let newObj ={
    text:e,
    places
  }
  setText(newObj);

}
const placeSubmit = (text,setText)=>{ 
  if(text.text.trim() == ''){
    return 
  }
  const {places} = text
  places.push({value:text.text , key:Math.random()})
  let newObj ={
    text:'',
   places: places,
   image:{uri:"https://images.unsplash.com/photo-1535370976884-f4376736ab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}
  }
  setText(newObj);
}
const deleteItem = (text,setText,place)=>{
  const {places} = text
  const  newArray = places.filter((o)=>o.value != place )
  let newObj={
    text:text.text,
    places:newArray,
    image:{uri:"https://images.unsplash.com/photo-1535370976884-f4376736ab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}
  }
  setText(newObj)
}
const selectItem = (key,text,setText)=>{
  const place = text.places.find( o => o.key == key)
  setText({
    selectedPlace:place
  })
}
const modalClosed = (setText)=>{
  setText({selectedPlace:null})
}
const App: () => React$Node = () => {
const [text,setText] = useState({places:[],text:"Start texasxast", selectedPlace:null  , image: {uri:"https://images.unsplash.com/photo-1535370976884-f4376736ab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}})

  return (
    <View style={{flex:1,padding:26,backgroundColor:'#fff',alignItems:"center",justifyContent:"flex-start"}}>
      <PlaceDetail selectedPlace = {text.selectedPlace} onItemDeleted={()=>placeDeleted()} onItemClose={()=>modalClosed(setText)}/>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center' ,width:'100%'}}> 
     <TextInput placeholder="Testing123"   style={{width:'70%',borderColor:"black", borderBottomWidth:1 }} value={text.text} onChangeText={(e)=>changingInput(e,text,setText)}></TextInput>
      <Button style={{width:'30%'}} title="Add" onPress={()=>placeSubmit(text,setText)}/>
      </View>
      <FlatList style={{width:'100%',margin:10}} data={ text.places } renderItem={(item,index)=>{
        return(
          <ListItem key={index} selectedItem={ ()=>selectItem(item.key,text,setText)} placeName={item.item}  placeImage = {text.image}/>
        )


      }} keyExtractor ={ (item) => `key-${item.key}`} />

   
    </View>
  );
};



export default App;
