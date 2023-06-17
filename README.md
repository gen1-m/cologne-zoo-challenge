# Cologne Zoo

The Cologne Zoo application provides a summary of the animals and their relevant health data. 
It serves as a tool for zookeepers to get an overview of the animals in the zoo.
This document provides information on how to use it.

***

## Table sample with the data:
| Index | Species   | Gender | Age (yrs)                | Weight (kg) |
|-------|-----------|--------|--------------------------|-------------|
| 1     | insect    | male   | 2004-09-10T10:58:56.224Z | 20.3        |
| 2     | bird      | female | 2000-04-03T04:11:35.138Z | 24.5        |
| 3     | bear      | male   | 2008-01-20T22:24:01.066Z | 41.7        |
| 4     | cat       | male   | 2002-02-15T18:39:48.351Z | 48.9        |
| 5     | lion      | male   | 2022-06-27T08:28:22.445Z | 49.7        |
| 6     | cetacean  | female | 2018-06-04T05:44:24.826Z | 56.9        |
| 7     | crocodile | male   | 2011-07-06T14:17:41.663Z | 59.6        |
| 8     | snake     | female | 2015-05-23T00:54:29.907Z | 62          |
| 9     | cat       | female | 2021-01-16T06:49:02.399Z | 62.7        |
| 10    | bear      | male   | 2000-12-31T23:24:33.187Z | 67.2        | 

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

