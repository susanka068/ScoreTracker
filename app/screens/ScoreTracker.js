import React, { Component } from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { Radio } from "native-base";

export class ScoreTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_score: 0,
      total_ball: 0,
      extra_run_on_current_ball: 0,
      isModalVisible: false,
    };
    this.handleSingle = this.handleSingle.bind(this);
  }

  handleSingle = () => {
    /* handles single run on a normal delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 1;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
    });
  };
  handleDouble = () => {
    /* handles Double run on a normal delivery */

    var current_score = this.state.total_score;
    var updated_score = current_score + 2;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
    });
  };
  handleTriple = () => {
    /* handles Triple run on a normal delivery */

    var current_score = this.state.total_score;
    var updated_score = current_score + 3;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
    });
  };
  handleFour = () => {
    /* handles Four run on a normal delivery */

    var current_score = this.state.total_score;
    var updated_score = current_score + 4;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
    });
  };
  handleSix = () => {
    /* handles Six run on a normal delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 6;
    var current_ball = this.state.total_ball;
    var updated_ball = current_ball + 1;
    this.setState({
      ...this.state,
      total_score: updated_score,
      total_ball: updated_ball,
    });
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
    var current_score = this.state.total_score;
    var updated_score = current_score + 1;
    console.log(updated_score);
    this.setState({
      ...this.state,
      total_score: updated_score,
      extra_run_on_current_ball: 1,
    });
  };
  handleExtraDouble = async () => {
    /* handles single run on extra delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 2;
    console.log(updated_score);
    this.setState({
      ...this.state,
      total_score: updated_score,
      extra_run_on_current_ball: 2,
    });
  };
  handleExtraTriple = async () => {
    /* handles single run on extra delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 3;
    console.log(updated_score);
    this.setState({
      ...this.state,
      total_score: updated_score,
      extra_run_on_current_ball: 3,
    });
  };
  handleExtraFour = async () => {
    /* handles single run on extra delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 4;
    console.log(updated_score);
    this.setState({
      ...this.state,
      total_score: updated_score,
      extra_run_on_current_ball: 4,
    });
  };
  handleExtraSix = async () => {
    /* handles single run on extra delivery */
    var current_score = this.state.total_score;
    var updated_score = current_score + 6;
    console.log(updated_score);
    this.setState({
      ...this.state,
      total_score: updated_score,
      extra_run_on_current_ball: 6,
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
  render() {
    var { total_score, total_ball, isModalVisible } = this.state;
    return (
      <SafeAreaView>
        <Text>Scoreboard</Text>
        <Text> score : {total_score} </Text>
        <Text> Ball : {total_ball} </Text>
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
          onModalHide={() => {
            this.setState({ ...this.state, extra_run_on_current_ball: 0 });
          }}
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
