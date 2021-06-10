# shutdownPcAfterDownload
script that checks if the computer is dowloading stuff, if not the computer will be shutted down

by default it checks every 480 seconds, if downloaded bytes per second are less than 0.5, and after that, it waits 420 seconds before shutting down the computer

you can edit the variable just by opening the file and by modifying them.
the editable variables are:
 - delay between checks
 - megabytes per second threshold
 - delay before shutting down the pc, useful to make sure that all the files are saved correctly


# Requirements
its meant to work in Windows 10, but it should work in 7 and 8 too.
for linux you have to change the .bat file in a .sh file, and change these lines in the code (2 and 25).


# Installation
to run this script you need to have [nodejs](https://nodejs.org/en/download/) installed
after that you have to open the command prompt, navigate to the directory of the script, and write `npm install systeminformation`, and finally, `node shutdown.js`
