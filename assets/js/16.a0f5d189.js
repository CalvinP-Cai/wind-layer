(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{447:function(t,o,n){"use strict";n.d(o,"c",(function(){return r})),n.d(o,"f",(function(){return a})),n.d(o,"h",(function(){return u})),n.d(o,"a",(function(){return c})),n.d(o,"g",(function(){return h})),n.d(o,"e",(function(){return l})),n.d(o,"b",(function(){return p})),n.d(o,"d",(function(){return g})),n.d(o,"i",(function(){return f}));var e=n(443),i=new Array(6);function r(){return[1,0,0,1,0,0]}function a(t,o){var n=t[0],e=t[1],i=t[2],r=t[3],a=t[4],s=t[5],u=o[0],c=o[1],h=o[2],l=o[3],p=o[4],g=o[5];return t[0]=n*u+i*c,t[1]=e*u+r*c,t[2]=n*h+i*l,t[3]=e*h+r*l,t[4]=n*p+i*g+a,t[5]=e*p+r*g+s,t}function s(t,o,n,e,i,r,a){return t[0]=o,t[1]=n,t[2]=e,t[3]=i,t[4]=r,t[5]=a,t}function u(t,o){return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t}function c(t,o){var n=o[0],e=o[1];return o[0]=t[0]*n+t[2]*e+t[4],o[1]=t[1]*n+t[3]*e+t[5],o}function h(t,o,n){return a(t,s(i,o,0,0,n,0,0))}function l(t,o,n){return s(t,o,0,0,n,0,0)}function p(t,o,n,e,i,r,a,s){var u=Math.sin(r),c=Math.cos(r);return t[0]=e*c,t[1]=i*u,t[2]=-e*u,t[3]=i*c,t[4]=a*e*c-s*e*u+o,t[5]=a*i*u+s*i*c+n,t}function g(t,o){var n,i=(n=o)[0]*n[3]-n[1]*n[2];Object(e.a)(0!==i,32);var r=o[0],a=o[1],s=o[2],u=o[3],c=o[4],h=o[5];return t[0]=u/i,t[1]=-a/i,t[2]=-s/i,t[3]=r/i,t[4]=(s*h-u*c)/i,t[5]=-(r*h-a*c)/i,t}function f(t){return"matrix("+t.join(", ")+")"}},462:function(t,o,n){"use strict";function e(t){return Math.pow(t,3)}function i(t){return 1-e(1-t)}function r(t){return 3*t*t-2*t*t*t}function a(t){return t}n.d(o,"a",(function(){return e})),n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return r})),n.d(o,"d",(function(){return a}))},484:function(t,o,n){"use strict";o.a={ANIMATING:0,INTERACTING:1}},499:function(t,o,n){"use strict";n(436);function e(t,o){return t[0]+=+o[0],t[1]+=+o[1],t}function i(t,o){for(var n=!0,e=t.length-1;e>=0;--e)if(t[e]!=o[e]){n=!1;break}return n}function r(t,o){var n=Math.cos(o),e=Math.sin(o),i=t[0]*n-t[1]*e,r=t[1]*n+t[0]*e;return t[0]=i,t[1]=r,t}function a(t,o){return t[0]*=o,t[1]*=o,t}n.d(o,"a",(function(){return e})),n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return r})),n.d(o,"d",(function(){return a}))},509:function(t,o,n){"use strict";n.d(o,"a",(function(){return e})),n.d(o,"b",(function(){return i}));var e=42,i=256},521:function(t,o,n){"use strict";n.d(o,"c",(function(){return i})),n.d(o,"d",(function(){return r})),n.d(o,"a",(function(){return a})),n.d(o,"b",(function(){return s}));var e=n(436);function i(t){return void 0!==t?0:void 0}function r(t){return void 0!==t?t:void 0}function a(t){var o=2*Math.PI/t;return(function(t,n){return n?t:void 0!==t?t=Math.floor(t/o+.5)*o:void 0})}function s(t){var o=t||Object(e.i)(5);return(function(t,n){return n?t:void 0!==t?Math.abs(t)<=o?0:t:void 0})}},602:function(t,o,n){"use strict";n.r(o);var e=n(509),i=n(455),r=n(436);function a(t,o,n){return function(e,i,a,s){if(e){var u=o?0:a[0]*i,c=o?0:a[1]*i,h=t[0]+u/2,l=t[2]-u/2,p=t[1]+c/2,g=t[3]-c/2;h>l&&(l=h=(l+h)/2),p>g&&(g=p=(g+p)/2);var f=Object(r.a)(e[0],h,l),m=Object(r.a)(e[1],p,g),d=30*i;return s&&n&&(f+=-d*Math.log(1+Math.max(0,h-e[0])/d)+d*Math.log(1+Math.max(0,e[0]-l)/d),m+=-d*Math.log(1+Math.max(0,p-e[1])/d)+d*Math.log(1+Math.max(0,e[1]-g)/d)),[f,m]}}}function s(t){return t}var u=n(454),c=n(440),h=n(430);function l(t,o,n,e){var i=Object(h.E)(o)/n[0],r=Object(h.A)(o)/n[1];return e?Math.min(t,Math.max(i,r)):Math.min(t,Math.min(i,r))}function p(t,o,n){var e=Math.min(t,o);return e*=Math.log(1+50*Math.max(0,t/o-1))/50+1,n&&(e=Math.max(e,n),e/=Math.log(1+50*Math.max(0,n/t-1))/50+1),Object(r.a)(e,n/2,2*o)}function g(t,o,n,e,i){return function(a,s,u,c){if(void 0!==a){var h=e?l(t,e,u,i):t;return(void 0===n||n)&&c?p(a,h,o):Object(r.a)(a,o,h)}}}var f=n(521),m=n(484),d="center",v="resolution",_="rotation",R=n(443),y=n(499),j=n(462),b=n(442),C=n(517),M=n(445),O=n(444),I=n(465);n.d(o,"createCenterConstraint",(function(){return E})),n.d(o,"createResolutionConstraint",(function(){return P})),n.d(o,"createRotationConstraint",(function(){return z})),n.d(o,"isNoopAnimation",(function(){return S}));var x,A=(x=function(t,o){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)},function(t,o){function n(){this.constructor=t}x(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),w=function(t){function o(o){var n=t.call(this)||this,e=Object(M.a)({},o);return n.hints_=[0,0],n.animations_=[],n.updateAnimationKey_,n.projection_=Object(O.createProjection)(e.projection,"EPSG:3857"),n.viewportSize_=[100,100],n.targetCenter_=null,n.targetResolution_,n.targetRotation_,n.cancelAnchor_=void 0,e.center&&(e.center=Object(O.fromUserCoordinate)(e.center,n.projection_)),e.extent&&(e.extent=Object(O.fromUserExtent)(e.extent,n.projection_)),n.applyOptions_(e),n}return A(o,t),o.prototype.applyOptions_=function(t){var o=P(t);this.maxResolution_=o.maxResolution,this.minResolution_=o.minResolution,this.zoomFactor_=o.zoomFactor,this.resolutions_=t.resolutions,this.minZoom_=o.minZoom;var n=E(t),e=o.constraint,i=z(t);this.constraints_={center:n,resolution:e,rotation:i},this.setRotation(void 0!==t.rotation?t.rotation:0),this.setCenterInternal(void 0!==t.center?t.center:null),void 0!==t.resolution?this.setResolution(t.resolution):void 0!==t.zoom&&this.setZoom(t.zoom),this.resolveConstraints(0),this.setProperties({}),this.options_=t},o.prototype.getUpdatedOptions_=function(t){var o=Object(M.a)({},this.options_);return void 0!==o.resolution?o.resolution=this.getResolution():o.zoom=this.getZoom(),o.center=this.getCenterInternal(),o.rotation=this.getRotation(),Object(M.a)({},o,t)},o.prototype.animate=function(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var o=new Array(arguments.length),n=0;n<o.length;++n){var e=arguments[n];e.center&&((e=Object(M.a)({},e)).center=Object(O.fromUserCoordinate)(e.center,this.getProjection())),e.anchor&&((e=Object(M.a)({},e)).anchor=Object(O.fromUserCoordinate)(e.anchor,this.getProjection())),o[n]=e}this.animateInternal.apply(this,o)},o.prototype.animateInternal=function(t){var o,n=arguments.length;if(n>1&&"function"==typeof arguments[n-1]&&(o=arguments[n-1],--n),!this.isDef()){var e=arguments[n-1];return e.center&&this.setCenterInternal(e.center),void 0!==e.zoom&&this.setZoom(e.zoom),void 0!==e.rotation&&this.setRotation(e.rotation),void(o&&Z(o,!0))}for(var i=Date.now(),a=this.targetCenter_.slice(),s=this.targetResolution_,u=this.targetRotation_,c=[],h=0;h<n;++h){var l=arguments[h],p={start:i,complete:!1,anchor:l.anchor,duration:void 0!==l.duration?l.duration:1e3,easing:l.easing||j.c,callback:o};if(l.center&&(p.sourceCenter=a,p.targetCenter=l.center.slice(),a=p.targetCenter),void 0!==l.zoom?(p.sourceResolution=s,p.targetResolution=this.getResolutionForZoom(l.zoom),s=p.targetResolution):l.resolution&&(p.sourceResolution=s,p.targetResolution=l.resolution,s=p.targetResolution),void 0!==l.rotation){p.sourceRotation=u;var g=Object(r.d)(l.rotation-u+Math.PI,2*Math.PI)-Math.PI;p.targetRotation=u+g,u=p.targetRotation}S(p)?p.complete=!0:i+=p.duration,c.push(p)}this.animations_.push(c),this.setHint(m.a.ANIMATING,1),this.updateAnimations_()},o.prototype.getAnimating=function(){return this.hints_[m.a.ANIMATING]>0},o.prototype.getInteracting=function(){return this.hints_[m.a.INTERACTING]>0},o.prototype.cancelAnimations=function(){var t;this.setHint(m.a.ANIMATING,-this.hints_[m.a.ANIMATING]);for(var o=0,n=this.animations_.length;o<n;++o){var e=this.animations_[o];e[0].callback&&Z(e[0].callback,!1),t=t||e.filter((function(t){return!t.complete}))[0].anchor}this.animations_.length=0,this.cancelAnchor_=t},o.prototype.updateAnimations_=function(){if(void 0!==this.updateAnimationKey_&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),this.getAnimating()){for(var t=Date.now(),o=!1,n=this.animations_.length-1;n>=0;--n){for(var e=this.animations_[n],i=!0,a=0,s=e.length;a<s;++a){var u=e[a];if(!u.complete){var c=t-u.start,h=u.duration>0?c/u.duration:1;h>=1?(u.complete=!0,h=1):i=!1;var l=u.easing(h);if(u.sourceCenter){var p=u.sourceCenter[0],g=u.sourceCenter[1],f=p+l*(u.targetCenter[0]-p),d=g+l*(u.targetCenter[1]-g);this.targetCenter_=[f,d]}if(u.sourceResolution&&u.targetResolution){var v=1===l?u.targetResolution:u.sourceResolution+l*(u.targetResolution-u.sourceResolution);if(u.anchor){var _=this.getViewportSize_(this.getRotation()),R=this.constraints_.resolution(v,0,_,!0);this.targetCenter_=this.calculateCenterZoom(R,u.anchor)}this.targetResolution_=v,this.applyTargetState_(!0)}if(void 0!==u.sourceRotation&&void 0!==u.targetRotation){var y=1===l?Object(r.d)(u.targetRotation+Math.PI,2*Math.PI)-Math.PI:u.sourceRotation+l*(u.targetRotation-u.sourceRotation);if(u.anchor){var j=this.constraints_.rotation(y,!0);this.targetCenter_=this.calculateCenterRotate(j,u.anchor)}this.targetRotation_=y}if(this.applyTargetState_(!0),o=!0,!u.complete)break}}if(i){this.animations_[n]=null,this.setHint(m.a.ANIMATING,-1);var b=e[0].callback;b&&Z(b,!0)}}this.animations_=this.animations_.filter(Boolean),o&&void 0===this.updateAnimationKey_&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},o.prototype.calculateCenterRotate=function(t,o){var n,e=this.getCenterInternal();return void 0!==e&&(n=[e[0]-o[0],e[1]-o[1]],Object(y.c)(n,t-this.getRotation()),Object(y.a)(n,o)),n},o.prototype.calculateCenterZoom=function(t,o){var n,e=this.getCenterInternal(),i=this.getResolution();void 0!==e&&void 0!==i&&(n=[o[0]-t*(o[0]-e[0])/i,o[1]-t*(o[1]-e[1])/i]);return n},o.prototype.getViewportSize_=function(t){var o=this.viewportSize_;if(t){var n=o[0],e=o[1];return[Math.abs(n*Math.cos(t))+Math.abs(e*Math.sin(t)),Math.abs(n*Math.sin(t))+Math.abs(e*Math.cos(t))]}return o},o.prototype.setViewportSize=function(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100]},o.prototype.getCenter=function(){var t=this.getCenterInternal();return t?Object(O.toUserCoordinate)(t,this.getProjection()):t},o.prototype.getCenterInternal=function(){return this.get(d)},o.prototype.getConstraints=function(){return this.constraints_},o.prototype.getHints=function(t){return void 0!==t?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()},o.prototype.calculateExtent=function(t){var o=this.calculateExtentInternal(t);return Object(O.toUserExtent)(o,this.getProjection())},o.prototype.calculateExtentInternal=function(t){var o=t||this.getViewportSize_(),n=this.getCenterInternal();Object(R.a)(n,1);var e=this.getResolution();Object(R.a)(void 0!==e,2);var i=this.getRotation();return Object(R.a)(void 0!==i,3),Object(h.z)(n,e,i,o)},o.prototype.getMaxResolution=function(){return this.maxResolution_},o.prototype.getMinResolution=function(){return this.minResolution_},o.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},o.prototype.setMaxZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))},o.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},o.prototype.setMinZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))},o.prototype.setConstrainResolution=function(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))},o.prototype.getProjection=function(){return this.projection_},o.prototype.getResolution=function(){return this.get(v)},o.prototype.getResolutions=function(){return this.resolutions_},o.prototype.getResolutionForExtent=function(t,o){return this.getResolutionForExtentInternal(Object(O.fromUserExtent)(t,this.getProjection()),o)},o.prototype.getResolutionForExtentInternal=function(t,o){var n=o||this.getViewportSize_(),e=Object(h.E)(t)/n[0],i=Object(h.A)(t)/n[1];return Math.max(e,i)},o.prototype.getResolutionForValueFunction=function(t){var o=t||2,n=this.getConstrainedResolution(this.maxResolution_),e=this.minResolution_,i=Math.log(n/e)/Math.log(o);return function(t){return n/Math.pow(o,t*i)}},o.prototype.getRotation=function(){return this.get(_)},o.prototype.getValueForResolutionFunction=function(t){var o=Math.log(t||2),n=this.getConstrainedResolution(this.maxResolution_),e=this.minResolution_,i=Math.log(n/e)/o;return function(t){return Math.log(n/t)/o/i}},o.prototype.getState=function(){var t=this.getCenterInternal(),o=this.getProjection(),n=this.getResolution(),e=this.getRotation();return{center:t.slice(0),projection:void 0!==o?o:null,resolution:n,rotation:e,zoom:this.getZoom()}},o.prototype.getZoom=function(){var t,o=this.getResolution();return void 0!==o&&(t=this.getZoomForResolution(o)),t},o.prototype.getZoomForResolution=function(t){var o,n,e=this.minZoom_||0;if(this.resolutions_){var i=Object(c.e)(this.resolutions_,t,1);e=i,o=this.resolutions_[i],n=i==this.resolutions_.length-1?2:o/this.resolutions_[i+1]}else o=this.maxResolution_,n=this.zoomFactor_;return e+Math.log(o/t)/Math.log(n)},o.prototype.getResolutionForZoom=function(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var o=Object(r.a)(Math.floor(t),0,this.resolutions_.length-2),n=this.resolutions_[o]/this.resolutions_[o+1];return this.resolutions_[o]/Math.pow(n,Object(r.a)(t-o,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)},o.prototype.fit=function(t,o){var n,e=Object(M.a)({size:this.getViewportSize_()},o||{});if(Object(R.a)(Array.isArray(t)||"function"==typeof t.getSimplifiedGeometry,24),Array.isArray(t)){Object(R.a)(!Object(h.H)(t),25);var i=Object(O.fromUserExtent)(t,this.getProjection());n=Object(C.b)(i)}else if(t.getType()===b.a.CIRCLE){i=Object(O.fromUserExtent)(t.getExtent(),this.getProjection());(n=Object(C.b)(i)).rotate(this.getRotation(),Object(h.x)(i))}else{var r=Object(O.getUserProjection)();n=r?t.clone().transform(r,this.getProjection()):t}this.fitInternal(n,e)},o.prototype.fitInternal=function(t,o){var n=o||{},e=n.size;e||(e=this.getViewportSize_());var r,a=void 0!==n.padding?n.padding:[0,0,0,0],s=void 0!==n.nearest&&n.nearest;r=void 0!==n.minResolution?n.minResolution:void 0!==n.maxZoom?this.getResolutionForZoom(n.maxZoom):0;for(var u=t.getFlatCoordinates(),c=this.getRotation(),h=Math.cos(-c),l=Math.sin(-c),p=1/0,g=1/0,f=-1/0,m=-1/0,d=t.getStride(),v=0,_=u.length;v<_;v+=d){var R=u[v]*h-u[v+1]*l,y=u[v]*l+u[v+1]*h;p=Math.min(p,R),g=Math.min(g,y),f=Math.max(f,R),m=Math.max(m,y)}var j=this.getResolutionForExtentInternal([p,g,f,m],[e[0]-a[1]-a[3],e[1]-a[0]-a[2]]);j=isNaN(j)?r:Math.max(j,r),j=this.getConstrainedResolution(j,s?0:1),l=-l;var b=(p+f)/2,C=(g+m)/2,M=[(b+=(a[1]-a[3])/2*j)*h-(C+=(a[0]-a[2])/2*j)*l,C*h+b*l],O=n.callback?n.callback:i.c;void 0!==n.duration?this.animateInternal({resolution:j,center:this.getConstrainedCenter(M,j),duration:n.duration,easing:n.easing},O):(this.targetResolution_=j,this.targetCenter_=M,this.applyTargetState_(!1,!0),Z(O,!0))},o.prototype.centerOn=function(t,o,n){this.centerOnInternal(Object(O.fromUserCoordinate)(t,this.getProjection()),o,n)},o.prototype.centerOnInternal=function(t,o,n){var e=this.getRotation(),i=Math.cos(-e),r=Math.sin(-e),a=t[0]*i-t[1]*r,s=t[1]*i+t[0]*r,u=this.getResolution(),c=(a+=(o[0]/2-n[0])*u)*i-(s+=(n[1]-o[1]/2)*u)*(r=-r),h=s*i+a*r;this.setCenterInternal([c,h])},o.prototype.isDef=function(){return!!this.getCenterInternal()&&void 0!==this.getResolution()},o.prototype.adjustCenter=function(t){var o=Object(O.toUserCoordinate)(this.targetCenter_,this.getProjection());this.setCenter([o[0]+t[0],o[1]+t[1]])},o.prototype.adjustCenterInternal=function(t){var o=this.targetCenter_;this.setCenterInternal([o[0]+t[0],o[1]+t[1]])},o.prototype.adjustResolution=function(t,o){var n=o&&Object(O.fromUserCoordinate)(o,this.getProjection());this.adjustResolutionInternal(t,n)},o.prototype.adjustResolutionInternal=function(t,o){var n=this.getAnimating()||this.getInteracting(),e=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(this.targetResolution_*t,0,e,n);o&&(this.targetCenter_=this.calculateCenterZoom(i,o)),this.targetResolution_*=t,this.applyTargetState_()},o.prototype.adjustZoom=function(t,o){this.adjustResolution(Math.pow(this.zoomFactor_,-t),o)},o.prototype.adjustRotation=function(t,o){o&&(o=Object(O.fromUserCoordinate)(o,this.getProjection())),this.adjustRotationInternal(t,o)},o.prototype.adjustRotationInternal=function(t,o){var n=this.getAnimating()||this.getInteracting(),e=this.constraints_.rotation(this.targetRotation_+t,n);o&&(this.targetCenter_=this.calculateCenterRotate(e,o)),this.targetRotation_+=t,this.applyTargetState_()},o.prototype.setCenter=function(t){this.setCenterInternal(Object(O.fromUserCoordinate)(t,this.getProjection()))},o.prototype.setCenterInternal=function(t){this.targetCenter_=t,this.applyTargetState_()},o.prototype.setHint=function(t,o){return this.hints_[t]+=o,this.changed(),this.hints_[t]},o.prototype.setResolution=function(t){this.targetResolution_=t,this.applyTargetState_()},o.prototype.setRotation=function(t){this.targetRotation_=t,this.applyTargetState_()},o.prototype.setZoom=function(t){this.setResolution(this.getResolutionForZoom(t))},o.prototype.applyTargetState_=function(t,o){var n=this.getAnimating()||this.getInteracting()||o,e=this.constraints_.rotation(this.targetRotation_,n),i=this.getViewportSize_(e),r=this.constraints_.resolution(this.targetResolution_,0,i,n),a=this.constraints_.center(this.targetCenter_,r,i,n);this.get(_)!==e&&this.set(_,e),this.get(v)!==r&&this.set(v,r),this.get(d)&&Object(y.b)(this.get(d),a)||this.set(d,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0},o.prototype.resolveConstraints=function(t,o,n){var e=void 0!==t?t:200,i=o||0,r=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(r),s=this.constraints_.resolution(this.targetResolution_,i,a),u=this.constraints_.center(this.targetCenter_,s,a);if(0===e&&!this.cancelAnchor_)return this.targetResolution_=s,this.targetRotation_=r,this.targetCenter_=u,void this.applyTargetState_();var c=n||(0===e?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,this.getResolution()===s&&this.getRotation()===r&&this.getCenterInternal()&&Object(y.b)(this.getCenterInternal(),u)||(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:u,resolution:s,duration:e,easing:j.b,anchor:c}))},o.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(m.a.INTERACTING,1)},o.prototype.endInteraction=function(t,o,n){var e=n&&Object(O.fromUserCoordinate)(n,this.getProjection());this.endInteractionInternal(t,o,e)},o.prototype.endInteractionInternal=function(t,o,n){this.setHint(m.a.INTERACTING,-1),this.resolveConstraints(t,o,n)},o.prototype.getConstrainedCenter=function(t,o){var n=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,o||this.getResolution(),n)},o.prototype.getConstrainedZoom=function(t,o){var n=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(n,o))},o.prototype.getConstrainedResolution=function(t,o){var n=o||0,e=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,n,e)},o}(u.a);function Z(t,o){setTimeout((function(){t(o)}),0)}function E(t){if(void 0!==t.extent){var o=void 0===t.smoothExtentConstraint||t.smoothExtentConstraint;return a(t.extent,t.constrainOnlyCenter,o)}var n=Object(O.createProjection)(t.projection,"EPSG:3857");if(!0!==t.multiWorld&&n.isGlobal()){var e=n.getExtent().slice();return e[0]=-1/0,e[2]=1/0,a(e,!1,!1)}return s}function P(t){var o,n,i,a=void 0!==t.minZoom?t.minZoom:0,s=void 0!==t.maxZoom?t.maxZoom:28,u=void 0!==t.zoomFactor?t.zoomFactor:2,f=void 0!==t.multiWorld&&t.multiWorld,m=void 0===t.smoothResolutionConstraint||t.smoothResolutionConstraint,d=void 0!==t.showFullExtent&&t.showFullExtent,v=Object(O.createProjection)(t.projection,"EPSG:3857"),_=v.getExtent(),R=t.constrainOnlyCenter,y=t.extent;if(f||y||!v.isGlobal()||(R=!1,y=_),void 0!==t.resolutions){var j=t.resolutions;n=j[a],i=void 0!==j[s]?j[s]:j[j.length-1],o=t.constrainResolution?function(t,o,n,e){return function(i,a,s,u){if(void 0!==i){var h=t[0],g=t[t.length-1],f=n?l(h,n,s,e):h;if(u)return void 0===o||o?p(i,f,g):Object(r.a)(i,g,f);var m=Math.min(f,i),d=Math.floor(Object(c.e)(t,m,a));return t[d]>f&&d<t.length-1?t[d+1]:t[d]}}}(j,m,!R&&y,d):g(n,i,m,!R&&y,d)}else{var b=(_?Math.max(Object(h.E)(_),Object(h.A)(_)):360*O.METERS_PER_UNIT[I.b.DEGREES]/v.getMetersPerUnit())/e.b/Math.pow(2,0),C=b/Math.pow(2,28);void 0!==(n=t.maxResolution)?a=0:n=b/Math.pow(u,a),void 0===(i=t.minResolution)&&(i=void 0!==t.maxZoom?void 0!==t.maxResolution?n/Math.pow(u,s):b/Math.pow(u,s):C),s=a+Math.floor(Math.log(n/i)/Math.log(u)),i=n/Math.pow(u,s-a),o=t.constrainResolution?function(t,o,n,e,i,a){return function(s,u,c,h){if(void 0!==s){var g=i?l(o,i,c,a):o,f=void 0!==n?n:0;if(h)return void 0===e||e?p(s,g,f):Object(r.a)(s,f,g);var m=Math.ceil(Math.log(o/g)/Math.log(t)-1e-9),d=-u*(.5-1e-9)+.5,v=Math.min(g,s),_=Math.floor(Math.log(o/v)/Math.log(t)+d),R=Math.max(m,_),y=o/Math.pow(t,R);return Object(r.a)(y,f,g)}}}(u,n,i,m,!R&&y,d):g(n,i,m,!R&&y,d)}return{constraint:o,maxResolution:n,minResolution:i,minZoom:a,zoomFactor:u}}function z(t){if(void 0===t.enableRotation||t.enableRotation){var o=t.constrainRotation;return void 0===o||!0===o?Object(f.b)():!1===o?f.d:"number"==typeof o?Object(f.a)(o):f.d}return f.c}function S(t){return!(t.sourceCenter&&t.targetCenter&&!Object(y.b)(t.sourceCenter,t.targetCenter))&&(t.sourceResolution===t.targetResolution&&t.sourceRotation===t.targetRotation)}o.default=w}}]);