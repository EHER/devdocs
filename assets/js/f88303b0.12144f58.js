"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1443],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(o),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return o?n.createElement(h,r(r({ref:t},u),{},{components:o})):n.createElement(h,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},902:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],p={title:"Moodle App Customisation",sidebar_label:"Customisation",sidebar_position:5,tags:["Moodle App"]},s=void 0,l={unversionedId:"moodleapp/customisation/index",id:"moodleapp/customisation/index",title:"Moodle App Customisation",description:"The Moodle App can be customised in different ways:",source:"@site/docs/moodleapp/customisation/index.md",sourceDirName:"moodleapp/customisation",slug:"/moodleapp/customisation/",permalink:"/devdocs/docs/moodleapp/customisation/",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/customisation/index.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652868784,formattedLastUpdatedAt:"18/05/2022",sidebarPosition:5,frontMatter:{title:"Moodle App Customisation",sidebar_label:"Customisation",sidebar_position:5,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Translation",permalink:"/devdocs/docs/moodleapp/translation"},next:{title:"Remote themes",permalink:"/devdocs/docs/moodleapp/customisation/remote-themes"}},u={},d=[{value:"Changing the app appearance for your site",id:"changing-the-app-appearance-for-your-site",level:2},{value:"Adding support in your plugin for the mobile app",id:"adding-support-in-your-plugin-for-the-mobile-app",level:2},{value:"Configuring how the app should work via Moodle site settings",id:"configuring-how-the-app-should-work-via-moodle-site-settings",level:2},{value:"Testing and developing",id:"testing-and-developing",level:2},{value:"See also",id:"see-also",level:2}],c={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Moodle App can be customised in different ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changing the app appearance for your site."),(0,i.kt)("li",{parentName:"ul"},"Adding support in your plugin for the mobile app."),(0,i.kt)("li",{parentName:"ul"},"Configuring how the app should work via Moodle site settings."),(0,i.kt)("li",{parentName:"ul"},"Creating a custom application (with your custom name and icon) based on the open source code.")),(0,i.kt)("p",null,"With the first three options, you are not required to work with the source code and your users can use the standard app."),(0,i.kt)("p",null,"The fourth option involves building your own application, and it is not covered in this documentation. You can learn more about that in the ",(0,i.kt)("a",{parentName:"p",href:"./customisation/custom-apps"},"Custom Moodle Apps")," page."),(0,i.kt)("h2",{id:"changing-the-app-appearance-for-your-site"},"Changing the app appearance for your site"),(0,i.kt)("p",null,"The app can retrieve your custom styles from your Moodle site. Since it is an HTML5 app, you can safely apply CSS3 styles."),(0,i.kt)("p",null,'In your Moodle installation, go to "Plugins > Web services > Mobile" and enter in the ',(0,i.kt)("inlineCode",{parentName:"p"},"mobilecssurl")," field a valid URL pointing to a CSS file containing your custom styles (theme). The CSS should be placed inside your Moodle installation (in your custom theme or inside a local plugin)."),(0,i.kt)("p",null,"Once the user is logged in to the app, there is a periodical process that retrieves your remote CSS files for applying your custom styles into the app. So if you don't see the styles right away, try removing the site from the app and adding it again."),(0,i.kt)("p",null,'Notice that the first time a user opens the app, they will see the default styles. Your custom styles will be applied once the user has added a site in the app. Given that styles come from a site, there is no way to change the initial "Add site / Manage account" pages styles.'),(0,i.kt)("p",null,"You can learn more about this in the ",(0,i.kt)("a",{parentName:"p",href:"./customisation/remote-themes"},"Moodle App Remote themes")," page."),(0,i.kt)("h2",{id:"adding-support-in-your-plugin-for-the-mobile-app"},"Adding support in your plugin for the mobile app"),(0,i.kt)("p",null,"You can create Moodle plugins to change how the app works. You can learn about this in the ",(0,i.kt)("a",{parentName:"p",href:"./development/plugins-development-guide"},"Moodle App Plugins development guide")," page."),(0,i.kt)("h2",{id:"configuring-how-the-app-should-work-via-moodle-site-settings"},"Configuring how the app should work via Moodle site settings"),(0,i.kt)("p",null,"The app can be configured via Moodle site settings. You can disable features, rename strings, add new elements to the main menu, or change how log out works in the app."),(0,i.kt)("p",null,"You can learn about all the configuration options in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Moodle_app_guide_for_admins#Configuring_the_app_from_your_site"},"the user guide"),"."),(0,i.kt)("h2",{id:"testing-and-developing"},"Testing and developing"),(0,i.kt)("p",null,"You can test your changes using any Chromium-based browser, but you should launch it with some security features disabled. You can learn more about that in the ",(0,i.kt)("a",{parentName:"p",href:"./development/setup/app-in-browser"},"Using the Moodle App in a browser")," page."),(0,i.kt)("p",null,"Also, keep in mind that the usage of Remote themes and Moodle settings could be limited depending on your ",(0,i.kt)("a",{parentName:"p",href:"https://apps.moodle.com"},"Moodle App plan"),"."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.com/branded-app/"},"Branded Moodle Apps service by Moodle HQ"))))}m.isMDXComponent=!0}}]);