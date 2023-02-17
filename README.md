# ColorGuide Online Shopping Assistant
##### Table of Contents  
1. [Group Members](#groupMembers)  
2. [R1](#r1)  
   - [Individual Contributions](#indivCon)
   - [Implemented Features](#implFeat) 
   - [Installations Instructions](#install) 
   - [UI Documentation](#UIDoc) 
 
<a name="groupMembers"></a>
## Group Members

- ### Kelley 

- ### Tin

- ### Natalie 

<a name="r1"></a>
# R1

<a name="indivCon"></a>
## Individual Contributions

- ### Kelley 
Kelley defined the color dictionary we would implement for translating HSL values to color names. She also wrote up UI documentation.

- ### Tin
Tin worked on the code to create, delete and minimize the tags.

- ### Natalie 
Natalie implemented the color dictionary, popup, and worked on coding styling.

<a name="implFeat"></a>
## Implemented Features

- ### Popup screen with instructions: 
This is a popup screen that explains to the user how to use the extension.

- ### Eyedropper that can tag pixels:
Multiple tags that overlay the screen can tag pixel colors to get translation.

- ### Tags display a color dictionary translation:
Each tag displays the basic color name value of the pixel selected.

- ### Multiple tags on a page can be minimized/maximized:
There can be many tags and tags can be minimized/maximized.
- ### Can exit tool and continue browsing, with tags persisting:
A user can close the eyedropper color tagger and keep all of the tags that exist on the page.

<a name="install"></a>
## Installation Instructions

1. In your terminal, execute
```
git clone https://github.com/Teaching-Accessibility/course-project-colorguide.git
```

2. In Chrome, go to this link: `chrome://extensions`, and switch to developer mode (toggle button in upper right hand corner)

3. Press `Load Unpacked` button and select the cloned repo folder

4. On Mac, `Command Q` to run the extension. On Windows,  `Ctrl Q` to run. Or, select it under the puzzle piece icon on the taskbar of Chrome.

#### Helpful Links and Tips:
- [How To Install The Unpacked Extension In Chrome](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/#:~:text=Goto%20Chrome%20Settings%20using%20three,Then%20Select%20Extensions.&text=Click%20on%20Load%20Unpacked%20and,which%20the%20manifest%20file%20exists) 
- If the extension does not work, restart Chrome by typing "chrome://restart" into the address bar

<a name="UIDoc"></a>
## UI Documentation 

 Each screen should have a screen ID, title, a description as to what system features the user and computer interaction represents, and explain the design guidelines you followed. Explain where simulated back end was used, if any, and provide rationale.

<img width="181" alt="Screenshot 2023-02-16 103941" src="https://user-images.githubusercontent.com/71570112/219457812-4e3561bc-5835-4f7f-a62c-4f1ca808135a.png">

Screen 1: Home Page

This is the window that includes the instructions for how to use the program, as well as has a button to start it. 

There is no simulated back end.


<img width="925" alt="Screenshot 2023-02-16 103908" src="https://user-images.githubusercontent.com/71570112/219457834-4a8bb82c-1ed5-46df-a90a-c1a1886dcc52.png">

Screen 2: Program in Use

This is a combined view of five placed color labels and the home page. 

There is no simulated back end.


<img width="308" alt="Screenshot 2023-02-15 204753" src="https://user-images.githubusercontent.com/71570112/219271431-05cacb9b-0206-49b6-a339-8f2445d85443.png">
Screen 3: Color Labels

Color labels can be placed anywhere in the Chrome window and include the color name, a minimize button in the upper left, and a close button in the upper right. The upper left corner of the label is the location where the user clicked for the color label.

There is no simulated back end.


<img width="325" alt="Screenshot 2023-02-15 204818" src="https://user-images.githubusercontent.com/71570112/219271421-bdd0db35-1694-43a0-9976-716d0d41a790.png">

Screen 4: Minimized Color Labels

When a color label is minimized, it becomes only a white "+" on a black background over the selected spot. If the "+" is selected, the label will maximize and return to the state it was in before being minimized.

There is no simulated back end.



Design guidelines followed: 

Since we only have a few screens with very limited differences between them, the design guidelines followed apply to the entire application as a whole.

WCAG 1.1 Text Alternatives: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

WCAG 1.2 Time-based Media: There is no time-based media in our app

WCAG 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

WCAG 1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

WCAG 1.3.3 Sensory Characteristics: Instructures provided for understanding and operating content do not rely solely on sensory characteristics of components.

WCAG 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or disgtinguishing a visual element.

WCAG 1.4.2 Audio Control: There is no automatic audio in our app.

WCAG 1.4.6 Contrast (Enchanced): The visual presentation of text and images of text has a contrast ratio of at least 7:1

WCAG 1.4.7 Low or No Background Audio: There is no prerecorded audio-only content

WCAG 1.4.9 Images of Text: There are no images of text in our app.

WCAG 1.4.11 Non-text Contrast: UI Components have a contrast ratio of at least 3:1 against adjacent color(s).

WCAG 1.4.13 Content on Hover or Focus: There is no content on hover or keyboard focus that triggers additional content to become visible and then hidden.

WCAG 2.2 Enough Time: There are no time constrictions for using our app.

WCAG 2.3 Seizures and Physical Reactions: There is no content designed in a way known to cause seizures or other physical reactions in our app.

WCAG 2.4.1 Bypass Blocks: There are no repeated blocks of content on multiple pages.

WCAG 2.4.2 Page Titled: The pop-up with instructions has a title that describes the topic.

WCAG 2.4.3 Focus Order: Focusable components receive focus in an order that preserves meaning and operability

WCAG 2.4.4 Link Purpose (In Context): The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.

WCAG 2.4.6 Headings and Labels: Heading and labels describe topic or purpose.

WCAG 2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

WCAG 2.5.1 Pointer Gestures: All functionality can be operated with a single pointer without a path-based gesture.

WCAG 2.5.2 Pointer Cancellation: For functionality operated using a single pointer, completion of the function is on the up-event.

WCAG 2.5.3 Label in Name: For user interface components with labels that incude text, the name contains the text that is presented visually.

WCAG 2.5.4 Motion Actuation: There is no functionality requiring device motion.

WCAG 2.5.5 Target Size: The size of the targe for pointer inputs is at least 44 by 44 CSS pixels.

WCAG 3.1.1 Language of Page: The default human language can be programmatically determined.

WCAG 3.2.1 On Focus: When any user interface component receives focus, it does not initiate a change of context.

WCAG 3.2.2  On Input: Changing the setting of any user interface component does not automatically cause a change of context unless the use has been advised of the behavior before using the component.

WCAG 4.1.1 Parsing: Elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique.

WCAG 4.1.2 Name, Role, Value: For all user interface components, the name and role can be programmatically determined