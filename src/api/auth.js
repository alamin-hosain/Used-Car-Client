export const setAuthToken = user => {
    const currentUser = {
        emaiL: user.email,
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