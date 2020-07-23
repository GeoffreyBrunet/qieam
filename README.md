# qieam

## How this app have been created

### Components:
* [VueJS](https://vuejs.org/) is the Javascript Framework used to run this project.
* [npm](https://www.npmjs.com/) is Javascript package manager used for this app.
* [Axios](https://github.com/axios/axios) is the tool used for run GET requests on API server.


### Folders and files
Folders:
* src/ : Contain all code of this app.
* src/views/ : Contain the 3 views of this app.
* src/assets/ : Contain pictures and Logo.

Files:
* package.json : Contain a list with packages and version of what npm need to install for run this app.
* src/main.js : Define rules security and routing for connexion. 
* src/router.js Contain all routing rules of this app.


### Credentials for connection on this app
Username is:
```
username
```

Password is:
```
password
```

## Run Vuejs app
### Run app locally
For run this Vuejs app locally, install dependencies needed by Vue:
```
npm install
```

And after, for run this app, just run:
```
npm run build
```

### Run app in a container with Docker
For create Docker image on your computer, run the following command:
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

And for run a container with the new image created, run:
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

## No CORS error on Google Chrome
CORS (cross-origin sharing standard) is a mechanism who add additional HTTP header, for give access on a distant resource of the website who make a request. When this mechanism don't allow all distant sites, web browser return error when app make a request on distant API. API server don't allow all websites so you can have error if you run standard browsers.

### Run Chrome on MacOS
Only solution is running Chrome with the flag "--disable-web-security" for ignore missing HTTP header, so run Chrome with this following command, on MacOS:
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security
```

### Run Chrome on Linux
On windows, Right click on desktop, add new shortcut, and add following target:
```
"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```
And just click OK.

### Run Chrome on Linux:
Just run following command for start Chrome with nice flag:
```
google-chrome --disable-web-security
```