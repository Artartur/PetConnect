import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../server/axios";

import Header from "../components/Header";
import Card from "../components/Card";
import Loading from "../components/Loading";

import { reportAPI } from "../../server/reportAPI";
import { stylesStatus } from "../../styles/styles";

interface ReportDatas {
  Id: number;
  Animal: string;
  Name: string;
  Suburb: string;
  Status: string;
}

export default function StatusScreen() {
  const [data, setData] = useState<ReportDatas[]>([]);
  const [loading, setLoading] = useState(true);

  const getReports = () => {
    axios
      .get(reportAPI)
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
                  item.Status === "OPENED" || item.Status === "RESCUED"
                    ? style.statusColorOpened
                    : item.Status === "ON_THE_WAY"
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
                    key={item.Id}
                    text={`Numero do Chamado: ${item.Id}`}
                  >
                    <View>
                      <View style={stylesStatus.row}>
                        <Text style={stylesStatus.column}>Nome: {item.Name}</Text>
                        <Text>Animal: {item.Animal}</Text>
                      </View>
                      <View style={stylesStatus.row}>
                        <Text style={stylesStatus.column}>Bairro: {item.Suburb}</Text>
                        <Text>
                          Status: <Text style={setStyle}>{item.Status}</Text>
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
