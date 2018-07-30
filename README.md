# publist-query 
Query of publist data with a simple UI using next.js.
![demo-picture](https://github.com/mbartido/publist-query/blob/master/publist.jpeg)
------------

### Installation
1. ```cd publist```
2. ```npm install```

------------


### Running the Application
After installation:
1. ```npm run dev```
2. Navigate to http://localhost:3000

------------


### Testing 
I have included simple tests of components in `publist/components/__tests__/`. These are ran using `npm run test`. The tests seem to work but there is an error complaining about an unexpected token import. I tried to play around with `"transformIgnorePatterns"` and `"transform"` in the babel config file, but I could not get it working. If I had more time I would have found the settings to get rid of this error, and included more tests for the async function feetching the json data from the site.

------------

### Deployment
We can use ZEIT now for deployment, but we use a custom server so we can't. These are steps to upload to Heroku.
1. Add script to package.json:
```
  "scripts": {
    "build": "next build"
  }
```
2. Change server.js code to say this is a production app.
3. Add script to package.json:
```
  "scripts": {
    "start": "NODE_ENV=production node server.js"
  }
```
4. Download heroku cli [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install "here"). Follow install prompt.
5. 
```
git init
(echo node_modules/ && echo .next/) >> .gitignore
heroku create 
git add .
git commit -m 'Next.js app on Heroku'
git push heroku master
```

------------

### Built With 
- Next.js- structure and main framework
- Jest.js- testing
- Prettier and eslint- formatting and code standardization

