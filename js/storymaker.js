    // Assignment 1 | COMP1073 Client-Side JavaScript

    /* Variables
    -------------------------------------------------- */
    let nouns = ["The Turkey", "Mom", "Dad", "The Dog", "The Teacher", "The Elephant", "The Cat"];
    let verbs = ["sat on", "ate", "danced with", "saw", "doesn't liked", "kissed"];
    let adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
    let noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
    let setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

    // Constants for main button query selectors
    const noun1Btn = document.getElementById('noun1');
    const verbBtn = document.getElementById('verb');
    const adjectiveBtn = document.getElementById('adjective');
    const noun2Btn = document.getElementById('noun2');
    const settingBtn = document.getElementById('setting');  

    // Constants for p tag to display query selectors
    const choosenNoun1 = document.getElementById('choosenNoun1');
    const choosenVerb = document.getElementById('choosenVerb');
    const choosenAdjective = document.getElementById('choosenAdjective');
    const choosenNoun2 = document.getElementById('choosenNoun2');
    const choosenSetting = document.getElementById('choosenSetting');

    // Constants for final buttons and p tags
    const playbackBtn = document.getElementById('playback');
    const randomBtn = document.getElementById('random');
    const storyDisplay = document.getElementById('story');
    const resetBtn = document.getElementById('reset');

    // Variables for pre-defined arrays
    let chosenNoun1 = '';
    let chosenVerb = '';
    let chosenAdjective = '';
    let chosenNoun2 = '';
    let chosenSetting = '';

    /* Functions
    -------------------------------------------------- */
    function randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function noun1_on_click() {
        chosenNoun1 = randomFromArray(nouns);
        choosenNoun1.textContent = chosenNoun1;
    }

    function verb_on_click() {
        chosenVerb = randomFromArray(verbs);
        choosenVerb.textContent = chosenVerb;
    }

    function adjective_on_click() {
        chosenAdjective = randomFromArray(adjectives);
        choosenAdjective.textContent = chosenAdjective;
    }

    function noun2_on_click() {
        chosenNoun2 = randomFromArray(noun2);
        choosenNoun2.textContent = chosenNoun2;
    }

    function setting_on_click() {
        chosenSetting = randomFromArray(setting);
        choosenSetting.textContent = chosenSetting;
    }

    function concatenateStory() {
        return `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}`;

    }

    function playback_on_click() {
        const story = concatenateStory();
        storyDisplay.textContent = story;
    }

    function random_on_click() {
        resetStory();
        chosenNoun1 = randomFromArray(nouns);
        chosenVerb = randomFromArray(verbs);
        chosenAdjective = randomFromArray(adjectives);
        chosenNoun2 = randomFromArray(noun2);
        chosenSetting = randomFromArray(setting);
        playback_on_click();
    }

    function addStudentId() {
        const studentId = "200549992";
        document.getElementById('studentId').textContent = `Student ID: ${studentId}`;
    }

    function resetStory() {
        // Clear chosen phrases
        chosenNoun1 = '';
        chosenVerb = '';
        chosenAdjective = '';
        chosenNoun2 = '';
        chosenSetting = '';

        // Clear displayed phrases
        choosenNoun1.textContent = '';
        choosenVerb.textContent = '';
        choosenAdjective.textContent = '';
        choosenNoun2.textContent = '';
        choosenSetting.textContent = '';

        // Clear displayed story
        storyDisplay.textContent = '';
    }

    /* Event Listeners
    -------------------------------------------------- */
    noun1Btn.addEventListener('click', noun1_on_click);
    verbBtn.addEventListener('click', verb_on_click);
    adjectiveBtn.addEventListener('click', adjective_on_click);
    noun2Btn.addEventListener('click', noun2_on_click);
    settingBtn.addEventListener('click', setting_on_click);
    playbackBtn.addEventListener('click', playback_on_click);
    randomBtn.addEventListener('click', random_on_click);
    resetBtn.addEventListener('click', resetStory);

    // Add student ID on page load
    window.addEventListener('load', addStudentId);
