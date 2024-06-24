import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ResultsScreen = () => {
  const route = useRoute();
  
  const navigation = useNavigation();
  // console.log(route.params);
  return (
    <SafeAreaView style={{ margin: 10, flex:1}}>
      <View
        style={{
          
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          marginTop:50,
          
        }}
      >
        <Text style={{fontWeight:800, fontSize:25, color:"black", letterSpacing:2}}>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center", 
            marginRight: 14,
          }}
        >
          <Text>Share</Text>
          <AntDesign
            style={{ marginLeft: 6}}
            name="sharealt"
            size={18}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{color:"darkgreen", fontSize:15, fontWeight:300}}>Questions Answered</Text>
        <Text>(5/5)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 250,
          borderRadius: 7,
          marginTop: 20, 
          flex:1
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 18,
            letterSpacing:3,
            marginBottom:30
          }}
        >
          Score  Card
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft:"auto",
                marginRight:"auto",
                marginTop:30
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
              ) : (
                <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
              )}
            </View>
          )}
        />

        <Pressable onPress={() => navigation.navigate("Home")}style={{backgroundColor:"green",padding:12 ,marginLeft:"auto",marginRight:"auto",marginBottom:15,borderRadius:25, width:170}}>
          <Text style={{color:"white",fontWeight:"900", textAlign:"center", fontSize:15, letterSpacing:2}}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});