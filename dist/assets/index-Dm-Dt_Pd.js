(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ac="183",rp=0,tu=1,ap=2,ia=1,op=2,er=3,yi=0,Jt=1,ln=2,jn=0,ws=1,vn=2,nu=3,iu=4,lp=5,Oi=100,cp=101,up=102,dp=103,hp=104,fp=200,pp=201,mp=202,gp=203,ko=204,Wo=205,_p=206,xp=207,vp=208,Mp=209,yp=210,Sp=211,Ep=212,bp=213,Tp=214,Xo=0,qo=1,Yo=2,Is=3,$o=4,Ko=5,jo=6,Zo=7,oc=0,Ap=1,wp=2,In=0,th=1,nh=2,ih=3,sh=4,rh=5,ah=6,oh=7,lh=300,Yi=301,Ls=302,Va=303,ka=304,Fa=306,Jo=1e3,Yn=1001,Qo=1002,Ot=1003,Cp=1004,Mr=1005,Ct=1006,Wa=1007,Hi=1008,rn=1009,ch=1010,uh=1011,rr=1012,lc=1013,Un=1014,Cn=1015,Jn=1016,cc=1017,uc=1018,ar=1020,dh=35902,hh=35899,fh=1021,ph=1022,_n=1023,Qn=1026,Vi=1027,mh=1028,dc=1029,Ds=1030,hc=1031,fc=1033,sa=33776,ra=33777,aa=33778,oa=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37488,ll=37489,cl=37490,ul=37491,dl=37808,hl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,Ml=37817,yl=37818,Sl=37819,El=37820,bl=37821,Tl=36492,Al=36494,wl=36495,Cl=36283,Rl=36284,Pl=36285,Il=36286,Rp=3200,gh=0,Pp=1,ui="",on="srgb",Us="srgb-linear",ma="linear",st="srgb",es=7680,su=519,Ip=512,Lp=513,Dp=514,pc=515,Up=516,Fp=517,mc=518,Np=519,Ll=35044,ru="300 es",Rn=2e3,or=2001;function Op(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bp(){const i=ga("canvas");return i.style.display="block",i}const au={};function _a(...i){const e="THREE."+i.shift();console.log(e,...i)}function _h(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=_h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=_h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xa(...i){const e=i.join(" ");e in au||(au[e]=!0,Ne(...i))}function zp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Gp={[Xo]:qo,[Yo]:jo,[$o]:Zo,[Is]:Ko,[qo]:Xo,[jo]:Yo,[Zo]:$o,[Ko]:Is};class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,Dl=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Hp(i,e){return(i%e+e)%e}function qa(i,e,t){return(1-t)*i+t*e}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(h!==M||l!==u||c!==m||d!==g){let p=l*u+c*m+d*g+h*M;p<0&&(u=-u,m=-m,g=-g,M=-M,p=-p);let f=1-o;if(p<.9995){const v=Math.acos(p),b=Math.sin(v);f=Math.sin(f*v)/b,o=Math.sin(o*v)/b,l=l*f+u*o,c=c*f+m*o,d=d*f+g*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+m*o,d=d*f+g*o,h=h*f+M*o;const v=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=v,c*=v,d*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*m-c*u,e[t+1]=l*g+d*u+c*h-o*m,e[t+2]=c*g+d*m+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new I,ou=new On;class He{constructor(e,t,n,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],M=s[0],p=s[3],f=s[6],v=s[1],b=s[4],y=s[7],T=s[2],A=s[5],C=s[8];return r[0]=a*M+o*v+l*T,r[3]=a*p+o*b+l*A,r[6]=a*f+o*y+l*C,r[1]=c*M+d*v+h*T,r[4]=c*p+d*b+h*A,r[7]=c*f+d*y+h*C,r[2]=u*M+m*v+g*T,r[5]=u*p+m*b+g*A,r[8]=u*f+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,m=c*r-a*l,g=t*h+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*c-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new He,lu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:st,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const je=Vp();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=ga("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wp=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ka(s[a].image)):r.push(Ka(s[a]))}else r=Ka(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Xp=0;const ja=new I;class Ht extends Bs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Yn,s=Yn,r=Ct,a=Hi,o=_n,l=rn,c=Ht.DEFAULT_ANISOTROPY,d=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=gi(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=lh;Ht.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,T=(f+1)/2,A=(d+u)/4,C=(h+M)/4,x=(g+p)/4;return b>y&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-M)/v,this.z=(u-d)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends Bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e,t,n,s,r,a,o,l,c,d,h,u,m,g,M,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,u,m,g,M,p)}set(e,t,n,s,r,a,o,l,c,d,h,u,m,g,M,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,m=a*h,g=o*d,M=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,g=c*d,M=c*h;t[0]=u+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,g=c*d,M=c*h;t[0]=u-M*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*h,g=o*d,M=o*h;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+M,t[1]=l*h,t[5]=M*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*d,t[4]=M-u*h,t[8]=g*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+g,t[10]=u-M*h}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+M,t[5]=a*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*d,t[10]=M*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Kp)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ii.crossVectors(n,tn),ii.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ii.crossVectors(n,tn)),ii.normalize(),yr.crossVectors(tn,ii),s[0]=ii.x,s[4]=yr.x,s[8]=tn.x,s[1]=ii.y,s[5]=yr.y,s[9]=tn.y,s[2]=ii.z,s[6]=yr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],M=n[6],p=n[10],f=n[14],v=n[3],b=n[7],y=n[11],T=n[15],A=s[0],C=s[4],x=s[8],E=s[12],z=s[1],P=s[5],O=s[9],G=s[13],W=s[2],H=s[6],D=s[10],F=s[14],j=s[3],Z=s[7],ie=s[11],pe=s[15];return r[0]=a*A+o*z+l*W+c*j,r[4]=a*C+o*P+l*H+c*Z,r[8]=a*x+o*O+l*D+c*ie,r[12]=a*E+o*G+l*F+c*pe,r[1]=d*A+h*z+u*W+m*j,r[5]=d*C+h*P+u*H+m*Z,r[9]=d*x+h*O+u*D+m*ie,r[13]=d*E+h*G+u*F+m*pe,r[2]=g*A+M*z+p*W+f*j,r[6]=g*C+M*P+p*H+f*Z,r[10]=g*x+M*O+p*D+f*ie,r[14]=g*E+M*G+p*F+f*pe,r[3]=v*A+b*z+y*W+T*j,r[7]=v*C+b*P+y*H+T*Z,r[11]=v*x+b*O+y*D+T*ie,r[15]=v*E+b*G+y*F+T*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],g=e[3],M=e[7],p=e[11],f=e[15],v=l*m-c*u,b=o*m-c*h,y=o*u-l*h,T=a*m-c*d,A=a*u-l*d,C=a*h-o*d;return t*(M*v-p*b+f*y)-n*(g*v-p*T+f*A)+s*(g*b-M*T+f*C)-r*(g*y-M*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],g=e[12],M=e[13],p=e[14],f=e[15],v=t*o-n*a,b=t*l-s*a,y=t*c-r*a,T=n*l-s*o,A=n*c-r*o,C=s*c-r*l,x=d*M-h*g,E=d*p-u*g,z=d*f-m*g,P=h*p-u*M,O=h*f-m*M,G=u*f-m*p,W=v*G-b*O+y*P+T*z-A*E+C*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/W;return e[0]=(o*G-l*O+c*P)*H,e[1]=(s*O-n*G-r*P)*H,e[2]=(M*C-p*A+f*T)*H,e[3]=(u*A-h*C-m*T)*H,e[4]=(l*z-a*G-c*E)*H,e[5]=(t*G-s*z+r*E)*H,e[6]=(p*y-g*C-f*b)*H,e[7]=(d*C-u*y+m*b)*H,e[8]=(a*O-o*z+c*x)*H,e[9]=(n*z-t*O-r*x)*H,e[10]=(g*A-M*y+f*v)*H,e[11]=(h*y-d*A-m*v)*H,e[12]=(o*E-a*P-l*x)*H,e[13]=(t*P-n*E+s*x)*H,e[14]=(M*b-g*T-p*v)*H,e[15]=(d*T-h*b+u*v)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,m=r*d,g=r*h,M=a*d,p=a*h,f=o*h,v=l*c,b=l*d,y=l*h,T=n.x,A=n.y,C=n.z;return s[0]=(1-(M+f))*T,s[1]=(m+y)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(u+f))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(p-v)*C,s[10]=(1-(u+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);const c=1/a,d=1/o,h=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=d,fn.elements[5]*=d,fn.elements[6]*=d,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Rn,l=!1){const c=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===or)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Rn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Rn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===or)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new I,fn=new gt,$p=new I(0,0,0),Kp=new I(1,1,1),ii=new I,yr=new I,tn=new I,uu=new gt,du=new On;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jp=0;const hu=new I,is=new On,Gn=new gt,Sr=new I,Vs=new I,Zp=new I,Jp=new On,fu=new I(1,0,0),pu=new I(0,1,0),mu=new I(0,0,1),gu={type:"added"},Qp={type:"removed"},ss={type:"childadded",child:null},Za={type:"childremoved",child:null};class wt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new Fn,n=new On,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new He}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Vs,Sr,this.up):Gn.lookAt(Sr,Vs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Gn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),ss.child=e,this.dispatchEvent(ss),ss.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ut extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Hp(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Qa(a,r,e+1/3),this.g=Qa(a,r,e),this.b=Qa(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return je.workingToColorSpace(Gt.copy(this),e),Math.round($e(Gt.r*255,0,255))*65536+Math.round($e(Gt.g*255,0,255))*256+Math.round($e(Gt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=on){je.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Er);const n=qa(si.h,Er.h,t),s=qa(si.s,Er.s,t),r=qa(si.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ze;ze.NAMES=vh;class Mh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new I,Hn=new I,eo=new I,Vn=new I,rs=new I,as=new I,_u=new I,to=new I,no=new I,io=new I,so=new yt,ro=new yt,ao=new yt;class cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Hn.subVectors(n,t),eo.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Hn),l=pn.dot(eo),c=Hn.dot(Hn),d=Hn.dot(eo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return so.setScalar(0),ro.setScalar(0),ao.setScalar(0),so.fromBufferAttribute(e,t),ro.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(so,r.x),a.addScaledVector(ro,r.y),a.addScaledVector(ao,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Hn.subVectors(e,t),pn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),pn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),to.subVectors(e,n);const l=rs.dot(to),c=as.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,s);const d=rs.dot(no),h=as.dot(no);if(d>=0&&h<=d)return t.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(rs,a);io.subVectors(e,r);const m=rs.dot(io),g=as.dot(io);if(g>=0&&m<=g)return t.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(as,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return _u.subVectors(r,s),o=(h-d)/(h-d+(m-g)),t.copy(s).addScaledVector(_u,o);const f=1/(p+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Tr.subVectors(this.max,ks),os.subVectors(e.a,ks),ls.subVectors(e.b,ks),cs.subVectors(e.c,ks),ri.subVectors(ls,os),ai.subVectors(cs,ls),Ci.subVectors(os,cs);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!oo(t,os,ls,cs,Tr)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,os,ls,cs,Tr))?!1:(Ar.crossVectors(ri,ai),t=[Ar.x,Ar.y,Ar.z],oo(t,os,ls,cs,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],mn=new I,br=new hr,os=new I,ls=new I,cs=new I,ri=new I,ai=new I,Ci=new I,ks=new I,Tr=new I,Ar=new I,Ri=new I;function oo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const At=new I,wr=new Be;let tm=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class yh extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sh extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nm=new hr,Ws=new I,lo=new I;class fr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(lo)),this.expandByPoint(Ws.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let im=0;const an=new gt,co=new wt,us=new I,nn=new hr,Xs=new hr,Lt=new I;class bt extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?Sh:yh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,Xs.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,Xs.max),nn.expandByPoint(Lt)):(nn.expandByPoint(Xs.min),nn.expandByPoint(Xs.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Lt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Lt.add(us)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;const c=new I,d=new I,h=new I,u=new Be,m=new Be,g=new Be,M=new I,p=new I;function f(x,E,z){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,z),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,z),d.sub(c),h.sub(c),m.sub(u),g.sub(u);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),o[x].add(M),o[E].add(M),o[z].add(M),l[x].add(p),l[E].add(p),l[z].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const z=v[x],P=z.start,O=z.count;for(let G=P,W=P+O;G<W;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new I,y=new I,T=new I,A=new I;function C(x){T.fromBufferAttribute(s,x),A.copy(T);const E=o[x];b.copy(E),b.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(A,E);const P=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,E=v.length;x<E;++x){const z=v[x],P=z.start,O=z.count;for(let G=P,W=P+O;G<W;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let f=0;f<d;f++)u[g++]=c[m++]}return new Dt(u,d,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new I;class va{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new va(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let rm=0;class bi extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ws,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Wo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ma extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const qs=new I,hs=new I,fs=new I,ps=new Be,Ys=new Be,Eh=new gt,Cr=new I,$s=new I,Rr=new I,xu=new Be,uo=new Be,vu=new Be;class Ul extends wt{constructor(e=new Ma){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sm(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new va(n,3,0,!1)),ds.setAttribute("uv",new va(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Eh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-fs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Pr(Cr.set(-.5,-.5,0),fs,a,hs,s,r),Pr($s.set(.5,-.5,0),fs,a,hs,s,r),Pr(Rr.set(.5,.5,0),fs,a,hs,s,r),xu.set(0,0),uo.set(1,0),vu.set(1,1);let o=e.ray.intersectTriangle(Cr,$s,Rr,!1,qs);if(o===null&&(Pr($s.set(-.5,.5,0),fs,a,hs,s,r),uo.set(0,1),o=e.ray.intersectTriangle(Cr,Rr,$s,!1,qs),o===null))return;const l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:cn.getInterpolation(qs,Cr,$s,Rr,xu,uo,vu,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pr(i,e,t,n,s,r){ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*ps.x-s*ps.y,Ys.y=s*ps.x+r*ps.y):Ys.copy(ps),i.copy(e),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(Eh)}const Wn=new I,ho=new I,Ir=new I,oi=new I,fo=new I,Lr=new I,po=new I;class Na{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ho.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=oi.dot(this.direction),l=-oi.dot(Ir),c=oi.lengthSq(),d=Math.abs(1-a*a);let h,u,m,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const M=1/d;h*=M,u*=M,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ho).addScaledVector(Ir,u),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){fo.subVectors(t,e),Lr.subVectors(n,e),po.crossVectors(fo,Lr);let a=this.direction.dot(po),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Lr.crossVectors(oi,Lr));if(l<0)return null;const c=o*this.direction.dot(fo.cross(oi));if(c<0||l+c>a)return null;const d=-o*oi.dot(po);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mu=new gt,Pi=new Na,Dr=new fr,yu=new I,Ur=new I,Fr=new I,Nr=new I,mo=new I,Or=new I,Su=new I,Br=new I;class de extends wt{constructor(e=new bt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(mo.fromBufferAttribute(h,e),a?Or.addScaledVector(mo,d):Or.addScaledVector(mo.sub(t),d))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Dr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Dr,yu)===null||Pi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=b;y<T;y+=3){const A=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=zr(this,f,e,n,c,d,h,A,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const v=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);s=zr(this,a,e,n,c,d,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=b;y<T;y+=3){const A=y,C=y+1,x=y+2;s=zr(this,f,e,n,c,d,h,A,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const v=p,b=p+1,y=p+2;s=zr(this,a,e,n,c,d,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function am(i,e,t,n,s,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yi,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function zr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Nr);const d=am(i,e,t,n,Ur,Fr,Nr,Su);if(d){const h=new I;cn.getBarycoord(Su,Ur,Fr,Nr,h),s&&(d.uv=cn.getInterpolatedAttribute(s,o,l,c,h,new Be)),r&&(d.uv1=cn.getInterpolatedAttribute(r,o,l,c,h,new Be)),a&&(d.normal=cn.getInterpolatedAttribute(a,o,l,c,h,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};cn.getNormal(Ur,Fr,Nr,u.normal),d.face=u,d.barycoord=h}return d}class om extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,d=Ot,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const go=new I,lm=new I,cm=new He;class Ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=go.subVectors(n,t).cross(lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cm.getNormalMatrix(e),s=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new fr,um=new Be(.5,.5),Gr=new I;class xc{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],m=r[7],g=r[8],M=r[9],p=r[10],f=r[11],v=r[12],b=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,m-d,f-g,T-v).normalize(),s[1].setComponents(c+a,m+d,f+g,T+v).normalize(),s[2].setComponents(c+o,m+h,f+M,T+b).normalize(),s[3].setComponents(c-o,m-h,f-M,T-b).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,m-u,f-p,T-y).normalize();else if(s[4].setComponents(c-l,m-u,f-p,T-y).normalize(),t===Rn)s[5].setComponents(c+l,m+u,f+p,T+y).normalize();else if(t===or)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=um.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bh extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new I,Sa=new I,Eu=new gt,Ks=new Na,Hr=new fr,_o=new I,bu=new I;class dm extends wt{constructor(e=new bt,t=new bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),Sa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ya.distanceTo(Sa);e.setAttribute("lineDistance",new _t(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;Eu.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=d.getX(M),v=d.getX(M+1),b=Vr(this,e,Ks,l,f,v,M);b&&t.push(b)}if(this.isLineLoop){const M=d.getX(g-1),p=d.getX(m),f=Vr(this,e,Ks,l,M,p,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=Vr(this,e,Ks,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=Vr(this,e,Ks,l,g-1,m,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ya.fromBufferAttribute(o,s),Sa.fromBufferAttribute(o,r),t.distanceSqToSegment(ya,Sa,_o,bu)>n)return;_o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_o);if(!(c<e.near||c>e.far))return{distance:c,point:bu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Ea extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new gt,Fl=new Na,kr=new fr,Wr=new I;class Nl extends wt{constructor(e=new bt,t=new Ea){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;Tu.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,M=m;g<M;g++){const p=c.getX(g);Wr.fromBufferAttribute(h,p),Au(Wr,p,l,s,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=u,M=m;g<M;g++)Wr.fromBufferAttribute(h,g),Au(Wr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Au(i,e,t,n,s,r,a){const o=Fl.distanceSqToPoint(i);if(o<t){const l=new I;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends Ht{constructor(e=[],t=Yi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vc extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends Ht{constructor(e,t,n=Un,s,r,a,o=Ot,l=Ot,c,d=Qn,h=1){if(d!==Qn&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hm extends lr{constructor(e,t=Un,n=Yi,s,r,a=Ot,o=Ot,l,c=Qn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ah extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mt extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(h,2));function g(M,p,f,v,b,y,T,A,C,x,E){const z=y/C,P=T/x,O=y/2,G=T/2,W=A/2,H=C+1,D=x+1;let F=0,j=0;const Z=new I;for(let ie=0;ie<D;ie++){const pe=ie*P-G;for(let ce=0;ce<H;ce++){const Fe=ce*z-O;Z[M]=Fe*v,Z[p]=pe*b,Z[f]=W,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[p]=0,Z[f]=A>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(ce/C),h.push(1-ie/x),F+=1}}for(let ie=0;ie<x;ie++)for(let pe=0;pe<C;pe++){const ce=u+pe+H*ie,Fe=u+pe+H*(ie+1),Le=u+(pe+1)+H*(ie+1),Ie=u+(pe+1)+H*ie;l.push(ce,Fe,Ie),l.push(Fe,Le,Ie),j+=6}o.addGroup(m,j,E),m+=j,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vt extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],m=[];let g=0;const M=[],p=n/2;let f=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(m,2));function v(){const y=new I,T=new I;let A=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const E=[],z=x/r,P=z*(t-e)+e;for(let O=0;O<=s;O++){const G=O/s,W=G*l+o,H=Math.sin(W),D=Math.cos(W);T.x=P*H,T.y=-z*n+p,T.z=P*D,h.push(T.x,T.y,T.z),y.set(H,C,D).normalize(),u.push(y.x,y.y,y.z),m.push(G,1-z),E.push(g++)}M.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const z=M[E][x],P=M[E+1][x],O=M[E+1][x+1],G=M[E][x+1];(e>0||E!==0)&&(d.push(z,P,G),A+=3),(t>0||E!==r-1)&&(d.push(P,O,G),A+=3)}c.addGroup(f,A,0),f+=A}function b(y){const T=g,A=new Be,C=new I;let x=0;const E=y===!0?e:t,z=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*z,0),u.push(0,z,0),m.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const W=O/s*l+o,H=Math.cos(W),D=Math.sin(W);C.x=E*D,C.y=p*z,C.z=E*H,h.push(C.x,C.y,C.z),u.push(0,z,0),A.x=H*.5+.5,A.y=D*.5*z+.5,m.push(A.x,A.y),g++}for(let O=0;O<s;O++){const G=T+O,W=P+O;y===!0?d.push(W,W+1,G):d.push(W+1,W,G),x+=3}c.addGroup(f,x,y===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new I,y=new I,T=new I;for(let A=0;A<t.length;A+=3)m(t[A+0],b),m(t[A+1],y),m(t[A+2],T),l(b,y,T,v)}function l(v,b,y,T){const A=T+1,C=[];for(let x=0;x<=A;x++){C[x]=[];const E=v.clone().lerp(y,x/A),z=b.clone().lerp(y,x/A),P=A-x;for(let O=0;O<=P;O++)O===0&&x===A?C[x][O]=E:C[x][O]=E.clone().lerp(z,O/P)}for(let x=0;x<A;x++)for(let E=0;E<2*(A-x)-1;E++){const z=Math.floor(E/2);E%2===0?(u(C[x][z+1]),u(C[x+1][z]),u(C[x][z])):(u(C[x][z+1]),u(C[x+1][z+1]),u(C[x+1][z]))}}function c(v){const b=new I;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function d(){const v=new I;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const y=p(v)/2/Math.PI+.5,T=f(v)/Math.PI+.5;a.push(y,1-T)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const b=a[v+0],y=a[v+2],T=a[v+4],A=Math.max(b,y,T),C=Math.min(b,y,T);A>.9&&C<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function m(v,b){const y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){const v=new I,b=new I,y=new I,T=new I,A=new Be,C=new Be,x=new Be;for(let E=0,z=0;E<r.length;E+=9,z+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[z+0],a[z+1]),C.set(a[z+2],a[z+3]),x.set(a[z+4],a[z+5]),T.copy(v).add(b).add(y).divideScalar(3);const P=p(T);M(A,z+0,v,P),M(C,z+2,b,P),M(x,z+4,y,P)}}function M(v,b,y,T){T<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.vertices,e.indices,e.radius,e.detail)}}class yc extends Mc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yc(e.radius,e.detail)}}class zs extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,m=[],g=[],M=[],p=[];for(let f=0;f<d;f++){const v=f*u-a;for(let b=0;b<c;b++){const y=b*h-r;g.push(y,-v,0),M.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const b=v+c*f,y=v+c*(f+1),T=v+1+c*(f+1),A=v+1+c*f;m.push(b,y,A),m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sc extends bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/s,m=new I,g=new Be;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let M=0;M<s;M++){const p=M*(n+1);for(let f=0;f<n;f++){const v=f+p,b=v,y=v+n+1,T=v+n+2,A=v+1;o.push(b,y,A),o.push(y,T,A)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $t extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new I,u=new I,m=[],g=[],M=[],p=[];for(let f=0;f<=n;f++){const v=[],b=f/n;let y=0;f===0&&a===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),M.push(u.x,u.y,u.z),p.push(A+y,1-b),v.push(c++)}d.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const b=d[f][v+1],y=d[f][v],T=d[f+1][v],A=d[f+1][v+1];(f!==0||a>0)&&m.push(b,y,A),(f!==n-1||l<Math.PI)&&m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ec extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],u=new I,m=new I,g=new I;for(let M=0;M<=n;M++){const p=a+M/n*o;for(let f=0;f<=s;f++){const v=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(v),m.y=(e+t*Math.cos(p))*Math.sin(v),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(m,u).normalize(),d.push(g.x,g.y,g.z),h.push(f/s),h.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){const f=(s+1)*M+p-1,v=(s+1)*(M-1)+p-1,b=(s+1)*(M-1)+p,y=(s+1)*M+p;l.push(f,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function fm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const pm={clone:Fs,merge:Wt};var mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _m extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vm extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bc extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Mm extends bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xo=new gt,wu=new I,Cu=new I;class ym{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===or||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xr=new I,qr=new On,Sn=new I;class Ch extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xr,qr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Ru=new Be,Pu=new Be;class sn extends Ch{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Pu),t.subVectors(Pu,Ru)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tc extends Ch{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sm extends ym{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ac extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Sm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wc extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ms=-90,gs=1;class Em extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new sn(ms,gs,e,t);r.layers=this.layers,this.add(r);const a=new sn(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new sn(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new sn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new sn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bm extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Iu=new gt;class Tm{constructor(e,t,n=0,s=1/0){this.ray=new Na(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return Ol(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ol(e[s],this,n,t);return n.sort(Lu),n}}function Lu(i,e){return i.distance-e.distance}function Ol(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ol(r[a],e,t,!0)}}class Am{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Du(i,e,t,n){const s=wm(n);switch(t){case fh:return i*e;case mh:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case Ds:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case ph:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case sl:case rl:case ol:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case cl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wm(i){switch(i){case rn:case ch:return{byteLength:1,components:1};case rr:case uh:case Jn:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case Un:case lc:case Cn:return{byteLength:4,components:1};case dh:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);function Rh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cm(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<h.length;m++){const g=h[u],M=h[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,h[u]=M)}h.length=u+1;for(let m=0,g=h.length;m<g;m++){const M=h[m];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Rm,alphahash_pars_fragment:Pm,alphamap_fragment:Im,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Um,aomap_fragment:Fm,aomap_pars_fragment:Nm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:zm,beginnormal_vertex:Gm,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:km,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:jm,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:e0,displacementmap_pars_vertex:t0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:o0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:y0,envmap_vertex:d0,fog_vertex:h0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:v0,lights_pars_begin:M0,lights_toon_fragment:S0,lights_toon_pars_fragment:E0,lights_phong_fragment:b0,lights_phong_pars_fragment:T0,lights_physical_fragment:A0,lights_physical_pars_fragment:w0,lights_fragment_begin:C0,lights_fragment_maps:R0,lights_fragment_end:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:U0,map_fragment:F0,map_pars_fragment:N0,map_particle_fragment:O0,map_particle_pars_fragment:B0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:G0,morphinstance_vertex:H0,morphcolor_vertex:V0,morphnormal_vertex:k0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:$0,normal_pars_vertex:K0,normal_vertex:j0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:hg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:xg,specularmap_pars_fragment:vg,tonemapping_fragment:Mg,tonemapping_pars_fragment:yg,transmission_fragment:Sg,transmission_pars_fragment:Eg,uv_pars_fragment:bg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:wg,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Lg,cube_frag:Dg,depth_vert:Ug,depth_frag:Fg,distance_vert:Ng,distance_frag:Og,equirect_vert:Bg,equirect_frag:zg,linedashed_vert:Gg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:kg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:Kg,meshphong_vert:jg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:a_,sprite_frag:o_},ue={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};bn.physical={uniforms:Wt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Yr={r:0,b:0,g:0},Li=new Fn,l_=new gt;function c_(i,e,t,n,s,r){const a=new ze(0);let o=s===!0?0:1,l,c,d=null,h=0,u=null;function m(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(v){let b=!1;const y=m(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===Fa)?(c===void 0&&(c=new de(new Mt(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Fs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Li.copy(b.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(Li)),c.material.toneMapped=je.getTransfer(y.colorSpace)!==st,(d!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new de(new zs(2,2),new Nn({name:"BackgroundMaterial",uniforms:Fs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(Yr,wh(i)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:M,dispose:f}}function u_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(P,O,G,W,H){let D=!1;const F=h(P,W,G,O);r!==F&&(r=F,c(r.object)),D=m(P,W,G,H),D&&g(P,W,G,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,y(P,O,G,W),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function h(P,O,G,W){const H=W.wireframe===!0;let D=n[O.id];D===void 0&&(D={},n[O.id]=D);const F=P.isInstancedMesh===!0?P.id:0;let j=D[F];j===void 0&&(j={},D[F]=j);let Z=j[G.id];Z===void 0&&(Z={},j[G.id]=Z);let ie=Z[H];return ie===void 0&&(ie=u(l()),Z[H]=ie),ie}function u(P){const O=[],G=[],W=[];for(let H=0;H<t;H++)O[H]=0,G[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:P,attributes:{},index:null}}function m(P,O,G,W){const H=r.attributes,D=O.attributes;let F=0;const j=G.getAttributes();for(const Z in j)if(j[Z].location>=0){const pe=H[Z];let ce=D[Z];if(ce===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),pe===void 0||pe.attribute!==ce||ce&&pe.data!==ce.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function g(P,O,G,W){const H={},D=O.attributes;let F=0;const j=G.getAttributes();for(const Z in j)if(j[Z].location>=0){let pe=D[Z];pe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));const ce={};ce.attribute=pe,pe&&pe.data&&(ce.data=pe.data),H[Z]=ce,F++}r.attributes=H,r.attributesNum=F,r.index=W}function M(){const P=r.newAttributes;for(let O=0,G=P.length;O<G;O++)P[O]=0}function p(P){f(P,0)}function f(P,O){const G=r.newAttributes,W=r.enabledAttributes,H=r.attributeDivisors;G[P]=1,W[P]===0&&(i.enableVertexAttribArray(P),W[P]=1),H[P]!==O&&(i.vertexAttribDivisor(P,O),H[P]=O)}function v(){const P=r.newAttributes,O=r.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==P[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function b(P,O,G,W,H,D,F){F===!0?i.vertexAttribIPointer(P,O,G,H,D):i.vertexAttribPointer(P,O,G,W,H,D)}function y(P,O,G,W){M();const H=W.attributes,D=G.getAttributes(),F=O.defaultAttributeValues;for(const j in D){const Z=D[j];if(Z.location>=0){let ie=H[j];if(ie===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){const pe=ie.normalized,ce=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const Le=Fe.buffer,Ie=Fe.type,q=Fe.bytesPerElement,Q=Ie===i.INT||Ie===i.UNSIGNED_INT||ie.gpuType===lc;if(ie.isInterleavedBufferAttribute){const ee=ie.data,Pe=ee.stride,xe=ie.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)f(Z.location+Ce,ee.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)p(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ce=0;Ce<Z.locationSize;Ce++)b(Z.location+Ce,ce/Z.locationSize,Ie,pe,Pe*q,(xe+ce/Z.locationSize*Ce)*q,Q)}else{if(ie.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)f(Z.location+ee,ie.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ee=0;ee<Z.locationSize;ee++)p(Z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ee=0;ee<Z.locationSize;ee++)b(Z.location+ee,ce/Z.locationSize,Ie,pe,ce*q,ce/Z.locationSize*ee*q,Q)}}else if(F!==void 0){const pe=F[j];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Z.location,pe);break;case 3:i.vertexAttrib3fv(Z.location,pe);break;case 4:i.vertexAttrib4fv(Z.location,pe);break;default:i.vertexAttrib1fv(Z.location,pe)}}}}v()}function T(){E();for(const P in n){const O=n[P];for(const G in O){const W=O[G];for(const H in W){const D=W[H];for(const F in D)d(D[F].object),delete D[F];delete W[H]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const G in O){const W=O[G];for(const H in W){const D=W[H];for(const F in D)d(D[F].object),delete D[F];delete W[H]}}delete n[P.id]}function C(P){for(const O in n){const G=n[O];for(const W in G){const H=G[W];if(H[P.id]===void 0)continue;const D=H[P.id];for(const F in D)d(D[F].object),delete D[F];delete H[P.id]}}}function x(P){for(const O in n){const G=n[O],W=P.isInstancedMesh===!0?P.id:0,H=G[W];if(H!==void 0){for(const D in H){const F=H[D];for(const j in F)d(F[j].object),delete F[j];delete H[D]}delete G[W],Object.keys(G).length===0&&delete n[O]}}}function E(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:v}}function d_(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,n,1)}function l(c,d,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let M=0;M<h;M++)g+=d[M]*u[M];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:A}}function f_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ni,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||s;return s=u,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const v=r?0:n,b=v*4;let y=f.clippingState||null;l.value=y,y=d(g,u,b,m);for(let T=0;T!==b;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,g){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const f=m+M*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,y=m;b!==M;++b,y+=4)a.copy(h[b]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const hi=4,Uu=[.125,.215,.35,.446,.526,.582],Bi=20,p_=256,js=new Tc,Fu=new ze;let vo=null,Mo=0,yo=0,So=!1;const m_=new I;class Nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=m_}=r;vo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,Mo,yo),this._renderer.xr.enabled=So,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Jn,format:_n,colorSpace:Us,depthBuffer:!1},s=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g_(r)),this._blurMaterial=x_(r,e,t),this._ggxMaterial=__(r,e,t)}return s}_compileMaterial(e){const t=new de(new bt,e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,s,r){const l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Fu),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Mt,new mt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,f=!0):(p.color.copy(Fu),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const T=this._cubeSize;_s(s,y*T,b>2?T:0,T,T),h.setRenderTarget(s),f&&h.render(M,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Yi||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,m=h*u,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-hi?n-g+hi:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,_s(r,p,f,3*M,2*M),s.setRenderTarget(r),s.render(o,js),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,_s(e,p,f,3*M,2*M),s.setRenderTarget(e),s.render(o,js)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[s];h.material=c;const u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bi-1),M=r/g,p=isFinite(r)?1+Math.floor(d*M):Bi;p>Bi&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);const f=[];let v=0;for(let C=0;C<Bi;++C){const x=C/M,E=Math.exp(-x*x/2);f.push(E),C===0?v+=E:C<p&&(v+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const y=this._sizeLods[s],T=3*y*(s>b-hi?s-b+hi:0),A=4*(this._cubeSize-y);_s(t,T,A,3*y,2*y),l.setRenderTarget(t),l.render(h,js)}}function g_(i){const e=[],t=[],n=[];let s=i;const r=i-hi+1+Uu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-hi?l=Uu[a-i+hi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,M=3,p=2,f=1,v=new Float32Array(M*g*m),b=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,x=A>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(E,M*g*A),b.set(u,p*g*A);const z=[A,A,A,A,A,A];y.set(z,f*g*A)}const T=new bt;T.setAttribute("position",new Dt(v,M)),T.setAttribute("uv",new Dt(b,p)),T.setAttribute("faceIndex",new Dt(y,f)),n.push(new de(T,null)),s>hi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ou(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function __(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function x_(i,e,t){const n=new Float32Array(Bi),s=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bu(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zu(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ph extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Th(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:jn});r.uniforms.tEquirect.value=t;const a=new de(s,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Ct),new Em(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function v_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Va||m===ka)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new Ph(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===Va||m===ka,M=m===Yi||m===Ls;if(g||M){let p=t.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Nu(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new Nu(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,m){return m===Va?u.mapping=Yi:m===ka&&(u.mapping=Ls),u}function l(u){let m=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function M_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xa("WebGLRenderer: "+n+" extension not supported."),s}}}function y_(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const v=m.array;M=m.version;for(let b=0,y=v.length;b<y;b+=3){const T=v[b+0],A=v[b+1],C=v[b+2];u.push(T,A,A,C,C,T)}}else{const v=g.array;M=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const T=b+0,A=b+1,C=b+2;u.push(T,A,A,C,C,T)}}const p=new(g.count>=65535?Sh:yh)(u,1);p.version=M;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function d(h){const u=r.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function S_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*a),t.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*a,g),t.update(m,n,g))}function d(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function h(u,m,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)c(u[f]/a,m[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,M,0,g);let f=0;for(let v=0;v<g;v++)f+=m[v]*M[v];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function E_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function b_(i,e,t){const n=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let z=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",z)};var m=z;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),p===!0&&(y=3);let T=o.attributes.position.count*y,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*h),x=new xh(C,T,A,h);x.type=Cn,x.needsUpdate=!0;const E=y*4;for(let P=0;P<h;P++){const O=f[P],G=v[P],W=b[P],H=T*A*4*P;for(let D=0;D<O.count;D++){const F=D*E;g===!0&&(s.fromBufferAttribute(O,D),C[H+F+0]=s.x,C[H+F+1]=s.y,C[H+F+2]=s.z,C[H+F+3]=0),M===!0&&(s.fromBufferAttribute(G,D),C[H+F+4]=s.x,C[H+F+5]=s.y,C[H+F+6]=s.z,C[H+F+7]=0),p===!0&&(s.fromBufferAttribute(W,D),C[H+F+8]=s.x,C[H+F+9]=s.y,C[H+F+10]=s.z,C[H+F+11]=W.itemSize===4?s.w:1)}}u={count:h,texture:x,size:new Be(T,A)},n.set(o,u),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function T_(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const A_={[th]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[ih]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function w_(i,e,t,n,s){const r=new Ln(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Ln(e,t,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),o=new bt;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));const l=new _m({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new de(o,l),d=new Tc(-1,1,1,-1,0,1);let h=null,u=null,m=!1,g,M=null,p=[],f=!1;this.setSize=function(v,b){r.setSize(v,b),a.setSize(v,b);for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){p=v,f=p.length>0&&p[0].isRenderPass===!0;const b=r.width,y=r.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(b,y)}},this.begin=function(v,b){if(m||v.toneMapping===In&&p.length===0)return!1;if(M=b,b!==null){const y=b.width,T=b.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return f===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=In,!0},this.hasRenderPass=function(){return f},this.end=function(v,b){v.toneMapping=g,m=!0;let y=r,T=a;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(v,T,y,b),C.needsSwap!==!1)){const x=y;y=T,T=x}}if(h!==v.outputColorSpace||u!==v.toneMapping){h=v.outputColorSpace,u=v.toneMapping,l.defines={},je.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const A=A_[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(M),v.render(c,d),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ih=new Ht,Bl=new lr(1,1),Lh=new xh,Dh=new Yp,Uh=new Th,Gu=[],Hu=[],Vu=new Float32Array(16),ku=new Float32Array(9),Wu=new Float32Array(4);function Gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ba(i,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function I_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function L_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Wu.set(n),i.uniformMatrix2fv(this.addr,!1,Wu),Pt(t,n)}}function D_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),Pt(t,n)}}function U_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),Pt(t,n)}}function F_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function O_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function k_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=t.isReversedDepthBuffer()?mc:pc,r=Bl):r=Ih,t.setTexture2D(e||r,s)}function W_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dh,s)}function X_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uh,s)}function q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lh,s)}function Y_(i){switch(i){case 5126:return C_;case 35664:return R_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return N_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return G_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function $_(i,e){i.uniform1fv(this.addr,e)}function K_(i,e){const t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function j_(i,e){const t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){const t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function J_(i,e){const t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q_(i,e){const t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ex(i,e){const t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tx(i,e){i.uniform1iv(this.addr,e)}function nx(i,e){i.uniform2iv(this.addr,e)}function ix(i,e){i.uniform3iv(this.addr,e)}function sx(i,e){i.uniform4iv(this.addr,e)}function rx(i,e){i.uniform1uiv(this.addr,e)}function ax(i,e){i.uniform2uiv(this.addr,e)}function ox(i,e){i.uniform3uiv(this.addr,e)}function lx(i,e){i.uniform4uiv(this.addr,e)}function cx(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bl:a=Ih;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ux(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dh,r[a])}function dx(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uh,r[a])}function hx(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lh,r[a])}function fx(i){switch(i){case 5126:return $_;case 35664:return K_;case 35665:return j_;case 35666:return Z_;case 35674:return J_;case 35675:return Q_;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return hx}}class px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}}class mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}}class gx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Xu(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){const n=i.name,s=n.length;for(Eo.lastIndex=0;;){const r=Eo.exec(n),a=Eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xu(t,c===void 0?new px(o,i,e):new mx(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new gx(o),Xu(t,h)),t=h}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_x(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function qu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xx=37297;let vx=0;function Mx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yu=new He;function yx(i){je._getMatrix(Yu,je.workingColorSpace,i);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ma:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(e),o)}else return r}function Sx(i,e){const t=yx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ex={[th]:"Linear",[nh]:"Reinhard",[ih]:"Cineon",[sh]:"ACESFilmic",[ah]:"AgX",[oh]:"Neutral",[rh]:"Custom"};function bx(i,e){const t=Ex[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new I;function Tx(){je.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function wx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function tr(i){return i!==""}function Ku(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(Rx,Ix)}const Px=new Map;function Ix(i,e){let t=ke[e];if(t===void 0){const n=Px.get(e);if(n!==void 0)t=ke[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(Lx,Dx)}function Dx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ux={[ia]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Fx(i){return Ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[Yi]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function Ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bx={[Ls]:"ENVMAP_MODE_REFRACTION"};function zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gx={[oc]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[wp]:"ENVMAP_BLENDING_ADD"};function Hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gx[i.combine]||"ENVMAP_BLENDING_NONE"}function Vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fx(t),c=Ox(t),d=zx(t),h=Hx(t),u=Vx(t),m=Ax(t),g=wx(r),M=s.createProgram();let p,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),f.length>0&&(f+=`
`)):(p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),f=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=zl(a),a=Ku(a,t),a=ju(a,t),o=zl(o),o=Ku(o,t),o=ju(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=v+p+a,y=v+f+o,T=qu(s,s.VERTEX_SHADER,b),A=qu(s,s.FRAGMENT_SHADER,y);s.attachShader(M,T),s.attachShader(M,A),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(A)||"",H=O.trim(),D=G.trim(),F=W.trim();let j=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,A);else{const ie=$u(s,T,"vertex"),pe=$u(s,A,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+ie+`
`+pe)}else H!==""?Ne("WebGLProgram: Program Info Log:",H):(D===""||F==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:f}})}s.deleteShader(T),s.deleteShader(A),x=new la(s,M),E=Cx(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(M,xx)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let Wx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qx(e),t.set(e,n)),n}}class qx{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}}function Yx(i,e,t,n,s,r){const a=new _c,o=new Xx,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,E,z,P,O){const G=P.fog,W=O.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||H,D),j=F&&F.mapping===Fa?F.image.height:null,Z=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ie!==void 0?ie.length:0;let ce=0;W.morphAttributes.position!==void 0&&(ce=1),W.morphAttributes.normal!==void 0&&(ce=2),W.morphAttributes.color!==void 0&&(ce=3);let Fe,Le,Ie,q;if(Z){const it=bn[Z];Fe=it.vertexShader,Le=it.fragmentShader}else Fe=x.vertexShader,Le=x.fragmentShader,o.update(x),Ie=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const Q=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,Ce=!!x.map,xt=!!x.matcap,Ve=!!F,nt=!!x.aoMap,ct=!!x.lightMap,We=!!x.bumpMap,St=!!x.normalMap,L=!!x.displacementMap,Tt=!!x.emissiveMap,Qe=!!x.metalnessMap,dt=!!x.roughnessMap,be=x.anisotropy>0,w=x.clearcoat>0,_=x.dispersion>0,N=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,$=be&&!!x.anisotropyMap,ve=w&&!!x.clearcoatMap,oe=w&&!!x.clearcoatNormalMap,Re=w&&!!x.clearcoatRoughnessMap,Ue=N&&!!x.iridescenceMap,te=N&&!!x.iridescenceThicknessMap,se=K&&!!x.sheenColorMap,Me=K&&!!x.sheenRoughnessMap,Se=!!x.specularMap,me=!!x.specularColorMap,Xe=!!x.specularIntensityMap,U=J&&!!x.transmissionMap,le=J&&!!x.thicknessMap,re=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,Y=!!x.alphaHash,ye=!!x.extensions;let Oe=In;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ht={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:Le,defines:x.defines,customVertexShaderID:Ie,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Us,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:xt,envMap:Ve,envMapMode:Ve&&F.mapping,envMapCubeUVHeight:j,aoMap:nt,lightMap:ct,bumpMap:We,normalMap:St,displacementMap:L,emissiveMap:Tt,normalMapObjectSpace:St&&x.normalMapType===Pp,normalMapTangentSpace:St&&x.normalMapType===gh,metalnessMap:Qe,roughnessMap:dt,anisotropy:be,anisotropyMap:$,clearcoat:w,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:_,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:Se,specularColorMap:me,specularIntensityMap:Xe,transmission:J,transmissionMap:U,thicknessMap:le,gradientMap:re,opaque:x.transparent===!1&&x.blending===ws&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Y,combine:x.combine,mapUv:Ce&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:We&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:L&&g(x.displacementMap.channel),emissiveMapUv:Tt&&g(x.emissiveMap.channel),metalnessMapUv:Qe&&g(x.metalnessMap.channel),roughnessMapUv:dt&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ve&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:Se&&g(x.specularMap.channel),specularColorMapUv:me&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:U&&g(x.transmissionMap.channel),thicknessMapUv:le&&g(x.thicknessMap.channel),alphaMapUv:_e&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ce||_e),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Tt&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(f(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const E=m[x.type];let z;if(E){const P=bn[E];z=pm.clone(P.uniforms)}else z=x.uniforms;return z}function y(x,E){let z=d.get(E);return z!==void 0?++z.usedTimes:(z=new kx(i,E,x,s),c.push(z),d.set(E,z)),z}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function $x(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ed(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,M,p,f){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:f},i[e]=v):(v.id=u.id,v.object=u,v.geometry=m,v.material=g,v.materialVariant=a(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=p,v.group=f),e++,v}function l(u,m,g,M,p,f){const v=o(u,m,g,M,p,f);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(u,m,g,M,p,f){const v=o(u,m,g,M,p,f);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function d(u,m){t.length>1&&t.sort(u||Kx),n.length>1&&n.sort(m||Qu),s.length>1&&s.sort(m||Qu)}function h(){for(let u=e,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function jx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ed,i.set(n,[a])):s>=r.length?(a=new ed,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qx=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){const e=new Zx,t=Jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new gt,a=new gt;function o(c){let d=0,h=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,v=0,b=0,y=0,T=0,A=0,C=0;c.sort(ev);for(let E=0,z=c.length;E<z;E++){const P=c[E],O=P.color,G=P.intensity,W=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ds?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=O.r*G,h+=O.g*G,u+=O.b*G;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],G);C++}else if(P.isDirectionalLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,j=t.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=P.shadow.matrix,v++}n.directional[m]=D,m++}else if(P.isSpotLight){const D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(O).multiplyScalar(G),D.distance=W,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[M]=D;const F=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=F.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=H,y++}M++}else if(P.isRectAreaLight){const D=e.get(P);D.color.copy(O).multiplyScalar(G),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=D,p++}else if(P.isPointLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const F=P.shadow,j=t.get(P);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=D,g++}else if(P.isHemisphereLight){const D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(G),D.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[f]=D,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==p||x.hemiLength!==f||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,x.directionalLength=m,x.pointLength=g,x.spotLength=M,x.rectAreaLength=p,x.hemiLength=f,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=C,n.version=Qx++)}function l(c,d){let h=0,u=0,m=0,g=0,M=0;const p=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const b=c[f];if(b.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function td(i){const e=new tv(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function nv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new td(i),e.set(s,[o])):r>=a.length?(o=new td(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],av=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],nd=new gt,Zs=new I,bo=new I;function ov(i,e,t){let n=new xc;const s=new Be,r=new Be,a=new yt,o=new xm,l=new vm,c={},d=t.maxTextureSize,h={[yi]:Jt,[Jt]:yi,[ln]:ln},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new de(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let f=this.type;this.render=function(A,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===op&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ia);const E=i.getRenderTarget(),z=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(jn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=f!==this.type;G&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=A.length;W<H;W++){const D=A[W],F=D.shadow;if(F===void 0){Ne("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const j=F.getFrameExtents();s.multiply(j),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,F.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===er){if(D.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ln(s.x,s.y,{format:Ds,type:Jn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new lr(s.x,s.y,Cn),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Qn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot}else D.isPointLight?(F.map=new Ph(s.x),F.map.depthTexture=new hm(s.x,Un)):(F.map=new Ln(s.x,s.y),F.map.depthTexture=new lr(s.x,s.y,Un)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Qn,this.type===ia?(F.map.depthTexture.compareFunction=Z?mc:pc,F.map.depthTexture.minFilter=Ct,F.map.depthTexture.magFilter=Ct):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot);F.camera.updateProjectionMatrix()}const ie=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ie;pe++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(F.map),i.clear());const ce=F.getViewport(pe);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),O.viewport(a)}if(D.isPointLight){const ce=F.camera,Fe=F.matrix,Le=D.distance||ce.far;Le!==ce.far&&(ce.far=Le,ce.updateProjectionMatrix()),Zs.setFromMatrixPosition(D.matrixWorld),ce.position.copy(Zs),bo.copy(ce.position),bo.add(rv[pe]),ce.up.copy(av[pe]),ce.lookAt(bo),ce.updateMatrixWorld(),Fe.makeTranslation(-Zs.x,-Zs.y,-Zs.z),nd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),F._frustum.setFromProjectionMatrix(nd,ce.coordinateSystem,ce.reversedDepth)}else F.updateMatrices(D);n=F.getFrustum(),y(C,x,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===er&&v(F,x),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,z,P)};function v(A,C){const x=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ln(s.x,s.y,{format:Ds,type:Jn})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,x,m,M,null)}function b(A,C,x,E){let z=null;const P=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)z=P;else if(z=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=z.uuid,G=C.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let H=W[G];H===void 0&&(H=z.clone(),W[G]=H,C.addEventListener("dispose",T)),z=H}if(z.visible=C.visible,z.wireframe=C.wireframe,E===er?z.side=C.shadowSide!==null?C.shadowSide:C.side:z.side=C.shadowSide!==null?C.shadowSide:h[C.side],z.alphaMap=C.alphaMap,z.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,z.map=C.map,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,x.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const O=i.properties.get(z);O.light=x}return z}function y(A,C,x,E,z){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===er)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const G=e.update(A),W=A.material;if(Array.isArray(W)){const H=G.groups;for(let D=0,F=H.length;D<F;D++){const j=H[D],Z=W[j.materialIndex];if(Z&&Z.visible){const ie=b(A,Z,E,z);A.onBeforeShadow(i,A,C,x,G,ie,j),i.renderBufferDirect(x,null,G,ie,A,j),A.onAfterShadow(i,A,C,x,G,ie,j)}}}else if(W.visible){const H=b(A,W,E,z);A.onBeforeShadow(i,A,C,x,G,H,null),i.renderBufferDirect(x,null,G,H,A,null),A.onAfterShadow(i,A,C,x,G,H,null)}}const O=A.children;for(let G=0,W=O.length;G<W;G++)y(O[G],C,x,E,z)}function T(A){A.target.removeEventListener("dispose",T);for(const x in c){const E=c[x],z=A.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function lv(i,e){function t(){let U=!1;const le=new yt;let re=null;const _e=new yt(0,0,0,0);return{setMask:function(ne){re!==ne&&!U&&(i.colorMask(ne,ne,ne,ne),re=ne)},setLocked:function(ne){U=ne},setClear:function(ne,Y,ye,Oe,ht){ht===!0&&(ne*=Oe,Y*=Oe,ye*=Oe),le.set(ne,Y,ye,Oe),_e.equals(le)===!1&&(i.clearColor(ne,Y,ye,Oe),_e.copy(le))},reset:function(){U=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,re=null,_e=null,ne=null;return{setReversed:function(Y){if(le!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=Y;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return le},setTest:function(Y){Y?Q(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Y){re!==Y&&!U&&(i.depthMask(Y),re=Y)},setFunc:function(Y){if(le&&(Y=Gp[Y]),_e!==Y){switch(Y){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Y}},setLocked:function(Y){U=Y},setClear:function(Y){ne!==Y&&(ne=Y,le&&(Y=1-Y),i.clearDepth(Y))},reset:function(){U=!1,re=null,_e=null,ne=null,le=!1}}}function s(){let U=!1,le=null,re=null,_e=null,ne=null,Y=null,ye=null,Oe=null,ht=null;return{setTest:function(it){U||(it?Q(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(it){le!==it&&!U&&(i.stencilMask(it),le=it)},setFunc:function(it,Bn,zn){(re!==it||_e!==Bn||ne!==zn)&&(i.stencilFunc(it,Bn,zn),re=it,_e=Bn,ne=zn)},setOp:function(it,Bn,zn){(Y!==it||ye!==Bn||Oe!==zn)&&(i.stencilOp(it,Bn,zn),Y=it,ye=Bn,Oe=zn)},setLocked:function(it){U=it},setClear:function(it){ht!==it&&(i.clearStencil(it),ht=it)},reset:function(){U=!1,le=null,re=null,_e=null,ne=null,Y=null,ye=null,Oe=null,ht=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,m=[],g=null,M=!1,p=null,f=null,v=null,b=null,y=null,T=null,A=null,C=new ze(0,0,0),x=0,E=!1,z=null,P=null,O=null,G=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=F>=2);let Z=null,ie={};const pe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Fe=new yt().fromArray(pe),Le=new yt().fromArray(ce);function Ie(U,le,re,_e){const ne=new Uint8Array(4),Y=i.createTexture();i.bindTexture(U,Y),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<re;ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(le+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Y}const q={};q[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Is),We(!1),St(tu),Q(i.CULL_FACE),nt(jn);function Q(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ee(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Pe(U,le){return h[U]!==le?(i.bindFramebuffer(U,le),h[U]=le,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(U,le){let re=m,_e=!1;if(U){re=u.get(le),re===void 0&&(re=[],u.set(le,re));const ne=U.textures;if(re.length!==ne.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ye=ne.length;Y<ye;Y++)re[Y]=i.COLOR_ATTACHMENT0+Y;re.length=ne.length,_e=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,_e=!0);_e&&i.drawBuffers(re)}function Ce(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const xt={[Oi]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};xt[dp]=i.MIN,xt[hp]=i.MAX;const Ve={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Sp]:i.CONSTANT_COLOR,[Ep]:i.ONE_MINUS_CONSTANT_COLOR,[bp]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(U,le,re,_e,ne,Y,ye,Oe,ht,it){if(U===jn){M===!0&&(ee(i.BLEND),M=!1);return}if(M===!1&&(Q(i.BLEND),M=!0),U!==lp){if(U!==p||it!==E){if((f!==Oi||y!==Oi)&&(i.blendEquation(i.FUNC_ADD),f=Oi,y=Oi),it)switch(U){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}v=null,b=null,T=null,A=null,C.set(0,0,0),x=0,p=U,E=it}return}ne=ne||le,Y=Y||re,ye=ye||_e,(le!==f||ne!==y)&&(i.blendEquationSeparate(xt[le],xt[ne]),f=le,y=ne),(re!==v||_e!==b||Y!==T||ye!==A)&&(i.blendFuncSeparate(Ve[re],Ve[_e],Ve[Y],Ve[ye]),v=re,b=_e,T=Y,A=ye),(Oe.equals(C)===!1||ht!==x)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ht),C.copy(Oe),x=ht),p=U,E=!1}function ct(U,le){U.side===ln?ee(i.CULL_FACE):Q(i.CULL_FACE);let re=U.side===Jt;le&&(re=!re),We(re),U.blending===ws&&U.transparent===!1?nt(jn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const _e=U.stencilWrite;o.setTest(_e),_e&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){z!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),z=U)}function St(U){U!==rp?(Q(i.CULL_FACE),U!==P&&(U===tu?i.cullFace(i.BACK):U===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),P=U}function L(U){U!==O&&(D&&i.lineWidth(U),O=U)}function Tt(U,le,re){U?(Q(i.POLYGON_OFFSET_FILL),(G!==le||W!==re)&&(G=le,W=re,a.getReversed()&&(le=-le),i.polygonOffset(le,re))):ee(i.POLYGON_OFFSET_FILL)}function Qe(U){U?Q(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function dt(U){U===void 0&&(U=i.TEXTURE0+H-1),Z!==U&&(i.activeTexture(U),Z=U)}function be(U,le,re){re===void 0&&(Z===null?re=i.TEXTURE0+H-1:re=Z);let _e=ie[re];_e===void 0&&(_e={type:void 0,texture:void 0},ie[re]=_e),(_e.type!==U||_e.texture!==le)&&(Z!==re&&(i.activeTexture(re),Z=re),i.bindTexture(U,le||q[U]),_e.type=U,_e.texture=le)}function w(){const U=ie[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function J(){try{i.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function oe(){try{i.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Re(){try{i.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Ue(){try{i.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function se(U){Fe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Fe.copy(U))}function Me(U){Le.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function Se(U,le){let re=c.get(le);re===void 0&&(re=new WeakMap,c.set(le,re));let _e=re.get(U);_e===void 0&&(_e=i.getUniformBlockIndex(le,U.name),re.set(U,_e))}function me(U,le){const _e=c.get(le).get(U);l.get(le)!==_e&&(i.uniformBlockBinding(le,_e,U.__bindingPointIndex),l.set(le,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,ie={},h={},u=new WeakMap,m=[],g=null,M=!1,p=null,f=null,v=null,b=null,y=null,T=null,A=null,C=new ze(0,0,0),x=0,E=!1,z=null,P=null,O=null,G=null,W=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ee,bindFramebuffer:Pe,drawBuffers:xe,useProgram:Ce,setBlending:nt,setMaterial:ct,setFlipSided:We,setCullFace:St,setLineWidth:L,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:dt,bindTexture:be,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ue,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:oe,texStorage3D:Re,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:se,viewport:Me,reset:Xe}}function cv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):ga("canvas")}function M(w,_,N){let K=1;const J=be(w);if((J.width>N||J.height>N)&&(K=N/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(K*J.width),ve=Math.floor(K*J.height);h===void 0&&(h=g($,ve));const oe=_?g($,ve):h;return oe.width=$,oe.height=ve,oe.getContext("2d").drawImage(w,0,0,$,ve),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+ve+")."),oe}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,_,N,K,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=_;if(_===i.RED&&(N===i.FLOAT&&($=i.R32F),N===i.HALF_FLOAT&&($=i.R16F),N===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.R8UI),N===i.UNSIGNED_SHORT&&($=i.R16UI),N===i.UNSIGNED_INT&&($=i.R32UI),N===i.BYTE&&($=i.R8I),N===i.SHORT&&($=i.R16I),N===i.INT&&($=i.R32I)),_===i.RG&&(N===i.FLOAT&&($=i.RG32F),N===i.HALF_FLOAT&&($=i.RG16F),N===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RG8UI),N===i.UNSIGNED_SHORT&&($=i.RG16UI),N===i.UNSIGNED_INT&&($=i.RG32UI),N===i.BYTE&&($=i.RG8I),N===i.SHORT&&($=i.RG16I),N===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGB8UI),N===i.UNSIGNED_SHORT&&($=i.RGB16UI),N===i.UNSIGNED_INT&&($=i.RGB32UI),N===i.BYTE&&($=i.RGB8I),N===i.SHORT&&($=i.RGB16I),N===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGBA8UI),N===i.UNSIGNED_SHORT&&($=i.RGBA16UI),N===i.UNSIGNED_INT&&($=i.RGBA32UI),N===i.BYTE&&($=i.RGBA8I),N===i.SHORT&&($=i.RGBA16I),N===i.INT&&($=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const ve=J?ma:je.getTransfer(K);N===i.FLOAT&&($=i.RGBA32F),N===i.HALF_FLOAT&&($=i.RGBA16F),N===i.UNSIGNED_BYTE&&($=ve===st?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(w,_){let N;return w?_===null||_===Un||_===ar?N=i.DEPTH24_STENCIL8:_===Cn?N=i.DEPTH32F_STENCIL8:_===rr&&(N=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Un||_===ar?N=i.DEPTH_COMPONENT24:_===Cn?N=i.DEPTH_COMPONENT32F:_===rr&&(N=i.DEPTH_COMPONENT16),N}function T(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){const _=w.target;_.removeEventListener("dispose",A),x(_),_.isVideoTexture&&d.delete(_)}function C(w){const _=w.target;_.removeEventListener("dispose",C),z(_)}function x(w){const _=n.get(w);if(_.__webglInit===void 0)return;const N=w.source,K=u.get(N);if(K){const J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(w),Object.keys(K).length===0&&u.delete(N)}n.remove(w)}function E(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const N=w.source,K=u.get(N);delete K[_.__cacheKey],a.memory.textures--}function z(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let J=0;J<_.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[K][J]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=w.textures;for(let K=0,J=N.length;K<J;K++){const $=n.get(N[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[K])}n.remove(w)}let P=0;function O(){P=0}function G(){const w=P;return w>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function W(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function H(w,_){const N=n.get(w);if(w.isVideoTexture&&Qe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const K=w.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function D(w,_){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){q(N,w,_);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function F(w,_){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){q(N,w,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function j(w,_){const N=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){Q(N,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const Z={[Jo]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},ie={[Ot]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},pe={[Ip]:i.NEVER,[Np]:i.ALWAYS,[Lp]:i.LESS,[pc]:i.LEQUAL,[Dp]:i.EQUAL,[mc]:i.GEQUAL,[Up]:i.GREATER,[Fp]:i.NOTEQUAL};function ce(w,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===Wa||_.magFilter===Mr||_.magFilter===Hi||_.minFilter===Ct||_.minFilter===Wa||_.minFilter===Mr||_.minFilter===Hi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Z[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ie[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==Mr&&_.minFilter!==Hi||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const $=W(_);if($!==w.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[$].usedTimes++;const ve=J[w.__cacheKey];ve!==void 0&&(J[w.__cacheKey].usedTimes--,ve.usedTimes===0&&E(_)),w.__cacheKey=$,w.__webglTexture=J[$].texture}return N}function Le(w,_,N){return Math.floor(Math.floor(w/N)/_)}function Ie(w,_,N,K){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,K,_.data);else{$.sort((te,se)=>te.start-se.start);let ve=0;for(let te=1;te<$.length;te++){const se=$[ve],Me=$[te],Se=se.start+se.count,me=Le(Me.start,_.width,4),Xe=Le(se.start,_.width,4);Me.start<=Se+1&&me===Xe&&Le(Me.start+Me.count-1,_.width,4)===me?se.count=Math.max(se.count,Me.start+Me.count-se.start):(++ve,$[ve]=Me)}$.length=ve+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,se=$.length;te<se;te++){const Me=$[te],Se=Math.floor(Me.start/4),me=Math.ceil(Me.count/4),Xe=Se%_.width,U=Math.floor(Se/_.width),le=me,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Xe,U,le,re,N,K,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function q(w,_,N){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const J=Fe(w,_),$=_.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+N);const ve=n.get($);if($.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const oe=je.getPrimaries(je.workingColorSpace),Re=_.colorSpace===ui?null:je.getPrimaries(_.colorSpace),Ue=_.colorSpace===ui||oe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=M(_.image,!1,s.maxTextureSize);te=dt(_,te);const se=r.convert(_.format,_.colorSpace),Me=r.convert(_.type);let Se=b(_.internalFormat,se,Me,_.colorSpace,_.isVideoTexture);ce(K,_);let me;const Xe=_.mipmaps,U=_.isVideoTexture!==!0,le=ve.__version===void 0||J===!0,re=$.dataReady,_e=T(_,te);if(_.isDepthTexture)Se=y(_.format===Vi,_.type),le&&(U?t.texStorage2D(i.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,se,Me,null));else if(_.isDataTexture)if(Xe.length>0){U&&le&&t.texStorage2D(i.TEXTURE_2D,_e,Se,Xe[0].width,Xe[0].height);for(let ne=0,Y=Xe.length;ne<Y;ne++)me=Xe[ne],U?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me.width,me.height,se,Me,me.data):t.texImage2D(i.TEXTURE_2D,ne,Se,me.width,me.height,0,se,Me,me.data);_.generateMipmaps=!1}else U?(le&&t.texStorage2D(i.TEXTURE_2D,_e,Se,te.width,te.height),re&&Ie(_,te,se,Me)):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,se,Me,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Se,Xe[0].width,Xe[0].height,te.depth);for(let ne=0,Y=Xe.length;ne<Y;ne++)if(me=Xe[ne],_.format!==_n)if(se!==null)if(U){if(re)if(_.layerUpdates.size>0){const ye=Du(me.width,me.height,_.format,_.type);for(const Oe of _.layerUpdates){const ht=me.data.subarray(Oe*ye/me.data.BYTES_PER_ELEMENT,(Oe+1)*ye/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Oe,me.width,me.height,1,se,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,se,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Se,me.width,me.height,te.depth,0,me.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,se,Me,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Se,me.width,me.height,te.depth,0,se,Me,me.data)}else{U&&le&&t.texStorage2D(i.TEXTURE_2D,_e,Se,Xe[0].width,Xe[0].height);for(let ne=0,Y=Xe.length;ne<Y;ne++)me=Xe[ne],_.format!==_n?se!==null?U?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,me.width,me.height,se,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Se,me.width,me.height,0,me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me.width,me.height,se,Me,me.data):t.texImage2D(i.TEXTURE_2D,ne,Se,me.width,me.height,0,se,Me,me.data)}else if(_.isDataArrayTexture)if(U){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Se,te.width,te.height,te.depth),re)if(_.layerUpdates.size>0){const ne=Du(te.width,te.height,_.format,_.type);for(const Y of _.layerUpdates){const ye=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,se,Me,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,Me,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,se,Me,te.data);else if(_.isData3DTexture)U?(le&&t.texStorage3D(i.TEXTURE_3D,_e,Se,te.width,te.height,te.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,Me,te.data)):t.texImage3D(i.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,se,Me,te.data);else if(_.isFramebufferTexture){if(le)if(U)t.texStorage2D(i.TEXTURE_2D,_e,Se,te.width,te.height);else{let ne=te.width,Y=te.height;for(let ye=0;ye<_e;ye++)t.texImage2D(i.TEXTURE_2D,ye,Se,ne,Y,0,se,Me,null),ne>>=1,Y>>=1}}else if(Xe.length>0){if(U&&le){const ne=be(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Se,ne.width,ne.height)}for(let ne=0,Y=Xe.length;ne<Y;ne++)me=Xe[ne],U?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,se,Me,me):t.texImage2D(i.TEXTURE_2D,ne,Se,se,Me,me);_.generateMipmaps=!1}else if(U){if(le){const ne=be(te);t.texStorage2D(i.TEXTURE_2D,_e,Se,ne.width,ne.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Me,te)}else t.texImage2D(i.TEXTURE_2D,0,Se,se,Me,te);p(_)&&f(K),ve.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Q(w,_,N){if(_.image.length!==6)return;const K=Fe(w,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const $=n.get(J);if(J.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+N);const ve=je.getPrimaries(je.workingColorSpace),oe=_.colorSpace===ui?null:je.getPrimaries(_.colorSpace),Re=_.colorSpace===ui||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!Ue&&!te?se[Y]=M(_.image[Y],!0,s.maxCubemapSize):se[Y]=te?_.image[Y].image:_.image[Y],se[Y]=dt(_,se[Y]);const Me=se[0],Se=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Xe=b(_.internalFormat,Se,me,_.colorSpace),U=_.isVideoTexture!==!0,le=$.__version===void 0||K===!0,re=J.dataReady;let _e=T(_,Me);ce(i.TEXTURE_CUBE_MAP,_);let ne;if(Ue){U&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Me.width,Me.height);for(let Y=0;Y<6;Y++){ne=se[Y].mipmaps;for(let ye=0;ye<ne.length;ye++){const Oe=ne[ye];_.format!==_n?Se!==null?U?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Oe.width,Oe.height,Se,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Xe,Oe.width,Oe.height,0,Oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Oe.width,Oe.height,Se,me,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Xe,Oe.width,Oe.height,0,Se,me,Oe.data)}}}else{if(ne=_.mipmaps,U&&le){ne.length>0&&_e++;const Y=be(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,Se,me,se[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,se[Y].width,se[Y].height,0,Se,me,se[Y].data);for(let ye=0;ye<ne.length;ye++){const ht=ne[ye].image[Y].image;U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,ht.width,ht.height,Se,me,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Xe,ht.width,ht.height,0,Se,me,ht.data)}}else{U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,me,se[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,Se,me,se[Y]);for(let ye=0;ye<ne.length;ye++){const Oe=ne[ye];U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Se,me,Oe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Xe,Se,me,Oe.image[Y])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),$.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ee(w,_,N,K,J,$){const ve=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),Re=b(N.internalFormat,ve,oe,N.colorSpace),Ue=n.get(_),te=n.get(N);if(te.__renderTarget=_,!Ue.__hasExternalTextures){const se=Math.max(1,_.width>>$),Me=Math.max(1,_.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Re,se,Me,_.depth,0,ve,oe,null):t.texImage2D(J,$,Re,se,Me,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Tt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,te.__webglTexture,0,L(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,te.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(w,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const K=_.depthTexture,J=K&&K.isDepthTexture?K.type:null,$=y(_.stencilBuffer,J),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),$,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,w)}else{const K=_.textures;for(let J=0;J<K.length;J++){const $=K[J],ve=r.convert($.format,$.colorSpace),oe=r.convert($.type),Re=b($.internalFormat,ve,oe,$.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),Re,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),Re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Re,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(w,_,N){const K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ce(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ue=r.convert(_.depthTexture.format),te=r.convert(_.depthTexture.type);let se;_.depthTexture.format===Qn?se=i.DEPTH_COMPONENT24:_.depthTexture.format===Vi&&(se=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,_.width,_.height,0,Ue,te,null)}}else H(_.depthTexture,0);const $=J.__webglTexture,ve=L(_),oe=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Re=_.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)Tt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,oe,$,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Re,oe,$,0);else if(_.depthTexture.format===Vi)Tt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,oe,$,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Re,oe,$,0);else throw new Error("Unknown depthTexture format")}function Ce(w){const _=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=K}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)xe(_.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?xe(_.__webglFramebuffer[0],w,0):xe(_.__webglFramebuffer,w,0)}else if(N){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(w,_,N){const K=n.get(w);_!==void 0&&ee(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ce(w)}function Ve(w){const _=w.texture,N=n.get(w),K=n.get(_);w.addEventListener("dispose",C);const J=w.textures,$=w.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let Re=0;Re<_.mipmaps.length;Re++)N.__webglFramebuffer[oe][Re]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,Re=J.length;oe<Re;oe++){const Ue=n.get(J[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Tt(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Re=J[oe];N.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ue=r.convert(Re.format,Re.colorSpace),te=r.convert(Re.type),se=b(Re.internalFormat,Ue,te,Re.colorSpace,w.isXRRenderTarget===!0),Me=L(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ce(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ee(N.__webglFramebuffer[oe][Re],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else ee(N.__webglFramebuffer[oe],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Re=J.length;oe<Re;oe++){const Ue=J[oe],te=n.get(Ue);let se=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),ce(se,Ue),ee(N.__webglFramebuffer,w,Ue,i.COLOR_ATTACHMENT0+oe,se,0),p(Ue)&&f(se)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ce(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ee(N.__webglFramebuffer[Re],w,_,i.COLOR_ATTACHMENT0,oe,Re);else ee(N.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,oe,0);p(_)&&f(oe),t.unbindTexture()}w.depthBuffer&&Ce(w)}function nt(w){const _=w.textures;for(let N=0,K=_.length;N<K;N++){const J=_[N];if(p(J)){const $=v(w),ve=n.get(J).__webglTexture;t.bindTexture($,ve),f($),t.unbindTexture()}}}const ct=[],We=[];function St(w){if(w.samples>0){if(Tt(w)===!1){const _=w.textures,N=w.width,K=w.height;let J=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(w),oe=_.length>1;if(oe)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const te=n.get(_[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,N,K,0,0,N,K,J,i.NEAREST),l===!0&&(ct.length=0,We.length=0,ct.push(i.COLOR_ATTACHMENT0+Ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ct.push($),We.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const te=n.get(_[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function Tt(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qe(w){const _=a.render.frame;d.get(w)!==_&&(d.set(w,_),w.update())}function dt(w,_){const N=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Us&&N!==ui&&(je.getTransfer(N)===st?(K!==_n||J!==rn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",N)),_}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=j,this.rebindTextures=xt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uv(i,e){function t(n,s=ui){let r;const a=je.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===uh)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===_n)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Ds)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ol)return r.COMPRESSED_R11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cl)return r.COMPRESSED_RG11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===hl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml||n===yl||n===Sl||n===El||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Rl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:dv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Bs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new fv,f={},v=t.getContextAttributes();let b=null,y=null;const T=[],A=[],C=new Be;let x=null;const E=new sn;E.viewport=new yt;const z=new sn;z.viewport=new yt;const P=[E,z],O=new bm;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=T[q];return Q===void 0&&(Q=new Ja,T[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=T[q];return Q===void 0&&(Q=new Ja,T[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=T[q];return Q===void 0&&(Q=new Ja,T[q]=Q),Q.getHandSpace()};function H(q){const Q=A.indexOf(q.inputSource);if(Q===-1)return;const ee=T[Q];ee!==void 0&&(ee.update(q.inputSource,q.frame,c||a),ee.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",F);for(let q=0;q<T.length;q++){const Q=A[q];Q!==null&&(A[q]=null,T[q].disconnect(Q))}G=null,W=null,p.reset();for(const q in f)delete f[q];e.setRenderTarget(b),m=null,u=null,h=null,s=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",D),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Vi:Qn,Pe=v.stencil?ar:Un);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ln(u.textureWidth,u.textureHeight,{format:_n,type:rn,depthTexture:new lr(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ln(m.framebufferWidth,m.framebufferHeight,{format:_n,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(q){for(let Q=0;Q<q.removed.length;Q++){const ee=q.removed[Q],Pe=A.indexOf(ee);Pe>=0&&(A[Pe]=null,T[Pe].disconnect(ee))}for(let Q=0;Q<q.added.length;Q++){const ee=q.added[Q];let Pe=A.indexOf(ee);if(Pe===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=A.length){A.push(ee),Pe=Ce;break}else if(A[Ce]===null){A[Ce]=ee,Pe=Ce;break}if(Pe===-1)break}const xe=T[Pe];xe&&xe.connect(ee)}}const j=new I,Z=new I;function ie(q,Q,ee){j.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ee.matrixWorld);const Pe=j.distanceTo(Z),xe=Q.projectionMatrix.elements,Ce=ee.projectionMatrix.elements,xt=xe[14]/(xe[10]-1),Ve=xe[14]/(xe[10]+1),nt=(xe[9]+1)/xe[5],ct=(xe[9]-1)/xe[5],We=(xe[8]-1)/xe[0],St=(Ce[8]+1)/Ce[0],L=xt*We,Tt=xt*St,Qe=Pe/(-We+St),dt=Qe*-We;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(dt),q.translateZ(Qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const be=xt+Qe,w=Ve+Qe,_=L-dt,N=Tt+(Pe-dt),K=nt*Ve/w*be,J=ct*Ve/w*be;q.projectionMatrix.makePerspective(_,N,K,J,be,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,ee=q.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),O.near=z.near=E.near=Q,O.far=z.far=E.far=ee,(G!==O.near||W!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,W=O.far),O.layers.mask=q.layers.mask|6,E.layers.mask=O.layers.mask&-5,z.layers.mask=O.layers.mask&-3;const Pe=q.parent,xe=O.cameras;pe(O,Pe);for(let Ce=0;Ce<xe.length;Ce++)pe(xe[Ce],Pe);xe.length===2?ie(O,E,z):O.projectionMatrix.copy(E.projectionMatrix),ce(q,O,Pe)};function ce(q,Q,ee){ee===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(q){return f[q]};let Fe=null;function Le(q,Q){if(d=Q.getViewerPose(c||a),g=Q,d!==null){const ee=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Pe=!1;ee.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let Ve=0;Ve<ee.length;Ve++){const nt=ee[Ve];let ct=null;if(m!==null)ct=m.getViewport(nt);else{const St=h.getViewSubImage(u,nt);ct=St.viewport,Ve===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let We=P[Ve];We===void 0&&(We=new sn,We.layers.enable(Ve),We.viewport=new yt,P[Ve]=We),We.matrix.fromArray(nt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(nt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ct.x,ct.y,ct.width,ct.height),Ve===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(We)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();const Ve=h.getDepthInformation(ee[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<ee.length;Ve++){const nt=ee[Ve].camera;if(nt){let ct=f[nt];ct||(ct=new Ah,f[nt]=ct);const We=h.getCameraImage(nt);ct.sourceTexture=We}}}}for(let ee=0;ee<T.length;ee++){const Pe=A[ee],xe=T[ee];Pe!==null&&xe!==void 0&&xe.update(Pe,Q,c||a)}Fe&&Fe(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ie=new Rh;Ie.setAnimationLoop(Le),this.setAnimationLoop=function(q){Fe=q},this.dispose=function(){}}}const Di=new Fn,mv=new gt;function gv(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,wh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,v,b,y){f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Jt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Jt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),p.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Di)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=s[v.id];y===void 0&&(g(v),y=d(v),s[v.id]=y,v.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(v,T);const A=e.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function d(v){const b=h();v.__bindingPointIndex=b;const y=i.createBuffer(),T=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=y.length;A<C;A++){const x=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,z=x.length;E<z;E++){const P=x[E];if(m(P,A,E,T)===!0){const O=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<G.length;H++){const D=G[H],F=M(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,O+W,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,b,y,T){const A=v.value,C=b+"_"+y;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const x=T[C];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return T[C]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function g(v){const b=v.uniforms;let y=0;const T=16;for(let C=0,x=b.length;C<x;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let z=0,P=E.length;z<P;z++){const O=E[z],G=Array.isArray(O.value)?O.value:[O.value];for(let W=0,H=G.length;W<H;W++){const D=G[W],F=M(D),j=y%T,Z=j%F.boundary,ie=j+Z;y+=Z,ie!==0&&T-ie<F.storage&&(y+=T-ie),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=F.storage}}}const A=y%T;return A>0&&(y+=T-A),v.__size=y,v.__cache={},this}function M(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function vv(){return En===null&&(En=new om(xv,16,16,Ds,Jn),En.name="DFG_LUT",En.minFilter=Ct,En.magFilter=Ct,En.wrapS=Yn,En.wrapT=Yn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class Fh{constructor(e={}){const{canvas:t=Bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=m,p=new Set([fc,hc,dc]),f=new Set([rn,Un,rr,ar,cc,uc]),v=new Uint32Array(4),b=new Int32Array(4);let y=null,T=null;const A=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=on;let P=0,O=0,G=null,W=-1,H=null;const D=new yt,F=new yt;let j=null;const Z=new ze(0);let ie=0,pe=t.width,ce=t.height,Fe=1,Le=null,Ie=null;const q=new yt(0,0,pe,ce),Q=new yt(0,0,pe,ce);let ee=!1;const Pe=new xc;let xe=!1,Ce=!1;const xt=new gt,Ve=new I,nt=new yt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function St(){return G===null?Fe:1}let L=n;function Tt(S,B){return t.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ht,!1),L===null){const B="webgl2";if(L=Tt(B,S),L===null)throw Tt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ke("WebGLRenderer: "+S.message),S}let Qe,dt,be,w,_,N,K,J,$,ve,oe,Re,Ue,te,se,Me,Se,me,Xe,U,le,re,_e;function ne(){Qe=new M_(L),Qe.init(),le=new uv(L,Qe),dt=new h_(L,Qe,e,le),be=new lv(L,Qe),dt.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),w=new E_(L),_=new $x,N=new cv(L,Qe,be,_,dt,le,w),K=new v_(E),J=new Cm(L),re=new u_(L,J),$=new y_(L,J,w,re),ve=new T_(L,$,J,re,w),me=new b_(L,dt,N),se=new f_(_),oe=new Yx(E,K,Qe,dt,re,se),Re=new gv(E,_),Ue=new jx,te=new nv(Qe),Se=new c_(E,K,be,ve,g,l),Me=new ov(E,ve,dt),_e=new _v(L,w,dt,be),Xe=new d_(L,Qe,w),U=new S_(L,Qe,w),w.programs=oe.programs,E.capabilities=dt,E.extensions=Qe,E.properties=_,E.renderLists=Ue,E.shadowMap=Me,E.state=be,E.info=w}ne(),M!==rn&&(x=new w_(M,t.width,t.height,s,r));const Y=new pv(E,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(S){S!==void 0&&(Fe=S,this.setSize(pe,ce,!1))},this.getSize=function(S){return S.set(pe,ce)},this.setSize=function(S,B,X=!0){if(Y.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=S,ce=B,t.width=Math.floor(S*Fe),t.height=Math.floor(B*Fe),X===!0&&(t.style.width=S+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(pe*Fe,ce*Fe).floor()},this.setDrawingBufferSize=function(S,B,X){pe=S,ce=B,Fe=X,t.width=Math.floor(S*X),t.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(M===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,B,X,k){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,B,X,k),be.viewport(D.copy(q).multiplyScalar(Fe).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,B,X,k){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,B,X,k),be.scissor(F.copy(Q).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){be.setScissorTest(ee=S)},this.setOpaqueSort=function(S){Le=S},this.setTransparentSort=function(S){Ie=S},this.getClearColor=function(S){return S.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,X=!0){let k=0;if(S){let V=!1;if(G!==null){const he=G.texture.format;V=p.has(he)}if(V){const he=G.texture.type,ge=f.has(he),fe=Se.getClearColor(),Ee=Se.getClearAlpha(),Ae=fe.r,Ge=fe.g,qe=fe.b;ge?(v[0]=Ae,v[1]=Ge,v[2]=qe,v[3]=Ee,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=Ae,b[1]=Ge,b[2]=qe,b[3]=Ee,L.clearBufferiv(L.COLOR,0,b))}else k|=L.COLOR_BUFFER_BIT}B&&(k|=L.DEPTH_BUFFER_BIT),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),Ue.dispose(),te.dispose(),_.dispose(),K.dispose(),ve.dispose(),re.dispose(),_e.dispose(),oe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yc),Y.removeEventListener("sessionend",$c),Ai.stop()};function ye(S){S.preventDefault(),_a("WebGLRenderer: Context Lost."),z=!0}function Oe(){_a("WebGLRenderer: Context Restored."),z=!1;const S=w.autoReset,B=Me.enabled,X=Me.autoUpdate,k=Me.needsUpdate,V=Me.type;ne(),w.autoReset=S,Me.enabled=B,Me.autoUpdate=X,Me.needsUpdate=k,Me.type=V}function ht(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){const B=S.target;B.removeEventListener("dispose",it),Bn(B)}function Bn(S){zn(S),_.remove(S)}function zn(S){const B=_.get(S).programs;B!==void 0&&(B.forEach(function(X){oe.releaseProgram(X)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,k,V,he){B===null&&(B=ct);const ge=V.isMesh&&V.matrixWorld.determinant()<0,fe=Qf(S,B,X,k,V);be.setMaterial(k,ge);let Ee=X.index,Ae=1;if(k.wireframe===!0){if(Ee=$.getWireframeAttribute(X),Ee===void 0)return;Ae=2}const Ge=X.drawRange,qe=X.attributes.position;let we=Ge.start*Ae,at=(Ge.start+Ge.count)*Ae;he!==null&&(we=Math.max(we,he.start*Ae),at=Math.min(at,(he.start+he.count)*Ae)),Ee!==null?(we=Math.max(we,0),at=Math.min(at,Ee.count)):qe!=null&&(we=Math.max(we,0),at=Math.min(at,qe.count));const Et=at-we;if(Et<0||Et===1/0)return;re.setup(V,k,fe,X,Ee);let vt,ot=Xe;if(Ee!==null&&(vt=J.get(Ee),ot=U,ot.setIndex(vt)),V.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*St()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(V.isLine){let Bt=k.linewidth;Bt===void 0&&(Bt=1),be.setLineWidth(Bt*St()),V.isLineSegments?ot.setMode(L.LINES):V.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else V.isPoints?ot.setMode(L.POINTS):V.isSprite&&ot.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)xa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,Te=V._multiDrawCounts,en=V._multiDrawCount,Ze=Ee?J.get(Ee).bytesPerElement:1,hn=_.get(k).currentProgram.getUniforms();for(let yn=0;yn<en;yn++)hn.setValue(L,"_gl_DrawID",yn),ot.render(Bt[yn]/Ze,Te[yn])}else if(V.isInstancedMesh)ot.renderInstances(we,Et,V.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,Bt);ot.renderInstances(we,Et,Te)}else ot.render(we,Et)};function qc(S,B,X){S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Jt,S.needsUpdate=!0,vr(S,B,X),S.side=yi,S.needsUpdate=!0,vr(S,B,X),S.side=ln):vr(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),T=te.get(X),T.init(B),C.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const he=V.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const fe=he[ge];qc(fe,X,V),k.add(fe)}else qc(he,X,V),k.add(he)}),T=C.pop(),k},this.compileAsync=function(S,B,X=null){const k=this.compile(S,B,X);return new Promise(V=>{function he(){if(k.forEach(function(ge){_.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){V(S);return}setTimeout(he,10)}Qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ga=null;function Jf(S){Ga&&Ga(S)}function Yc(){Ai.stop()}function $c(){Ai.start()}const Ai=new Rh;Ai.setAnimationLoop(Jf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(S){Ga=S,Y.setAnimationLoop(S),S===null?Ai.stop():Ai.start()},Y.addEventListener("sessionstart",Yc),Y.addEventListener("sessionend",$c),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const X=Y.enabled===!0&&Y.isPresenting===!0,k=x!==null&&(G===null||X)&&x.begin(E,G);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,B,G),T=te.get(S,C.length),T.init(B),C.push(T),xt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pe.setFromProjectionMatrix(xt,Rn,B.reversedDepth),Ce=this.localClippingEnabled,xe=se.init(this.clippingPlanes,Ce),y=Ue.get(S,A.length),y.init(),A.push(y),Y.enabled===!0&&Y.isPresenting===!0){const ge=E.xr.getDepthSensingMesh();ge!==null&&Ha(ge,B,-1/0,E.sortObjects)}Ha(S,B,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Le,Ie),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Se.addToRenderList(y,S),this.info.render.frame++,xe===!0&&se.beginShadows();const V=T.state.shadowsArray;if(Me.render(V,S,B),xe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&x.hasRenderPass())===!1){const ge=y.opaque,fe=y.transmissive;if(T.setupLights(),B.isArrayCamera){const Ee=B.cameras;if(fe.length>0)for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const qe=Ee[Ae];jc(ge,fe,S,qe)}We&&Se.render(S);for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const qe=Ee[Ae];Kc(y,S,qe,qe.viewport)}}else fe.length>0&&jc(ge,fe,S,B),We&&Se.render(S),Kc(y,S,B)}G!==null&&O===0&&(N.updateMultisampleRenderTarget(G),N.updateRenderTargetMipmap(G)),k&&x.end(E),S.isScene===!0&&S.onAfterRender(E,S,B),re.resetDefaultState(),W=-1,H=null,C.pop(),C.length>0?(T=C[C.length-1],xe===!0&&se.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Ha(S,B,X,k){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Pe.intersectsSprite(S)){k&&nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);const ge=ve.update(S),fe=S.material;fe.visible&&y.push(S,ge,fe,X,nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Pe.intersectsObject(S))){const ge=ve.update(S),fe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),nt.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),nt.copy(ge.boundingSphere.center)),nt.applyMatrix4(S.matrixWorld).applyMatrix4(xt)),Array.isArray(fe)){const Ee=ge.groups;for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const qe=Ee[Ae],we=fe[qe.materialIndex];we&&we.visible&&y.push(S,ge,we,X,nt.z,qe)}}else fe.visible&&y.push(S,ge,fe,X,nt.z,null)}}const he=S.children;for(let ge=0,fe=he.length;ge<fe;ge++)Ha(he[ge],B,X,k)}function Kc(S,B,X,k){const{opaque:V,transmissive:he,transparent:ge}=S;T.setupLightsView(X),xe===!0&&se.setGlobalState(E.clippingPlanes,X),k&&be.viewport(D.copy(k)),V.length>0&&xr(V,B,X),he.length>0&&xr(he,B,X),ge.length>0&&xr(ge,B,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function jc(S,B,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const we=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Ln(1,1,{generateMipmaps:!0,type:we?Jn:rn,minFilter:Hi,samples:dt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const he=T.state.transmissionRenderTarget[k.id],ge=k.viewport||D;he.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const fe=E.getRenderTarget(),Ee=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(Z),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),We&&Se.render(X);const Ge=E.toneMapping;E.toneMapping=In;const qe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),xe===!0&&se.setGlobalState(E.clippingPlanes,k),xr(S,X,k),N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let at=0,Et=B.length;at<Et;at++){const vt=B[at],{object:ot,geometry:Bt,material:Te,group:en}=vt;if(Te.side===ln&&ot.layers.test(k.layers)){const Ze=Te.side;Te.side=Jt,Te.needsUpdate=!0,Zc(ot,X,k,Bt,Te,en),Te.side=Ze,Te.needsUpdate=!0,we=!0}}we===!0&&(N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he))}E.setRenderTarget(fe,Ee,Ae),E.setClearColor(Z,ie),qe!==void 0&&(k.viewport=qe),E.toneMapping=Ge}function xr(S,B,X){const k=B.isScene===!0?B.overrideMaterial:null;for(let V=0,he=S.length;V<he;V++){const ge=S[V],{object:fe,geometry:Ee,group:Ae}=ge;let Ge=ge.material;Ge.allowOverride===!0&&k!==null&&(Ge=k),fe.layers.test(X.layers)&&Zc(fe,B,X,Ee,Ge,Ae)}}function Zc(S,B,X,k,V,he){S.onBeforeRender(E,B,X,k,V,he),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(E,B,X,k,S,he),V.transparent===!0&&V.side===ln&&V.forceSinglePass===!1?(V.side=Jt,V.needsUpdate=!0,E.renderBufferDirect(X,B,k,V,S,he),V.side=yi,V.needsUpdate=!0,E.renderBufferDirect(X,B,k,V,S,he),V.side=ln):E.renderBufferDirect(X,B,k,V,S,he),S.onAfterRender(E,B,X,k,V,he)}function vr(S,B,X){B.isScene!==!0&&(B=ct);const k=_.get(S),V=T.state.lights,he=T.state.shadowsArray,ge=V.state.version,fe=oe.getParameters(S,V.state,he,B,X),Ee=oe.getProgramCacheKey(fe);let Ae=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,k.fog=B.fog;const Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=K.get(S.envMap||k.environment,Ge),k.envMapRotation=k.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",it),Ae=new Map,k.programs=Ae);let qe=Ae.get(Ee);if(qe!==void 0){if(k.currentProgram===qe&&k.lightsStateVersion===ge)return Qc(S,fe),qe}else fe.uniforms=oe.getUniforms(S),S.onBeforeCompile(fe,E),qe=oe.acquireProgram(fe,Ee),Ae.set(Ee,qe),k.uniforms=fe.uniforms;const we=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=se.uniform),Qc(S,fe),k.needsLights=tp(S),k.lightsStateVersion=ge,k.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=qe,k.uniformsList=null,qe}function Jc(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=la.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Qc(S,B){const X=_.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Qf(S,B,X,k,V){B.isScene!==!0&&(B=ct),N.resetTextureUnits();const he=B.fog,ge=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?B.environment:null,fe=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Us,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=K.get(k.envMap||ge,Ee),Ge=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let vt=In;k.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(vt=E.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=ot!==void 0?ot.length:0,Te=_.get(k),en=T.state.lights;if(xe===!0&&(Ce===!0||S!==H)){const It=S===H&&k.id===W;se.setState(k,S,It)}let Ze=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==en.state.version||Te.outputColorSpace!==fe||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Ae||k.fog===!0&&Te.fog!==he||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ge||Te.vertexTangents!==qe||Te.morphTargets!==we||Te.morphNormals!==at||Te.morphColors!==Et||Te.toneMapping!==vt||Te.morphTargetsCount!==Bt)&&(Ze=!0):(Ze=!0,Te.__version=k.version);let hn=Te.currentProgram;Ze===!0&&(hn=vr(k,B,V));let yn=!1,wi=!1,Ji=!1;const ut=hn.getUniforms(),Ft=Te.uniforms;if(be.useProgram(hn.program)&&(yn=!0,wi=!0,Ji=!0),k.id!==W&&(W=k.id,wi=!0),yn||H!==S){be.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",S.projectionMatrix),ut.setValue(L,"viewMatrix",S.matrixWorldInverse);const ni=ut.map.cameraPosition;ni!==void 0&&ni.setValue(L,Ve.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),H!==S&&(H=S,wi=!0,Ji=!0)}if(Te.needsLights&&(en.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,N),en.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",en.state.spotShadowMap,N),en.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",en.state.pointShadowMap,N)),V.isSkinnedMesh){ut.setOptional(L,V,"bindMatrix"),ut.setOptional(L,V,"bindMatrixInverse");const It=V.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(L,"boneTexture",It.boneTexture,N))}V.isBatchedMesh&&(ut.setOptional(L,V,"batchingTexture"),ut.setValue(L,"batchingTexture",V._matricesTexture,N),ut.setOptional(L,V,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",V._indirectTexture,N),ut.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",V._colorsTexture,N));const ti=X.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&me.update(V,X,hn),(wi||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,ut.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=vv()),wi&&(ut.setValue(L,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&ep(Ft,Ji),he&&k.fog===!0&&Re.refreshFogUniforms(Ft,he),Re.refreshMaterialUniforms(Ft,k,Fe,ce,T.state.transmissionRenderTarget[S.id]),la.upload(L,Jc(Te),Ft,N)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(la.upload(L,Jc(Te),Ft,N),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(L,"center",V.center),ut.setValue(L,"modelViewMatrix",V.modelViewMatrix),ut.setValue(L,"normalMatrix",V.normalMatrix),ut.setValue(L,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const It=k.uniformsGroups;for(let ni=0,Qi=It.length;ni<Qi;ni++){const eu=It[ni];_e.update(eu,hn),_e.bind(eu,hn)}}return hn}function ep(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function tp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(S,B,X){const k=_.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=B,_.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const X=_.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const np=L.createFramebuffer();this.setRenderTarget=function(S,B=0,X=0){G=S,P=B,O=X;let k=null,V=!1,he=!1;if(S){const fe=_.get(S);if(fe.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),D.copy(S.viewport),F.copy(S.scissor),j=S.scissorTest,be.viewport(D),be.scissor(F),be.setScissorTest(j),W=-1;return}else if(fe.__webglFramebuffer===void 0)N.setupRenderTarget(S);else if(fe.__hasExternalTextures)N.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(fe.__boundDepthTexture!==Ge){if(Ge!==null&&_.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Ae=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?k=Ae[B][X]:k=Ae[B],V=!0):S.samples>0&&N.useMultisampledRTT(S)===!1?k=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[X]:k=Ae,D.copy(S.viewport),F.copy(S.scissor),j=S.scissorTest}else D.copy(q).multiplyScalar(Fe).floor(),F.copy(Q).multiplyScalar(Fe).floor(),j=ee;if(X!==0&&(k=np),be.bindFramebuffer(L.FRAMEBUFFER,k)&&be.drawBuffers(S,k),be.viewport(D),be.scissor(F),be.setScissorTest(j),V){const fe=_.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe.__webglTexture,X)}else if(he){const fe=B;for(let Ee=0;Ee<S.textures.length;Ee++){const Ae=_.get(S.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,fe)}}else if(S!==null&&X!==0){const fe=_.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(S,B,X,k,V,he,ge,fe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){be.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ae=S.textures[fe],Ge=Ae.format,qe=Ae.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!dt.textureFormatReadable(Ge)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-k&&X>=0&&X<=S.height-V&&L.readPixels(B,X,k,V,le.convert(Ge),le.convert(qe),he)}finally{const Ae=G!==null?_.get(G).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,k,V,he,ge,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(B>=0&&B<=S.width-k&&X>=0&&X<=S.height-V){be.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ae=S.textures[fe],Ge=Ae.format,qe=Ae.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!dt.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(B,X,k,V,le.convert(Ge),le.convert(qe),0);const at=G!==null?_.get(G).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,at);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zp(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(we),L.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,X=0){const k=Math.pow(2,-X),V=Math.floor(S.image.width*k),he=Math.floor(S.image.height*k),ge=B!==null?B.x:0,fe=B!==null?B.y:0;N.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ge,fe,V,he),be.unbindTexture()};const ip=L.createFramebuffer(),sp=L.createFramebuffer();this.copyTextureToTexture=function(S,B,X=null,k=null,V=0,he=0){let ge,fe,Ee,Ae,Ge,qe,we,at,Et;const vt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(X!==null)ge=X.max.x-X.min.x,fe=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Ge=X.min.y,qe=X.isBox3?X.min.z:0;else{const Ft=Math.pow(2,-V);ge=Math.floor(vt.width*Ft),fe=Math.floor(vt.height*Ft),S.isDataArrayTexture?Ee=vt.depth:S.isData3DTexture?Ee=Math.floor(vt.depth*Ft):Ee=1,Ae=0,Ge=0,qe=0}k!==null?(we=k.x,at=k.y,Et=k.z):(we=0,at=0,Et=0);const ot=le.convert(B.format),Bt=le.convert(B.type);let Te;B.isData3DTexture?(N.setTexture3D(B,0),Te=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),Te=L.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const en=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),wi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const Ji=S.isDataArrayTexture||S.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const Ft=_.get(S),ti=_.get(B),It=_.get(Ft.__renderTarget),ni=_.get(ti.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Qi=0;Qi<Ee;Qi++)Ji&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(S).__webglTexture,V,qe+Qi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(B).__webglTexture,he,Et+Qi)),L.blitFramebuffer(Ae,Ge,ge,fe,we,at,ge,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||_.has(S)){const Ft=_.get(S),ti=_.get(B);be.bindFramebuffer(L.READ_FRAMEBUFFER,ip),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,sp);for(let It=0;It<Ee;It++)Ji?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,V,qe+It):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,V),ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ti.__webglTexture,he,Et+It):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ti.__webglTexture,he),V!==0?L.blitFramebuffer(Ae,Ge,ge,fe,we,at,ge,fe,L.COLOR_BUFFER_BIT,L.NEAREST):ut?L.copyTexSubImage3D(Te,he,we,at,Et+It,Ae,Ge,ge,fe):L.copyTexSubImage2D(Te,he,we,at,Ae,Ge,ge,fe);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Te,he,we,at,Et,ge,fe,Ee,ot,Bt,vt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,he,we,at,Et,ge,fe,Ee,ot,vt.data):L.texSubImage3D(Te,he,we,at,Et,ge,fe,Ee,ot,Bt,vt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,we,at,ge,fe,ot,Bt,vt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,we,at,vt.width,vt.height,ot,vt.data):L.texSubImage2D(L.TEXTURE_2D,he,we,at,ge,fe,ot,Bt,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,en),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wi),he===0&&B.generateMipmaps&&L.generateMipmap(Te),be.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&N.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?N.setTextureCube(S,0):S.isData3DTexture?N.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?N.setTexture2DArray(S,0):N.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){P=0,O=0,G=null,be.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}let pt=null,_i=null,id=0,sd=0,rd=0;function Cc(){try{pt=new(window.AudioContext||window.webkitAudioContext),_i=pt.createGain(),_i.gain.value=.6,_i.connect(pt.destination)}catch{pt=null}}function $n(){pt&&pt.state==="suspended"&&pt.resume()}function pr(){return pt!==null&&pt.state==="running"}function Rc(){return pt!==null}function Pc(i){if(!pr())return;const e=pt.currentTime;if(i){if(e-id<.08)return;id=e}else{if(e-sd<.15)return;sd=e}const t=e+.005,n=pt.createOscillator(),s=pt.createGain();n.type="sawtooth",i?(n.frequency.setValueAtTime(800,t),n.frequency.linearRampToValueAtTime(2e3,t+.05),s.gain.setValueAtTime(.35,t),s.gain.linearRampToValueAtTime(0,t+.1)):(n.frequency.setValueAtTime(400,t),n.frequency.linearRampToValueAtTime(200,t+.06),s.gain.setValueAtTime(.1,t),s.gain.linearRampToValueAtTime(0,t+.1)),n.connect(s),s.connect(_i),n.start(t),n.stop(t+.12)}function Mv(i){if(!pr())return;const e=pt.currentTime;if(e-rd<.06)return;rd=e;const t=e+.005,n=Math.min(.2+i*.1,.8),s=Math.floor(pt.sampleRate*n),r=pt.createBuffer(1,s,pt.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/s,1.2);const o=pt.createBufferSource();o.buffer=r;const l=pt.createGain(),c=Math.min(.5,.1+i*.06);l.gain.setValueAtTime(c,t),l.gain.linearRampToValueAtTime(0,t+n);const d=pt.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(600+i*300,t),d.frequency.linearRampToValueAtTime(100,t+n),o.connect(d),d.connect(l),l.connect(_i),o.start(t)}let Tn=null,di=null,ki=null;function Nh(){if(!pr()||Tn)return;const i=pt;ki=i.createGain(),ki.gain.value=.08;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=200,e.connect(ki),ki.connect(_i),Tn=i.createOscillator(),Tn.type="triangle",Tn.frequency.value=55,Tn.connect(e),Tn.start();const t=i.createGain();t.gain.value=.4,t.connect(e),di=i.createOscillator(),di.type="sawtooth",di.frequency.value=110,di.connect(t),di.start()}function yv(i){!Tn||!ki||(Tn.frequency.value=55+i*8,di.frequency.value=110+i*16,ki.gain.value=.06+i*.04)}function Oh(){Tn?.stop(),di?.stop(),Tn=null,di=null,ki=null}let ci=null,zi=null,Wi=null;function Bh(){if(!pr()||ci)return;const i=pt;Wi=i.createGain(),Wi.gain.value=0;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=180,e.connect(Wi),Wi.connect(_i),ci=i.createOscillator(),ci.type="triangle",ci.frequency.value=70,ci.connect(e),ci.start();const t=i.createGain();t.gain.value=.35,t.connect(e),zi=i.createOscillator(),zi.type="sawtooth",zi.frequency.value=140,zi.connect(t),zi.start()}function Sv(i){if(!Wi)return;const e=200,t=Math.sqrt(i),n=Math.max(0,1-t/e);Wi.gain.linearRampToValueAtTime(n*.04,pt.currentTime+.05)}function zh(){ci?.stop(),zi?.stop(),ci=null,zi=null,Wi=null}function Ev(){if(!pr())return;const i=pt.currentTime+.005,e=pt.createOscillator(),t=pt.createGain();e.type="square",e.frequency.setValueAtTime(250,i),e.frequency.linearRampToValueAtTime(50,i+.15),t.gain.setValueAtTime(.2,i),t.gain.linearRampToValueAtTime(0,i+.2),e.connect(t),t.connect(_i),e.start(i),e.stop(i+.2)}const Ic=1e3,Lc=5,Dc=10,bv=50,Tv=1e3,Av={easy:{enemies:16,allies:40,capitalShips:1,killTarget:30,fighterHP:40,subsystemHP:150,enemySpeedMin:35,enemySpeedMax:55,enemyFireRateMin:3,enemyFireRateMax:6,allySpeedMin:60,allySpeedMax:80,allyFireRateMin:.8,allyFireRateMax:2,turretFireRateMin:5,turretFireRateMax:8,turretAccuracy:.08,respawnDelay:7},medium:{enemies:32,allies:32,capitalShips:3,killTarget:60,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:4,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5},hard:{enemies:48,allies:20,capitalShips:4,killTarget:80,fighterHP:60,subsystemHP:250,enemySpeedMin:55,enemySpeedMax:80,enemyFireRateMin:1,enemyFireRateMax:3,allySpeedMin:45,allySpeedMax:60,allyFireRateMin:1.5,allyFireRateMax:4,turretFireRateMin:2,turretFireRateMax:4,turretAccuracy:.25,respawnDelay:3}},wv={easy:{base:500,scoreMultiplier:1},medium:{base:2e3,scoreMultiplier:2},hard:{base:5e3,scoreMultiplier:3}},Cv={enemies:32,allies:32,capitalShips:3,killTarget:100,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:5,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5},et=new Mh;et.background=new ze(659230);const Ye=new sn(75,window.innerWidth/window.innerHeight,1,8e3),un=new Fh({antialias:!1,powerPreference:"high-performance"});un.setSize(window.innerWidth,window.innerHeight);un.setPixelRatio(Math.min(window.devicePixelRatio,1.5));un.shadowMap.enabled=!1;document.body.appendChild(un.domElement);const Rv=new wc(5596808,.9);et.add(Rv);const Gh=new Ac(16777215,2);Gh.position.set(500,300,-200);et.add(Gh);const Hh=new Ac(4482764,.6);Hh.position.set(-300,-100,400);et.add(Hh);const Pv=new Mm(3359846,1118498,.4);et.add(Pv);function Iv(){Ye.aspect=window.innerWidth/window.innerHeight,Ye.updateProjectionMatrix(),un.setSize(window.innerWidth,window.innerHeight)}const ad=200,Lv=7,rt={enemies:32,allies:32,capitalShips:3,killTarget:100,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:5,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5};function Uc(i){Object.assign(rt,i)}const Dv=6,Uv=.3,Fv=550*550,od=80,ba="Ас",Nv=["Д","М","Т","С","А"],To=["Сокол","Орёл","Буран","Молния","Гром","Вихрь","Астра","Искра","Титан","Зенит","Пульсар","Каскад","Рубин","Стрела","Импульс","Атлас"],Ao=["Фантом","Тень","Коршун","Кобра","Скорпион","Хищник","Шакал","Гадюка","Ворон","Клинок","Мрак","Призрак","Ехидна","Химера","Оса","Демон"];let ca=0,ua=0;function Ov(){ca=0,ua=0}function Bv(){const i=To[ca%To.length],e=Math.floor(ca/To.length)+1;return ca++,`${i}-${e}`}function zv(){const i=Ao[ua%Ao.length],e=Math.floor(ua/Ao.length)+1;return ua++,`${i}-${e}`}function Gv(){return{running:!1,phase:1,score:0,lives:5,playerHealth:100,maxHealth:100,speed:80,baseSpeed:80,boostSpeed:160,invulnTimer:0,totalEnemyKills:0,lastAttacker:"",bullets:[],allyBullets:[],enemyBullets:[],allies:[],enemies:[],capitalShips:[],explosions:[],killFeed:[],keys:{},mouseX:0,mouseY:0,mouseActive:!1,shootCooldown:0,messageTimer:0,damageFlash:0,noDamageTimer:0,respawnQueue:[],lockedTarget:null}}const R=Gv();function Hv(i){const e=new Ut,t=i,n=new Yt({color:t,emissive:new ze(t).multiplyScalar(.33),emissiveIntensity:.15}),s=new Yt({color:new ze(t).multiplyScalar(.82),emissive:new ze(t).multiplyScalar(.33),emissiveIntensity:.1}),r=new mt({color:16729088,transparent:!0,opacity:.7}),a=new de(new Mt(80,12,20),n);e.add(a);const o=new de(new Mt(60,2,22),s);o.position.y=7,e.add(o);const l=new de(new Mt(60,2,22),s);l.position.y=-7,e.add(l);const c=new Mt(50,10,2),d=new de(c,s);d.position.set(0,0,12),e.add(d);const h=new de(c,s);h.position.set(0,0,-12),e.add(h);const u=new de(new Mt(70,3,4),s);u.position.y=-8,e.add(u);const m=new Yt({color:t,emissive:new ze(t).multiplyScalar(.5),emissiveIntensity:.2}),g=new de(new $i(8,15,4),m);g.rotation.z=-Math.PI/2,g.position.x=47,e.add(g);const M=new Yt({color:4491519,emissive:2245802,emissiveIntensity:.4,transparent:!0,opacity:.35}),p=new $t(3,8,6,0,Math.PI*2,0,Math.PI/2),f=new de(p,M);f.position.set(10,7.5,0),e.add(f);const v=new de(p,M);v.position.set(-5,7.5,0),e.add(v);const b=new mt({color:16720384}),y=new $t(.6,4,4);for(let O=-30;O<=30;O+=20){const G=new de(y,b);G.position.set(O,7.5,11.5),e.add(G);const W=new de(y,b);W.position.set(O,7.5,-11.5),e.add(W)}const T=new mt({color:16720384}),A=new mt({color:65348}),C=new $t(.4,4,4);for(let O=-30;O<=30;O+=15){const G=new de(C,A);G.position.set(O,0,13.2),e.add(G);const W=new de(C,T);W.position.set(O,0,-13.2),e.add(W)}const x=new mt({color:4482696}),E=new Mt(75,.3,.3),z=new de(E,x);z.position.set(0,0,10.5),e.add(z);const P=new de(E,x);return P.position.set(0,0,-10.5),e.add(P),{group:e,hullMat:n,detailMat:s,glowMat:r}}function Vv(i){const e=new Ut,t=new Yt({color:8952234,emissive:3359829,emissiveIntensity:.15});for(let n=0;n<3;n++){const s=(n-1)*6,r=new de(new Vt(2.5,3,8,6),t);r.rotation.z=Math.PI/2,r.position.set(-44,0,s),e.add(r);const a=new de(new $t(2.5,6,4),i.clone());a.position.set(-48,0,s),e.add(a);const o=new de(new Vt(3.2,2.5,2,6),t);o.rotation.z=Math.PI/2,o.position.set(-39.5,0,s),e.add(o);const l=new de(new Ec(2.8,.3,4,8),t);l.rotation.y=Math.PI/2,l.position.set(-48.2,0,s),e.add(l)}return{group:e,center:new I(-44,0,0),radius:12}}function kv(){const i=new Ut,e=new Yt({color:7833753,emissive:3359829,emissiveIntensity:.15}),t=new de(new Mt(10,8,8),e);t.position.set(25,12,0),i.add(t);const n=new mt({color:3368652,transparent:!0,opacity:.6}),s=new de(new Mt(6,3,9),n);s.position.set(27,13,0),i.add(s);const r=new de(new Mt(12,1,10),e);r.position.set(25,8,0),i.add(r);const a=new Yt({color:10070715,emissive:4478310,emissiveIntensity:.1}),o=new de(new Vt(.15,.15,6,4),a);o.position.set(25,19,0),i.add(o);const l=new de(new $i(1,.8,6),a);return l.position.set(25,22.5,0),l.rotation.x=Math.PI,i.add(l),{group:i,center:new I(25,12,0),radius:8}}function Wv(){const i=new Ut,e=new Yt({color:11176021,emissive:4469538,emissiveIntensity:.15});for(let t=-1;t<=1;t+=2)for(let n=0;n<3;n++){const s=-10+n*15,r=7*t,a=11*t,o=new de(new Vt(1.5,1.5,2,6),e);o.position.set(s,r,a),i.add(o);const l=new Vt(.3,.3,5,4),c=new de(l,e);c.rotation.z=Math.PI/2,c.position.set(s+3,r,a+.5),i.add(c);const d=new de(l,e);d.rotation.z=Math.PI/2,d.position.set(s+3,r,a-.5),i.add(d);const h=new de(new Mt(2,1.5,3),e);h.position.set(s-1.2,r,a),i.add(h)}return{group:i,center:new I(0,0,0),radius:18}}function Xv(){const i=new Ut,e=new Yt({color:10075101,emissive:4482696,emissiveIntensity:.15}),t=new de(new $i(4,2,8),e);t.position.set(-15,14,0),t.rotation.x=Math.PI,i.add(t);const n=new de(new $i(2,1.2,6),e);n.position.set(-12,13,4),n.rotation.x=Math.PI,i.add(n);const s=new de(new Vt(.2,.2,10,4),e);s.position.set(-15,20,0),i.add(s);const r=new de(new Vt(.15,.15,7,4),e);r.position.set(-10,17,3),r.rotation.z=.3,i.add(r);const a=new Vt(.1,.1,4,3);for(let m=0;m<3;m++){const g=new de(a,e);g.position.set(-18+m*2,15,-3),i.add(g)}const o=new mt({color:65416}),l=new de(new $t(.5,4,4),o);l.position.set(-15,25,0),i.add(l);const c=new mt({color:16755234}),d=new $t(.3,4,4),h=new de(d,c);h.position.set(-10,20.5,3),i.add(h);const u=new de(d,o);return u.position.set(-12,13.8,4),i.add(u),{group:i,center:new I(-15,17,0),radius:10}}function qv(){const i=new Ut,e=new Yt({color:7833736,emissive:2241331,emissiveIntensity:.12}),t=new de(new Mt(20,8,16),e);t.position.set(-20,-10,0),i.add(t);const n=new mt({color:2232627,transparent:!0,opacity:.8}),s=new de(new Mt(15,6,14),n);s.position.set(-18,-10,0),i.add(s);const r=new mt({color:16755268}),a=new de(new $t(.8,4,4),r);a.position.set(-15,-10,0),i.add(a);const o=new Yt({color:5596774,emissive:1122850,emissiveIntensity:.1}),l=new de(new Mt(18,.5,20),o);l.position.set(-20,-14.5,0),i.add(l);const c=new mt({color:16755234}),d=new $t(.35,4,4),h=[[-12,-14,9],[-20,-14,9],[-28,-14,9],[-12,-14,-9],[-20,-14,-9],[-28,-14,-9]];for(const[m,g,M]of h){const p=new de(d,c);p.position.set(m,g,M),i.add(p)}const u=new de(new Mt(14,.5,.5),new mt({color:16755268,transparent:!0,opacity:.6}));return u.position.set(-18,-7.5,0),i.add(u),{group:i,center:new I(-20,-10,0),radius:12}}function Vh(i,e){const t=new Ut,{group:n,glowMat:s}=Hv(e??6715272);t.add(n);const a=[{name:"Двигатели",build:()=>Vv(s)},{name:"Мостик",build:()=>kv()},{name:"Турели",build:()=>Wv()},{name:"Связь",build:()=>Xv()},{name:"Ангар",build:()=>qv()}].map(({name:o,build:l})=>{const c=l();return t.add(c.group),{name:o,mesh:c.group,health:ad,maxHealth:ad,center:c.center,radius:c.radius}});for(const o of a)o.radius*=1.5;return t.userData.subsystems=a,t.userData.index=i,t.scale.setScalar(1.5),t}const kh=new Vt(.25,.55,5.5,8);kh.rotateZ(Math.PI/2);const Wh=new $i(.3,2.5,8);Wh.rotateZ(-Math.PI/2);const Yv=new $t(.35,6,4,0,Math.PI*2,0,Math.PI/2),ld=new Mt(3.2,.06,3.8),cd=new Mt(.4,.3,.15),Gl=new Vt(.12,.12,1.8,4);Gl.rotateZ(Math.PI/2);const ud=new Mt(1.5,1.2,.06),Hl=new Vt(.2,.3,1.5,6);Hl.rotateZ(Math.PI/2);const dd=new $t(.25,4,4),hd=new $t(.6,6,6),$v=new Yt({color:4491468,emissive:2245734,emissiveIntensity:.3,transparent:!0,opacity:.5,shininess:100}),Kv=new Yt({color:11189196,emissive:3359829,emissiveIntensity:.15});function jv(i){return new Yt({color:i,emissive:i,emissiveIntensity:.2})}function Zv(i){const e=new ze(i);return new Yt({color:e.clone().multiplyScalar(.7),emissive:e,emissiveIntensity:.1})}function Jv(i){return new mt({color:i,transparent:!0,opacity:.9,blending:vn,depthWrite:!1})}function Qv(i){return new mt({color:i,transparent:!0,opacity:.25,blending:vn,depthWrite:!1})}function Hs(i,e){const t=new Ut,n=jv(i),s=Zv(i),r=Jv(e),a=Qv(e),o=new de(kh,n);t.add(o);const l=new de(Wh,Kv);l.position.x=4,t.add(l);const c=new de(Yv,$v);c.position.set(1.2,.3,0),c.rotation.z=-Math.PI/2,t.add(c);const d=new de(ld,n);d.position.set(-.3,0,2.4),d.rotation.y=-.15,t.add(d);const h=new de(ld,n);h.position.set(-.3,0,-2.4),h.rotation.y=.15,t.add(h);const u=new de(cd,s);u.position.set(-.8,.15,4.1),t.add(u);const m=new de(cd,s);m.position.set(-.8,.15,-4.1),t.add(m);const g=new de(Gl,s);g.position.set(.2,-.25,2),t.add(g);const M=new de(Gl,s);M.position.set(.2,-.25,-2),t.add(M);const p=new de(ud,n);p.position.set(-2.2,.7,0),t.add(p);const f=new de(ud,n);f.position.set(-2.2,-.5,0),f.scale.set(.7,.6,1),t.add(f);const v=new de(Hl,s);v.position.set(-2.5,0,1),t.add(v);const b=new de(Hl,s);b.position.set(-2.5,0,-1),t.add(b);const y=new de(dd,r);y.position.set(-3.3,0,1),y.name="exhaust",t.add(y);const T=new de(dd,r);T.position.set(-3.3,0,-1),t.add(T);const A=new de(hd,a);A.position.set(-3.3,0,1),A.name="glow",t.add(A);const C=new de(hd,a);return C.position.set(-3.3,0,-1),t.add(C),t.scale.setScalar(1.5),t}const Xh=new I(1.65,-.375,3),qh=new I(1.65,-.375,-3),eM=new zs(4,.4),tM=new mt({color:2228224,side:ln});function Yh(i,e){const t=new Ut,n=new de(eM,tM);t.add(n);const s=new de(new zs(4,.4),new mt({color:e,side:ln}));return s.name="healthFill",t.add(s),t.position.y=3,i.add(t),{bar:t,fill:s}}const cr={colors:{playerBody:"#2299dd",playerExhaust:"#00ddff",allyBody:"#33cc77",allyExhaust:"#00ffaa",enemyBody:"#dd3333",enemyExhaust:"#ff3300",capitalHull:"#667788"},counts:{capitalShips:3,allies:32,enemies:32}},$h="space-combat-settings",tt=structuredClone(cr);function nM(){try{const i=localStorage.getItem($h);if(i){const e=JSON.parse(i);if(e.colors)for(const t of Object.keys(cr.colors))typeof e.colors[t]=="string"&&(tt.colors[t]=e.colors[t]);if(e.counts)for(const t of Object.keys(cr.counts))typeof e.counts[t]=="number"&&(tt.counts[t]=e.counts[t])}}catch{}}function Fc(){localStorage.setItem($h,JSON.stringify(tt))}function iM(){Object.assign(tt.colors,cr.colors),Object.assign(tt.counts,cr.counts),Fc()}function Qt(i){return parseInt(i.replace("#",""),16)}nM();const Kh=document.getElementById("hud"),sM=document.getElementById("score"),rM=document.getElementById("lives"),Kr=document.getElementById("health-bar"),aM=document.getElementById("ally-count"),oM=document.getElementById("enemy-count"),lM=document.getElementById("speed-indicator"),Vl=document.getElementById("message"),fd=document.getElementById("mouse-cursor"),wo=document.getElementById("ship-status"),pd=document.getElementById("objective"),md=document.getElementById("kill-feed");let kl="";function cM(){kl=""}function qi(i,e=2){Vl.textContent=i,Vl.style.opacity="1",R.messageTimer=e}function uM(){Vl.style.opacity="0"}function dM(){sM.textContent=String(R.score),rM.textContent=String(R.lives),Kr.style.width=Math.max(0,R.playerHealth/R.maxHealth*100)+"%",R.playerHealth<30?Kr.style.background="linear-gradient(90deg, #f00, #a00)":R.playerHealth<60?Kr.style.background="linear-gradient(90deg, #fa0, #a80)":Kr.style.background="linear-gradient(90deg, #0ff, #088)",aM.textContent=String(R.allies.length),oM.textContent=String(R.enemies.length),lM.textContent=`SPD: ${Math.floor(R.speed)}`;const i=(R.mouseX*.5+.5)*window.innerWidth,e=(R.mouseY*.5+.5)*window.innerHeight;if(fd.style.left=i+"px",fd.style.top=e+"px",R.phase===1){const t=R.capitalShips.filter(s=>s.alive).length,n=tt.counts.capitalShips;pd.textContent=`Цель: уничтожить корабли [${n-t}/${n}]`}else pd.textContent=`Цель: уничтожить истребителей [${R.totalEnemyKills}/${rt.killTarget}]`;if(R.phase===1){let t="<h3>КОРАБЛИ ПРОТИВНИКА</h3>";for(const n of R.capitalShips){if(!n.alive){t+=`<div class="ship-entry"><div class="ship-name" style="color:#666;text-decoration:line-through;">Корабль ${n.mesh.userData.index+1} — УНИЧТОЖЕН</div></div>`;continue}t+=`<div class="ship-entry"><div class="ship-name">Корабль ${n.mesh.userData.index+1}</div><div class="subsystems">`;for(let s=0;s<n.subsystems.length;s++){const r=n.subsystems[s],a=r.health>0,o=Math.ceil(r.health/r.maxHealth*100);t+=`<div class="subsys-dot ${a?"alive":"dead"}" title="${r.name}: ${a?o+"%":"уничтожена"}">${Nv[s]}</div>`}t+="</div></div>"}t!==kl&&(kl=t,wo.innerHTML=t),wo.style.display="block",md.style.top=""}else wo.style.display="none",md.style.top="20px"}function Nc(){Kh.style.display="block"}function mr(){Kh.style.display="none"}const jh=document.getElementById("kill-feed");function Zh(i,e,t,n){R.killFeed.push({killer:i,victim:e,killerTeam:t,victimTeam:n,timer:Dv}),R.killFeed.length>Lv&&R.killFeed.shift(),Jh()}function Jh(){let i="";for(const e of R.killFeed){const t="kf-killer-"+e.killerTeam,n="kf-victim-"+e.victimTeam,s=Math.min(1,e.timer/1.5);i+=`<div class="kf-entry" style="opacity:${s}"><span class="${t}">${e.killer}</span><span class="kf-arrow"> ► </span><span class="${n}">${e.victim}</span></div>`}jh.innerHTML=i}function hM(i){let e=!1;for(let t=R.killFeed.length-1;t>=0;t--)R.killFeed[t].timer-=i,R.killFeed[t].timer<=0&&(R.killFeed.splice(t,1),e=!0);e&&Jh()}function fM(){jh.innerHTML=""}const pM=new mt({color:1118481,transparent:!0,opacity:.4}),mM=new $t(1,4,3),gd=[16729088,16737792,16746496,16755200,52479,4473924],Qh=[];function gM(){const i=Qh.pop();return i?(i.visible=!0,i.material.opacity=1,i):new de(mM,new mt({transparent:!0,opacity:1}))}function _d(i){i.visible=!1,et.remove(i),Qh.push(i)}function fi(i,e=1){Mv(e);const t=3+Math.floor(Math.random()*3),n=[];for(let s=0;s<t;s++){const r=(.5+Math.random()*1.5)*e,a=gM();a.material.color.setHex(gd[Math.floor(Math.random()*gd.length)]),a.position.copy(i),a.scale.setScalar(r),et.add(a);const o=new I((Math.random()-.5)*60*e,(Math.random()-.5)*60*e,(Math.random()-.5)*60*e);n.push({mesh:a,velocity:o,life:.4+Math.random()*.8})}R.explosions.push({particles:n,timer:1.2})}function _M(i){for(let e=R.explosions.length-1;e>=0;e--){const t=R.explosions[e];t.timer-=i;for(let n=t.particles.length-1;n>=0;n--){const s=t.particles[n];s.mesh.position.addScaledVector(s.velocity,i),s.velocity.multiplyScalar(1-2*i),s.life-=i,s.mesh.material.opacity=Math.max(0,s.life),s.mesh.scale.multiplyScalar(1-.5*i),s.life<=0&&(_d(s.mesh),t.particles.splice(n,1))}if(t.timer<=0){for(const n of t.particles)_d(n.mesh);R.explosions.splice(e,1)}}}const ef=new Vt(.15,.15,5,4);ef.rotateZ(Math.PI/2);const tf=new Vt(.18,.18,5,4);tf.rotateZ(Math.PI/2);const xM=new mt({color:65484,blending:vn,transparent:!0}),vM=new mt({color:4521864,blending:vn,transparent:!0}),MM=new mt({color:16724736,blending:vn,transparent:!0}),yM=new I(1,0,0),xd=new On,Co=new I;function Ta(i,e,t,n){const s=t==="enemy",r=t==="player",a=s?tf:ef,o=r?xM:s?MM:vM,l=new de(a,o);l.position.copy(i),Co.copy(e).normalize(),xd.setFromUnitVectors(yM,Co),l.quaternion.copy(xd),et.add(l);const c=s?250:400,d={mesh:l,velocity:new I().copy(Co).multiplyScalar(c),life:2,team:t,damage:r?15:10,shooterName:n||""};return t==="player"?R.bullets.push(d):t==="ally"?R.allyBullets.push(d):R.enemyBullets.push(d),d}function SM(){const i=R.bullets.length+R.allyBullets.length+R.enemyBullets.length;if(i>200){const e=[R.bullets,R.allyBullets,R.enemyBullets];e.sort((r,a)=>a.length-r.length);const t=e[0],n=i-160,s=Math.min(n,t.length);for(let r=0;r<s;r++)et.remove(t[r].mesh);t.splice(0,s)}}const xs=new I,vd=new I,EM=300*300;let Ro=!1;function bM(i,e,t,n,s){xs.copy(e),xs.x+=(Math.random()-.5)*.05,xs.y+=(Math.random()-.5)*.05,xs.z+=(Math.random()-.5)*.05,xs.normalize(),Ro=!Ro;const r=Ro?Xh:qh;vd.copy(r).applyQuaternion(i.quaternion).add(i.position),Ta(vd,xs,t,n),i.position.distanceToSquared(s.position)<EM&&Pc(!1)}const De=new Ut,Xt={pitch:0,yaw:0,roll:0},jr=new I,Md=new I,yd=new I,Po=new On,Sd=new I,Io=new I,Zr=new I;function TM(i){const s=R.mouseX,r=R.mouseY,a=.05,o=T=>{const A=Math.abs(T);return A<a?0:Math.sign(T)*((A-a)/(1-a))},l=o(s);let d=-o(r),h=-l,u=-l*.5;R.keys.KeyA&&(u-=2),R.keys.KeyD&&(u+=2),R.keys.KeyW||R.keys.ShiftLeft||R.keys.ShiftRight?R.speed=Math.min(R.speed+120*i,R.boostSpeed):R.keys.KeyS?R.speed=Math.max(R.speed-100*i,20):R.speed+=(R.baseSpeed-R.speed)*2*i,Xt.pitch+=d*2.2*i,Xt.roll+=u*3*i,Xt.yaw+=h*1.5*i,Xt.pitch*=1-1.5*i,Xt.roll*=1-2*i,Xt.yaw*=1-1.5*i,De.quaternion.multiply(Po.setFromAxisAngle(jr.set(0,0,1),Xt.pitch*i)),De.quaternion.multiply(Po.setFromAxisAngle(jr.set(0,1,0),Xt.yaw*i)),De.quaternion.multiply(Po.setFromAxisAngle(jr.set(1,0,0),Xt.roll*i)),De.quaternion.normalize();const m=jr.set(1,0,0).applyQuaternion(De.quaternion);De.position.addScaledVector(m,R.speed*i);const g=R.speed/R.boostSpeed,M=De.getObjectByName("exhaust");M&&(M.material.opacity=.4+g*.6,M.scale.setScalar(.8+g*.6));const p=De.getObjectByName("glow");p&&(p.material.opacity=.1+g*.3,p.scale.setScalar(.7+g*.8)),yv(g);const f=Md.set(-10.5,3.75,0).applyQuaternion(De.quaternion),v=yd.copy(De.position).add(f);Ye.position.lerp(v,5*i);const b=Md.copy(De.position).add(m.multiplyScalar(20)),y=yd.set(0,1,0).applyQuaternion(De.quaternion);Ye.up.lerp(y,3*i).normalize(),Ye.lookAt(b),R.invulnTimer>0?(R.invulnTimer-=i,De.visible=Math.floor(R.invulnTimer*10)%2===0):De.visible=!0,R.noDamageTimer+=i,R.noDamageTimer>=5&&R.playerHealth<R.maxHealth&&(R.playerHealth=Math.min(R.maxHealth,R.playerHealth+R.maxHealth*.02*i)),R.shootCooldown-=i,(R.keys.Space||R.keys.MouseLeft)&&R.shootCooldown<=0&&(R.shootCooldown=.1,Sd.set(R.mouseX,-R.mouseY,.5).unproject(Ye),Io.copy(Sd).sub(Ye.position).normalize(),Zr.copy(Xh).applyQuaternion(De.quaternion).add(De.position),Ta(Zr,Io,"player",ba),Zr.copy(qh).applyQuaternion(De.quaternion).add(De.position),Ta(Zr,Io,"player",ba),Pc(!0))}function AM(){if(fi(De.position.clone(),6),Zh(R.lastAttacker||"?",ba,"enemy","player"),R.lives--,R.lives<=0){R.running=!1,document.getElementById("final-score").textContent=`Счёт: ${R.score}`,document.getElementById("game-over").style.display="flex";return}qi(`СБИТ! Жизней: ${R.lives}`,2),De.position.set(0,0,0),De.quaternion.identity(),Xt.pitch=0,Xt.yaw=0,Xt.roll=0,R.playerHealth=R.maxHealth,R.speed=R.baseSpeed,R.invulnTimer=3,R.damageFlash=0,R.lastAttacker="",Ye.position.set(-10.5,3.75,0),Ye.lookAt(De.position)}const wM=document.getElementById("target-markers"),pi=[],Je=new I,nf=800*800,sf=1500*1500;function Aa(i){if(i<pi.length)return pi[i].style.display="block",pi[i];const e=document.createElement("div");return e.className="target-marker",e.innerHTML='<div class="diamond"></div><div class="marker-dist"></div><div class="marker-label"></div>',wM.appendChild(e),pi.push(e),e}function Ed(i,e,t,n){for(const s of R.capitalShips){if(!s.alive)continue;const r=n.position.distanceToSquared(s.mesh.position);if(!(r>sf))if(r>Fv){Je.copy(s.mesh.position).project(Ye);const a=(Je.x*.5+.5)*e,o=(-Je.y*.5+.5)*t;if(Je.z>=1||a<-20||a>e+20||o<-20||o>t+20)continue;const l=Aa(i++);l.className="target-marker capital",l.style.left=a+"px",l.style.top=o+"px";const c=Math.sqrt(r);l.children[1].textContent=Math.floor(c)+"m",l.children[2].textContent=`Корабль-${s.mesh.userData.index+1}`,l.children[0].style.width="28px",l.children[0].style.height="28px"}else for(const a of s.subsystems){if(a.health<=0)continue;Je.copy(a.center).applyMatrix4(s.mesh.matrixWorld);const o=n.position.distanceTo(Je);Je.project(Ye);const l=(Je.x*.5+.5)*e,c=(-Je.y*.5+.5)*t;if(Je.z>=1||l<-20||l>e+20||c<-20||c>t+20)continue;const d=Aa(i++);d.className="target-marker capital",d.style.left=l+"px",d.style.top=c+"px",d.children[1].textContent=Math.floor(o)+"m",d.children[2].textContent=a.name,d.children[0].style.width="21px",d.children[0].style.height="21px"}}return i}function CM(i,e,t,n,s){let r,a;i.kind==="fighter"?(r=s.position.distanceTo(i.fighter.mesh.position),Je.copy(i.fighter.mesh.position).project(Ye),a=i.fighter.name):(Je.copy(i.subsystem.center).applyMatrix4(i.ship.mesh.matrixWorld),r=s.position.distanceTo(Je),Je.project(Ye),a=i.subsystem.name);let o=(Je.x*.5+.5)*t,l=(-Je.y*.5+.5)*n;const c=Je.z;if(c>=1||o<0||o>t||l<0||l>n){const m=t/2,g=n/2;let M=o-m,p=l-g;c>=1&&(M=-M,p=-p);const f=40,v=Math.abs(M)>.001?(t/2-f)/Math.abs(M):1/0,b=Math.abs(p)>.001?(n/2-f)/Math.abs(p):1/0,y=Math.min(v,b,1);o=m+M*y,l=g+p*y}const d=Aa(e++),h=i.kind==="subsystem";d.className="target-marker target-locked"+(h?" capital":""),d.style.left=o+"px",d.style.top=l+"px",d.children[1].textContent=Math.floor(r)+"m",d.children[2].textContent=a;const u=h?1:Math.max(.6,Math.min(1.5,300/r));return d.children[0].style.width=21*u+"px",d.children[0].style.height=21*u+"px",e}function RM(i){const e=window.innerWidth,t=window.innerHeight,n=(R.mouseX*.5+.5)*e,s=(R.mouseY*.5+.5)*t;let r=0;if(R.lockedTarget){const l=R.lockedTarget;l.kind==="fighter"?(l.fighter.health<=0||!R.enemies.includes(l.fighter))&&(R.lockedTarget=null):(l.subsystem.health<=0||!l.ship.alive)&&(R.lockedTarget=null)}if(R.lockedTarget){r=Ed(r,e,t,i),r=CM(R.lockedTarget,r,e,t,i);for(let l=r;l<pi.length;l++)pi[l].style.display="none";return}const a=Math.sqrt(e*e+t*t),o=(Uv*a)**2;for(const l of R.enemies){const c=i.position.distanceToSquared(l.mesh.position);if(c>nf)continue;Je.copy(l.mesh.position).project(Ye);const d=(Je.x*.5+.5)*e,h=(-Je.y*.5+.5)*t;if(Je.z>=1||d<-20||d>e+20||h<-20||h>t+20)continue;const u=d-n,m=h-s;if(u*u+m*m>o)continue;const g=Aa(r++);g.className="target-marker",g.style.left=d+"px",g.style.top=h+"px";const M=Math.sqrt(c);g.children[1].textContent=Math.floor(M)+"m",g.children[2].textContent=l.name;const p=Math.max(.6,Math.min(1.5,300/M));g.children[0].style.width=21*p+"px",g.children[0].style.height=21*p+"px"}r=Ed(r,e,t,i);for(let l=r;l<pi.length;l++)pi[l].style.display="none"}function rf(i){if(R.lockedTarget){R.lockedTarget=null;return}const e=window.innerWidth,t=window.innerHeight,n=(R.mouseX*.5+.5)*e,s=(R.mouseY*.5+.5)*t,r=od*od;let a=null,o=1/0;for(const l of R.enemies){if(i.position.distanceToSquared(l.mesh.position)>nf||(Je.copy(l.mesh.position).project(Ye),Je.z>=1))continue;const c=(Je.x*.5+.5)*e,d=(-Je.y*.5+.5)*t,h=(c-n)**2+(d-s)**2;h<r&&h<o&&(o=h,a={kind:"fighter",fighter:l})}for(const l of R.capitalShips)if(l.alive&&!(i.position.distanceToSquared(l.mesh.position)>sf))for(const c of l.subsystems){if(c.health<=0||(Je.copy(c.center).applyMatrix4(l.mesh.matrixWorld),Je.project(Ye),Je.z>=1))continue;const d=(Je.x*.5+.5)*e,h=(-Je.y*.5+.5)*t,u=(d-n)**2+(h-s)**2;u<r&&u<o&&(o=u,a={kind:"subsystem",subsystem:c,ship:l})}if(!a){let l=1/0;for(const c of R.enemies){const d=i.position.distanceToSquared(c.mesh.position);d<l&&(l=d,a={kind:"fighter",fighter:c})}for(const c of R.capitalShips)if(c.alive)for(const d of c.subsystems){if(d.health<=0)continue;Je.copy(d.center).applyMatrix4(c.mesh.matrixWorld);const h=i.position.distanceToSquared(Je);h<l&&(l=h,a={kind:"subsystem",subsystem:d,ship:c})}}R.lockedTarget=a}let Ui=null;function af(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function PM(i){if(!af())return;const e=document.getElementById("mouse-cursor");e&&(e.style.display="none");const t=document.getElementById("touch-controls");t.innerHTML="";const n=document.createElement("div");n.className="touch-aim-zone",t.appendChild(n);let s=null,r=0,a=0;const o=150;n.addEventListener("touchstart",T=>{T.preventDefault(),$n();for(const A of Array.from(T.changedTouches))s===null&&(s=A.identifier,r=A.clientX,a=A.clientY,Ui!==null&&(clearInterval(Ui),Ui=null))},{passive:!1}),n.addEventListener("touchmove",T=>{T.preventDefault();for(const A of Array.from(T.changedTouches))if(A.identifier===s){const C=A.clientX-r,x=A.clientY-a;R.mouseX=bd(C/o,-1,1),R.mouseY=bd(x/o,-1,1),R.mouseActive=!0}},{passive:!1});const l=T=>{for(const A of Array.from(T.changedTouches))A.identifier===s&&(s=null,Ui=window.setInterval(()=>{R.mouseX*=.8,R.mouseY*=.8,Math.abs(R.mouseX)<.01&&Math.abs(R.mouseY)<.01&&(R.mouseX=0,R.mouseY=0,Ui!==null&&(clearInterval(Ui),Ui=null))},16))};n.addEventListener("touchend",l),n.addEventListener("touchcancel",l);const c=document.createElement("div");c.className="touch-joystick";const d=document.createElement("div");d.className="touch-joystick-knob",c.appendChild(d),t.appendChild(c);let h=null,u=0,m=0;const g=40,M=.3;c.addEventListener("touchstart",T=>{T.preventDefault(),$n();for(const A of Array.from(T.changedTouches))if(h===null){h=A.identifier;const C=c.getBoundingClientRect();u=C.left+C.width/2,m=C.top+C.height/2}},{passive:!1}),c.addEventListener("touchmove",T=>{T.preventDefault();for(const A of Array.from(T.changedTouches))if(A.identifier===h){let C=A.clientX-u,x=A.clientY-m;const E=Math.sqrt(C*C+x*x);E>g&&(C=C/E*g,x=x/E*g),d.style.transform=`translate(${C-25}px, ${x-25}px)`;const z=C/g,P=x/g;R.keys.KeyA=z<-M,R.keys.KeyD=z>M,R.keys.KeyW=P<-M,R.keys.KeyS=P>M}},{passive:!1});const p=T=>{for(const A of Array.from(T.changedTouches))A.identifier===h&&(h=null,d.style.transform="translate(-25px, -25px)",R.keys.KeyA=!1,R.keys.KeyD=!1,R.keys.KeyW=!1,R.keys.KeyS=!1)};c.addEventListener("touchend",p),c.addEventListener("touchcancel",p);const f=document.createElement("div");f.className="touch-fire-btn",f.textContent="FIRE",t.appendChild(f),f.addEventListener("touchstart",T=>{T.preventDefault(),$n(),R.keys.MouseLeft=!0,f.classList.add("active")},{passive:!1});const v=T=>{T.preventDefault(),R.keys.MouseLeft=!1,f.classList.remove("active")};f.addEventListener("touchend",v,{passive:!1}),f.addEventListener("touchcancel",v,{passive:!1});const b=document.createElement("div");b.className="touch-lock-btn",b.textContent="LOCK",t.appendChild(b),b.addEventListener("touchstart",T=>{T.preventDefault(),$n(),rf(De),b.classList.add("active"),setTimeout(()=>b.classList.remove("active"),200)},{passive:!1});const y=document.createElement("div");y.className="touch-pause-btn",y.textContent="❚❚",t.appendChild(y),y.addEventListener("touchstart",T=>{T.preventDefault(),i()},{passive:!1})}function bd(i,e,t){return i<e?e:i>t?t:i}function IM(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function LM(i){return Math.sqrt(-2*Math.log(i()||1e-4))*Math.cos(2*Math.PI*i())}const Lo=["Альтаир","Денеб","Ригель","Бетельгейзе","Вега","Антарес","Процион","Капелла","Альдебаран","Спика","Поллукс","Фомальгаут","Мимоза","Регул","Адара","Кастор","Гакрукс","Шаула","Беллатрикс","Эльнат","Мирфак","Алнилам","Алиот","Дубхе","Мерак","Канопус","Ахернар","Хадар","Акрукс","Атрия","Сабик","Менкалинан","Тубан","Арктур","Нова","Кассиопея","Андромеда","Орион","Нептунус","Ригель Кент","Денебола","Альгениб","Альферац","Мицар","Алькор","Расальхаг","Сухаил","Авиор","Наос","Альсуд","Маркаб","Шедар","Мирах","Алмаак","Хамаль","Шератан","Мирцам","Везен","Арнеб","Нихаль","Курса","Ментака","Альнитак","Саиф","Пхад","Мегрец","Алиот","Бенетнаш","Кор Кароли","Гемма","Зубен","Акраб","Антарес","Шаула","Лезат","Кархи","Сариф","Нунки","Каус","Альбирео","Тараз","Маркаб","Садалмелик","Садалсууд","Скат","Фомальгаут","Дифда","Менкар","Альголь","Мирфак","Капелла","Тейат","Альхена","Муфрид","Сегин","Рухба","Дженах","Минкар","Гиена","Завиява","Порима","Виндемиатрикс","Хезе","Зубен Хакраби","Сирра","Кейд","Кафф","Тених","Данб","Альрами","Садира","Кабиль","Тират","Захиль","Мусик","Альраид","Садатони","Боталин","Завра","Кремон","Тилон","Феркад","Элтамин","Растабан","Граффиас","Чара","Ла Суперба","Селаено","Электра","Майя","Тайгета","Стеропа","Меропа","Альциона","Атлас","Плейона","Хиадес","Никон","Систри","Гирлан","Кемаш","Тирок","Навия","Бестия","Ферион","Крестон","Халлия","Зефирус","Иридан","Латан","Норикум","Авента","Керн","Люмир","Сольвет","Армис","Грантис","Ксеон","Вирай","Тобрис","Кандор","Эверон","Лорин","Пилат","Мирена","Сафира","Руттен","Гальвер","Истрон","Найлус","Рошан","Крибель","Остра","Тамир","Зирак","Морвин","Сельва","Гриних","Бальтор","Кресто"],Td=["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ"];function DM(i,e){if(i<Lo.length)return Lo[i];const t=(i-Lo.length)%Td.length,n=Math.floor(e()*900+100);return`${Td[t]}-${n}`}const UM=42,Ad=1e3,wd=5,Cd=2*Math.PI,Do=15,Uo=75,Rd=3.5;function FM(){const i=IM(UM),e=()=>LM(i),t=[],n=[];let s=0;for(;t.length<Ad&&s<Ad*10;){s++;let h,u,m;if(i()<.85){const y=Math.floor(i()*wd),T=.03+i()*.97,A=T*4.2+y*Cd/wd,C=Math.sin(T*12+y)*.3+Math.sin(T*5.7+y*3)*.2,x=T*Uo,E=(8+x*.15)*(.3+i()*.7),z=A+C+Math.PI/2,P=e()*E*.4;h=x*Math.cos(A+C)+P*Math.cos(z)+e()*2.5,u=x*Math.sin(A+C)+P*Math.sin(z)+e()*2.5,m=e()*1*(1-T*.5)}else{const y=i()*Cd,T=Do+i()*(Uo-Do);h=T*Math.cos(y)+e()*5,u=T*Math.sin(y)+e()*5,m=e()*1.2}const g=Math.sqrt(h*h+u*u);if(g<Do||g>Uo)continue;let M=!1;for(let y=0;y<n.length;y++){const T=h-n[y][0],A=m-n[y][1],C=u-n[y][2];if(T*T+A*A+C*C<Rd*Rd){M=!0;break}}if(M)continue;const p=[Math.round(h*100)/100,Math.round(m*100)/100,Math.round(u*100)/100],f=t.length,v=f===0?"solaris":`sys-${f}`,b=f===0?"Солярис":DM(f,i);t.push({id:v,name:b,position:p,connections:[]}),n.push(p)}const r=5,a=[];for(let h=0;h<t.length;h++){const u=[];for(let m=0;m<t.length;m++){if(h===m)continue;const g=n[h][0]-n[m][0],M=n[h][1]-n[m][1],p=n[h][2]-n[m][2];u.push({idx:m,dist:g*g+M*M+p*p})}u.sort((m,g)=>m.dist-g.dist),a[h]=u.slice(0,r).map(m=>m.idx)}const o=new Set;for(let h=0;h<t.length;h++){const u=a[h],m=2+Math.floor(i()*3);for(let g=0;g<Math.min(m,u.length);g++){const M=u[g],p=h<M?`${h}-${M}`:`${M}-${h}`;o.has(p)||(o.add(p),t[h].connections.push(t[M].id),t[M].connections.push(t[h].id))}}const l=new Set,c=[0];l.add(0);const d=new Map;for(let h=0;h<t.length;h++)d.set(t[h].id,h);for(;c.length>0;){const h=c.shift();for(const u of t[h].connections){const m=d.get(u);l.has(m)||(l.add(m),c.push(m))}}if(l.size<t.length)for(let h=0;h<t.length;h++){if(l.has(h))continue;let u=1/0,m=0;for(const p of l){const f=n[h][0]-n[p][0],v=n[h][1]-n[p][1],b=n[h][2]-n[p][2],y=f*f+v*v+b*b;y<u&&(u=y,m=p)}const g=h<m?`${h}-${m}`:`${m}-${h}`;o.has(g)||(o.add(g),t[h].connections.push(t[m].id),t[m].connections.push(t[h].id));const M=[h];for(l.add(h);M.length>0;){const p=M.shift();for(const f of t[p].connections){const v=d.get(f);l.has(v)||(l.add(v),M.push(v))}}}return t}const wa=FM(),of=new Map;for(const i of wa)of.set(i.id,i);function Kt(i){return of.get(i)}function NM(i,e){const t=Kt(i),n=Kt(e),s=t.position[0]-n.position[0],r=t.position[1]-n.position[1],a=t.position[2]-n.position[2];return Math.sqrt(s*s+r*r+a*a)<25?1:2}const Pd=["Патрулирование","Перехват","Разведка боем"],Id=["Оборона станции","Прорыв обороны","Конвой"],Ld=["Штурм флота","Тотальное наступление","Зачистка сектора"],Dd=["Устранить угрозу в секторе","Перехватить вражеские истребители","Провести разведку и уничтожить патруль"],Ud=["Защитить станцию от атаки","Прорвать вражескую блокаду","Обеспечить безопасность конвоя"],Fd=["Уничтожить вражеский флот","Полномасштабное наступление на врага","Очистить сектор от всех угроз"];function OM(i,e){const t=new Set([i]);let n=[i];for(let s=0;s<e;s++){const r=[];for(const a of n){const o=Kt(a);for(const l of o.connections)t.has(l)||(t.add(l),r.push(l))}n=r}return t.delete(i),Array.from(t)}function BM(i){const t=OM(i,4).sort(()=>Math.random()-.5),n=s=>t[s%t.length].length>0?t[s%t.length]:wa[1].id;return[{difficulty:"easy",title:Pd[Math.floor(Math.random()*Pd.length)],description:Dd[Math.floor(Math.random()*Dd.length)],targetSystemId:n(0)},{difficulty:"medium",title:Id[Math.floor(Math.random()*Id.length)],description:Ud[Math.floor(Math.random()*Ud.length)],targetSystemId:n(1)},{difficulty:"hard",title:Ld[Math.floor(Math.random()*Ld.length)],description:Fd[Math.floor(Math.random()*Fd.length)],targetSystemId:n(2)}]}let Ca=null;function zM(){const e=new bt,t=new Float32Array(2500*3),n=new Float32Array(2500*3);for(let r=0;r<2500;r++){const a=2500+Math.random()*4500,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[r*3]=a*Math.sin(l)*Math.cos(o),t[r*3+1]=a*Math.sin(l)*Math.sin(o),t[r*3+2]=a*Math.cos(l);const c=.3+Math.random()*.2,d=Math.random();n[r*3]=c*(d>.7?1:.85),n[r*3+1]=c*(d>.3?1:.85),n[r*3+2]=c}e.setAttribute("position",new Dt(t,3)),e.setAttribute("color",new Dt(n,3));const s=new Ea({size:1.5,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.85});Ca=new Nl(e,s),et.add(Ca)}function lf(i){Ca&&(Ca.visible=i)}const cf="space-combat-campaign";let Ki="menu",ji=!1;const ae={money:Ic,fuel:Lc,maxFuel:Dc,currentSystemId:"solaris",activeContract:null,completedContracts:0,lastCombatScore:0};let Wl=[];function Zi(i){Ki=i}function GM(i){ji=i}function HM(){ji=!0,ae.money=Ic,ae.fuel=Lc,ae.maxFuel=Dc,ae.currentSystemId="solaris",ae.activeContract=null,ae.completedContracts=0,ae.lastCombatScore=0,gr(),Ti()}function gr(){const i=BM(ae.currentSystemId);let e=ae.completedContracts;Wl=i.map(t=>{const n=wv[t.difficulty];return e++,{id:`contract-${e}`,difficulty:t.difficulty,title:t.title,description:t.description,targetSystemId:t.targetSystemId,reward:n.base,scoreMultiplier:n.scoreMultiplier}})}function VM(i){ae.activeContract=i,Ti()}function kM(i,e){if(ae.lastCombatScore=e,!ae.activeContract)return 0;const t=ae.activeContract;let n;return i?n=t.reward+Math.floor(e*t.scoreMultiplier/100):n=Math.floor(t.reward*.3),ae.money+=n,ae.activeContract=null,ae.completedContracts++,Ti(),n}function WM(){ae.activeContract=null;const i=Math.min(Tv,ae.money);return ae.money-=i,Ti(),i}function XM(i){const e=ae.maxFuel-ae.fuel,t=Math.min(i,e),n=t*50;return t<=0||ae.money<n?!1:(ae.money-=n,ae.fuel+=t,Ti(),!0)}function qM(i){return ae.fuel<i?!1:(ae.fuel-=i,Ti(),!0)}function YM(i){ae.currentSystemId=i,Ti()}function $M(){return ae.fuel===0&&ae.money<50}function KM(){ae.fuel=1,Ti()}function Ti(){try{localStorage.setItem(cf,JSON.stringify({money:ae.money,fuel:ae.fuel,maxFuel:ae.maxFuel,currentSystemId:ae.currentSystemId,activeContract:ae.activeContract,completedContracts:ae.completedContracts,lastCombatScore:ae.lastCombatScore}))}catch{}}function jM(){try{const i=localStorage.getItem(cf);if(!i)return!1;const e=JSON.parse(i);return ae.money=e.money??Ic,ae.fuel=e.fuel??Lc,ae.maxFuel=e.maxFuel??Dc,ae.currentSystemId=e.currentSystemId??"solaris",ae.activeContract=e.activeContract??null,ae.completedContracts=e.completedContracts??0,ae.lastCombatScore=e.lastCombatScore??0,Kt(ae.currentSystemId)||(ae.currentSystemId="solaris"),!0}catch{return!1}}const Nt=new Ut;Nt.visible=!1;const dn=new Map,sr=new Map,da=[];let Dn=null,Zt=null,qt=null;const vs={time:0},Js=new I;let Xl=null,ql=null,Yl=null;const Ra=[],ZM=.34,JM=.13,$l=[];let wn=null;const ha=new Map,QM=6,uf=1,df=.5,ey=3,Xi=new Set,nr=new Map;function hf(){Xi.clear();const i=[[ae.currentSystemId,0]];for(Xi.add(ae.currentSystemId);i.length>0;){const[e,t]=i.shift();if(t>=QM)continue;const n=Kt(e);if(n)for(const s of n.connections)Xi.has(s)||(Xi.add(s),i.push([s,t+1]))}}function ty(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=128/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,255,255,0.6)"),s.addColorStop(.4,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,128,128);const r=new vc(e);return r.generateMipmaps=!1,r.minFilter=Ct,r}let Fo=null;function ny(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=64/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.5,"rgba(255,255,255,0.8)"),s.addColorStop(.8,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,64,64);const r=new vc(e);return r.generateMipmaps=!1,r.minFilter=Ct,r}let Jr=null;const Nd=[6737151,16755268,8978278,16737928,16768324,11176191,4521932,16746564],No=[[.55,.65,1],[.7,.8,1],[.95,.92,1],[1,.95,.8],[1,.85,.55],[1,.7,.4],[1,.5,.3],[1,.6,.5],[.8,.75,1],[.9,.95,.7]];function iy(){const i=new Ut,e=5,t=1e6,n=55e4,s=n+18e4,r=s+15e4,a=r+8e4,o=new Float32Array(t*3),l=new Float32Array(t*3);let c=0;const d=2*Math.PI;function h(){return Math.sqrt(-2*Math.log(Math.random()||1e-4))*Math.cos(d*Math.random())}const u=120,m=new Float32Array(u),g=new Float32Array(u),M=new Float32Array(u),p=new Uint8Array(u);for(let D=0;D<u;D++){const F=Math.random()*d,j=5+Math.random()*80;m[D]=j*Math.cos(F)+h()*5,g[D]=j*Math.sin(F)+h()*5,M[D]=5+Math.random()*15,p[D]=Math.floor(Math.random()*No.length)}function f(D,F,j){let Z=1/0,ie=-1,pe=1/0,ce=-1;for(let Q=0;Q<u;Q++){const ee=D-m[Q],Pe=F-g[Q],xe=ee*ee+Pe*Pe;xe<Z?(pe=Z,ce=ie,Z=xe,ie=Q):xe<pe&&(pe=xe,ce=Q)}const Fe=Math.sqrt(Z),Le=Math.max(0,1-Fe/(M[ie]*1.5));if(Le>.05&&ie>=0){const Q=No[p[ie]];let ee=Q[0],Pe=Q[1],xe=Q[2];if(ce>=0&&Le<.5){const xt=No[p[ce]],Ve=Le*2;ee=ee*Ve+xt[0]*(1-Ve),Pe=Pe*Ve+xt[1]*(1-Ve),xe=xe*Ve+xt[2]*(1-Ve)}const Ce=.9+Math.random()*.2;return[ee*j*Ce,Pe*j*Ce,xe*j*Ce]}const Ie=Math.random(),q=j*(.9+Math.random()*.2);return Ie<.3?[q,q*.7,q*.4]:Ie<.55?[q,q*.88,q*.6]:Ie<.75?[q*.9,q*.92,q]:Ie<.9?[q*.7,q*.8,q]:[q,q*.95,q*.85]}const v=80,b=new Float32Array(v),y=new Float32Array(v),T=new Float32Array(v);for(let D=0;D<v;D++){const F=Math.random()*d,j=3+Math.random()*75;b[D]=j*Math.cos(F),y[D]=j*Math.sin(F),T[D]=2+Math.random()*6}function A(D,F){for(let j=0;j<v;j++){const Z=D-b[j],ie=F-y[j],pe=Z*Z+ie*ie,ce=T[j]*T[j]*4;if(pe<ce){const Fe=.3+Math.random()*.4;return[D-Z*Fe+h()*T[j]*.3,F-ie*Fe+h()*T[j]*.3]}}return null}for(let D=0;D<t;D++){let F,j,Z,ie;if(D<n){const Le=D%e,Ie=.03+Math.random()*.97,q=Ie*4.2+Le*d/e,Q=Math.sin(Ie*12+Le)*.3+Math.sin(Ie*5.7+Le*3)*.2+Math.sin(Ie*23+Le*7)*.1,ee=Ie*88,Pe=(10+ee*.18)*(.4+Math.random()*.6),xe=q+Q+Math.PI/2,Ce=h()*Pe*.45;F=ee*Math.cos(q+Q)+Ce*Math.cos(xe)+h()*3.5,j=ee*Math.sin(q+Q)+Ce*Math.sin(xe)+h()*3.5,Z=h()*1.5*(1-Ie*.5),ie=.09+Math.random()*.22}else if(D<s){const Le=Math.random()*d,Ie=Math.abs(h())*12,q=.45,Q=1.8,ee=Ie*Math.cos(Le),Pe=Ie*Math.sin(Le)/Q,xe=Math.cos(q),Ce=Math.sin(q);F=ee*xe-Pe*Ce+h()*2,j=ee*Ce+Pe*xe+h()*2,Z=h()*1.5*Math.max(.15,1-Ie/20),ie=.15+Math.random()*.26}else if(D<r){const Le=Math.random()*d,Ie=3+Math.random()*85;F=Ie*Math.cos(Le)+h()*6,j=Ie*Math.sin(Le)+h()*6,Z=h()*2*(1-Ie/120),ie=.06+Math.random()*.16}else if(D<a){const Le=Math.random()*d,Ie=Math.sqrt(Math.random())*90;F=Ie*Math.cos(Le)+h()*2,j=Ie*Math.sin(Le)+h()*2,Z=h()*.8*(1-Ie/100),ie=.045+Math.random()*.13}else{const Le=Math.random()*d,Ie=8+Math.random()*95;F=Ie*Math.cos(Le)+h()*12,j=Ie*Math.sin(Le)+h()*12,Z=h()*5,ie=.03+Math.random()*.075}if(D<a&&Math.random()<.15){const Le=A(F,j);Le&&(F=Le[0],j=Le[1])}o[c*3]=F,o[c*3+1]=Z,o[c*3+2]=j;const[pe,ce,Fe]=f(F,j,ie);l[c*3]=pe,l[c*3+1]=ce,l[c*3+2]=Fe,c++}const C=new bt;C.setAttribute("position",new Dt(o,3)),C.setAttribute("color",new Dt(l,3)),Jr||(Jr=ny());const x=new Ea({size:.25,map:Jr,vertexColors:!0,transparent:!0,opacity:.34,depthWrite:!1,blending:vn,sizeAttenuation:!0});x.onBeforeCompile=D=>{D.vertexShader=D.vertexShader.replace("#include <clipping_planes_vertex>",`gl_PointSize = min(gl_PointSize, 64.0);
#include <clipping_planes_vertex>`),D.fragmentShader=D.fragmentShader.replace("void main() {",`void main() {
if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;`)},ql=x,i.add(new Nl(C,x));const E=1500,z=new Float32Array(E*3),P=new Float32Array(E*3),O=new Float32Array(E);for(let D=0;D<E;D++){const F=Math.floor(Math.random()*t);z[D*3]=o[F*3],z[D*3+1]=o[F*3+1],z[D*3+2]=o[F*3+2],P[D*3]=Math.min(1,l[F*3]*1.3),P[D*3+1]=Math.min(1,l[F*3+1]*1.3),P[D*3+2]=Math.min(1,l[F*3+2]*1.3),O[D]=Math.random()*Math.PI*2}const G=new bt;G.setAttribute("position",new Dt(z,3)),G.setAttribute("color",new Dt(P,3)),G.setAttribute("aPhase",new Dt(O,1));const W={value:0};Xl=W;const H=new Ea({size:.7,map:Jr,vertexColors:!0,transparent:!0,opacity:.13,depthWrite:!1,blending:vn,sizeAttenuation:!0});return H.onBeforeCompile=D=>{D.uniforms.uTime=W,D.vertexShader=D.vertexShader.replace("void main() {",`attribute float aPhase;
varying float vTwinkle;
void main() {`),D.vertexShader=D.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vTwinkle = 0.55 + 0.45 * sin(uTime * 1.8 + aPhase) * sin(uTime * 0.7 + aPhase * 2.3);`),D.vertexShader=D.vertexShader.replace("#include <clipping_planes_vertex>",`gl_PointSize = min(gl_PointSize, 64.0);
#include <clipping_planes_vertex>`),D.fragmentShader=D.fragmentShader.replace("void main() {",`uniform float uTime;
varying float vTwinkle;
void main() {
if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;`),D.fragmentShader=D.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`gl_FragColor.a *= vTwinkle;
#include <premultiplied_alpha_fragment>`)},Yl=H,i.add(new Nl(G,H)),i}function Od(i,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d"),r=256/2,a=s.createRadialGradient(r,r,0,r,r,r),o=new ze().setHSL(i,e,.5),l=Math.round(o.r*255),c=Math.round(o.g*255),d=Math.round(o.b*255);a.addColorStop(0,`rgba(${l},${c},${d},0.6)`),a.addColorStop(.3,`rgba(${l},${c},${d},0.2)`),a.addColorStop(.6,`rgba(${l},${c},${d},0.05)`),a.addColorStop(1,`rgba(${l},${c},${d},0)`),s.fillStyle=a,s.fillRect(0,0,256,256);const h=new vc(n);return h.generateMipmaps=!1,h.minFilter=Ct,h}function sy(){const i=new Ut,e=[{hue:.6,sat:.8,pos:[25,.5,-18],scale:20,opacity:.045},{hue:.55,sat:.7,pos:[-22,-.3,-25],scale:25,opacity:.037},{hue:.75,sat:.6,pos:[-35,.2,15],scale:22,opacity:.037},{hue:0,sat:.7,pos:[40,-.5,20],scale:18,opacity:.03},{hue:.85,sat:.5,pos:[10,.3,40],scale:24,opacity:.037},{hue:.12,sat:.6,pos:[0,0,0],scale:30,opacity:.06},{hue:.08,sat:.4,pos:[2,0,-3],scale:20,opacity:.045},{hue:.58,sat:.9,pos:[50,0,-30],scale:28,opacity:.022},{hue:.7,sat:.7,pos:[-45,0,-35],scale:22,opacity:.026},{hue:.45,sat:.6,pos:[-30,0,45],scale:26,opacity:.026},{hue:.15,sat:.5,pos:[30,0,50],scale:20,opacity:.022},{hue:.65,sat:.3,pos:[0,-1,30],scale:50,opacity:.015},{hue:.5,sat:.3,pos:[-20,.5,-10],scale:55,opacity:.015}];Ra.length=0,$l.length=0;for(const s of e){const r=Od(s.hue,s.sat),a=new Ma({map:r,transparent:!0,opacity:s.opacity,blending:vn,depthWrite:!1});Ra.push(a),$l.push(s.opacity);const o=new Ul(a);o.position.set(...s.pos),o.scale.setScalar(s.scale),i.add(o)}const t=[{pos:[15,0,-8],scale:15,opacity:.09},{pos:[-12,0,10],scale:18,opacity:.075},{pos:[30,0,5],scale:12,opacity:.067},{pos:[-8,0,-30],scale:14,opacity:.06},{pos:[5,0,25],scale:16,opacity:.075}],n=Od(0,0);for(const s of t){const r=new Ma({map:n,transparent:!0,opacity:s.opacity,color:197384,depthWrite:!1}),a=new Ul(r);a.position.set(...s.pos),a.scale.setScalar(s.scale),i.add(a)}return i}function ry(){for(;Nt.children.length>0;)Nt.remove(Nt.children[0]);dn.clear(),sr.clear(),da.length=0;const i=new wc(3359846,.6);Nt.add(i),Nt.add(iy()),Nt.add(sy());const e=new $t(.4,8,8);Fo||(Fo=ty());for(let a=0;a<wa.length;a++){const o=wa[a],l=Nd[a%Nd.length],c=new mt({color:l}),d=new de(e,c);d.position.set(...o.position),d.userData.systemId=o.id,Nt.add(d),dn.set(o.id,d);const h=new Ma({map:Fo,color:l,transparent:!0,opacity:.7,blending:vn,depthWrite:!1}),u=new Ul(h);u.position.set(...o.position),u.scale.setScalar(2.5),Nt.add(u),sr.set(o.id,u)}const t=new Sc(.7,.9,32),n=new mt({color:16776960,transparent:!0,opacity:.7,side:ln});Zt=new de(t,n),Zt.rotation.x=-Math.PI/2,Zt.visible=!1,Nt.add(Zt);const s=new yc(.5,0),r=new mt({color:16724787});qt=new de(s,r),qt.visible=!1,Nt.add(qt),Dn=Hs(Qt(tt.colors.playerBody),Qt(tt.colors.playerExhaust)),Dn.scale.setScalar(.3),Nt.add(Dn),Oc(),hf();for(const[a,o]of dn){const l=Xi.has(a)?uf:df;nr.set(a,l),o.scale.setScalar(l);const c=sr.get(a);c&&c.scale.setScalar(2.5*l)}ff(),pf()}function ff(){for(const e of da)Nt.remove(e),e.geometry.dispose(),e.material.dispose();da.length=0;const i=Kt(ae.currentSystemId);if(i)for(const e of i.connections){const t=dn.get(ae.currentSystemId),n=dn.get(e);if(!t||!n)continue;const s=[t.position,n.position],r=new bt().setFromPoints(s),a=new bh({color:52479,transparent:!0,opacity:.5}),o=new dm(r,a);Nt.add(o),da.push(o)}}function pf(){wn||(wn=document.createElement("div"),wn.id="galaxy-labels",document.body.appendChild(wn));for(const i of ha.values())i.remove();ha.clear();for(const i of Xi){const e=Kt(i);if(!e)continue;const t=document.createElement("div");t.className="galaxy-label",t.textContent=e.name,wn.appendChild(t),ha.set(e.id,t)}}function ay(i){vs.time+=i,Xl&&(Xl.value=vs.time);const e=sr.get(ae.currentSystemId);if(e){const r=3+Math.sin(vs.time*3)*.5;e.scale.setScalar(r)}if(qt&&qt.visible&&(qt.rotation.y+=i*2,qt.position.y=qt.userData.baseY+Math.sin(vs.time*4)*.5),Dn&&(Dn.rotation.y+=i*.5),Zt&&Zt.visible){const r=Zt.material;r.opacity=.5+Math.sin(vs.time*4)*.2}const t=10,n=5,s=Ye.position;for(const[r,a]of dn){const o=Xi.has(r)?uf:df,l=nr.get(r)??o,c=o-l;if(Math.abs(c)>.005){const m=l+c*Math.min(1,i*ey);nr.set(r,m),a.scale.setScalar(m)}else l!==o&&(nr.set(r,o),a.scale.setScalar(o));const d=sr.get(r);if(!d)continue;const h=s.distanceTo(a.position),u=Math.max(0,Math.min(1,(h-n)/(t-n)));if(r===ae.currentSystemId)d.material.opacity=u*(.8+Math.sin(vs.time*3)*.2);else{const m=nr.get(r)??o;d.scale.setScalar(2.5*m),d.material.opacity=u*.7}}}function oy(i){if(!wn)return;const e=window.innerWidth,t=window.innerHeight;for(const[n,s]of ha){const r=dn.get(n);if(!r)continue;if(Js.copy(r.position),Js.project(i),Js.z>1){s.style.display="none";continue}const a=(.5+Js.x/2)*e,o=(.5-Js.y/2)*t;s.style.display="",s.style.left=`${a}px`,s.style.top=`${o+18}px`,s.classList.toggle("current",n===ae.currentSystemId),s.classList.toggle("contract-target",ae.activeContract?.targetSystemId===n)}}function Oc(){const i=dn.get(ae.currentSystemId);i&&Dn&&(Dn.position.copy(i.position),Dn.position.y+=2.5)}function Bd(i){const e=dn.get(i);return e?e.position.clone():null}function ly(i){Dn&&Dn.position.set(i.x,i.y+2.5,i.z)}function Ns(i){if(!Zt)return;if(!i){Zt.visible=!1;return}const e=dn.get(i);e&&(Zt.position.copy(e.position),Zt.position.y+=.05,Zt.visible=!0)}function Bc(){if(qt){if(ae.activeContract){const i=dn.get(ae.activeContract.targetSystemId);if(i){qt.position.copy(i.position),qt.userData.baseY=i.position.y+3.5,qt.position.y=qt.userData.baseY,qt.visible=!0;return}}qt.visible=!1}}function cy(){Nt.visible=!0,lf(!1),Ye.near=5,Ye.updateProjectionMatrix(),wn&&(wn.style.display="block")}function mf(){Nt.visible=!1,lf(!0),Ye.near=1,Ye.updateProjectionMatrix(),Zt&&(Zt.visible=!1),wn&&(wn.style.display="none")}function gf(){return dn}function zd(i){ql&&(ql.opacity=ZM*i),Yl&&(Yl.opacity=JM*i);for(let e=0;e<Ra.length;e++)Ra[e].opacity=$l[e]*i}function zc(){hf(),ff(),pf()}let ei=!1,jt=null,ur=0,xi=Math.PI/4,vi=52,mi=new I(0,0,0),Pa=!1,_f=0,xf=0,Kl=0,jl=0,Os=null,vf=0,Mf=0,Zl=0,Jl=0,yf=0,Sf=0,Ia=!1,Mn=!1,Ql=new I,ec=new I,ir=0;const uy=1.5;let fa=null,Ef=!1;const Gd=new I;let tc=null,nc=null,Mi=null,xn=null,qn=null,gn=null;const Hd="galaxyBrightness";function dy(){if(Mi=document.getElementById("galaxy-hud"),xn=document.getElementById("galaxy-info-panel"),qn||(qn=document.createElement("div"),qn.id="galaxy-hint",qn.textContent=af()?"Нажмите на звезду для выбора  •  Проведите для вращения  •  Щипок — масштаб":"Нажмите на звезду для выбора  •  Перетаскивайте для вращения  •  Колёсико — масштаб",document.body.appendChild(qn)),!gn){const i=localStorage.getItem(Hd),e=i!==null?parseFloat(i):1;zd(e),gn=document.createElement("div"),gn.id="galaxy-brightness",gn.innerHTML=`<label>Яркость</label><input type="range" min="0" max="200" value="${Math.round(e*100)}" /><span>${Math.round(e*100)}%</span>`,document.body.appendChild(gn);const t=gn.querySelector("input"),n=gn.querySelector("span");t.addEventListener("input",()=>{const s=parseInt(t.value,10)/100;zd(s),n.textContent=`${t.value}%`,localStorage.setItem(Hd,String(s))})}}function Gc(){if(Mi&&(Mi.innerHTML=`<span class="gal-money">${ae.money}₵</span> <span class="gal-fuel">⛽ ${ae.fuel}/${ae.maxFuel}</span>`,ae.activeContract)){const i=Kt(ae.activeContract.targetSystemId);Mi.innerHTML+=`<br><span class="gal-contract">Контракт → ${i.name}</span>`}}function bf(){if(!xn)return;if(!jt){xn.style.display="none";return}const i=Kt(jt),e=jt===ae.currentSystemId,n=Kt(ae.currentSystemId).connections.includes(jt),s=n?NM(ae.currentSystemId,jt):0,r=n&&!e&&ae.fuel>=s,a=ae.activeContract?.targetSystemId===jt;let o=`<h3>${i.name}</h3>`;e?(o+='<div class="gal-info-line">Вы здесь</div>',o+='<button class="gal-btn" id="gal-station-btn">НА СТАНЦИЮ</button>'):n?(o+=`<div class="gal-info-line">Топливо: ${s} ед.</div>`,a&&(o+='<div class="gal-info-line gal-contract-marker">Цель контракта!</div>'),r?o+='<button class="gal-btn" id="gal-travel-btn">ЛЕТЕТЬ</button>':o+='<div class="gal-info-line gal-no-fuel">Недостаточно топлива</div>'):o+='<div class="gal-info-line gal-no-route">Нет прямого маршрута</div>',xn.innerHTML=o,xn.style.display="block";const l=document.getElementById("gal-station-btn");l&&l.addEventListener("click",()=>{tc&&tc()});const c=document.getElementById("gal-travel-btn");c&&c.addEventListener("click",()=>{!jt||!n||Mn||qM(s)&&hy(jt)})}function hy(i){const e=Bd(ae.currentSystemId),t=Bd(i);!e||!t||(Ql.copy(e),ec.copy(t),ir=0,fa=i,Ef=ae.activeContract?.targetSystemId===i,Mn=!0,jt=null,Ns(null),xn&&(xn.style.display="none"),Gc())}function fy(i){if(!Mn||!fa)return;if(ir+=i/uy,ir>=1){ir=1,Mn=!1,YM(fa),Oc(),zc(),Bc(),Gc();const n=Kt(fa);mi.set(...n.position),Si(),Ef&&ae.activeContract?nc&&nc():gr();return}const e=ir,t=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Gd.lerpVectors(Ql,ec,t),ly(Gd),mi.lerpVectors(Ql,ec,t),Si()}function Si(){const i=mi.x+vi*Math.sin(xi)*Math.sin(ur),e=mi.y+vi*Math.cos(xi),t=mi.z+vi*Math.sin(xi)*Math.cos(ur);Ye.position.set(i,e,t),Ye.lookAt(mi)}function py(){Ye.up.set(0,1,0);const i=Kt(ae.currentSystemId);mi.set(...i.position),ur=0,xi=Math.PI/4,vi=52,Si()}const La=new Tm,Rs=new Be;function Hc(i){return i instanceof HTMLElement?!!i.closest("#galaxy-info-panel, #galaxy-hud, #galaxy-brightness"):!1}function Tf(i){!ei||Mn||Hc(i.target)||i.button===0&&(Pa=!0,_f=i.clientX,xf=i.clientY,Kl=i.clientX,jl=i.clientY)}function Af(i){if(!(!ei||Mn)&&Pa){const e=i.clientX-Kl,t=i.clientY-jl;ur-=e*.005,xi=Math.max(.2,Math.min(Math.PI/2.2,xi-t*.005)),Kl=i.clientX,jl=i.clientY,Si()}}function wf(i){if(!(!ei||Mn)){if(Hc(i.target)){Pa=!1;return}if(i.button===0){const e=Math.abs(i.clientX-_f)>3||Math.abs(i.clientY-xf)>3;if(Pa=!1,!e){Rs.x=i.clientX/window.innerWidth*2-1,Rs.y=-(i.clientY/window.innerHeight)*2+1,La.setFromCamera(Rs,Ye);const t=Array.from(gf().values()),n=La.intersectObjects(t);if(n.length>0){const s=n[0].object.userData.systemId;jt=s,Ns(s)}else jt=null,Ns(null);bf()}}}}function Cf(i){!ei||Mn||(i.preventDefault(),vi=Math.max(10,Math.min(120,vi+i.deltaY*.05)),Si())}function Rf(i){const e=i.touches[0],t=i.touches[1],n=e.clientX-t.clientX,s=e.clientY-t.clientY;return Math.sqrt(n*n+s*s)}function Pf(i){if(!(!ei||Mn)&&!Hc(i.target)){if(i.touches.length===2){Ia=!0,Os=null,yf=Rf(i),Sf=vi,i.preventDefault();return}if(i.touches.length===1){const e=i.touches[0];Os=e.identifier,vf=e.clientX,Mf=e.clientY,Zl=e.clientX,Jl=e.clientY,i.preventDefault()}}}function If(i){if(!(!ei||Mn)){if(Ia&&i.touches.length>=2){i.preventDefault();const e=Rf(i),t=yf/e;vi=Math.max(10,Math.min(120,Sf*t)),Si();return}if(Os!==null)for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];if(t.identifier===Os){i.preventDefault();const n=t.clientX-Zl,s=t.clientY-Jl;ur-=n*.005,xi=Math.max(.2,Math.min(Math.PI/2.2,xi-s*.005)),Zl=t.clientX,Jl=t.clientY,Si()}}}}function Da(i){if(!(!ei||Mn)){if(Ia){i.touches.length<2&&(Ia=!1);return}for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];if(t.identifier!==Os)continue;if(Os=null,Math.abs(t.clientX-vf)>8||Math.abs(t.clientY-Mf)>8)return;Rs.x=t.clientX/window.innerWidth*2-1,Rs.y=-(t.clientY/window.innerHeight)*2+1,La.setFromCamera(Rs,Ye);const s=Array.from(gf().values()),r=La.intersectObjects(s);if(r.length>0){const a=r[0].object.userData.systemId;jt=a,Ns(a)}else jt=null,Ns(null);bf()}}}function my(i,e,t=!0){if(dy(),ei=!0,jt=null,tc=i,nc=e,window.addEventListener("mousedown",Tf),window.addEventListener("mousemove",Af),window.addEventListener("mouseup",wf),window.addEventListener("wheel",Cf,{passive:!1}),window.addEventListener("touchstart",Pf,{passive:!1}),window.addEventListener("touchmove",If,{passive:!1}),window.addEventListener("touchend",Da),window.addEventListener("touchcancel",Da),t)py();else{const n=Kt(ae.currentSystemId);mi.set(...n.position),Ye.up.set(0,1,0),Si()}zc(),Bc(),Gc(),Ns(null),xn&&(xn.style.display="none"),Mi&&(Mi.style.display="block"),qn&&(qn.style.display="block"),gn&&(gn.style.display="flex"),document.body.classList.add("galaxy-mode")}function Lf(){ei=!1,window.removeEventListener("mousedown",Tf),window.removeEventListener("mousemove",Af),window.removeEventListener("mouseup",wf),window.removeEventListener("wheel",Cf),window.removeEventListener("touchstart",Pf),window.removeEventListener("touchmove",If),window.removeEventListener("touchend",Da),window.removeEventListener("touchcancel",Da),Mi&&(Mi.style.display="none"),xn&&(xn.style.display="none"),qn&&(qn.style.display="none"),gn&&(gn.style.display="none"),document.body.classList.remove("galaxy-mode")}let Pn=null,Ps=null;function gy(i,e,t){if(Pn=document.getElementById("combat-result"),!Pn)return;Ps=t;const n=kM(i,e);let a=`
    <h1 style="color:${i?"#44ff88":"#ff4444"}">${i?"ПОБЕДА!":"ПОРАЖЕНИЕ"}</h1>
    <div class="result-stats">
      <div class="result-line">Очки: <span>${e}</span></div>`;n>0&&(i?a+=`
      <div class="result-line">Награда: <span class="result-reward">+${n}₵</span></div>`:a+=`
      <div class="result-line">Частичная награда: <span class="result-reward">+${n}₵</span></div>`),a+=`
      <div class="result-line result-total">Баланс: <span>${ae.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`,Pn.innerHTML=a,Pn.style.display="flex";const o=document.getElementById("result-continue-btn");o&&o.addEventListener("click",()=>{Ps&&Ps()})}function _y(i,e){if(Pn=document.getElementById("combat-result"),!Pn)return;Ps=e;let t=`
    <h1 style="color:#ff8844">ДЕЗЕРТИРСТВО</h1>
    <div class="result-stats">
      <div class="result-line">Контракт провален</div>`;i>0&&(t+=`
      <div class="result-line">Штраф: <span style="color:#ff4444">-${i}₵</span></div>`),t+=`
      <div class="result-line result-total">Баланс: <span>${ae.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`,Pn.innerHTML=t,Pn.style.display="flex";const n=document.getElementById("result-continue-btn");n&&n.addEventListener("click",()=>{Ps&&Ps()})}function za(){Pn&&(Pn.style.display="none")}let Kn=null,ic=null;const xy={easy:"ПРОСТОЙ",medium:"СРЕДНИЙ",hard:"СЛОЖНЫЙ"},vy={easy:"#44ff88",medium:"#ffaa44",hard:"#ff4444"};function My(i){Kn=document.getElementById("station-screen"),Kn&&(ic=i,$M()&&KM(),sc(),Kn.style.display="flex")}function Df(){Kn&&(Kn.style.display="none")}function sc(){if(!Kn)return;let e=`
    <div class="station-header">
      <h1>СТАНЦИЯ «${Kt(ae.currentSystemId).name}»</h1>
      <div class="station-balance">
        <span class="station-money">${ae.money}₵</span>
        <span class="station-fuel">⛽ ${ae.fuel}/${ae.maxFuel}</span>
      </div>
    </div>
    <div class="station-body">
      <div class="station-section station-fuel-section">
        <h2>ТОПЛИВО</h2>
        <div class="fuel-price">${bv}₵ за единицу</div>
        <div class="fuel-buttons">
          <button class="station-btn fuel-btn" data-amount="1">+1</button>
          <button class="station-btn fuel-btn" data-amount="5">+5</button>
          <button class="station-btn fuel-btn" data-amount="${ae.maxFuel}">MAX</button>
        </div>
      </div>
      <div class="station-section station-contracts-section">
        <h2>КОНТРАКТЫ</h2>
        <div class="contracts-list">`;for(const n of Wl){const s=Kt(n.targetSystemId),r=ae.activeContract?.id===n.id,a=ae.activeContract!==null,o=vy[n.difficulty],l=xy[n.difficulty];e+=`
      <div class="contract-card ${n.difficulty}${r?" active":""}">
        <div class="contract-diff" style="color:${o}">[${l}]</div>
        <div class="contract-title">${n.title}</div>
        <div class="contract-desc">${n.description}</div>
        <div class="contract-target">→ ${s.name}</div>
        <div class="contract-reward">${n.reward}₵</div>
        ${r?'<div class="contract-status">ПРИНЯТ</div>':a?"":`<button class="station-btn contract-accept-btn" data-id="${n.id}">ВЗЯТЬ</button>`}
      </div>`}e+=`
        </div>
      </div>
    </div>
    <button class="station-btn station-map-btn" id="station-map-btn">НА КАРТУ</button>`,Kn.innerHTML=e,Kn.querySelectorAll(".fuel-btn").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.amount||"1");XM(s),sc()})}),Kn.querySelectorAll(".contract-accept-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id,r=Wl.find(a=>a.id===s);r&&(VM(r),sc())})});const t=document.getElementById("station-map-btn");t&&t.addEventListener("click",()=>{ic&&ic()})}let rc=null,dr=null;function yy(i,e){rc=i,dr=e}let Vd=!1;function Sy(){Vd||(ry(),et.add(Nt),Vd=!0)}function Ey(){jM()?(GM(!0),gr()):HM(),Sy(),Uf()}function Uf(i=!0){Zi("galaxy"),Df(),za(),mr(),kc(),De.visible=!1,cy(),Oc(),Bc(),zc(),my(()=>Vc(),()=>by(),i)}function Vc(){Zi("station"),Lf(),mf(),mr(),kc(),My(()=>Uf(!1))}function by(){if(!ae.activeContract)return;const i=ae.activeContract.difficulty,e=Av[i];Zi("combat"),Lf(),mf(),Df(),za(),kc(),Nc(),De.visible=!0,Uc(e),rc&&rc(e)}function Ff(i,e){ji&&(Zi("result"),mr(),dr&&dr(),gy(i,e,()=>{za(),gr(),Vc()}))}function Ty(){if(!ji)return;Zi("result"),mr(),dr&&dr();const i=WM();_y(i,()=>{za(),gr(),Vc()})}function kc(){const i=["start-screen","game-over","victory-screen","pause-screen"];for(const e of i){const t=document.getElementById(e);t&&(t.style.display="none")}}const Oo=new I,kd=new I,Qs=new I,Wd=new On,Xd=new On,qd=new I,Ay=new I,Yd=new I,$d=new I;let Bo=null;function wy(i,e){Bo=null;let t=1/0;for(const n of e){const s=i.distanceToSquared(n.mesh.position);s<t&&(t=s,Bo=n)}return Bo}function Nf(i,e,t,n,s,r,a){if((!i.ai.target||Math.random()<.01)&&(r&&Math.random()<.5&&s?i.ai.target={mesh:{position:s},name:ba}:i.ai.target=wy(i.mesh.position,t)),!r&&Math.random()<.005){for(const M of R.capitalShips)if(M.alive){for(const p of M.subsystems)if(p.health>0){$d.copy(p.center).applyMatrix4(M.mesh.matrixWorld),i.ai.target={mesh:{position:$d.clone()},name:`Корабль-${M.mesh.userData.index+1}`};break}if(i.ai.target)break}}const o=i.ai.target;if(!o)return;Oo.copy(o.mesh.position).sub(i.mesh.position);const l=Oo.length(),c=Oo.normalize();i.ai.timer-=e,i.ai.timer<=0&&(l<100?(i.ai.state="evade",i.ai.evadeDir.copy(c).negate(),i.ai.evadeDir.x+=(Math.random()-.5)*.8,i.ai.evadeDir.y+=(Math.random()-.5)*.4,i.ai.evadeDir.z+=(Math.random()-.5)*.8,i.ai.evadeDir.normalize(),i.ai.timer=2+Math.random()*2):l>500?(i.ai.state="chase",i.ai.timer=3):(i.ai.state="orbit",i.ai.evadeDir.set(-c.z,(Math.random()-.5)*.3,c.x).normalize(),Math.random()<.5&&i.ai.evadeDir.negate(),i.ai.timer=3+Math.random()*3));let d;switch(i.ai.state){case"chase":d=c;break;case"evade":d=i.ai.evadeDir;break;case"orbit":{const M=(l-250)/250*.3;Yd.copy(i.ai.evadeDir).addScaledVector(c,M).normalize(),d=Yd;break}default:d=c}kd.set(1,0,0).applyQuaternion(i.mesh.quaternion),Qs.copy(kd).cross(d);const h=Qs.length();if(h>.001){const M=Math.asin(Math.min(1,h))*1.5*e;Qs.divideScalar(h),Wd.setFromAxisAngle(Qs,M),i.mesh.quaternion.premultiply(Wd),i.mesh.quaternion.normalize()}Xd.setFromAxisAngle(Ay.set(1,0,0),-Qs.y*1.5*e),i.mesh.quaternion.multiply(Xd),qd.set(1,0,0).applyQuaternion(i.mesh.quaternion),i.mesh.position.addScaledVector(qd,i.speed*e),i.shootTimer-=e,i.shootTimer<=0&&l<400&&(i.shootTimer=.5+Math.random()*.7,bM(i.mesh,c,n,i.name,a));const u=Math.sin(Date.now()*.006+i.mesh.id*1.7)*.5+.5,m=i.mesh.getObjectByName("exhaust");m&&(m.material.opacity=.6+u*.3,m.scale.setScalar(.9+u*.2)),i.healthBar.lookAt(Ye.position);const g=i.health/i.maxHealth;i.healthFill.scale.x=Math.max(.01,g),i.healthFill.position.x=-(1-g)*2}function Cy(i,e){for(const t of R.allies)Nf(t,i,R.enemies,"ally",null,!1,e)}function Ry(i,e){for(const t of R.enemies)Nf(t,i,R.allies,"enemy",e.position,!0,e)}const Py=144,Iy=36,zo=new I;function Kd(i,e,t){for(let n=e.length-1;n>=0;n--){const s=e[n];if(i.mesh.position.distanceToSquared(s.mesh.position)<Py){if(s.health-=i.damage,fi(i.mesh.position.clone(),.3),s.health<=0){fi(s.mesh.position.clone(),3),et.remove(s.mesh),s.healthFill&&s.healthFill.geometry&&s.healthFill.geometry.dispose(),s.healthFill&&s.healthFill.material&&s.healthFill.material.dispose();const r=s.name,a=i.shooterName||"?",o=e===R.enemies;e.splice(n,1);const l=i.team==="player"?"player":i.team==="ally"?"ally":"enemy";Zh(a,r,l,o?"enemy":"ally"),o&&R.totalEnemyKills++,t&&(R.score+=100,R.playerHealth=Math.min(R.maxHealth,R.playerHealth+R.maxHealth*.1),qi("+100 | +10% HP",1.5)),R.respawnQueue.push({team:o?"enemy":"ally",timer:rt.respawnDelay})}return!0}}return!1}function Ly(i){for(const e of R.capitalShips)if(e.alive){for(const t of e.subsystems)if(!(t.health<=0)&&(zo.copy(t.center).applyMatrix4(e.mesh.matrixWorld),i.mesh.position.distanceToSquared(zo)<t.radius*t.radius)){if(t.health-=i.damage,fi(i.mesh.position.clone(),.5),t.health<=0&&(fi(zo.clone(),4.5),R.score+=500,qi(`${t.name} УНИЧТОЖЕНА! +500`,2)),e.subsystems.every(n=>n.health<=0)){e.alive=!1,fi(e.mesh.position.clone(),12);for(let n=0;n<5;n++)setTimeout(()=>{if(!e.mesh.parent)return;const s=new I((Math.random()-.5)*90,(Math.random()-.5)*30,(Math.random()-.5)*45);fi(e.mesh.position.clone().add(s),6)},n*300);setTimeout(()=>{et.remove(e.mesh)},1800),R.score+=2e3,qi("КОРАБЛЬ УНИЧТОЖЕН! +2000",3),R.phase===1&&R.capitalShips.every(n=>!n.alive)&&(R.phase=2,setTimeout(()=>{qi(`ВСЕ КОРАБЛИ УНИЧТОЖЕНЫ!
Уничтожьте ${rt.killTarget} истребителей!`,4)},3500))}return!0}}return!1}function Dy(i){const e=[{arr:R.bullets,hitEnemies:!0,hitAllies:!1,hitPlayer:!1,isPlayer:!0},{arr:R.allyBullets,hitEnemies:!0,hitAllies:!1,hitPlayer:!1,isPlayer:!1},{arr:R.enemyBullets,hitEnemies:!1,hitAllies:!0,hitPlayer:!0,isPlayer:!1}];for(const{arr:t,hitEnemies:n,hitAllies:s,hitPlayer:r,isPlayer:a}of e)for(let o=t.length-1;o>=0;o--){const l=t[o];if(l.mesh.position.addScaledVector(l.velocity,i),l.life-=i,l.life<=0){et.remove(l.mesh),t.splice(o,1);continue}let c=!1;n&&!c&&(c=Kd(l,R.enemies,a)),s&&!c&&(c=Kd(l,R.allies,!1)),r&&!c&&R.invulnTimer<=0&&l.mesh.position.distanceToSquared(De.position)<Iy&&(R.playerHealth-=l.damage,R.damageFlash=.3,R.noDamageTimer=0,R.lastAttacker=l.shooterName||"?",fi(l.mesh.position.clone(),.3),Ev(),c=!0),(a||l.team==="ally")&&!c&&(c=Ly(l)),c&&(et.remove(l.mesh),t.splice(o,1))}SM()}const Uy=[new I(2e3,100,0),new I(-1e3,-200,2200),new I(-500,300,-2500),new I(1500,-300,-1800),new I(-2e3,200,1e3)];function Fy(){const i=tt.counts.capitalShips,e=Qt(tt.colors.capitalHull);for(let t=0;t<i;t++){const n=Vh(t,e);n.position.copy(Uy[t]),n.lookAt(0,0,0),et.add(n),R.capitalShips.push({mesh:n,subsystems:n.userData.subsystems,alive:!0,turretTimer:2+Math.random()*3})}}function Go(i,e){for(const t of i.subsystems)t.health<=0&&t.mesh.visible&&t.mesh.traverse(n=>{n.isMesh&&n.material&&(n.material=pM)});i.subsystems[0].health>0&&(i.mesh.rotation.y+=.02*e)}const Ms=[],ys=new I,jd=new I,Ss=new I,Ny=800*800,Oy=600*600,By=600*600;function zy(i){for(const e of R.capitalShips){if(!e.alive)continue;if(e.subsystems[2].health<=0){Go(e,i);continue}if(e.turretTimer-=i,e.turretTimer<=0){e.turretTimer=rt.turretFireRateMin+Math.random()*(rt.turretFireRateMax-rt.turretFireRateMin),Ms.length=0;const n=e.mesh.position;n.distanceToSquared(De.position)<Ny&&Ms.push(De.position);for(const c of R.allies)n.distanceToSquared(c.mesh.position)<Oy&&Ms.push(c.mesh.position);if(Ms.length===0){Go(e,i);continue}const s=Ms[Math.floor(Math.random()*Ms.length)];ys.copy(s).sub(n).normalize();const a=e.subsystems[1].health<=0?rt.turretAccuracy*2.5:rt.turretAccuracy;ys.x+=(Math.random()-.5)*a,ys.y+=(Math.random()-.5)*a,ys.z+=(Math.random()-.5)*a,ys.normalize();const o=`Корабль-${e.mesh.userData.index+1}`,l=2+Math.floor(Math.random()*2);for(let c=0;c<l;c++)jd.set(n.x+(Math.random()-.5)*30,n.y+(Math.random()-.5)*15,n.z+(Math.random()-.5)*30),Ss.copy(ys),Ss.x+=(Math.random()-.5)*.05,Ss.y+=(Math.random()-.5)*.05,Ss.z+=(Math.random()-.5)*.05,Ss.normalize(),Ta(jd,Ss,"enemy",o);n.distanceToSquared(De.position)<By&&Pc(!1)}Go(e,i)}}function Of(i){const e=Hs(Qt(tt.colors.allyBody),Qt(tt.colors.allyExhaust));et.add(e);const t=new I((Math.random()-.5)*200,(Math.random()-.5)*100,(Math.random()-.5)*200);e.position.copy(i).add(t),e.quaternion.copy(De.quaternion);const n=Yh(e,65348),s=Bv();R.allies.push({mesh:e,name:s,healthBar:n.bar,healthFill:n.fill,health:rt.fighterHP,maxHealth:rt.fighterHP,speed:rt.allySpeedMin+Math.random()*(rt.allySpeedMax-rt.allySpeedMin),shootTimer:rt.allyFireRateMin+Math.random()*(rt.allyFireRateMax-rt.allyFireRateMin),ai:{state:"chase",timer:0,evadeDir:new I,target:null}})}function Bf(i){const e=Hs(Qt(tt.colors.enemyBody),Qt(tt.colors.enemyExhaust));et.add(e);const t=new I((Math.random()-.5)*300,(Math.random()-.5)*150,(Math.random()-.5)*300);e.position.copy(i).add(t);const n=Yh(e,16711680),s=zv();R.enemies.push({mesh:e,name:s,healthBar:n.bar,healthFill:n.fill,health:rt.fighterHP,maxHealth:rt.fighterHP,speed:rt.enemySpeedMin+Math.random()*(rt.enemySpeedMax-rt.enemySpeedMin),shootTimer:rt.enemyFireRateMin+Math.random()*(rt.enemyFireRateMax-rt.enemyFireRateMin),ai:{state:"chase",timer:0,evadeDir:new I,target:null}})}function Gy(i){for(let e=R.respawnQueue.length-1;e>=0;e--)if(R.respawnQueue[e].timer-=i,R.respawnQueue[e].timer<=0)if(R.respawnQueue.splice(e,1)[0].team==="ally")Of(De.position);else{let n=new I(1500,0,0);const s=R.capitalShips.filter(r=>r.alive);s.length>0&&(n=s[Math.floor(Math.random()*s.length)].mesh.position.clone()),Bf(n)}}const Hy=document.getElementById("enemy-indicators"),Es=[],Qr=new I;function Vy(i){if(i<Es.length)return Es[i].style.display="flex",Es[i];const e=document.createElement("div");return e.className="enemy-indicator",e.innerHTML='<div class="arrow"></div><div class="dist"></div>',Hy.appendChild(e),Es.push(e),e}function ky(i){const t=window.innerWidth,n=window.innerHeight,s=t/2,r=n/2;let a=0;for(const o of R.capitalShips){if(!o.alive)continue;Qr.copy(o.mesh.position).project(Ye);const l=(Qr.x*.5+.5)*t,c=(-Qr.y*.5+.5)*n,d=Qr.z<1;if(d&&l>40&&l<t-40&&c>40&&c<n-40)continue;const u=Vy(a);a++;let m=l-s,g=c-r;d||(m=-m,g=-g);const M=Math.atan2(g,m),p=s-40,f=r-40,v=Math.abs(m),b=Math.abs(g);let y,T;if(v<.001&&b<.001)y=s,T=40;else{const x=v>.001?p/v:1/0,E=b>.001?f/b:1/0,z=Math.min(x,E);y=s+m*z,T=r+g*z}const A=i.position.distanceTo(o.mesh.position),C=A<1e3?Math.floor(A)+"m":(A/1e3).toFixed(1)+"km";u.style.left=y+"px",u.style.top=T+"px",u.style.transform="translate(-50%, -50%)",u.children[0].style.transform=`rotate(${M*180/Math.PI-90}deg)`,u.children[0].style.borderBottomColor="#ff8800",u.children[1].textContent="★ "+C,u.children[1].style.color="#ff8800",u.style.opacity="0.9"}for(let o=a;o<Es.length;o++)Es[o].style.display="none"}const Wy=document.getElementById("minimap-canvas"),ft=Wy.getContext("2d"),Ho=new I,ea=Math.PI*2;function Xy(i){ft.clearRect(0,0,180,180);const e=90,t=90,n=.025,s=i.position.x,r=i.position.z;ft.fillStyle="#00ccff",ft.beginPath(),ft.arc(e,t,4,0,ea),ft.fill(),Ho.set(1,0,0).applyQuaternion(i.quaternion),ft.strokeStyle="#00ccff",ft.lineWidth=1.5,ft.beginPath(),ft.moveTo(e,t),ft.lineTo(e+Ho.x*15,t+Ho.z*15),ft.stroke(),ft.fillStyle="#00ff66";for(const a of R.allies){const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&(ft.beginPath(),ft.arc(o,l,2,0,ea),ft.fill())}ft.fillStyle="#ff2200";for(const a of R.enemies){const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&(ft.beginPath(),ft.arc(o,l,2,0,ea),ft.fill())}ft.fillStyle="#ff8800";for(const a of R.capitalShips){if(!a.alive)continue;const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&ft.fillRect(o-4,l-4,8,8)}ft.strokeStyle="rgba(0,255,255,0.3)",ft.lineWidth=1,ft.beginPath(),ft.arc(90,90,88,0,ea),ft.stroke()}let Zd=!1,zf=0,Gi,bs,Ts,As,Ua,Gf=[],Hf=[];function ta(i,e,t){const n=new Fh({antialias:!0,alpha:!0});n.setSize(i,e),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Mh;s.add(new wc(5596808,1));const r=new Ac(16777215,1.5);r.position.set(5,3,2),s.add(r);const a=new sn(45,i/e,.1,500);a.position.set(0,2,t),a.lookAt(0,0,0);const o=new Ut;return s.add(o),{renderer:n,scene:s,camera:a,model:o}}function Vf(i,e){i.scene.remove(i.model),i.model=e,i.scene.add(e)}function Xn(i,e,t){const n=Hs(Qt(tt.colors[e]),Qt(tt.colors[t]));Vf(i,n)}function kf(){const i=Vh(0,Qt(tt.colors.capitalHull));Vf(Ua,i)}function Fi(i,e,t,n){const s=document.createElement("label");s.textContent=e+" ";const r=document.createElement("input");r.type="color",r.value=tt.colors[t],r.addEventListener("input",()=>{tt.colors[t]=r.value,n()}),r.addEventListener("change",()=>{Fc()}),s.appendChild(r),i.appendChild(s),Gf.push({key:t,input:r})}function Vo(i,e,t,n,s,r){const a=document.createElement("div");a.className="slider-row";const o=document.createElement("label"),l=document.createElement("span");l.textContent=String(tt.counts[t]),o.textContent=e+": ",o.appendChild(l);const c=document.createElement("input");c.type="range",c.min=String(n),c.max=String(s),c.step=String(r),c.value=String(tt.counts[t]),c.addEventListener("input",()=>{const d=Number(c.value);tt.counts[t]=d,l.textContent=String(d),Fc()}),a.appendChild(o),a.appendChild(c),i.appendChild(a),Hf.push({key:t,input:c,label:l})}function na(i,e,t,n=!1){const s=document.createElement("div");s.className=n?"preview-card wide":"preview-card";const r=document.createElement("h3");r.textContent=e,s.appendChild(r),s.appendChild(t.renderer.domElement);const a=document.createElement("div");return a.className="color-pair",s.appendChild(a),i.appendChild(s),{card:s,colorContainer:a}}function qy(){Gi=document.createElement("div"),Gi.id="settings-screen";const i=document.createElement("h1");i.textContent="НАСТРОЙКИ",Gi.appendChild(i);const e=document.createElement("div");e.className="settings-content";const t=document.createElement("div");t.className="settings-section";const n=document.createElement("h2");n.textContent="ТЕХНИКА",t.appendChild(n);const s=document.createElement("div");s.className="preview-row",bs=ta(120,120,12);const{colorContainer:r}=na(s,"ИГРОК",bs);Fi(r,"Корпус","playerBody",()=>Xn(bs,"playerBody","playerExhaust")),Fi(r,"Двигатель","playerExhaust",()=>Xn(bs,"playerBody","playerExhaust")),Ts=ta(120,120,12);const{colorContainer:a}=na(s,"СОЮЗНИК",Ts);Fi(a,"Корпус","allyBody",()=>Xn(Ts,"allyBody","allyExhaust")),Fi(a,"Двигатель","allyExhaust",()=>Xn(Ts,"allyBody","allyExhaust")),As=ta(120,120,12);const{colorContainer:o}=na(s,"ПРОТИВНИК",As);Fi(o,"Корпус","enemyBody",()=>Xn(As,"enemyBody","enemyExhaust")),Fi(o,"Двигатель","enemyExhaust",()=>Xn(As,"enemyBody","enemyExhaust")),t.appendChild(s);const l=document.createElement("div");l.className="preview-row",l.style.marginTop="20px",Ua=ta(200,150,120);const{colorContainer:c}=na(l,"БОЕВОЙ КОРАБЛЬ",Ua,!0);Fi(c,"Корпус","capitalHull",kf),t.appendChild(l),e.appendChild(t);const d=document.createElement("div");d.className="settings-section";const h=document.createElement("h2");h.textContent="КОЛИЧЕСТВО",d.appendChild(h),Vo(d,"Боевые корабли","capitalShips",1,5,1),Vo(d,"Союзники","allies",8,64,4),Vo(d,"Противники","enemies",8,64,4),e.appendChild(d);const u=document.createElement("div");u.className="settings-buttons";const m=document.createElement("button");m.id="settings-reset",m.textContent="СБРОС",m.addEventListener("click",()=>{iM(),Wf(),Xf()}),u.appendChild(m);const g=document.createElement("button");g.id="settings-back",g.textContent="НАЗАД",g.addEventListener("click",()=>{$y()}),u.appendChild(g),e.appendChild(u),Gi.appendChild(e),document.body.appendChild(Gi)}function Wf(){for(const{key:i,input:e}of Gf)e.value=tt.colors[i];for(const{key:i,input:e,label:t}of Hf)e.value=String(tt.counts[i]),t.textContent=String(tt.counts[i])}function Xf(){Xn(bs,"playerBody","playerExhaust"),Xn(Ts,"allyBody","allyExhaust"),Xn(As,"enemyBody","enemyExhaust"),kf()}function qf(){zf=requestAnimationFrame(qf);const i=Date.now()*.001;for(const e of[bs,Ts,As,Ua])e.model.rotation.y=i*.5,e.renderer.render(e.scene,e.camera)}function Yy(){Zd||(qy(),Zd=!0),Wf(),Xf(),Gi.style.display="flex",document.getElementById("start-screen").style.display="none",qf()}function $y(){cancelAnimationFrame(zf),Gi.style.display="none",document.getElementById("start-screen").style.display="flex"}let pa=Hs(Qt(tt.colors.playerBody),Qt(tt.colors.playerExhaust));De.add(pa);et.add(De);De.position.set(0,0,0);let Ei=!1;const _r=document.getElementById("pause-screen");function Yf(){!R.running||Ei||(Ei=!0,_r.style.display="flex",document.exitFullscreen?.())}function Ky(){Ei&&(document.documentElement.requestFullscreen?.(),Ei=!1,_r.style.display="none",Wc.getDelta())}document.getElementById("resume-btn").addEventListener("click",Ky);function jy(){Ei=!1,_r.style.display="none",ji?Ty():(Zf(),document.getElementById("start-screen").style.display="flex")}document.getElementById("quit-btn").addEventListener("click",jy);window.addEventListener("keydown",i=>{if(Ki==="combat"){if(i.code==="Escape"||i.code==="KeyP"){Yf();return}R.keys[i.code]=!0,i.preventDefault()}});window.addEventListener("keyup",i=>{Ki==="combat"&&(R.keys[i.code]=!1,i.preventDefault())});window.addEventListener("mousemove",i=>{Ki==="combat"&&(R.mouseX=(i.clientX/window.innerWidth-.5)*2,R.mouseY=(i.clientY/window.innerHeight-.5)*2,R.mouseActive=!0)});window.addEventListener("mousedown",i=>{Ki==="combat"&&(i.button===0&&(R.keys.MouseLeft=!0),i.button===1&&R.running&&(i.preventDefault(),rf(De))),$n()});window.addEventListener("mouseup",i=>{i.button===0&&(R.keys.MouseLeft=!1)});window.addEventListener("keydown",()=>$n(),{once:!0});window.addEventListener("resize",Iv);function Zy(i){if(R.damageFlash>0?(R.damageFlash-=i,un.domElement.style.boxShadow=`inset 0 0 ${80*R.damageFlash}px rgba(255,0,0,${R.damageFlash})`):un.domElement.style.boxShadow="none",R.playerHealth<30&&R.running){const e=Math.sin(Date.now()*.01)*.5+.5;un.domElement.style.boxShadow=`inset 0 0 ${30*e}px rgba(255,0,0,${.3*e})`}}function Jy(){R.phase!==1&&R.phase===2&&R.totalEnemyKills>=rt.killTarget&&(R.running=!1,ji?Ff(!0,R.score):(document.getElementById("victory-score").textContent=`Счёт: ${R.score} | Уничтожено: ${R.totalEnemyKills}`,document.getElementById("victory-screen").style.display="flex"))}function Qy(){AM(),R.lives<=0&&ji&&!R.running&&(document.getElementById("game-over").style.display="none",Ff(!1,R.score))}const Wc=new Am,eS=60,Jd=1e3/eS;let Qd=0,eh=0;function $f(i=0){requestAnimationFrame($f);const e=i-Qd;if(e<Jd)return;Qd=i-e%Jd;const t=Math.min(Wc.getDelta(),.05);if(Ki==="galaxy"){ay(t),fy(t),oy(Ye),un.render(et,Ye);return}if(Ki!=="combat"){un.render(et,Ye);return}if(!R.running||Ei){un.render(et,Ye);return}TM(t),Cy(t,De),Ry(t,De),zy(t),Dy(t),_M(t),Gy(t);let n=1/0;for(const s of R.allies){const r=De.position.distanceToSquared(s.mesh.position);r<n&&(n=r)}for(const s of R.enemies){const r=De.position.distanceToSquared(s.mesh.position);r<n&&(n=r)}Sv(n),Zy(t),hM(t),eh++,eh%2===0&&(dM(),ky(De),RM(De),Xy(De)),R.messageTimer>0&&(R.messageTimer-=t,R.messageTimer<=0&&uM()),R.playerHealth<=0&&Qy(),Jy(),R.running||(Oh(),zh()),un.render(et,Ye)}function Kf(){for(const i of R.bullets)et.remove(i.mesh);for(const i of R.allyBullets)et.remove(i.mesh);for(const i of R.enemyBullets)et.remove(i.mesh);for(const i of R.allies)et.remove(i.mesh);for(const i of R.enemies)et.remove(i.mesh);for(const i of R.capitalShips)et.remove(i.mesh);for(const i of R.explosions)for(const e of i.particles)et.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();R.bullets=[],R.allyBullets=[],R.enemyBullets=[],R.allies=[],R.enemies=[],R.capitalShips=[],R.explosions=[],R.respawnQueue=[]}function jf(){Kf(),R.killFeed=[],R.phase=1,R.score=0,R.lives=5,R.playerHealth=100,R.totalEnemyKills=0,R.lastAttacker="",R.speed=R.baseSpeed,R.shootCooldown=0,R.messageTimer=0,R.damageFlash=0,R.noDamageTimer=0,R.invulnTimer=0,R.keys={},R.mouseX=0,R.mouseY=0,R.lockedTarget=null,cM(),Ov(),fM(),De.position.set(0,0,0),De.quaternion.identity(),De.visible=!0,Xt.pitch=0,Xt.yaw=0,Xt.roll=0,Ye.position.set(-10.5,3.75,0),Ye.lookAt(De.position),De.remove(pa),pa=Hs(Qt(tt.colors.playerBody),Qt(tt.colors.playerExhaust)),De.add(pa);const i=Math.min(rt.capitalShips,5);tt.counts.capitalShips=i,Fy();const e=rt.allies;for(let n=0;n<e;n++)Of(De.position);const t=rt.enemies;for(let n=0;n<t;n++){const s=n%Math.max(1,R.capitalShips.length);Bf(R.capitalShips[s].mesh.position)}}function Xc(){document.documentElement.requestFullscreen?.(),Ei=!1,_r.style.display="none",document.getElementById("start-screen").style.display="none",document.getElementById("game-over").style.display="none",document.getElementById("victory-screen").style.display="none",Rc()||Cc(),$n(),Uc(Cv),Zi("combat"),jf(),Nc(),Nh(),Bh(),R.running=!0,qi("В БОЙ!",2)}function tS(i){document.documentElement.requestFullscreen?.(),Ei=!1,_r.style.display="none",Rc()||Cc(),$n(),Uc(i),Zi("combat"),jf(),Nc(),Nh(),Bh(),R.running=!0,qi("В БОЙ!",2)}function Zf(){R.running=!1,Oh(),zh(),mr(),Kf()}yy(tS,Zf);function nS(){document.getElementById("start-screen").style.display="none",Rc()||Cc(),$n(),Ey()}zM();Ye.position.set(-10.5,3.75,0);Ye.lookAt(0,0,0);document.getElementById("start-btn").addEventListener("click",Xc);document.getElementById("restart-btn").addEventListener("click",Xc);document.getElementById("victory-restart-btn").addEventListener("click",Xc);document.getElementById("campaign-btn").addEventListener("click",nS);document.getElementById("settings-btn").addEventListener("click",Yy);PM(Yf);Wc.start();$f();
