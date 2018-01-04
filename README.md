# My Guitar Toolkit

My Guitar Toolkit is full-stack application that allows users to sign up, add "tools" and videos for guitar practice, and then filter those tools and videos for the kind of practice session they want to engage in.

The stack includes PostgreSQL, AngularJS, Express, and Node. Everything is made from scratch.   

This app is formatted using [John Papa's Angular 1](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) style guide as well as [StandardJS](https://github.com/feross/standard).

App is still in development.

## Backend
This backend is a Node server using Express with an SQL database.

Sequelize is being used to generate SQL queries and manipulate table data. I've chosen to use Sequelize because it is well-documented, easy to use, has few bugs, and is actively used by many developers as seen on npm. For scalability, raw SQL queries can later be used instead, but for small to mid-sized apps, Sequelize works smoothly. The database has been configured so that during development, an sqlite db is used, and when deployed to production, PostgreSQL is used.



## Dependencies
```
bower.json:
{
  "dependencies": {
    "angular": "1.5.8",
    "angular-sanitize": "1.5.8",
    "angular-cookies": "1.5.8",
    "angular-animate": "1.5.8",
    "angular-jwt": "^0.0.9",
    "angular-mocks": "1.5.8",
    "angular-resource": "1.5.8",
    "angular-ui-router": "^0.3.1",
    "toastr": "^2.1.3",
    "bootstrap": "^3.3.7",
    "angular-bootstrap": "^2.4.0"
  },
  "resolutions": {
    "angular": "1.5.8",
    "jquery": "^3.1.1"
  }
}
```
```
package.json:
{
  "dependencies": {
    "bcrypt": "^1.0.2",
    "body-parser": "^1.16.0",
    "crypto-js": "^3.1.9-1",
    "express": "^4.14.0",
    "jsonwebtoken": "^7.2.1",
    "pg": "^6.1.2",
    "sequelize": "^3.29.0",
    "sqlite3": "^3.1.8",
    "underscore": "^1.8.3"
  },
  "devDependencies": {
    "bower": "^1.7.7",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-bytediff": "^1.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-ng-annotate": "^2.0.0",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^3.1.0",
    "gulp-uglify": "^2.0.1",
    "http-server": "^0.9.0",
    "jasmine-core": "^2.4.1",
    "karma": "^0.13.22",
    "karma-chrome-launcher": "^0.2.3",
    "karma-firefox-launcher": "^0.1.7",
    "karma-jasmine": "^0.3.8",
    "protractor": "^4.0.9",
    "standard": "^8.6.0"
  }
}
```

You can learn more about me and my code at [kyleludlow.io](http://www.kyleludlow.io). I'm available for hire!
