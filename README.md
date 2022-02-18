
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./raaghu_icon.png" alt="logo" width="125"/>
    </a>
    
<p/>
<p align="center">
<h1 align="center">Raaghu Ng Elements</h4>
<p/>


<p align="center">
<a href="https://github.com/Wai-Technologies/raaghu-ng-elements/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/TryShape/tryshape?style=flat-square" alt="tryshape licence" />
</a>
<a href="https://github.com/Wai-Technologies/raaghu-ng-elements/network/members" target="blank">
<img src="https://img.shields.io/github/forks/TryShape/tryshape?style=flat-square" alt="tryshape forks"/>
</a>
<a href="https://github.com/Wai-Technologies/raaghu-ng-elements/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/TryShape/tryshape?style=flat-square" alt="tryshape stars"/>
</a>
<a href="https://github.com/Wai-Technologies/raaghu-ng-elements/issues" target="blank">
<img src="https://img.shields.io/github/issues/TryShape/tryshape?style=flat-square" alt="tryshape issues"/>
</a>
<a href="https://github.com/Wai-Technologies/raaghu-ng-elements/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/TryShape/tryshape?style=flat-square" alt="tryshape pull-requests"/>
</a>


</p>

<p align="center">
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu-ng-elements/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu-ng-elements/issues/new">Request Feature</a>
</p>



# 👋 Introducing `raaghu-ng-elements`
<!-- <p align="center">
    <a href="https://tryshape.vercel.app" target="blank"/>
        <img src="./public/readme/landing.png" alt="landing" />
    </a>
</p> -->

`raaghu-ng-elements` is an opensource micro front end framework built on top of Bootstrap 5 and Storybook offering highly customizable and reusable Angular UI elements.

Raaghu elements can be used as a base to build complex components and UI layouts whilst maintaining a high level of reusability.




# 🚀 Demo
Here is a quick [demo](https://www.raaghu.io) of the elements. We hope you enjoy it.

Liked it? Please give us a ⭐️ to show your appreciation

Many Thanks to all the `supporters` who have helped this project with stars(⭐)



# 🔥 Features

## 🔢 High reusability
 - Promotes rusability throughout the UI and pages
 - Reduces code duplication and helps in delivering a more consistent and even UI


## 🏗️ Micro Front End Architecture
- Each element is a separate micro front end on its own
- Elements can be worked on in isolation

## 📢 Theming
- The theming engine provides a way to set custom theme for all the elements
- Control the theme of your project with only a few css variables

## 📱 Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes




# 🏗️ How to Set up `raaghu-ng-elements` for Development?
You can run `raaghu-ng-elements` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu-ng-elements.git
```

2. Change the working directory

```bash
cd raaghu-ng-elements
```

3. Install dependencies

```bash
npm install
```

4. Set localDev environment variable in `envronment.prod.ts` for a particular element
```javascript 
export const environment = {
  production: true,
  localDev: false 
  // serve as micro frontend on 
  // localhost:3000/rds-<element name>/main.js
};
```

5. Build and serve

```bash
# Build all projects and run server
npm run bootstrap 

# Build a single project and start server
npm run bootstrap -- --project=rds-<element name>
# For rds-input
# npm run bootstrap -- --project=rds-input

# Start server without building project
npm run bootstrap -- --build=false
```

5. Storybook

```bash
# View all elements inside storybook
npm run storybook 
```

All set !! Now open `localhost:3000/rds-<element name>` to see the element locally or `localhost:3000/rds-<element name>/main.js` to serve it as a micro front end.



# 🍔 Built With
- [Bootstrap 5](https://bootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster
- [Angular Elements](https://angular.io/guide/elements): Build bulletproof UI components faster



# 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.




# 🦄 Upcoming Features
`raaghu-ng-elements` has all the potentials to grow further. Here are some of the upcoming features,

- ✔️ Custom plugin to reveal the reusability within your angular project
- ✔️ Ability to convert existing elements in a project into micro front end enabled elements
- ✔️ Import custom elements into the library
- ✔️ Better Performance
- ✔️ Converiting plain angular components to custom elements

If you find something is missing, we are listening. Please create a feature request [from here](https://github.com/Wai-Technologies/raaghu-ng-elements/issues/new).



# 🤝 Contributing to `Raaghu`
Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features [listed here](https://github.com/Wai-Technologies/raaghu-ng-elements#-upcoming-features) or create one on your own. After adding your code, please send us a Pull Request.  




# 🙏 Support

We all need support and motivation. `Raaghu` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the app helpful, consider supporting us with a coffee.

<a href="https://www.buymeacoffee.com/">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50px">
</a>

---

<h3 align="center">
A ⭐️ to <b>Raaghu</b> is to build its triceps 💪 stronger.
</h3>



## Contributor ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
        <td align="center"><a href="https://github.com/apoorvalele"><img src="https://media-exp1.licdn.com/dms/image/C5603AQFLnud54O5hng/profile-displayphoto-shrink_200_200/0/1600705273288?e=1648684800&v=beta&t=sSGcvwE9rueIjUZH8njgLLEA-HhQaTH8eblRYaF_HIM" width="100px;" alt=""/><br /><sub><b>Apoorva Lele</b></sub></a></td>
    <td align="center"><a href="https://github.com/omkarchoudhari"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGOqHWfCLiksQ/profile-displayphoto-shrink_100_100/0/1605344901439?e=1648684800&v=beta&t=b0rOp1xQdSvWPysWX5f_wCiXljP3f0xY6wTxytCQsHM" width="100px;" alt=""/><br /><sub><b>Omkar Choudhari</b></sub></a></td>
    <td align="center"><a href="https://github.com/alok-nakhate"><img src="https://media-exp1.licdn.com/dms/image/C5603AQGivbqRns4SUw/profile-displayphoto-shrink_200_200/0/1516485962623?e=1648684800&v=beta&t=P2gr9WKJvXBXEHcblT32cHpvD6Mfs_EW6SsDP0rZI0s" width="100px;" alt=""/><br /><sub><b>Alok Nakhate</b></sub></a></td>

  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
