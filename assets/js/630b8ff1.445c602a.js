"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8165],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var o=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],a={title:"Moodle App Coding style",description:"The Moodle App Coding Style guidelines",tags:["Moodle App","Policies","Coding guidelines","Developer processes"]},s=void 0,p={unversionedId:"development/policies/codingstyle-moodleapp",id:"development/policies/codingstyle-moodleapp",title:"Moodle App Coding style",description:"The Moodle App Coding Style guidelines",source:"@site/general/development/policies/codingstyle-moodleapp.md",sourceDirName:"development/policies",slug:"/development/policies/codingstyle-moodleapp",permalink:"/devdocs/general/development/policies/codingstyle-moodleapp",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/codingstyle-moodleapp.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Developer processes",permalink:"/devdocs/general/tags/developer-processes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652868784,formattedLastUpdatedAt:"18/05/2022",frontMatter:{title:"Moodle App Coding style",description:"The Moodle App Coding Style guidelines",tags:["Moodle App","Policies","Coding guidelines","Developer processes"]},sidebar:"policies",previous:{title:"Coding style",permalink:"/devdocs/general/development/policies/codingstyle/"},next:{title:"Component Communication",permalink:"/devdocs/general/development/policies/component-communication/"}},d={},c=[{value:"Goals",id:"goals",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Disabling ESLint rules",id:"disabling-eslint-rules",level:3},{value:"Using async / await",id:"using-async--await",level:3}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document outlines the exceptions to the ",(0,l.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"Coding style")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/JavaScript_Coding_Style"},"JavaScript Coding Style")," which apply to the Moodle App and also includes rules for other technologies that are used in the app, like Typescript and Angular."),(0,l.kt)("p",null,"Unless otherwise specified, developers should follow the indications included on those documents."),(0,l.kt)("p",null,"Most rules are enforced with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint"},"ESLint")," and won't be mentioned in this document, make sure to integrate a linter in your development environment."),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("p",null,"Consistent coding style is important in any development project, and particularly when many developers are involved. A standard style helps to ensure that the code is easier to read and understand, which helps overall quality."),(0,l.kt)("p",null,"Abstract goals we strive for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"simplicity"),(0,l.kt)("li",{parentName:"ul"},"readability"),(0,l.kt)("li",{parentName:"ul"},"tool friendliness")),(0,l.kt)("p",null,"Note that much of the existing code may not follow all of these guidelines \u2014 we continue to upgrade this code when we see it."),(0,l.kt)("h2",{id:"typescript"},"TypeScript"),(0,l.kt)("h3",{id:"disabling-eslint-rules"},"Disabling ESLint rules"),(0,l.kt)("p",null,"In some situations, it may be necessary to ",(0,l.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules"},"disable ESLint rules using inline comments"),". Although this is discouraged, it is allowed on certain use-cases."),(0,l.kt)("p",null,"Most of the time, however, this could be solved by refactoring code. So think twice before disabling a rule."),(0,l.kt)("p",null,"Warnings should be treated with the same severity as errors, even if they are allowed by the linter. The reasoning behind this is that warnings are useful when new rules are introduced that affect existing code, but new code should always conform to the rules or explicitly disable them."),(0,l.kt)("h3",{id:"using-async--await"},"Using async / await"),(0,l.kt)("p",null,"Using async/await is encouraged, but it shouldn't be mixed with .then/.catch/.finally. Using both can make code difficult to understand. As a rule of thumb, there should only be one style in a given function."),(0,l.kt)("p",null,"\u2714\ufe0f Good"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function greet() {\n    const response = await fetch('/profile.json');\n    const data = await response.json();\n\n    alert(`Hello, ${data.name}!`);\n}\n")),(0,l.kt)("p",null,"\u26a0\ufe0f Allowed, but discouraged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function greet() {\n    return fetch('/profile.json')\n        .then(response => response.json())\n        .then(data => {\n            alert(`Hello, ${data.name}!`);\n        });\n}\n")),(0,l.kt)("p",null,"\u274c Bad"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function greet() {\n    const response = await fetch('/profile.json');\n\n    return response.json().then(data => {\n        alert(`Hello, ${data.name}!`);\n    });\n}\n")),(0,l.kt)("p",null,"Async/await is ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Syntactic_sugar"},"syntactic sugar")," for Promises, so it should always be possible to avoid using .then/.catch/.finally."),(0,l.kt)("p",null,"To prevent making asynchronous operations difficult to spot, using await should be limited to simple statements such as one liners, assignments and if guards with a single condition."))}g.isMDXComponent=!0}}]);