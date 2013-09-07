html5-snake
===========

HTML5 App Demo for Mobiles, starting from Android


Required Software
=================

1. [JDK 1.7](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

2. [Android SDK](http://developer.android.com/sdk/index.html)

3. [Node JS](http://nodejs.org/)

4. [Apache Cordova](http://cordova.apache.org) 

The Setup
=========

1. Install JDK
  
   1.1 Download the JDK from Oracle site

   1.2 Run the installer

   1.3 Setup the environment variables
       `JAVA_HOME`
       `JDK_HOME`
       `JRE_HOME` 

2. Install Android SDK

   2.1 Download the Android SDK from android developer site

   2.2 Unzip the downloaded file

   2.3 Setup the environment variables
       `ANDROID_PLATFORM_TOOLS_PATH`
       `ANDROID_TOOLS`
       `ANDROID_HOME`
  
   
3. Install Node JS and Apache Cordova 


   In Ubuntu

   3.1 `sudo apt-get install nodejs`

   3.2 `sudo apt-get install npm`

   3.3 `sudo npm install -g cordova`

   3.4 Cordova [Platform Setup](http://cordova.apache.org/docs/en/3.0.0/guide_platforms_index.md.html#Platform%20Guides)


4. Creating the project
   
   4.1 Create a project directory
       `cordova create html5-snake-app org.yit.demo SnakeApp -d`
       
   4.2 Add Android platform support
       `cd html5-snake-android`
       `cordova platform add android -d`

How to build
============
   
Go to project directory

1. Build the app

   run `cordova build -d`

2. Lauch the app in the emulator

   run `cordova emulate android -d`



How to deploy
============= 



