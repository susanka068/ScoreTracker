import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  ToastAndroid,
} from "react-native";
import Modal from "react-native-modal";
import { Radio } from "native-base";

export class ScoreTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_score: 0,
      total_ball: 0,
      total_wicket: 0,
      extra_run_on_current_ball: 0,
      isModalVisible: false,
      current_striker: "player-1",
      current_non_stricker: "player-2",
      isWicketModalVisible: false,
      deliverywise_details: [],
    };
    this.handleSingle = this.handleSingle.bind(this);
  }

  /* function to show a toast saying " Scoreboard Updated wait until the next delivary ! " */

  showToast = () => {
    ToastAndroid.show(
      "Scoreboard Updated wait until the next delivary !",
      ToastAndroid.SHORT
    );
  };

  /* function to handle single run on a normal delivery  */

  handleSingle = () => {
    var current_score = this.state.total_score;
    var updated_score = current_score + 1;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    var {
      deliverywise_details,
      current_striker,
      current_non_stricker,
    } = this.state;
    deliverywise_details = [
      ...deliverywise_details,
      { outcome: 1, current_striker, current_non_stricker },
    ];
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
      deliverywise_details,
    });
    this.showToast();
  };

  /* function to handle double run on a normal delivery  */

  handleDouble = () => {
    var current_score = this.state.total_score;
    var updated_score = current_score + 2;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    var {
      deliverywise_details,
      current_striker,
      current_non_stricker,
    } = this.state;
    deliverywise_details = [
      ...deliverywise_details,
      { outcome: 2, current_striker, current_non_stricker },
    ];
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
      deliverywise_details,
    });
    console.log(deliverywise_details);
    this.showToast();
  };

  /* function to handle triple run on a normal delivery  */

  handleTriple = () => {
    /* handles Triple run on a normal delivery */

    var current_score = this.state.total_score;
    var updated_score = current_score + 3;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    var {
      deliverywise_details,
      current_striker,
      current_non_stricker,
    } = this.state;
    deliverywise_details = [
      ...deliverywise_details,
      { outcome: 3, current_striker, current_non_stricker },
    ];
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
      deliverywise_details,
    });
    this.showToast();
  };

  /* function to handle four run ( usually a boundary ) on a normal delivery  */

  handleFour = () => {
    /* handles Four run on a normal delivery */

    var current_score = this.state.total_score;
    var updated_score = current_score + 4;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    var {
      deliverywise_details,
      current_striker,
      current_non_stricker,
    } = this.state;
    deliverywise_details = [
      ...deliverywise_details,
      { outcome: 4, current_striker, current_non_stricker },
    ];
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
      deliverywise_details,
    });
    this.showToast();
  };

  /* function to handle six run ( usually a boundary ) on a normal delivery  */

  handleSix = () => {
    /* handles Six run on a normal delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 6;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    var {
      deliverywise_details,
      current_striker,
      current_non_stricker,
    } = this.state;
    deliverywise_details = [
      ...deliverywise_details,
      { outcome: 6, current_striker, current_non_stricker },
    ];
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
      deliverywise_details,
    });
    this.showToast();
  };

  handleWide = async () => {
    /* handles Wide deliveries */
    var current_score = this.state.total_score;
    var updated_score = current_score + 1;
    //console.log(updated_score);
    var updatestate = async (score) => {
      this.setState({
        ...this.state,
        total_score: score,
      });
    };
    await updatestate(updated_score);
    this.toggleModal();
    //return updated_score;
  };

  handleExtraSingle = async () => {
    /* handles single run on extra delivery */
    var { extra_run_on_current_ball } = this.state;
    extra_run_on_current_ball = 1;
    this.setState({
      ...this.state,
      extra_run_on_current_ball,
    });
  };

  handleExtraDouble = async () => {
    /* handles single run on extra delivery */
    var { extra_run_on_current_ball } = this.state;
    extra_run_on_current_ball = 2;
    this.setState({
      ...this.state,
      extra_run_on_current_ball,
    });
  };

  handleExtraTriple = async () => {
    /* handles single run on extra delivery */
    var { extra_run_on_current_ball } = this.state;
    extra_run_on_current_ball = 3;
    this.setState({
      ...this.state,
      extra_run_on_current_ball,
    });
  };

  handleExtraFour = async () => {
    /* handles single run on extra delivery */
    var { extra_run_on_current_ball } = this.state;
    extra_run_on_current_ball = 4;
    this.setState({
      ...this.state,
      extra_run_on_current_ball,
    });
  };

  handleExtraSix = async () => {
    /* handles single run on extra delivery */
    var { extra_run_on_current_ball } = this.state;
    extra_run_on_current_ball = 6;
    this.setState({
      ...this.state,
      extra_run_on_current_ball,
    });
  };

  toggleModal = () => {
    var { isModalVisible } = this.state;
    isModalVisible = !isModalVisible;
    this.setState({ ...this.state, isModalVisible });
  };

  deliveryincrement = () => {
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_ball: updated_ball,
    });
  };

  reset = () => {
    this.setState({
      ...this.state,
      total_score: 0,
      total_ball: 0,
      extra_run_on_current_ball: 0,
    });
  };

  addExtraRuns = async () => {
    var { extra_run_on_current_ball, total_score } = this.state;
    total_score = total_score + extra_run_on_current_ball;
    extra_run_on_current_ball = 0;
    this.setState({ ...this.state, total_score, extra_run_on_current_ball });
    this.showToast();
  };

  render() {
    var { total_score, total_ball, isModalVisible, total_wicket } = this.state;
    var Overs = Math.floor(total_ball / 6);
    var excess_ball = total_ball % 6;
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Scoreboard</Text>
        <Text>
          {" "}
          score : {total_score} / {total_wicket}{" "}
        </Text>
        <Text>
          {" "}
          Over : {Overs}.{excess_ball}{" "}
        </Text>
        <Text> Score outcome</Text>
        <View style={styles.ButtoonGroupStyle}>
          <Button title="1" onPress={this.handleSingle} />
          <Button title="2" onPress={this.handleDouble} />
          <Button title="3" onPress={this.handleTriple} />
          <Button title="4" onPress={this.handleFour} />
          <Button title="6" onPress={this.handleSix} />
          <Button title="WIDE" onPress={this.handleWide} />
          <Button title="NO BALL" onPress={this.handleWide} />
          <Button title="WICKET" onPress={this.handleWide} />
        </View>
        <Modal
          isVisible={isModalVisible}
          backdropColor="white"
          onModalHide={this.addExtraRuns}
        >
          <View>
            <Text>Extra runs ?</Text>
            <View style={styles.ButtoonGroupStyle}>
              <View>
                <Text style={styles.RadioTextStyle}>1</Text>
                <Radio
                  selected={this.state.extra_run_on_current_ball === 1}
                  onPress={this.handleExtraSingle}
                />
              </View>
              <View>
                <Text style={styles.RadioTextStyle}>2</Text>
                <Radio
                  selected={this.state.extra_run_on_current_ball === 2}
                  onPress={this.handleExtraDouble}
                />
              </View>
              <View>
                <Text style={styles.RadioTextStyle}>3</Text>
                <Radio
                  selected={this.state.extra_run_on_current_ball === 3}
                  onPress={this.handleExtraTriple}
                />
              </View>
              <View>
                <Text style={styles.RadioTextStyle}>4</Text>
                <Radio
                  selected={this.state.extra_run_on_current_ball === 4}
                  onPress={this.handleExtraFour}
                />
              </View>
              <View>
                <Text style={styles.RadioTextStyle}>6</Text>
                <Radio
                  selected={this.state.extra_run_on_current_ball === 6}
                  onPress={this.handleExtraSix}
                />
              </View>
            </View>
            <View style={styles.ButtoonGroupStyle}>
              <Button title="OK" onPress={this.toggleModal} />
              <Button title="CANCEL" onPress={this.toggleModal} />
            </View>
          </View>
        </Modal>
        <Button title="reset" onPress={this.reset} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ButtoonGroupStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  ButtonStyle: {
    width: "200",
    padding: "5",
  },
  RadioTextStyle: {
    position: "relative",
    left: 6,
  },
});

export default ScoreTracker;

/* {
  outcome : [ 3 , 'wide' , 'run out' ]
  stricker : "player-1"
  non_stricker : "player-2"
} */
