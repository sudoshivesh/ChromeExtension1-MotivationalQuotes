# Motivational Quotes Chrome Extension

This Chrome extension replaces your default new tab page with a simple, elegant interface that displays a random motivational quote every time you open a new tab. It also includes an attribution link to the creator's LinkedIn profile.

## Features

- Displays a random motivational quote every time a new tab is opened.
- Clean and professional user interface with a black background, white border, and quotes in green and red text.
- Attribution to the creator, with a clickable link to the developer's LinkedIn profile.

## Preview

![Motivational Quotes Extension Preview](snapshot.png) <!-- Add a screenshot here -->

## Installation (Developer Mode)

To install the extension in Developer Mode for testing purposes:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/motivational-quotes-extension.git

2. Open Google Chrome and go to

   ```bash
   chrome://extensions/.

3. Enable Developer Mode (toggle is in the upper-right corner).

4. Click on Load unpacked and select the folder where you cloned this repository.

5. The extension will be loaded and available for use in the browser. You can open a new tab to see it in action.

## Folder Structure

The Structure of the Folder must looks like:
[Folder Structure](structure.png)

## How It Work

1. newtab.html
   + This file defines the structure of the new tab page. It contains:
      + A div for displaying the random quote.
      + A link to the [developer's LinkedIn profile](https://www.linkedin.com/in/sudoshivesh) at the bottom of the page.
      + A link to the favicon and styles to make the page look professional.
2. CSS (Inline in newtab.html)
   + The styles are written inline in the newtab.html file. The page is styled to have:
      + A black background.
      + A white-bordered quote box that is centered on the screen.
      + Green and red text for the quotes and their authors.
      + A clickable attribution link to the [developer's LinkedIn profile](https://www.linkedin.com/in/sudoshivesh).
3. script.js
   + This JavaScript file handles the logic for displaying a random quote each time the user opens a new tab. It works by:
      + Defining an array of motivational quotes.
      + Randomly selecting one quote from the array and displaying it in the quote box.
      + Ensuring a smooth user experience with minimal loading times.
4. manifest.json
   + The manifest.json file is the configuration file that tells Chrome how to handle the extension. It includes essential information like:
      + Manifest Version: Specifies the version of the manifest file format. For modern Chrome extensions, this is typically set to 3.
      + Name: The name of the extension that appears in the Chrome Extensions page.
      + Version: The current version of the extension.
      + Description: A short description that appears in the Extensions page.
      + Icons: Defines the path to the icons that represent the extension in different sizes.
      + Action: Specifies the default popup file and icon for the extension.
      + Permissions: The permissions required by the extension, such as storage or access to tabs.
      + Chrome URL Overrides: This is where the extension overrides the default new tab page.
5. Favicon.png
   + The favicon.png file is used to display a custom icon on the browser tab. It is linked in the newtab.html file. To add a custom fevicon:
     + Replace the favicon.png file with your preferred image.
     + Ensure the favicon is properly linked in the newtab.html file:
     + ```bash
       <link rel="icon" type="image/png" href="favicon.png" />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


