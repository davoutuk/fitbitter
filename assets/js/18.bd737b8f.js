(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{370:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"get-sleep-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-sleep-data"}},[t._v("#")]),t._v(" Get Sleep Data")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to the Fitbit user id, here called "),a("code",[t._v("userID")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),a("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),a("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),a("p",[t._v("Information about the user's Heart data can be obtained in three steps")]),t._v(" "),a("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),a("p",[t._v("First, you need to instanciate a "),a("code",[t._v("FitbitSleepDataManager")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    FitbitSleepDataManager fitbitSleepDataManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitSleepDataManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"step-2-create-the-request-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),a("p",[t._v("Then, you have to create a url object, "),a("code",[t._v("FitbitSleepAPIURL")]),t._v(", that fetches the Sleep data, during the desidered time range. For example:")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    FitbitSleepAPIURL fitbitSleepAPIURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitSleepAPIURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withUserIDAndDay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                                    date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For the complete list of possible "),a("code",[t._v("FitbitSleepAPIURL")]),t._v(", defined for different time ranges, please refer to the "),a("a",{attrs:{href:"https://pub.dev/documentation/fitbitter/latest/fitbitter/FitbitSleepAPIURL-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Doc"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"step-3-get-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),a("p",[t._v("Finally you can obtain the Sleep data using")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitSleepAPIURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitSleepAPIURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitSleepDataManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitSleepAPIURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);