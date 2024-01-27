import { StyleSheet} from 'react-native';

export const opening = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: '#000',
        fontSize: 30,
      },
      titleDiv: {
        position: 'absolute',
        top:100
      },
      button: {
        borderStyle: 'solid',
        borderBlockColor: '#000',
        borderWidth: '2',
        borderRadius: '15',
        backgroundColor: '#000',
        padding: 10,
        margin:5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 20,
      },
      input: {
        borderStyle: 'solid',
        borderBlockColor: '#000',
        borderWidth: '2',
        borderRadius: '15',
        backgroundColor: '#fff',
        minWidth: '50%',
        alignContent: 'center',
        textAlign: 'center',
        padding: 10,
        margin:5,
      }
});