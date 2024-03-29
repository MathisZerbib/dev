/* paste this line in verbatim */
window.formbutton = window.formbutton || function() {
    (formbutton.q = formbutton.q || []).push(arguments)
};
/* customize formbutton below*/
formbutton("create", {
    action: "https://formspree.io/f/mayvpvnk",
    title: "How can we help?",
    fields: [{
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "#0D3895"
        },
        button: {
            backgroundColor: "#0D3895"
        }
    }
});