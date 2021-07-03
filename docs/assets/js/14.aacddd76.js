(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("h3",{attrs:{id:"authorize-your-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorize-your-application"}},[t._v("#")]),t._v(" Authorize your application")]),t._v(" "),s("p",[t._v("To do that, simply call the asynchronous method "),s("code",[t._v("FitbitConnector.authorize()")]),t._v(", within your code, as:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" userId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        redirectUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Redirect Uri used during the registration, e.g., example://fitbit/auth>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        callbackUrlScheme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Callback Uri scheme, e.g., example>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This will open a web view where user will be able to input his Fitbit credentials and login.\nAfter the login, the web view will close and the method will return a "),s("code",[t._v("String?")]),t._v(" containing the "),s("code",[t._v("userId")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Don't worry about storing the auth tokens provided by the Fitbit API, Fitbitter will do that for you leveraging the "),s("code",[t._v("SharedPreferences")]),t._v(" abd "),s("code",[t._v("GetIt")]),t._v(" packages. If you want, you can access to the token values using")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("GetIt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SharedPreferences"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fitbitAccessToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGetIt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SharedPreferences"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fitbitRefreshToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Remember to retain "),s("code",[t._v("userId")]),t._v(": it will be used to fetch data.")])]),t._v(" "),s("h3",{attrs:{id:"unauthorize-your-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unauthorize-your-application"}},[t._v("#")]),t._v(" Unauthorize your application")]),t._v(" "),s("p",[t._v("To do that, simply call the asynchronous method "),s("code",[t._v("FitbitConnector.unauthorize()")]),t._v(", within your code, as:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unauthorize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            clientID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            clientSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Don't worry about removing the auth tokens provided by the Fitbit API, Fitbitter will do that for you leveraging the "),s("code",[t._v("SharedPreferences")]),t._v(" abd "),s("code",[t._v("GetIt")]),t._v(" packages. The token values wil no longer be accessible using")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("GetIt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SharedPreferences"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fitbitAccessToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGetIt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SharedPreferences"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fitbitRefreshToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"check-token-validity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-token-validity"}},[t._v("#")]),t._v(" Check token validity")]),t._v(" "),s("p",[t._v("To check if the token, retained by Fitbitter, are still valid, simply call the asynchronous method "),s("code",[t._v("FitbitConnector.isTokenValid()")]),t._v(", within your code, as:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    bool valid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTokenValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"refresh-retained-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-retained-token"}},[t._v("#")]),t._v(" Refresh retained token")]),t._v(" "),s("p",[t._v("To do that, simply call the asynchronous method "),s("code",[t._v("FitbitConnector.refreshToken()")]),t._v(", within your code, as:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            clientID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            clientSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);