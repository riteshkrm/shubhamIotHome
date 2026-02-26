import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Main container
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
    },

    // Heading container
    heading: {
        marginBottom: 30,
    },

    // Heading text
    headingText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },

    // Input field
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 14,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#ddd'
    },

    // Login button
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        elevation: 3, // Android shadow
    },

    // Button text
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },

    forgetContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },

    buttonForgetText: {
        color: "#007BFF",
        fontSize: 18,
        fontWeight: "600",
    }
});

export default styles;