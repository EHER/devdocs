"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7004],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4286:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Accepting dynamic names in a Web Service",tags:["Moodle App"]},s=void 0,p={unversionedId:"moodleapp/development/plugins-development-guide/examples/dynamic-names",id:"moodleapp/development/plugins-development-guide/examples/dynamic-names",title:"Accepting dynamic names in a Web Service",description:"We want to display a form where the names of the fields are dynamic, like it happens in quiz. This data will be sent to a new Web Service that we have created.",source:"@site/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names.md",sourceDirName:"moodleapp/development/plugins-development-guide/examples",slug:"/moodleapp/development/plugins-development-guide/examples/dynamic-names",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652868784,formattedLastUpdatedAt:"18/05/2022",frontMatter:{title:"Accepting dynamic names in a Web Service",tags:["Moodle App"]},sidebar:"docs",previous:{title:"Creating mobile course formats",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats"},next:{title:"Sending custom Push Notifications",permalink:"/devdocs/docs/moodleapp/development/custom-push-notifications"}},d={},u=[],c={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We want to display a form where the names of the fields are dynamic, like it happens in quiz. This data will be sent to a new Web Service that we have created."),(0,r.kt)("p",null,"The first issue we find is that the Web Service needs to define the names of the parameters received, but in this case they're dynamic. The solution is to accept an array of objects with name and value. So in the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\_parameters()")," function of our new Web Service, we will add this parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'data' => new external_multiple_structure(\n     new external_single_structure(\n        [\n            'name' => new external_value(PARAM_RAW, 'data name'),\n            'value' => new external_value(PARAM_RAW, 'data value'),\n        ]\n    ),\n    'The data to be saved', VALUE_DEFAULT, []\n)\n")),(0,r.kt)("p",null,"Now we need to adapt our form to send the data as the Web Service requires it. In our template, we have a button with the ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site-plugins-call-ws")," directive that will send the form data to our Web Service. To make this work we will have to pass the parameters manually, without using the ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," attribute, because we need to format the data before it is sent."),(0,r.kt)("p",null,"Since we will send the parameters manually and we want it all to be sent in the same array, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"ngModel")," to store the input data into a variable that we'll call ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),', but you can use the name you want. This variable will be an object that will hold the input data with the format "name->value". For example, if I have an input with name "a1" and value "My answer", the data object will be:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{a1: 'My answer'}\n")),(0,r.kt)("p",null,"So we need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ngModel")," to all the inputs whose values need to be sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," WS param. Please notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"ngModel")," requires the element to have a name, so if you add ",(0,r.kt)("inlineCode",{parentName:"p"},"ngModel")," to a certain element you need to add a name too. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-input name="<% name %>" [(ngModel)]="CONTENT_OTHERDATA.data[\'<% name %>\']">)\n')),(0,r.kt)("p",null,"As you can see, we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTENT_OTHERDATA")," to store the data. We do it like this because we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"otherdata")," to initialise the form, setting the values the user has already stored. If you don't need to initialise the form, then you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataObject")," variable, an empty object that the mobile app creates for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},"[(ngModel)]=\"dataObject['<% name %>']\"\n")),(0,r.kt)("p",null,"The app has a function that allows you to convert this data object into an array like the one the WS expects: ",(0,r.kt)("inlineCode",{parentName:"p"},"objectToArrayOfObjects"),". So in our button we'll use this function to format the data before it's sent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-button expand="block" type="submit" core-site-plugins-call-ws name="my_ws_name"\n    [params]="{id: <% id %>, data: CoreUtilsProvider.objectToArrayOfObjects(CONTENT_OTHERDATA.data, \'name\', \'value\')}"\n    successMessage\n    refreshOnSuccess="true">\n')),(0,r.kt)("p",null,"As you can see in the example above, we're specifying that the keys of the ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),' object need to be stored in a property called "name", and the values need to be stored in a property called "value". If your Web Service expects different names you need to change the parameters of the ',(0,r.kt)("inlineCode",{parentName:"p"},"objectToArrayOfObjects")," function."),(0,r.kt)("p",null,"If you open your plugin now in the app it will display an error in the JavaScript console. The reason is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," variable doesn't exist inside ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTENT_OTHERDATA"),". As it is explained in previous sections, ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTENT_OTHERDATA")," holds the data that you return in ",(0,r.kt)("inlineCode",{parentName:"p"},"otherdata")," for your method. We'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"otherdata")," to initialise the values to be displayed in the form."),(0,r.kt)("p",null,"If the user hasn't answered the form yet, we can initialise the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object as an empty object. Please remember that we cannot return arrays or objects in ",(0,r.kt)("inlineCode",{parentName:"p"},"otherdata"),", so we'll return a JSON string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'otherdata' => ['data' => '{}'],\n")),(0,r.kt)("p",null,"With the code above, the form will always be empty when the user opens it. But now we want to check if the user has already answered the form and fill the form with the previous values. We will do it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$userdata = get_user_responses(); // It will held the data in a format name->value. Example: ['a1' => 'My value'].\n\n// ...\n\n'otherdata' => ['data' => json_encode($userdata)],\n")),(0,r.kt)("p",null,"Now the user will be able to see previous values when the form is opened, and clicking the button will send the data to our Web Service in array format."))}m.isMDXComponent=!0}}]);