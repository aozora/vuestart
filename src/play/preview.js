// ./play/preview.js
import preview from 'vue-play/dist/preview'
// loads the scenarios at ./play/index.js
import scenarios from './'

// actually render the scenarios in preview page
// when the preview page is ready
// it will tell the app interface what scenarios we have
preview(scenarios)
