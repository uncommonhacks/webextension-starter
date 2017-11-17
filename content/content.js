// adds some text to the end of the page
// demonstrates how to use messaging to obtain informaiton from the background script

console.log("content script is running!"); // this message will show in debug console for open web page

async function sayHello(e) {

    // send message to background script
    // we "await" a response, which the message variable will be set to when it is recieved
    let message = await browser.runtime.sendMessage({
        type: "hello"
    });

    // log message to the debug console (in-page)
    console.log("Message from the background script:", message);
}

async function notifyBackgroundPage(e) {

    // send message to background script
    // we "await" a response, which the message variable will be set to when it is recieved
    let message = await browser.runtime.sendMessage({
        type: "listTabs"
    });

    // log message to the debug console (in-page)
    console.log("Message from the background script:", message);
}

// say hello
sayHello();

// run notifyBackgroundPage when you click somewhere in the page
window.addEventListener("click", notifyBackgroundPage);