// Service file that calls node API: Uses two async functions that use fetch API to make API calls
export async function getAllUsers() {

    const response = await fetch('/frontend/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch('/frontend/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user:data})
    })
        return await response.json();
}