const app = Vue.createApp({
   
    data(){
        return {
            title: 'Mr',
            firstName: 'Bob',
            lastName: 'Johnson',
            gender: 'male',
            phone: '016974 88307',
            email: 'bob.johnson@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            backgroundPic: 'bla'
        }
},
methods: {
   async getUser(){
       const res = await fetch('https://randomuser.me/api')
       const { results } = await res.json()

       console.log(results)
       this.title = results[0].name.title,
       this.firstName = results[0].name.first,
        this.lastName = results[0].name.last,
        this.gender = results[0].gender,
        this.phone = results[0].phone,
        this.email = results[0].email,
        this.picture = results[0].picture.large

    },
    async getPicture(){
        const res = await fetch('https://picsum.photos/id/0/info')
        const results = await res.json()

        this.backgroundPic=results.download_url
 
       console.log(`Image fetched: ${this.backgroundPic}`)

 
        console.log(`IMage fetched:`)

       // this.title = results[0].name.title
     }
}
})

app.mount('#app')

//background-image: url("https://picsum.photos/id/457/2000/1500"