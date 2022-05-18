"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5858],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Creating mobile course formats",tags:["Moodle App"]},s=void 0,c={unversionedId:"moodleapp/development/plugins-development-guide/examples/create-course-formats",id:"moodleapp/development/plugins-development-guide/examples/create-course-formats",title:"Creating mobile course formats",description:"Course format plugins can be supported in the app using the CoreCourseFormatDelegate.",source:"@site/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats.md",sourceDirName:"moodleapp/development/plugins-development-guide/examples",slug:"/moodleapp/development/plugins-development-guide/examples/create-course-formats",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652868784,formattedLastUpdatedAt:"18/05/2022",frontMatter:{title:"Creating mobile course formats",tags:["Moodle App"]},sidebar:"docs",previous:{title:"Examples",permalink:"/devdocs/docs/category/examples"},next:{title:"Accepting dynamic names in a Web Service",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names"}},p={},u=[{value:"Example: only display certain sections",id:"example-only-display-certain-sections",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Course format plugins can be supported in the app using the CoreCourseFormatDelegate."),(0,r.kt)("p",null,"To begin, add a handler for this delegate to your course format's db/mobile.php file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="db/mobile.php"',title:'"db/mobile.php"'},"$addons = [\n    'format_myformat' => [\n        'handlers' => [ // Different places where the plugin will display content.\n            'myformat' => [ // Handler unique name (alphanumeric).\n                'delegate' => 'CoreCourseFormatDelegate', // Delegate (where to display the link to the plugin)\n                'method' => 'mobile_course_view', // Main function in \\format_myformat\\output\\mobile.\n                'styles' => [\n                    'url' => $CFG->wwwroot . '/course/format/myformat/mobile.css',\n                    'version' => 2019041000\n                ],\n                'displaysectionselector' => true, // Set to false to disable the default section selector.\n                'displayenabledownload' => true, // Set to false to hide the \"Enable download\" option in the course context menu.\n                'init' => 'myformat_init'\n            ]\n    ]\n];\n")),(0,r.kt)("p",null,"As with other plugins, you then use a function in your plugin's classes/output/mobile.php to return a template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="classes/output/mobile.php"',title:'"classes/output/mobile.php"'},"class mobile {\n\n    /**\n     * Main course page.\n     *\n     * @param array $args Standard mobile web service arguments\n     * @return array\n     */\n    public static function mobile_course_view($args) {\n        global $OUTPUT, $CFG;\n\n        $course = get_course($args['courseid']);\n        require_login($course);\n        $html = $OUTPUT->render_from_template('format_myformat/mobile_course', []);\n\n        return [\n            'templates' => [\n                [\n                    'id' => 'main',\n                    'html' => $html\n                ]\n            ],\n            'otherdata' => [\n               ...\n            ]\n        ];\n    }\n}\n")),(0,r.kt)("p",null,"Then your templates/mobile_course.mustache file will contain the angular template to display your page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'handlebars title="templates/mobile_course.mustache"',handlebars:!0,title:'"templates/mobile_course.mustache"'},'{{=<% %>=}}\n<core-dynamic-component [component]="allSectionsComponent" [data]="data" class="format-myformat">\n    <ng-container *ngFor="let section of sections">\n        <ion-item-divider color="light">\n            <core-format-text [text]="section.name"></core-format-text>\n             \x3c!-- Section download. --\x3e\n             <div *ngIf="section && downloadEnabled" class="core-button-spinner" float-end>\n                \x3c!-- Download button. --\x3e\n                <button *ngIf="section.showDownload && !section.isDownloading && !section.isCalculating" (click)="prefetch($event, section)" ion-button icon-only clear color="dark" [attr.aria-label]="\'core.download\' | translate">\n                    <ion-icon name="cloud-download"></ion-icon>\n                </button>\n                \x3c!-- Refresh button. --\x3e\n                <button *ngIf="section.showRefresh && !section.isDownloading && !section.isCalculating" (click)="prefetch($event, section)" ion-button icon-only clear color="dark" [attr.aria-label]="\'core.refresh\' | translate">\n                    <ion-icon name="refresh"></ion-icon>\n                </button>\n                \x3c!-- Download progress. --\x3e\n                <ion-badge class="core-course-download-section-progress" *ngIf="section.isDownloading && section.total > 0 && section.count < section.total">{{section.count}} / {{section.total}}</ion-badge>\n                \x3c!-- Spinner (downloading or calculating status). --\x3e\n                <ion-spinner *ngIf="(section.isDownloading && section.total > 0) || section.isCalculating"></ion-spinner>\n            </div>\n        </ion-item-divider>\n\n        <ion-item text-wrap *ngIf="section.summary">\n            <core-format-text [text]="section.summary"></core-format-text>\n        </ion-item>\n\n        <ng-container *ngFor="let module of section.modules">\n            <ng-container *ngIf="module.visibleoncoursepage !== 0">\n                <core-course-module text-wrap [module]="module" [courseId]="course.id" [downloadEnabled]="downloadEnabled" (completionChanged)="onCompletionChange($event)">\n                </core-course-module>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n</core-dynamic-component>\n')),(0,r.kt)("p",null,"You don't have to use a mustache template, you can just use a static angular template."),(0,r.kt)("p",null,"This will get you to a stage where you have something similar to the core format plugin - a list of sections with headers, each containing its list of course modules.  From here, you can make customisations to support your course format's features."),(0,r.kt)("p",null,"Note that there are a few objects available to your template without you having to do anything:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sections")," - this is an array of all the sections on the course, which includes all of the modules within that course."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"course")," - this contains the basic course data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"downloadEnabled")," - This is set using the option in the context menu, if ",(0,r.kt)("inlineCode",{parentName:"li"},"displayenabledownload")," is used in your db.php")),(0,r.kt)("h2",{id:"example-only-display-certain-sections"},"Example: only display certain sections"),(0,r.kt)("p",null,"When your course page loads, the sections array contains all of the sections on the course. However, you might not want to display all of these sections on one page.\nYou can achieve this by returning the list of sections to display along with the template in classes/output/mobile.php:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="classes/output/mobile.php"',title:'"classes/output/mobile.php"'},"class mobile {\n    public static function mobile_course_view($args) {\n       ...\n       $displaysections = myformat\\helper::get_list_of_section_ids($courseid);\n\n        return [\n            'templates' => [\n                [\n                    'id' => 'main',\n                    'html' => $html\n                ]\n            ],\n            'otherdata' => [\n               'displaysections' => json_encode($displaysections);\n            ]\n        ];\n    }\n}\n\n")),(0,r.kt)("p",null,"Then filter the list of sections in your template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'    <ng-container *ngFor="let section of sections">\n        <ng-container *ngIf="CONTENT_OTHERDATA.displaysections.hasOwnProperty(section.id.toString())">\n            \x3c!-- code to display the section goes here --\x3e\n        </ng-container>\n    </ng-container>\n')))}d.isMDXComponent=!0}}]);