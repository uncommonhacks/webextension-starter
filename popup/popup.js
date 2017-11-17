// function that queries for titles of open tabs
async function getTabTitles() {

    // get currently open tabs
    // returns an array of JavaScript objects
    const tabs = await browser.tabs.query({});

    // process tabs array and return just an array of tab titles
    const titles = tabs.map(tab => tab.title);
    
    return titles;
}

async function updatePopup() {

    // run the getTabTitles function and await result
    const titles = await getTabTitles();

    // replace tabTitles element in html with the text titles
    document.getElementById("tabTitles").textContent = titles;
}

// actually run the functions declared above
updatePopup();