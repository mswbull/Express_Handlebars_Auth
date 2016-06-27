# Express + Handlebars + Auth Scaffolding

**Application Name:** Express + Handlebars + Auth Scaffolding

**Application Description:** A simple Node / Express accelerator which includes "[Express-Handlebars] (https://www.npmjs.com/package/express-handlebars)", "[New Relic APM] (https://www.npmjs.com/package/newrelic)" and authentication using the [Force.com PassportJS] (https://github.com/joshbirk/passport-forcedotcom) strategy.

**Author:** Matthew Bull

**Website:** www.lifeintech.com

**Development Languages / Frameworks(s):** Node, Express, Handlebars

**Development Add-Ons:** Heroku Redis, New Relic APM

---

**Get Started:**

***Authenitcation Pattern:***

1. If the web app is configured to allow unauthenticated access, requests from the browser are allowed without any authentication.
2. If the web app is configured to require authentication, the user’s browser is redirected to the associated Salesforce.com org for authentication.

***Prerequisites:***

Built to run on Heroku with a Force.com Connected App for authentication.

Add the [Heroku Redis] (https://elements.heroku.com/addons/heroku-redis) and [New Relic APM] (https://elements.heroku.com/addons/newrelic) add-ons to your Heroku application. [Papertrail] (https://elements.heroku.com/addons/papertrail) is also recommended, but not required.

***Config Variables:***

* AUTH_REQUIRED = true / false
* CF_CALLBACK_URL = https://<heroku_app_name>.herokuapp.com/auth/forcedotcom/callback
* CF_CLIENT_ID = Force.com Connected App ID
* CF_CLIENT_SECRET = Force.com Connected App Secret
* COOKIE_SECRET = Any Value
* LOG_LEVEL = combined
* NEW_RELIC_LICENSE_KEY = New Relic License Key
* NEW_RELIC_LOG = stdout
* REDIS_URL = Redis URL
* SF_AUTHORIZE_URL = https://<org_my_domain>.salesforce.com/services/oauth2/authorize
* SF_TOKEN_URL = https://<org_my_domain>.my.salesforce.com/services/oauth2/token

***Add Your Pages:***

* views = Handlebars Pages (HTML)
* views/layouts = Handlebars Layouts
* views/partials = Handlebars Partials
* public = Unauthenticated Static Assets (CSS, Fonts, JS, IMG)
* private_static = Authenticated Static Assets (CSS, Fonts, JS, IMG)

---

**Application Dependencies:**

    "body-parser": "~1.13.2",
    "compression": "^1.6.2",
    "connect-redis": "^3.0.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.13.0",
    "method-override": "^2.3.5",
    "morgan": "~1.6.1",
    "newrelic": "^1.28.1",
    "passport": "^0.3.2",
    "passport-forcedotcom": "^0.1.3",
    "redis": "^2.6.0-2",
    "serve-favicon": "~2.3.0"