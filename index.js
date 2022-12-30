import { registerApplication, start } from "single-spa";
console.log('window ', window)
if(!window.reactApp){
    throw Error("React App Fail")
}

if(!window.vueApp){
    throw Error("Vue App Fail")
}

registerApplication({
    name: "react-app",
    app: window.reactApp,
    activeWhen: ["/"]
})

registerApplication({
    name: "vue-app",
    app: window.vueApp,
    activeWhen: ["/"]
})

start()
