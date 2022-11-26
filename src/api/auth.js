export const setAuthToken = (user, role) => {
    const currentUser = {
        emaiL: user.email,
        role: role,
        displayName: user.displayName,
        photoURL: user.photoURL,
        user,
    }


    // save user in db and get token
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('carToken', data.token)
        })
}