    import React, { Component } from 'react';
    import {
      StyleSheet,
      ScrollView,
      RefreshControl,
      FlatList,
      View,
      Text,
      Dimensions,
      Image
    } from 'react-native';
    import { connect } from 'react-redux';
    import { fetchHomeFromAPI } from '../actions/home_actions'
    const { width, height } = Dimensions.get('window');

    class Home extends Component {

      constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        }
      }

      componentDidMount() {
        this.props.getHome()
      }

      _onRefresh() {
        this.setState({ refreshing: true })
        this.props.getHome()
        this.setState({ refreshing: false })
      }

      render() {
        return (
          <View style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }
            >
              <FlatList showsVerticalScrollIndicator={false}
                data={this.props.home.results}
                renderItem={({ item }) =>
                  <View style={styles.user}>
                    <Image source={{ uri: item.picture.medium }} style={styles.image} />
                    <View>
                      <Text style={styles.name}>
                        {item.name.first} <Text>{item.name.last}</Text>
                      </Text>
                      <Text style={styles.email}>{item.email}</Text>
                    </View>
                  </View>
                }
                ItemSeparatorComponent={() =>
                  <View style={styles.ItemSeparator}>
                  </View>
                }
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View >
        )
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      user: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center'
      },
      userProfile: {
        justifyContent: 'center'
      },
      image: {
        width: width * 0.16,
        height: width * 0.16,
        borderRadius: width * 0.16 / 2,
      },
      name: {
        fontSize: width / 23,
        color: '#000000',
        marginLeft: 15,
      },
      email: {
        fontSize: width / 26,
        color: '#3d3e3e',
        marginLeft: 15,
      },
      ItemSeparator: {
        width: width - 30,
        borderWidth: 0.2,
        borderColor: '#3d3e3e',
        margin: 15
      }
    })

    function mapStateToProps(state) {
      return {
        home: state.home.home
      }
    }

    function mapDispatchToProps(dispatch) {
      return {
        getHome: () => dispatch(fetchHomeFromAPI())
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Home)