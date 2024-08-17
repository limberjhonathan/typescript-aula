(()=>{"use strict";var e={52:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(517)),a="show-error-message",l=document.querySelector(".form"),u=document.querySelector(".username"),c=document.querySelector(".email"),i=document.querySelector(".password"),f=document.querySelector(".password2");function s(e,t){var r=e.parentElement;r.querySelector(".error-message").innerHTML=t,r.classList.add(a)}l.addEventListener("submit",(function(e){var t;e.preventDefault(),function(e){e.querySelectorAll("."+a).forEach((function(e){return e.classList.remove(a)}))}(this),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){e.value||s(e,"Campo não pode ficar vazio")}))}(u,c,i,f),t=c,(0,o.default)(t.value)||s(t,"Email inválido"),function(e,t){e.value!==t.value&&(s(e,"Senhas não batem"),s(t,"Senhas não batem"))}(i,f),function(e){var t=!0;return e.querySelectorAll("."+a).forEach((function(){return t=!1})),t}(this)&&console.log("FORMULARIO ENVIADO")}))},255:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r,n;(0,o.default)(e),"object"===a(t)?(r=t.min||0,n=t.max):(r=arguments[1],n=arguments[2]);var l=encodeURI(e).split(/%..|./).length-1;return l>=r&&(void 0===n||l<=n)};var n,o=(n=r(399))&&n.__esModule?n:{default:n};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}e.exports=t.default,e.exports.default=t.default},517:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),(t=(0,u.default)(t,i)).require_display_name||t.allow_display_name){var r=e.match(f);if(r){var c=r[1];if(e=e.replace(c,"").replace(/(^<|>$)/g,""),c.endsWith(" ")&&(c=c.slice(0,-1)),!function(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;if(/[\.";<>]/.test(t)){if(t===e)return!1;if(t.split('"').length!==t.split('\\"').length)return!1}return!0}(c))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>m)return!1;var v=e.split("@"),g=v.pop(),h=g.toLowerCase();if(t.host_blacklist.includes(h))return!1;if(t.host_whitelist.length>0&&!t.host_whitelist.includes(h))return!1;var y=v.join("@");if(t.domain_specific_validation&&("gmail.com"===h||"googlemail.com"===h)){var F=(y=y.toLowerCase()).split("+")[0];if(!(0,o.default)(F.replace(/\./g,""),{min:6,max:30}))return!1;for(var b=F.split("."),w=0;w<b.length;w++)if(!d.test(b[w]))return!1}if(!(!1!==t.ignore_max_length||(0,o.default)(y,{max:64})&&(0,o.default)(g,{max:254})))return!1;if(!(0,a.default)(g,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length,allow_underscores:t.allow_underscores})){if(!t.allow_ip_domain)return!1;if(!(0,l.default)(g)){if(!g.startsWith("[")||!g.endsWith("]"))return!1;var S=g.slice(1,-1);if(0===S.length||!(0,l.default)(S))return!1}}if('"'===y[0])return y=y.slice(1,y.length-1),t.allow_utf8_local_part?x.test(y):_.test(y);for(var q=t.allow_utf8_local_part?p:s,E=y.split("."),$=0;$<E.length;$++)if(!q.test(E[$]))return!1;return!t.blacklisted_chars||-1===y.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))};var n=c(r(399)),o=c(r(255)),a=c(r(658)),l=c(r(372)),u=c(r(610));function c(e){return e&&e.__esModule?e:{default:e}}var i={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},f=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,m=254;e.exports=t.default,e.exports.default=t.default},658:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e),(t=(0,o.default)(t,l)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1)),!0===t.allow_wildcard&&0===e.indexOf("*.")&&(e=e.substring(2));var r=e.split("."),a=r[r.length-1];if(t.require_tld){if(r.length<2)return!1;if(!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(a))return!1;if(/\s/.test(a))return!1}return!(!t.allow_numeric_tld&&/^\d+$/.test(a))&&r.every((function(e){return!(e.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)||/[\uff01-\uff5e]/.test(e)||/^-|-$/.test(e)||!t.allow_underscores&&/_/.test(e))}))};var n=a(r(399)),o=a(r(610));function a(e){return e&&e.__esModule?e:{default:e}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};e.exports=t.default,e.exports.default=t.default},372:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,o.default)(t),(r=String(r))?"4"===r?u.test(t):"6"===r&&i.test(t):e(t,4)||e(t,6)};var n,o=(n=r(399))&&n.__esModule?n:{default:n},a="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(a,"[.]){3}").concat(a),u=new RegExp("^".concat(l,"$")),c="(?:[0-9a-fA-F]{1,4})",i=new RegExp("^("+"(?:".concat(c,":){7}(?:").concat(c,"|:)|")+"(?:".concat(c,":){6}(?:").concat(l,"|:").concat(c,"|:)|")+"(?:".concat(c,":){5}(?::").concat(l,"|(:").concat(c,"){1,2}|:)|")+"(?:".concat(c,":){4}(?:(:").concat(c,"){0,1}:").concat(l,"|(:").concat(c,"){1,3}|:)|")+"(?:".concat(c,":){3}(?:(:").concat(c,"){0,2}:").concat(l,"|(:").concat(c,"){1,4}|:)|")+"(?:".concat(c,":){2}(?:(:").concat(c,"){0,3}:").concat(l,"|(:").concat(c,"){1,5}|:)|")+"(?:".concat(c,":){1}(?:(:").concat(c,"){0,4}:").concat(l,"|(:").concat(c,"){1,6}|:)|")+"(?::((?::".concat(c,"){0,5}:").concat(l,"|(?::").concat(c,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");e.exports=t.default,e.exports.default=t.default},399:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=r(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default},610:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},e.exports=t.default,e.exports.default=t.default}},t={};!function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(52)})();
//# sourceMappingURL=bundle.js.map