# NLW-01-Ecoleta-Backend
<a href="https://github.com/tecanderson/NLW-01-Ecoleta-backend/search?l=typescript"><img src="https://camo.githubusercontent.com/e674d1ecb32c7f76157dca31e8395905e86461d7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f746f702f6775697269626d65646569726f732f65636f6c6574612d6d6f62696c653f7374796c653d666f722d7468652d6261646765" alt="90+% TypeScript" data-canonical-src="https://img.shields.io/github/languages/top/tecanderson/NLW-01-Ecoleta-Backend?style=for-the-badge" style="max-width:100%;"></a>
<a href="/tecanderson/NLW-01-Ecoleta-Bakend/blob/master/LICENSE.md"><img src="https://camo.githubusercontent.com/59b26df3af8fea157dc0e37c5df906c476b27f13/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6775697269626d65646569726f732f65636f6c6574612d6d6f62696c653f7374796c653d666f722d7468652d6261646765" alt="License" data-canonical-src="https://img.shields.io/github/license/tecanderson/NLW-01-Ecoleta-Backend?style=for-the-badge" style="max-width:100%;"></a>
<a href="https://github.com/tecanderson/NLW-01-Ecoleta-Backend/issues"><img src="https://camo.githubusercontent.com/e61e4ca236556dcaab32db67c03eca80c610c528/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f6775697269626d65646569726f732f65636f6c6574612d6d6f62696c653f7374796c653d666f722d7468652d6261646765" alt="Open Issues" data-canonical-src="https://img.shields.io/github/issues/tecanderson/NLW-01-Ecoleta-Backend?style=for-the-badge" style="max-width:100%;"></a></p>

## About Ecoleta

Ecoleta is a marketplace platform that helps people find collection points for recyclable materials efficiently. This project was developed for the **International Environment Week** during the [Next Level Week](https://nextlevelweek.com) 1.0 by [@rocketseat](https://github.com/rocketseat). Ecoleta takes the pain out recycling waste by connecting people with collection points, see more:

- Booster [Ecoleta Mobile](https://github.com/tecanderson/NLW-01-Ecoleta-mobile).
- Booster [Ecoleta Web](https://github.com/tecanderson/NLW-01-Ecoleta-web).

Ecoleta API is an open-sourced restful api. It is written in [TypeScript](http://www.typescriptlang.org) and
uses [Express](https://expressjs.com/) along with [SQLite](https://www.sqlite.org/).

## Getting Started

First, let’s make sure that your development environment is ready.

- If you don’t have **Node.js** installed, [install it from here](https://nodejs.org/).

Then configure your development environment from the `.env.example` file and install the dependencies from your project’s `package.json` file by running the following command:

```
npm install
```

Once your dependencies are installed, in order to run all Knex.js migrations and build your application's database schema, execute the `migrate` command:

```
npm run migrate
```

After building your database, you may use the `db:seed` command to seed it.

```
npm run db:seed
```

Finally, the `serve` script starts your Node.js "development server" on port 8000.

```
npm run serve
```

That’s it! :rocket:  
If you have questions about Ecoleta API, you can ask on [GitHub Issues](https://github.com/tecanderson/NLW-01-Ecoleta-Backend/issues).

