import { StatusBar } from "expo-status-bar";
import { useRef, useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });
  const [J, setJ] = useState({
    x: null,
    y: null,
    marginLeftJ: new Animated.Value(10),
    marginTopJ: new Animated.Value(10),
  });
  const [J2, setJ2] = useState({
    x: null,
    y: null,
    marginLeftJ2: new Animated.Value(10),
    marginTopJ2: new Animated.Value(10),
  });
  const [J3, setJ3] = useState({
    x: null,
    y: null,
    marginLeftJ3: new Animated.Value(10),
    marginTopJ3: new Animated.Value(10),
  });
  useEffect(() => {
    chuotChay();
  }, []);

  const [dem, setDem] = useState(0);

  function onPress(evt) {
    var x = evt.nativeEvent.locationX - 70;
    var y = evt.nativeEvent.locationY - 110;
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {}
  function onRelease() {}
  const { marginTop, marginLeft } = location;
  const { marginTopJ, marginLeftJ } = J;
  const { marginTopJ2, marginLeftJ2 } = J2;
  const { marginTopJ3, marginLeftJ3 } = J3;

  function chuotChay(params) {
    {
      setJ({
        x: Math.floor(Math.random() * 310),
        y: Math.floor(Math.random() * 560),
        marginLeftJ: Math.floor(Math.random() * 310),
        marginTopJ: Math.floor(Math.random() * 560),
      });
      setJ2({
        x: Math.floor(Math.random() * 310),
        y: Math.floor(Math.random() * 560),
        marginLeftJ2: Math.floor(Math.random() * 310),
        marginTopJ2: Math.floor(Math.random() * 560),
      });
      setJ3({
        x: Math.floor(Math.random() * 310),
        y: Math.floor(Math.random() * 560),
        marginLeftJ3: Math.floor(Math.random() * 310),
        marginTopJ3: Math.floor(Math.random() * 560),
      });
    }
  }

  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => {
          setDem(dem + 1);
          console.log(dem);
          if (dem == 3) {
            setDem(0);
          } else {
            chuotChay();
          }
          setLocation({
            x: J.x,
            y: J.y,
            marginLeft: J.x,
            marginTop: J.y,
          });
        }}
      >
        <Animated.Image
          source={require("./drawn-Jerry-on-a-white-background.jpg")}
          style={{
            position: "absolute",
            marginLeft: marginLeftJ,
            marginTop: marginTopJ,
            height: 100,
            width: 90,
          }}
        ></Animated.Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dem.current = dem.current + 1;
          console.log(dem);
          if (dem == 3) {
            dem.current = 0;
          } else {
            chuotChay;
          }
          setLocation({
            x: J2.x,
            y: J2.y,
            marginLeft: J2.x,
            marginTop: J2.y,
          });
        }}
      >
        <Animated.Image
          source={require("./drawn-Jerry-on-a-white-background.jpg")}
          style={{
            position: "absolute",
            marginLeft: marginLeftJ2,
            marginTop: marginTopJ2,
            height: 100,
            width: 90,
          }}
        ></Animated.Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dem.current = dem.current + 1;
          console.log(dem % 3);
          if (dem == 3) {
            dem.current = 1;
          } else {
            chuotChay;
          }
          setLocation({
            x: J3.x,
            y: J3.y,
            marginLeft: J3.x,
            marginTop: J3.y,
          });
        }}
      >
        <Animated.Image
          source={require("./drawn-Jerry-on-a-white-background.jpg")}
          style={{
            position: "absolute",
            marginLeft: marginLeftJ3,
            marginTop: marginTopJ3,
            height: 100,
            width: 90,
          }}
        ></Animated.Image>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setLocation({
            x: location.x,
            y: location.y,
            marginLeft: location.x,
            marginTop: location.y,
          });
        }}
      >
        <Animated.Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/vi/f/f6/Tom_Tom_and_Jerry.png",
          }}
          style={{
            position: "absolute",
            marginLeft: marginLeft,
            marginTop: marginTop,
            height: 220,
            width: 140,
          }}
        ></Animated.Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
