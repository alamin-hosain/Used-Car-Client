export const setAuthToken = (user, role) => {
    const currentUser = {
        email: user.email,
        role: role,
        displayName: user.displayName,
        photoURL: user.photoURL,
    }


    // save user in db and get token
    fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/user/${user?.email}`, {
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