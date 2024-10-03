const API_URL = 'https://fakestoreapi.com/users';

export const fetchUsers = async () => {
    try { 
        const response = await fetch(API_URL); 
        if (!response.ok) {
            throw new Error('Error al obtener los usaruos');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.log('Error fetching users', error); 
        return []; 
    }
};

export const authenticateUser = async(username, password) => {
    const users = await fetchUsers();
    const user = user.find(user => user.username === username && user.password === password); 
    return user ? true : false; 
}