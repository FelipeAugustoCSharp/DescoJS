const loginUser = (email, password) =>{
    return new Promise((resolve, reject) =>{
        const error = true;
        if(error) {
            return reject(new Error('error in login!'))
        }
        console.log('user logged!')
        resolve({email});
    })
}

loginUser("felipe@gmail.com","12345678").then((user) =>{
    console.log({user})
}).catch((error) =>{
    console.log({error})
})

const getUserVideos = (email) =>{
    return new Promise(() =>{

    })
    setTimeout(() => {
        callback(['video1','video2','video3'])
    }, 2000);
}

const getVideoDetails = (videos, callback) =>{
    setTimeout(() => {
        callback({title: 'video title'})
    }, 2500);
}