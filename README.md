<h1 align="center">Decentralawyer Blog</h1>

This site/blog is for the [Decentralawyer law firm][twitter].

Built with Astro, JavaScript, SCSS, and managed/hosted on [Netlify CMS][netlify]

The blog-cms integration is built upon [Delucid'sopen source Astro Netlify CMS starter template][template]

## Deployment

After cloning this repo, you do need to
[activate Netlify Identity in the Netlify UI][identity] and then enable
[“Git Gateway”][gateway] to allow e-mail/password authentication.

## Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                             |
| :----------------- | :------------------------------------------------- |
| `pnpm install`     | Installs dependencies                              |
| `pnpm run dev`     | Starts local dev & Netlify CMS proxy servers       |
| `pnpm run build`   | Build your production site to `./dist/`            |
| `pnpm run preview` | Serve `./dist/` & run the Netlify CMS proxy server |

> **Note**
> These commands are using [`pnpm`][pnpm], a fast and efficient package manager.
> You can choose to use `npm` or `yarn` instead if you prefer, but remember to update the config in [`netlify.toml`](netlify.toml) to match.

[twitter]: https://twitter.com/Decentralawyer?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
[netlify]: https://app.netlify.com/
[template]: https://github.com/delucis/astro-netlify-cms-starter
[deploy]: https://app.netlify.com/start/deploy?repository=https://github.com/delucis/astro-netlify-cms-starter
[identity]: https://docs.netlify.com/visitor-access/identity/
[gateway]: https://docs.netlify.com/visitor-access/git-gateway/
[pnpm]: https://pnpm.io/
