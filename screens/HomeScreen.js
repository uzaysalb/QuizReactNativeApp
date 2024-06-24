import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ }}>
      <Image
        style={{ height: 400, width: "100%", resizeMode: "stretch" }}
        source={require('../assets/images/q.jpeg')} 
      />

       

        <View
          style={{
            padding: 10,
            backgroundColor:"#daa520",
            borderRadius: 6,
            height:270
          }}
          
        >
           <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 25,
            fontStyle:"italic",
            fontWeight: "900",
            marginTop:15,
            letterSpacing:3
          }}
        >
          QUIZ RULES
        </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 8,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              There is no negative marking for wrong answer
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Each question has a time limit of 15 sec
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              You should answer all the questions compulsarily
            </Text>
            
          </View>
          
          <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "darkred",
          padding: 16,
          width:170,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 13,
        }}
      >
        <Text style={{color:"white",fontWeight:"900",textAlign:"center", fontSize:25, letterSpacing:1}}>START</Text>
      </Pressable>
        </View>
        
     

     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});