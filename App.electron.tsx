import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// const sqlite3 = require("sqlite3");
import sqlite3 from "sqlite3";

export default function App() {
  //   useEffect(() => {
  //     const sqlite3 = require("sqlite3").verbose();
  //     const db = new sqlite3.Database(":memory:");

  //     db.serialize(function () {
  //       db.run("CREATE TABLE lorem (info TEXT)");

  //       var stmt = db.prepare("INSERT INTO lorem VALUES ('Hello World!')");
  //       for (var i = 0; i < 10; i++) {
  //         stmt.run("Ipsum " + i);
  //       }
  //       stmt.finalize();

  //       db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
  //         console.log(row.id + ": " + row.info);
  //       });
  //     });

  //     db.close();
  //   });
  const runDb = () => {
    const db = new sqlite3.Database(
      "MasterDB",
      (err) => err && console.error("Database opening error: ", err)
    );
    console.log("DB created");
    db.serialize(() => {
      //   db.run(
      //     "CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));"
      //   );
      //   const stm = db.prepare(
      //     "INSERT INTO Persons (PersonID , LastName, FirstName, Address, City) VALUES (2, 'Vamshi', 'R', 'Hayathnagar', 'hyd');"
      //   );
      //   stm.run();
      //   stm.finalize();
      db.all("SELECT * from Persons;", function (err, row) {
        console.log("RESULT", row, err);
      });
    });
    // db.serialize(function () {
    //   db.run("CREATE TABLE lorem (info TEXT)");
    //   const stmt = db.prepare("INSERT INTO lorem VALUES ('Hello World!')");
    //   for (let i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    //   }
    //   stmt.finalize();
    // });
    db.close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.create}>
        <Text style={{ fontWeight: "bold" }}>App Electron</Text>
      </View>
      <Button onPress={() => runDb()} title="INSERT DB" />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  create: {
    width: "20%",
    height: "10%",
    backgroundColor: "pink",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
