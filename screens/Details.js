import {
	View,
	Text,
	SafeAreaView,
	Image,
	StatusBar,
	FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
	CircleButton,
	RectButton,
	SubInfo,
	FocusedStatusBar,
	DetailsDesc,
	DetailsBid,
} from "../components";

const Details = ({ route, navigation }) => {
	const { data } = route.params;
	console.log(`____________________________________________`);
	console.log(data);
	console.log(`____________________________________________`);
	return <Text>Details</Text>;
};

export default Details;
