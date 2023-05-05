import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
	return (
		<View>
			<SafeAreaView style={styles.inputSection}>
				<TextInput
					placeholder='Place Name'
					style={styles.input}
				/>
				<TextInput
					placeholder='Latitude'
					style={styles.input}
				/>
				<TextInput
					placeholder='Longitude'
					style={styles.input}
				/>
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Go</Text>
				</Pressable>
			</SafeAreaView>
			<MapView
				initialRegion={{
					latitude: 5,
					longitude: 5,
					latitudeDelta: 0.5,
					longitudeDelta: 0.5,
				}}
				style={styles.map}
			></MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		width: '100%',
		height: '70%',
	},
	inputSection: {
		width: '100%',
		height: '30%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		width: '80%',
		borderColor: 'gray',
		paddingHorizontal: 20,
		paddingVertical: 5,
		margin: 5,
		borderRadius: 10,
	},
	button: {
		marginTop: 5,
		paddingHorizontal: 12,
		paddingVertical: 3,
		borderRadius: 10,
		backgroundColor: '#16C172',
	},
	buttonText: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
});
