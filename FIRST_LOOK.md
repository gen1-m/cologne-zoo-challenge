[//]: # (BEFORE YOU READ THIS!!!)

[//]: # (
I wrote this markdown in my local machine, same as I have done for the rest of the project,
but it seems that when I use the 'Open Preview' option in StackBlitz it does not show as it does
in Visual Studio Code or Jetbrains Webstorm, I used both of these to test the particular issue.
Maybe I am giving it too much of importance but anyway, I thought it mightt be relevant for whomever
is grading this challenge.
)

# Cologne Zoo

The Cologne Zoo application provides a summary of the animals and their relevant health data. 
It serves as a tool for zookeepers to get an overview of the animals in the zoo.
This document provides information on how to use it.

***

## Table sample with the data:
| Index | Species |   Name    | Gender | Age (yrs) | Weight (kg) |
|-------|---------|-----------|--------|-----------|-------------|
|   1   |  cow    |  Alberto  |  male  |    10     |    203.8    |
|   2   |  bear   |   Alex    |  male  |    7      |    148.5    |
|   3   |  dog    | Allison   | female |    3      |    176.9    |
|   4   |  lion   | Antonio   |  male  |    15     |    170.1    |
|   5   |  fish   |   Bert    |  male  |    9      |    60.6     |
|   6   |  dog    |    Bob    |  male  |    11     |     177     |
|   7   |  snake  |  Carmen   | female |    1      |    38.1     |
|   8   |  cow    |   Cesar   |  male  |    9      |    97.1     |
|   9   |  fish   | Christine | female |    0      |    124.2    |
|   10  |  cat    |  Crystal  | female |    3      |    74.7     |


***

## Getting ready:

In order to use the application you first need to download this repository in your local machine, or you can use an 
online tool such as `git` in combination with [StackBlitz](https://stackblitz.com/) or 
[GitHub Codespaces](https://docs.github.com/en/codespaces/overview). In this documentation, we are assuming that you are 
going to use the first method, locally, and we are assuming you have `npm` installed. If not, then just click here --->
[<kbd>NPM</kbd>](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). You will be redirected to Node's 
package manager official documentation website, which should be sufficient for you to install `npm` in your local 
machine and be ready to finally run the project.

### Using npm: 
After downloading the repo in you local machine and successfully extracting it (assuming it is a .zip file), you can
just go to the directory by using a command similar to this:

```shell
cd ~/Downloads/$REPO_NAME
```

To run the app simply run:
```shell
npm run dev
```

After this you should see a section similar to :

![Local Host](documentation-images/local-host.png)

Just click in either one of these two links, and it should open the application in your default browser.
To close the app, press <kbd>CTRL + C</kbd> simultaneously and server will close.

***

## Why use Cologne Zoo app? 

