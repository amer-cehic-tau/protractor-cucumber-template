module.exports = {
    // The address of a running selenium server.
    seleniumAddress: process.env.SELENIUM_URL || "http://localhost:4444/wd/hub",

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: process.env.TEST_BROWSER_NAME || "chrome",
        version: process.env.TEST_BROWSER_VERSION || "ANY"
    },
    // A base URL for your application under test.
    baseUrl: "https://" + (process.env.HTTP_HOST || ""),
    authEmail: "",
    selectedEnv: "",
    authPassword: "",
    sender: "",

    mailOptions: {
        receiver: [

        ],
        mailSubject: "",
        mailText: ""
    },
};