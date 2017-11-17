// this function returns a PROMISE
// when browser.tabs.query finishes, the result will be passed to the content script
// see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/onMessage#Sending_an_asynchronous_response_using_a_Promise
function handleMessage(message, sender) {

    if (message.type === "hello") {
        // simple example
        // use our helper function to return a response
        return runtimeMessageResponse("hi!");
    }

    if (message.type === "listTabs") {
        // advanced example using async browser api
        // return promise from browser directly
        const promise = browser.tabs.query({});        
        return promise;
    }
}

// declare handleMessage as a listener function for browser.runtime.onMessage
browser.runtime.onMessage.addListener(handleMessage);

// sending responses is trickier than it should be to get working in every browser
// so we have to create a promise that immediately resolves
// we can return the result of this function in handleMessage, and a response will be sent to content script
function runtimeMessageResponse(response) {
    return new Promise(resolve => {
        resolve(response);
    })
}