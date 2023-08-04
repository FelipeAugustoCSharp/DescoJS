const loginUser = (email, password) =>{
    return new Promise((resolve, reject) =>{
        const error = false;
        if(error) {
            return reject(new Error('error in login!'))
        }
        console.log('user logged!')
        resolve({email});
    })
}
/*const user = loginUser("felipe@gmail.com","123456", (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos})
        getVideoDetails(videos[0], (videoDetails) =>{
            console.log({videoDetails})
        })
    })
}, (error) => {
    console.log({error})
})*/

const getUserVideos = (email) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             console.log('getUserVideos')
            resolve(['video1','video2','video3'])
        }, 2000)
    })
}

const getVideoDetails = (videos) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideoDetails')
            resolve({title: 'video title'})
        }, 2500);
    })
}

/*
loginUser("felipe@gmail.com","12345678")
.then((user) => getUserVideos(user.email))
.then((videos) => getVideoDetails(videos[0]))
.then((videoDetails) => console.log({videoDetails}))
.catch((error) => console.log({error}))
*/

const yt = new Promise((resolve) => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 2000);
}) 

const fb = new Promise((resolve) => {
    setTimeout(() => {
        resolve('posts from facebook')
    }, 3000);
})

Promise.all([yt, fb]).then(result => {
    console.log(result)
})