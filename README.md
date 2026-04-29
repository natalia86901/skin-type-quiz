skin-type-quiz
An interactive, decision-tree web app that recommends the best toner for your skin type through a series of simple questions.

Overview
This app guides users through a short questionnaire about their skin type and concerns, then recommends a specific toner product tailored to their needs. 
It uses a branching logic flow: each answer leads to a more specific follow-up question, ending with a personalized product recommendation.

Features
Identifies skin type: Oily, Dry, or Normal
Asks a follow-up question based on the selected skin type
Displays a product image and description for the recommended toner
Clean, button-driven UI — no forms or page reloads required


🗂️ Project Structure
project/
├── index.html       # Main HTML structure (image, heading, buttons)
├── style.css        # Styling
└── script.js        # Decision-tree logic and DOM manipulation

🌿 Decision Tree
What is your skin type?
├── Oily
│   └── Do you have acne?
│       ├── Yes → Alcohol-free acne-soothing face-mist toner
│       └── No  → Daily balancing toner for large pores
├── Dry
│   └── Is your skin sensitive?
│       ├── Yes → Hydrating milk toner (pH balancing)
│       └── No  → EltaMD Skin Recovery Toner
└── Normal
    └── Is your skin sensitive?
        ├── Yes → Paula's Choice Calming Toner
        └── No  → CeraVe Hydrating Toner


How It Works
The app is built with vanilla JavaScript and uses DOM manipulation to:

Listen for button clicks via addEventListener
Update the displayed image (<img id="image">) and heading (<h2>) dynamically
Show/hide buttons using inline display: none styles as the quiz progresses
Nest follow-up questions inside each skin type function using inner functions and new event listeners

