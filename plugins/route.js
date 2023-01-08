// import GoogleRedirect from "../assets/config/googleRedirect.json"
export default ({app}) => {
    app.router.beforeEach((to, from, next) => {
        // if (GoogleRedirect[to.fullPath]) {
        //     next({path: GoogleRedirect[to.fullPath]})
        // } else {
          
        // }
        // var whichLangIndicator= false;
        // if(!to.path.includes("en")){
        //     whichLangIndicator=true 
        // }

        // console.log(this.$store)
        // this.$bus.emit('urlChange',whichLangIndicator)
        next()
    })
}