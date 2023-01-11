import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@mfe/react-app",
    app: () => System.import("@mfe/react-app"),
    activeWhen: ["/react"],
});

registerApplication({
    name: "@mfe/vue-app",
    app: () => System.import("@mfe/vue-app"),
    activeWhen: ["/vue"],
});

registerApplication({
    name: "@mfe/react-navbar",
    app: () => System.import("@mfe/react-navbar"),
    activeWhen: ["/"],
});

start()
