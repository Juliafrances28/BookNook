Disclaimer: I know how to make a regular Readme and plan to change this, after it is reviewed, I am using this as a space to explain my thinking.  Also, each git commit has specific comments to explain this upload. 

I decided to implement a product details page and started off creating a repo in GitHub.  I am avid reader, so product page is all about books. The site name is bookNook. The first step of the process was to run “npx create-react-app my app”. This didn’t work for me because my node.js version was outdated.  I found that changing this proved to be complicated. 

It created a partial react app.  This partial app included node_modules, package. json and yarn.lock but left out the rest the react file structure.  I tried multiple approaches to fix it. I did updating/install with NPM commands, updating homebrew, cleaning the NPM cache and a few other commands.  Basically, every suggestion I could find with a google search. I even went on slack and asked other coders.  

Since these attempts where not successful I tried updating node.js  but it appeared that the project was still running on node 17, however I had installed node 18. Again, I was not getting the results I wanted. For a workaround I copied the react app I made for  a pervious project and made changes to it. 

The next issue I faced was that the app refused to compile when I ran “npm run start”. This meant I couldn’t run the app locally. Eventually I figured out that it would run, but only in Safari not Chrome.  After some review I realized this was a link issue.  I had to change how the links were listed in the Router section of app.js.  I discovered I use the page title in the router rather than the app title. I also had to change the project URL in package. json.

After this I was able to move along faster.  I worked on the Books.js adding components to the page.  I had the layout in mind already. I knew I needed to do a grid layout with multiple rows of cards and each card need to have a book image, a header, and a button respectively. Initially I wanted to implement only react components with no html syntax on the actual page. Although the best solution in the end was making some of the nested tags html and not React components.  

I always make CSS changes throughout a project to check the implementation and get the best results, the last step was to add the grid layout CSS to generate multiple rows. I learned about using the repeat property as a method to generate multiple rows and columns.
![image](https://user-images.githubusercontent.com/67694214/168489097-0159f36e-b78b-472b-b98f-47af43148921.png)
