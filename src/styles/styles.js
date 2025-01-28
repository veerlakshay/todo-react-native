import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8', // Light background
        paddingHorizontal: 16,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 16,
        textAlign: 'center',
        color: '#333', // Dark gray for contrast
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#28a745', // Green for add button
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    taskCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    taskTitle: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    due: {
        color: '#FFA500', // Orange for 'due'
    },
    done: {
        color: '#4CAF50', // Green for 'done'
    },
    toggleButton: {
        backgroundColor: '#007BFF', // Blue button for "Mark Done"
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        marginLeft: 10,
    },
    toggleButtonDone: {
        backgroundColor: '#6c757d', // Grey button for "Mark Due"
    },
    toggleButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;
