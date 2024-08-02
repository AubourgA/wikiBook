import axios from 'axios';


export const getBooks = async (url) => {
try {
    const response = await axios.get(url, {
    headers: {
        'Content-Type': 'application/ld+json',
    },
    });
    return response.data;
} catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
}
};
