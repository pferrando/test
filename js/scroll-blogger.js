!function(a,b,c){"use strict";
function d(){if(!a.querySelector||!a.body.getBoundingClientRect)return!1;c.dataLayerName=c.dataLayerName||"dataLayer",c.distances=c.distances||{},h(),o(b,"scroll",n(h,500))}
function e(a,b){var d,e,h,i=s()||{},j=[],k=[];if(c.distances.percentages&&(c.distances.percentages.each&&(j=j.concat(c.distances.percentages.each)),c.distances.percentages.every))for(h=0;h<c.distances.percentages.every.length;h++)d=g(c.distances.percentages.every[h],100),j=k.concat(d);if(c.distances.pixels&&(c.distances.pixels.each&&(k=k.concat(c.distances.pixels.each)),c.distances.pixels.every))for(h=0;h<c.distances.pixels.every.length;h++)e=g(c.distances.pixels.every[h],a),k=k.concat(e);return i=f(i,j,"%",a,b),i=f(i,k,"px",a,b)}
function f(a,b,c,d,e){var f;for(f=0;f<b.length;f++){var g=parseInt(b[f],10),h="%"!==c?g+e:d*(g/100)+e,i=g+c;h<=d+e&&(a[i]=h)}return a}
function g(a,b){var c,d=parseInt(a,10),e=b/d,f=[];for(c=1;c<e+1;c++)f.push(c*d);return f}
function h(){var a,b,d=j(c.bottom),f=j(c.top),g=m(d,f),h=e(g,f||0),l=k();for(b in h)a=h[b],l>a&&!r[b]&&a<(d||1/0)&&a>(f||0)&&(r[b]=!0,i(b))}
//function i(a){var d=b.GoogleAnalyticsObject;void 0===b[c.dataLayerName]||c.forceSyntax?"function"==typeof b[d]&&"function"==typeof b[d].getAll&&2!==c.forceSyntax?b[d]("send","event",c.category,a,c.label):void 0!==b._gaq&&1!==c.forceSyntax&&b._gaq.push(["_trackEvent",c.category,a,c.label,0,!0]):b[c.dataLayerName].push({event:"scrollTracking",attributes:{distance:a,label:c.label}})}
function i(a){
	if(/^\/[0-9]{4}\/[0-9]{2}\//.test(document.location.pathname)){
		ga('ec:addProduct', {
	   	'id': document.location.pathname,
	   	'name': document.location.pathname,
	   	'category': 'Apparel',
	   	'brand': 'Google',
	   	'variant': 'black',
	   	'price': '1',
	   	'quantity': 1
		});
		if(a=="25%"){ga('ec:setAction', 'detail');}
		if(a=="50%"){ga('ec:setAction', 'add');}
		if(a=="75%"){ga('ec:setAction','checkout', {'step': 1});}
		if(a=="100%"){
			ga('ec:setAction', 'purchase', {
				'id': document.location.pathname,
				'affiliation': 'Google Store - Online',
				'revenue': '1',
				'tax': '0',
				'shipping': '0',
				'coupon': 'SUMMER2013' 
			});}
		}
	var d=b.GoogleAnalyticsObject;void 0===b[c.dataLayerName]||c.forceSyntax?"function"==typeof b[d]&&"function"==typeof b[d].getAll&&2!==c.forceSyntax?b[d]("send","event",c.category,a,c.label):void 0!==b._gaq&&1!==c.forceSyntax&&b._gaq.push(["_trackEvent",c.category,a,c.label,0,!0]):b[c.dataLayerName].push({event:"scrollTracking",attributes:{distance:a,label:c.label}})
	}
function j(b){if("number"==typeof b||parseInt(b,10))return parseInt(b,10);try{return p(1===b.nodeType?b:a.querySelector(b))}catch(c){return}}
function k(){var c=void 0!==b.pageXOffset,d="CSS1Compat"===(a.compatMode||""),e=c?b.pageYOffset:d?a.documentElement.scrollTop:a.body.scrollTop;return parseInt(e,10)+parseInt(l(),10)}
function l(){return("CSS1Compat"===a.compatMode?a.documentElement:a.body).clientHeight}
function m(b,c){var d=a.body,e=a.documentElement,f=Math.max(d.scrollHeight,d.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight);return c&&(f-=c),b&&(f=b-(c||0)),f-5}
function n(a,b){var c,d,e,f=null,g=0,h=function(){g=new Date,f=null,e=a.apply(c,d)};return function(){var i=new Date;g||(g=i);var j=b-(i-g);return c=this,d=arguments,j<=0?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}
function o(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent?a.attachEvent("on"+b,function(b){c.call(a,b)}):void 0!==a["on"+b]&&null!==a["on"+b]||(a["on"+b]=function(b){c.call(a,b)})}
function p(c){return c.getBoundingClientRect().top+(void 0!==b.pageYOffset?b.pageYOffset:(a.documentElement||a.body.parentNode||a.body).scrollTop)}
function q(a){return a instanceof Array}var r={};c.distances.percentages&&c.distances.percentages.every&&(q(c.distances.percentages.every)||(c.distances.percentages.every=[c.distances.percentages.every])),c.distances.pixels&&c.distances.pixels.every&&(q(c.distances.pixels.every)||(c.distances.pixels.every=[c.distances.pixels.every]));var s=function(b){function c(){var c,e,f,g,h,i;if(d={},b.each)for(i=0;i<b.each.length;i++)c=b.each[i],r[c]||(g=a.querySelector(c))&&(d[c]=p(g));if(b.every)for(i=0;i<b.every.length;i++)if(c=b.every[i],f=a.querySelectorAll(c),f.length&&!r[c+":"+(f.length-1)])for(h=0;h<f.length;h++)e=c+":"+h,r[e]||(g=f[h],d[e]=p(g))}if(b){var d={},e=0;return c(),function(){var a,b={};++e>10&&(c(),e=0);for(a in d)b[a]=d[a];return b}}}(c.distances.elements);"loading"!==a.readyState?d():a.addEventListener?o(a,"DOMContentLoaded",d):o(b,"load",d)}
(document, window, {
    forceSyntax: false,
    dataLayerName: false,
    distances: {
        percentages: {
            each: [10, 90],
            every: [25]
        },
        pixels: {
            each: [],
            every: []
        },
        elements: {
            each: [],
            every: []
        }
    },
    top: null,
    bottom: null,
    category: "scroll",
    label: document.location.pathname
});
