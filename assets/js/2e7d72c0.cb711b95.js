"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3091],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(o),m=a,p=u["".concat(c,".").concat(m)]||u[m]||g[m]||r;return o?n.createElement(p,l(l({ref:t},d),{},{components:o})):n.createElement(p,l({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9085:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),l=["components"],i={title:"Moodle App Remote themes upgrade guide",sidebar_label:"Remote themes upgrade guide",sidebar_position:2,tags:["Moodle App"]},c=void 0,s={unversionedId:"moodleapp/upgrading/remote-themes-upgrade-guide",id:"moodleapp/upgrading/remote-themes-upgrade-guide",title:"Moodle App Remote themes upgrade guide",description:"In the following guide, you will find some examples to migrate your styles from an older version to work with the Ionic 5 Moodle App (starting at version 3.9.5). You will find tables where each row is a migration to do; the left part is the old code and the right part the new one.",source:"@site/docs/moodleapp/upgrading/remote-themes-upgrade-guide.md",sourceDirName:"moodleapp/upgrading",slug:"/moodleapp/upgrading/remote-themes-upgrade-guide",permalink:"/devdocs/docs/moodleapp/upgrading/remote-themes-upgrade-guide",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/upgrading/remote-themes-upgrade-guide.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652868784,formattedLastUpdatedAt:"18/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle App Remote themes upgrade guide",sidebar_label:"Remote themes upgrade guide",sidebar_position:2,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Upgrading your code",permalink:"/devdocs/docs/category/upgrading-your-code"},next:{title:"Plugins upgrade guide",permalink:"/devdocs/docs/moodleapp/upgrading/plugins-upgrade-guide"}},d={},g=[{value:"Before starting the migration",id:"before-starting-the-migration",level:2},{value:"How to upgrade my theme",id:"how-to-upgrade-my-theme",level:3},{value:"Colors",id:"colors",level:2},{value:"Header toolbar",id:"header-toolbar",level:2},{value:"Border width and color (new)",id:"border-width-and-color-new",level:3},{value:"Background",id:"background",level:3},{value:"Text and buttons",id:"text-and-buttons",level:3},{value:"Bottom tab bar (main menu)",id:"bottom-tab-bar-main-menu",level:2},{value:"Background",id:"background-1",level:3},{value:"Tab icon color",id:"tab-icon-color",level:3},{value:"Selected tab icon color",id:"selected-tab-icon-color",level:3},{value:"Badge color and text",id:"badge-color-and-text",level:3},{value:"Top tabs",id:"top-tabs",level:2},{value:"Tabs background",id:"tabs-background",level:3},{value:"Individual tab background",id:"individual-tab-background",level:3},{value:"Unselected tab styles",id:"unselected-tab-styles",level:3},{value:"Selected tab styles",id:"selected-tab-styles",level:3},{value:"Items",id:"items",level:2},{value:"Items background color",id:"items-background-color",level:3},{value:"Item divider background color",id:"item-divider-background-color",level:3},{value:"Empty divider background",id:"empty-divider-background",level:3},{value:"Progress bar",id:"progress-bar",level:2},{value:"More page",id:"more-page",level:2},{value:"Icons",id:"icons",level:3},{value:"Item border color",id:"item-border-color",level:3},{value:"Login page",id:"login-page",level:2},{value:"Messages page",id:"messages-page",level:2},{value:"Full example",id:"full-example",level:2}],u={toc:g};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the following guide, you will find some examples to migrate your styles from an older version to work with the Ionic 5 Moodle App (starting at version 3.9.5). You will find tables where each row is a migration to do; the left part is the old code and the right part the new one."),(0,r.kt)("p",null,"We recommend that you keep your old CSS rules for older versions (see ",(0,r.kt)("a",{parentName:"p",href:"#before-starting-the-migration"},"Before starting the migration"),"), by doing so users who are still using Moodle App 3.9.4 and earlier will see the same styling you had until now."),(0,r.kt)("h2",{id:"before-starting-the-migration"},"Before starting the migration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove all styles using ionic classes ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"-wp")," (Windows Phone is not supported, therefore it's not necessary to specify it)."),(0,r.kt)("li",{parentName:"ol"},"Check ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodleapp/blob/master/src/theme/theme.light.scss"},"the theme file"),", where most variables are specified."),(0,r.kt)("li",{parentName:"ol"},"As in the previous version, do not use any Saas variables (the ones starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"$"),"). But now you can use ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS custom properties")," (the ones starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"--"),")."),(0,r.kt)("li",{parentName:"ol"},"We recommend prepending all CSS rules with ",(0,r.kt)("inlineCode",{parentName:"li"},"body.ionic5")," in order to make them only available for Ionic 5, and prepending the old ones with ",(0,r.kt)("inlineCode",{parentName:"li"},"body:not(.ionic5)")," for the previous versions of the Moodle App (3.9.4, 3.9.3, and so on)."),(0,r.kt)("li",{parentName:"ol"},"Be aware that example rules may differ from your CSS, which could be more specific.")),(0,r.kt)("h3",{id:"how-to-upgrade-my-theme"},"How to upgrade my theme"),(0,r.kt)("p",null,"You can follow the same process that is documented in the ",(0,r.kt)("a",{parentName:"p",href:"../customisation/remote-themes#how-can-you-create-your-own-theme"},"Moodle App Remote themes")," page."),(0,r.kt)("p",null,"Make sure to read it in order to understand how to style your application for newer versions of the app. If you're upgrading your styles, it is likely that the documentation has been updated since you read it."),(0,r.kt)("h2",{id:"colors"},"Colors"),(0,r.kt)("p",null,"The main color in the app is Moodle Orange, but you can now change it by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--primary")," variable. This will probably reduce the CSS you are applying right now, but this only covers the main color."),(0,r.kt)("p",null,"For other colors, check out ",(0,r.kt)("a",{parentName:"p",href:"../customisation/remote-themes#working-with-colors"},"the colors section in the main documentation"),"."),(0,r.kt)("h2",{id:"header-toolbar"},"Header toolbar"),(0,r.kt)("p",null,"On the header toolbar, we've added a bottom border that you can disable."),(0,r.kt)("h3",{id:"border-width-and-color-new"},"Border width and color (new)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ion-header ion-toolbar {\n    --core-header-toolbar-border-width: 2px; /* Use 0 to disable it */\n    --core-header-toolbar-border-color: yellow;\n}\n")),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".toolbar-background-md, .toolbar-background-ios {\n    background: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-header ion-toolbar {\n    --core-header-toolbar-background: red;\n}\n")),(0,r.kt)("h3",{id:"text-and-buttons"},"Text and buttons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".toolbar-title-md,\n.toolbar-title-ios {\n    color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-header ion-toolbar {\n    --core-header-toolbar-color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},".toolbar-title-md,\n.toolbar-title-ios {\n    font-weight: normal;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-header ion-toolbar.in-toolbar h1,\nion-header ion-toolbar.in-toolbar h2 {\n    font-weight: normal;\n}\n")),(0,r.kt)("h2",{id:"bottom-tab-bar-main-menu"},"Bottom tab bar (main menu)"),(0,r.kt)("h3",{id:"background-1"},"Background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".tabs-md .tabbar,\n.tabs-ios .tabbar {\n    background: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-tab-bar.mainmenu-tabs {\n    --core-bottom-tabs-background: red;\n    --core-bottom-tabs-background-selected: transparent;\n}\n")),(0,r.kt)("h3",{id:"tab-icon-color"},"Tab icon color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".tabs-md .tab-button-icon,\n.tabs-ios .tab-button-icon {\n    color: blue;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-tab-bar.mainmenu-tabs {\n    --core-bottom-tabs-color: blue;\n}\n")),(0,r.kt)("h3",{id:"selected-tab-icon-color"},"Selected tab icon color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"tabs-md .tab-button[.tab-button-icon,\n.tabs-ios .tab-button[aria-selected=true](aria-selected=true]) .tab-button-icon {\n    color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-tab-bar.mainmenu-tabs {\n    --core-bottom-tabs-color-selected: red;\n}\n")),(0,r.kt)("h3",{id:"badge-color-and-text"},"Badge color and text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"core-ion-tabs .tab-badge.badge {\n    color: white;\n    background: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"ion-tab-bar.mainmenu-tabs {\n    --core-bottom-tabs-badge-text-color: white;\n    --core-bottom-tabs-badge-color: red;\n}\n")),(0,r.kt)("h2",{id:"top-tabs"},"Top tabs"),(0,r.kt)("h3",{id:"tabs-background"},"Tabs background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".core-tabs-bar {\n  background-color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"core-tabs, core-tabs-outlet {\n    --core-tabs-background: red;\n}\n")),(0,r.kt)("h3",{id:"individual-tab-background"},"Individual tab background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".core-tabs-bar .tab-slide {\n  background-color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"core-tabs, core-tabs-outlet {\n    --core-tab-background: red;\n}\n")),(0,r.kt)("h3",{id:"unselected-tab-styles"},"Unselected tab styles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".core-tabs-bar .tab-slide {\n  color: red;\n  border-bottom-color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"core-tabs, core-tabs-outlet {\n    --core-tab-color: red;\n}\n")),(0,r.kt)("h3",{id:"selected-tab-styles"},"Selected tab styles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".core-tabs-bar .tab-slide[aria-selected=true]{\n   color: red;\n   border-bottom-color: red;\n   font-weigth: normal;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"core-tabs, core-tabs-outlet {\n    --core-tab-color-active: red;\n    --core-tab-border-color-active: red;\n    --core-tab-font-weight-active: bold;\n}\n")),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("h3",{id:"items-background-color"},"Items background color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"ion-item {\n    background: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"body {\n    --ion-item-background: red;\n}\n")),(0,r.kt)("h3",{id:"item-divider-background-color"},"Item divider background color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},".item-divider-md,\n.item-divider-ios {\n    background: red;\n    color: yellow;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"body {\n    --item-divider-background: red;\n    --item-divider-color: yellow;\n}\n")),(0,r.kt)("h3",{id:"empty-divider-background"},"Empty divider background"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"body {\n    --spacer-background: red;\n}\n")),(0,r.kt)("h2",{id:"progress-bar"},"Progress bar"),(0,r.kt)("p",null,"You can now easily style progress bars."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"core-progress-bar {\n    --core-progressbar-height: 8px;\n    --core-progressbar-color: red;\n    --core-progressbar-text-color: black;\n    --core-progressbar-background: white;\n}\n")),(0,r.kt)("h2",{id:"more-page"},"More page"),(0,r.kt)("h3",{id:"icons"},"Icons"),(0,r.kt)("p",null,"The icons in the More page can now easily change their color:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"page-core-mainmenu-more ion-icon {\n    color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"page-core-mainmenu-more {\n    --core-more-icon: red;\n}\n")),(0,r.kt)("p",null,"To change a color on a particular icon, you'll have to use the class of each handler. For example, to change the color of the folder icon on the menu item named Files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"page-core-mainmenu-more .ion-md-folder,\npage-core-mainmenu-more .ion-ios-folder {\n    color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"page-core-mainmenu-more .addon-privatefiles-handler ion-icon {\\\n    color: red !important;\n}\n")),(0,r.kt)("h3",{id:"item-border-color"},"Item border color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-css",metastring:'title="Ionic 3 legacy code"',title:'"Ionic',legacy:!0,'code"':!0},"page-core-mainmenu-more .item-block.item-ios .item-inner,\npage-core-mainmenu-more .item-block.item-md .item-inner {\n    border-bottom-color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"page-core-mainmenu-more {\n    --core-more-item-border: red;\n}\n")),(0,r.kt)("p",null,"The dividers background color can now be overridden using ",(0,r.kt)("inlineCode",{parentName:"p"},"--spacer-background"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"page-core-mainmenu-more {\n    --spacer-background: blue;\n}\n")),(0,r.kt)("h2",{id:"login-page"},"Login page"),(0,r.kt)("p",null,"You can now personalise some colors in the Login page, but keep in mind that this only includes the credentials page (the one after you select the site)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"body {\n    --core-login-background: red;\n    --core-login-text-color: blue;\n    --core-login-input-background: green;\n    --core-login-input-color: yellow;\n}\n")),(0,r.kt)("h2",{id:"messages-page"},"Messages page"),(0,r.kt)("p",null,"Message discussion page, including chat activity and comments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"body {\n    --addon-messages-message-bg: white;\n    --addon-messages-message-activated-bg: gray-light;\n    --addon-messages-message-note-text: gray-dark;\n    --addon-messages-message-mine-bg: gray-light;\n    --addon-messages-message-mine-activated-bg: gray;\n    --addon-messages-discussion-badge: orange;\n    --addon-messages-discussion-badge-text: white;\n}\n")),(0,r.kt)("p",null,"You can also make some modifications on the input field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    --core-send-message-input-background: gray-light;\n    --core-send-message-input-color: black;\n}\n")),(0,r.kt)("h2",{id:"full-example"},"Full example"),(0,r.kt)("p",null,"This is a full example showcasing how to handle multiple versions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* ----- Ionic 5 styles ----- */\n\nbody.ionic5 {\n    --core-header-toolbar-background: red;\n}\n\n/* Dark mode */\nbody.ionic5.dark {\n    --core-header-toolbar-background: blue;\n}\n\n/* iOS only */\nhtml.ios body.ionic5 {\n    --core-link-color: green;\n}\n\n/* Android only */\nhtml.md body.ionic5 {\n    --core-link-color: yellow;\n}\n\n\n/* ----- Ionic 3 styles (legacy) ----- */\n\nbody:not(.ionic5) .toolbar-background {\n    border-color: #004C9C;\n    background: #004C9C;\n}\n")),(0,r.kt)("p",null,"As you can see we recommend to always add ",(0,r.kt)("inlineCode",{parentName:"p"},"body.ionic")," to start the CSS selectors, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},":root body.ionic5")," or even ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),"."))}m.isMDXComponent=!0}}]);