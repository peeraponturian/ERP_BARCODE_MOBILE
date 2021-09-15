import React from "react";
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            width: 480,
            height: 60,
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#5787A4",
            borderRadius: 0,
            shadowColor: "#000000",
            shadowOffset: {
              width: 10,
              height: 20,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 0,
            padding: 10,
            margin: 0,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 35 }}>
            สำนักงานใหญ่
          </Text>
        </View>

        <View>
          <Text style={{ color: "#5787A4", fontWeight: "bold", fontSize: 25 }}>
            Purchasing Management
          </Text>
        </View>

        <View>
          <Text style={{ color: "#5787A4", fontWeight: "bold", fontSize: 25 }}>
            Sales & Billing Management
          </Text>
        </View>

        <View>
          <Text style={{ color: "#5787A4", fontWeight: "bold", fontSize: 25 }}>
            Warehouse Management
          </Text>
        </View>

        <View>
          <Text style={{ color: "#5787A4", fontWeight: "bold", fontSize: 25 }}>
            อื่นๆ
          </Text>
        </View>
      </ScrollView>
    );
  }
}
