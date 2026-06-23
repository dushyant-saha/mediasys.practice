// Practicing creating a react component replicating a webpage AnimixPlay
const alternatives = React.createElement(
    "div",
    null,

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/9ani.webp"
        }),
        " 9anime"
    ),
    React.createElement("div", { className: "info" }, "Largest anime library"),
    React.createElement("br"),

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/zoro.webp"
        }),
        " Zoro"
    ),
    React.createElement("div", { className: "info" }, "Soft sub, modern design"),
    React.createElement("br"),

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/allani.webp"
        }),
        " Allanime"
    ),
    React.createElement("div", { className: "info" }, "Site that work similar like us"),
    React.createElement("br"),

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/pahe.webp"
        }),
        " Animepahe"
    ),
    React.createElement("div", { className: "info" }, "Mini encodes, nice for download"),
    React.createElement("br"),

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/cr.webp"
        }),
        " Crunchyroll"
    ),
    React.createElement(
        "div",
        { className: "info" },
        "Largest licensed library, safe & reliable place (won't shutdown)"
    ),
    React.createElement("br"),

    React.createElement(
        "a",
        null,
        React.createElement("img", {
            src: "./AnimixPlayResources/reddit.webp"
        }),
        " Reddit list"
    ),
    React.createElement(
        "div",
        { className: "info" },
        "More detailed list of other streaming services"
    ),
    React.createElement("br")
);

const credits = React.createElement(
    "h3",
    null,
    "Credits"
);
const sourcesParagraph = React.createElement(
    "p",
    null,
    "Any content in AniMixPlay was taken from another websites, therefore you should still be able to find the same content in original sites where we scrape it from below :"
);
const boxAffiliation = React.createElement(
    "div",
    {
        style: {
            color: "gray",
            fontSize: "13px"
        }
    },
    "*Websites listed below are NOT affiliated with us, we just use their public services or scrape their content."
);

const root = React.createElement(
    React.Fragment,
    null,
    React.createElement("img", {
        src: "./AnimixPlayResources/logo.webp",
        style: {
            maxWidth: "200px",
            marginTop: "50px"
        }
    }),
    React.createElement(
        "div",
        {
            style: {
                fontSize: "22px"
            }
        },
        "Goodbye forever..."
    ),
    React.createElement(
        "div",
        {
            style: {
                color: "gray"
            }
        },
        "Our scrapper system was broken since several days ago, and we already low on motivation to fix. It's decided that we shutting down this site.",
        React.createElement("br")
    ),
    React.createElement(
        "div",
        {
            style: {
                color: "#ff7b7b",
                marginBottom: "50px"
            }
        },
        "! We will never be back, animixplay.to is our only domain. beware of fake copycat sites, don't use them !"
    ),
    React.createElement("h3", null, "Alternative sites"),
    React.createElement("p", null, "Other websites to stream anime :"),
    alternatives,
    
    sourcesParagraph,
    boxAffiliation
);

ReactDOM.render(
    root,
    document.getElementById("react-container")
);