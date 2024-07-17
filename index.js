require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const githubData = {
    "login": "suyogghate",
    "id": 91405767,
    "node_id": "MDQ6VXNlcjkxNDA1NzY3",
    "avatar_url": "https://avatars.githubusercontent.com/u/91405767?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/suyogghate",
    "html_url": "https://github.com/suyogghate",
    "followers_url": "https://api.github.com/users/suyogghate/followers",
    "following_url": "https://api.github.com/users/suyogghate/following{/other_user}",
    "gists_url": "https://api.github.com/users/suyogghate/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/suyogghate/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/suyogghate/subscriptions",
    "organizations_url": "https://api.github.com/users/suyogghate/orgs",
    "repos_url": "https://api.github.com/users/suyogghate/repos",
    "events_url": "https://api.github.com/users/suyogghate/events{/privacy}",
    "received_events_url": "https://api.github.com/users/suyogghate/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Suyog Ghate",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "Completed PG-DAC from IACSD, Pune | Learnt technologies like Web Technologies, JAVA, MySql, C# , .NET | Passionate about learning new technologies and project",
    "twitter_username": null,
    "public_repos": 54,
    "public_gists": 0,
    "followers": 4,
    "following": 5,
    "created_at": "2021-09-26T06:20:45Z",
    "updated_at": "2024-06-19T10:00:05Z"
}

app.get('/', (req, res) => {
    res.send("Hello World!!");
})

app.get('/twitter', (req, res) => {
    res.send("Welcome to twitter!!");
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login to chai aur code.</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to Chai aur Code channel.</h2>');
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log("Server listening on 3000 port!!");
})