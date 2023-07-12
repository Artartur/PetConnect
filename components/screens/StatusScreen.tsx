import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../server/axios";

import Header from "../components/Header";
import Card from "../components/Card";
import Loading from "../components/Loading";

import { stylesStatus } from "../../styles/styles";

interface ReportDatas {
  id: number;
  animal: string;
  name: string;
  suburb: string;
  status: string;
}

export default function StatusScreen() {
  const [data, setData] = useState<ReportDatas[]>([]);
  const [loading, setLoading] = useState(true);

  const getReports = () => {
    axios
      .get("http://localhost:3000/reports")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("error: ", err));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    getReports();
  }, []);

  return (
    <>
      <View style={stylesStatus.container}>
        <Header showIcon={true} text={"Denuncias"} />
        {loading ? (
          <Loading />
        ) : (
          <ScrollView style={{ width: "100%" }}>
            <View style={stylesStatus.content}>
              {data.map((item) => {
                const setStyle =
                  item.status === "Opened" || item.status === "Rescued"
                    ? style.statusColorOpened
                    : item.status === "On the way"
                    ? style.statusColorOntheWay
                    : style.statusColorClosed;

                return (
                  <Card
                    containerStyle={{
                      borderRadius: 3,
                      height: 100,
                      marginVertical: 8,
                      width: "100%",
                    }}
                    key={item.id}
                    text={`Numero do Chamado: ${item.id}`}
                  >
                    <View>
                      <View style={stylesStatus.row}>
                        <Text style={stylesStatus.column}>Nome: {item.name}</Text>
                        <Text>Animal: {item.animal}</Text>
                      </View>
                      <View style={stylesStatus.row}>
                        <Text style={stylesStatus.column}>Bairro: {item.suburb}</Text>
                        <Text>
                          Status: <Text style={setStyle}>{item.status}</Text>
                        </Text>
                      </View>
                    </View>
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  statusColorClosed: {
    color: "gray",
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },

  statusColorOntheWay: {
    color: "orange",
    fontWeight: "bold",
  },

  statusColorOpened: {
    color: "green",
    fontWeight: "bold",
  },
});
