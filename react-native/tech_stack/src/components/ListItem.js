import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {

    const {library, selectedLibraryId} = this.props;

    if(library.item.id === selectedLibraryId){
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library.item;


    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectedLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles={
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return {selectedLibraryId: state.selectedLibraryId}
};

// first argument is for mapStateToProps
// como aqui não é o caso === null
// pois não queremos o state e sim actions
export default connect(mapStateToProps, actions)(ListItem);
