import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { useState } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
// import { SearchReviewItem } from "../components/SearchReviewItem";
import { searchReview } from "../lib/algolia";

import { RootStackParamList } from "../types/navigation";
// import { Review } from "../types/review";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Search">;
  route: RouteProp<RootStackParamList, "Search">;
};

// export const SearchScreen = ({ navigation, route }: Props) => {
//   const [keyword, setKeyword] = useState<string>("");
//   // const [reviews, setReviews] = useState<Review[]>([]);
//   const onChange = async (text: string) => {
//     setKeyword(text);
//     if (!text) {
//       setReviews([]);
//     } else {
//       const result = await searchReview(text);
//       if (result.hits.length > 0) {
//         const reviews = result.hits.map((hit) => {
//           return hit as unknown as Review;
//         });
//         setReviews(reviews);
//       } else {
//         setReviews([]);
//       }
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={keyword}
//         placeholder="検索キーワード"
//         onChangeText={onChange}
//       />
//       <FlatList
//         data={reviews}
//         renderItem={({ item }) => <SearchReviewItem review={item} />}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    height: 50,
    width: "90%",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    margin: 16,
  },
});
