import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@mfe/react-app",
    app: () => System.import("@mfe/react-app"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@mfe/vue-app",
    app: () => System.import("@mfe/vue-app"),
    activeWhen: ["/"],
});

start()
