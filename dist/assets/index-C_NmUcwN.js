(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Wc="183",Tm=0,Wu=1,Am=2,Pa=1,wm=2,xr=3,ri=0,Jt=1,sn=2,ii=0,Us=1,En=2,Xu=3,qu=4,Rm=5,Gi=100,Cm=101,Im=102,Pm=103,Lm=104,Dm=200,Nm=201,Um=202,Fm=203,Pl=204,Ll=205,Om=206,Bm=207,km=208,zm=209,Hm=210,Vm=211,Gm=212,Wm=213,Xm=214,Dl=0,Nl=1,Ul=2,ks=3,Fl=4,Ol=5,Bl=6,kl=7,Xc=0,qm=1,Ym=2,Un=0,hf=1,df=2,ff=3,pf=4,mf=5,gf=6,_f=7,Yu="attached",Km="detached",xf=300,es=301,zs=302,Eo=303,bo=304,ho=306,Hs=1e3,Ln=1001,Ga=1002,Lt=1003,vf=1004,vr=1005,bt=1006,La=1007,Jn=1008,rn=1009,yf=1010,Mf=1011,wr=1012,qc=1013,On=1014,hn=1015,ai=1016,Yc=1017,Kc=1018,Rr=1020,Sf=35902,Ef=35899,bf=1021,Tf=1022,dn=1023,oi=1026,Yi=1027,jc=1028,$c=1029,Vs=1030,Zc=1031,Jc=1033,Da=33776,Na=33777,Ua=33778,Fa=33779,zl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,Kl=37489,jl=37490,$l=37491,Zl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,uc=37821,hc=36492,dc=36494,fc=36495,pc=36283,mc=36284,gc=36285,_c=36286,Cr=2300,Ir=2301,To=2302,Ku=2303,ju=2400,$u=2401,Zu=2402,jm=2500,$m=0,Af=1,xc=2,Zm=3200,Qc=0,Jm=1,vi="",Vt="srgb",$t="srgb-linear",Wa="linear",at="srgb",as=7680,Ju=519,Qm=512,eg=513,tg=514,eu=515,ng=516,ig=517,tu=518,sg=519,vc=35044,Qu="300 es",Dn=2e3,Pr=2001;function rg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function og(){const i=Lr("canvas");return i.style.display="block",i}const eh={};function Xa(...i){const e="THREE."+i.shift();console.log(e,...i)}function wf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qa(...i){const e=i.join(" ");e in eh||(eh[e]=!0,Re(...i))}function lg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cg={[Dl]:Nl,[Ul]:Bl,[Fl]:kl,[ks]:Ol,[Nl]:Dl,[Bl]:Ul,[kl]:Fl,[Ol]:ks};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Er=Math.PI/180,Gs=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e){return(i%e+e)%e}function ug(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hg(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function dg(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function fg(i,e=1){return e-Math.abs(nu(i,e*2)-e)}function pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _g(i,e){return i+Math.random()*(e-i)}function xg(i){return i*(.5-Math.random())}function vg(i){i!==void 0&&(th=i);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(i){return i*Er}function Mg(i){return i*Gs}function Sg(i){return(i&i-1)===0&&i!==0}function Eg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ag={DEG2RAD:Er,RAD2DEG:Gs,generateUUID:Sn,clamp:je,euclideanModulo:nu,mapLinear:ug,inverseLerp:hg,lerp:br,damp:dg,pingpong:fg,smoothstep:pg,smootherstep:mg,randInt:gg,randFloat:_g,randFloatSpread:xg,seededRandom:vg,degToRad:yg,radToDeg:Mg,isPowerOfTwo:Sg,ceilPowerOfTwo:Eg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:Tg,normalize:ot,denormalize:Mn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+x*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+x*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new P,nh=new on;class Ve{constructor(e,t,n,s,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],M=s[7],T=s[2],A=s[5],R=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*S+l*A,r[6]=a*p+o*M+l*R,r[1]=c*x+u*y+h*T,r[4]=c*m+u*S+h*A,r[7]=c*p+u*M+h*R,r[2]=d*x+f*y+g*T,r[5]=d*m+f*S+g*A,r[8]=d*p+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Ve,ih=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){const i={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$t]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Je=wg();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class Rg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Lr("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cg=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Ig=0;const Co=new P;class Nt extends js{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Ln,s=Ln,r=bt,a=Jn,o=dn,l=rn,c=Nt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Sn(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=xf;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,T=(p+1)/2,A=(u+d)/4,R=(h+x)/4,_=(g+m)/4;return S>M&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=R/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pg extends js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Nt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new iu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Pg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rf extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dg,e,Ng)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),hi.crossVectors(n,tn),hi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),hi.crossVectors(n,tn)),hi.normalize(),Yr.crossVectors(tn,hi),s[0]=hi.x,s[4]=Yr.x,s[8]=tn.x,s[1]=hi.y,s[5]=Yr.y,s[9]=tn.y,s[2]=hi.z,s[6]=Yr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],M=n[11],T=n[15],A=s[0],R=s[4],_=s[8],b=s[12],B=s[1],I=s[5],O=s[9],k=s[13],X=s[2],z=s[6],G=s[10],L=s[14],Z=s[3],j=s[7],re=s[11],ce=s[15];return r[0]=a*A+o*B+l*X+c*Z,r[4]=a*R+o*I+l*z+c*j,r[8]=a*_+o*O+l*G+c*re,r[12]=a*b+o*k+l*L+c*ce,r[1]=u*A+h*B+d*X+f*Z,r[5]=u*R+h*I+d*z+f*j,r[9]=u*_+h*O+d*G+f*re,r[13]=u*b+h*k+d*L+f*ce,r[2]=g*A+x*B+m*X+p*Z,r[6]=g*R+x*I+m*z+p*j,r[10]=g*_+x*O+m*G+p*re,r[14]=g*b+x*k+m*L+p*ce,r[3]=y*A+S*B+M*X+T*Z,r[7]=y*R+S*I+M*z+T*j,r[11]=y*_+S*O+M*G+T*re,r[15]=y*b+S*k+M*L+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*h,M=o*d-l*h,T=a*f-c*u,A=a*d-l*u,R=a*h-o*u;return t*(x*y-m*S+p*M)-n*(g*y-m*T+p*A)+s*(g*S-x*T+p*R)-r*(g*M-x*A+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*o-n*a,S=t*l-s*a,M=t*c-r*a,T=n*l-s*o,A=n*c-r*o,R=s*c-r*l,_=u*x-h*g,b=u*m-d*g,B=u*p-f*g,I=h*m-d*x,O=h*p-f*x,k=d*p-f*m,X=y*k-S*O+M*I+T*B-A*b+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=(o*k-l*O+c*I)*z,e[1]=(s*O-n*k-r*I)*z,e[2]=(x*R-m*A+p*T)*z,e[3]=(d*A-h*R-f*T)*z,e[4]=(l*B-a*k-c*b)*z,e[5]=(t*k-s*B+r*b)*z,e[6]=(m*M-g*R-p*S)*z,e[7]=(u*R-d*M+f*S)*z,e[8]=(a*O-o*B+c*_)*z,e[9]=(n*B-t*O-r*_)*z,e[10]=(g*A-x*M+p*y)*z,e[11]=(h*M-u*A-f*y)*z,e[12]=(o*b-a*I-l*_)*z,e[13]=(t*I-n*b+s*_)*z,e[14]=(x*S-g*T-m*y)*z,e[15]=(u*T-h*S+d*y)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,y=l*c,S=l*u,M=l*h,T=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+M)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,u=1/o,h=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Pr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Dn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Pr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new P,_n=new He,Dg=new P(0,0,0),Ng=new P(1,1,1),hi=new P,Yr=new P,tn=new P,rh=new He,ah=new on;class bn{constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ug=0;const oh=new P,cs=new on,Gn=new He,Kr=new P,ir=new P,Fg=new P,Og=new on,lh=new P(1,0,0),ch=new P(0,1,0),uh=new P(0,0,1),hh={type:"added"},Bg={type:"removed"},us={type:"childadded",child:null},Io={type:"childremoved",child:null};class yt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new bn,n=new on,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ir,Kr,this.up):Gn.lookAt(Kr,ir,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Gn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),us.child=e,this.dispatchEvent(us),us.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bg),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=nu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Je.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Vt){Je.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(jr);const n=br(di.h,jr.h,t),s=br(di.s,jr.s,t),r=br(di.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Le;Le.NAMES=Cf;class If extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new P,Wn=new P,Do=new P,Xn=new P,hs=new P,ds=new P,dh=new P,No=new P,Uo=new P,Fo=new P,Oo=new vt,Bo=new vt,ko=new vt;class un{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),Wn.subVectors(n,t),Do.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Wn),l=xn.dot(Do),c=Wn.dot(Wn),u=Wn.dot(Do),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Oo.setScalar(0),Bo.setScalar(0),ko.setScalar(0),Oo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;hs.subVectors(s,n),ds.subVectors(r,n),No.subVectors(e,n);const l=hs.dot(No),c=ds.dot(No);if(l<=0&&c<=0)return t.copy(n);Uo.subVectors(e,s);const u=hs.dot(Uo),h=ds.dot(Uo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(hs,a);Fo.subVectors(e,r);const f=hs.dot(Fo),g=ds.dot(Fo);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ds,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return dh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(dh,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(hs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class li{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Zr.subVectors(this.max,sr),fs.subVectors(e.a,sr),ps.subVectors(e.b,sr),ms.subVectors(e.c,sr),fi.subVectors(ps,fs),pi.subVectors(ms,ps),Di.subVectors(fs,ms);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!zo(t,fs,ps,ms,Zr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,fs,ps,ms,Zr))?!1:(Jr.crossVectors(fi,pi),t=[Jr.x,Jr.y,Jr.z],zo(t,fs,ps,ms,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,$r=new li,fs=new P,ps=new P,ms=new P,fi=new P,pi=new P,Di=new P,sr=new P,Zr=new P,Jr=new P,Ni=new P;function zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const It=new P,Qr=new Be;let zg=0;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class Pf extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lf extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hg=new li,rr=new P,Ho=new P;class kn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Ho)),this.expandByPoint(rr.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vg=0;const ln=new He,Vo=new yt,gs=new P,nn=new li,ar=new li,Bt=new P;class wt extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rg(e)?Lf:Pf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(nn.min,ar.min),nn.expandByPoint(Bt),Bt.addVectors(nn.max,ar.max),nn.expandByPoint(Bt)):(nn.expandByPoint(ar.min),nn.expandByPoint(ar.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Bt.add(gs)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;const c=new P,u=new P,h=new P,d=new Be,f=new Be,g=new Be,x=new P,m=new P;function p(_,b,B){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,B),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,B),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[_].add(x),o[b].add(x),o[B].add(x),l[_].add(m),l[b].add(m),l[B].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,b=y.length;_<b;++_){const B=y[_],I=B.start,O=B.count;for(let k=I,X=I+O;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new P,M=new P,T=new P,A=new P;function R(_){T.fromBufferAttribute(s,_),A.copy(T);const b=o[_];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(A,b);const I=M.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,b=y.length;_<b;++_){const B=y[_],I=B.start,O=B.count;for(let k=I,X=I+O;k<X;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Et(d,u,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new P;class Dr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gg=0;class pn extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Us,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ya extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const or=new P,xs=new P,vs=new P,ys=new Be,lr=new Be,Nf=new He,ea=new P,cr=new P,ta=new P,fh=new Be,Go=new Be,ph=new Be;class yc extends yt{constructor(e=new Ya){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Df(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Dr(n,3,0,!1)),_s.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;na(ea.set(-.5,-.5,0),vs,a,xs,s,r),na(cr.set(.5,-.5,0),vs,a,xs,s,r),na(ta.set(.5,.5,0),vs,a,xs,s,r),fh.set(0,0),Go.set(1,0),ph.set(1,1);let o=e.ray.intersectTriangle(ea,cr,ta,!1,or);if(o===null&&(na(cr.set(-.5,.5,0),vs,a,xs,s,r),Go.set(0,1),o=e.ray.intersectTriangle(ea,ta,cr,!1,or),o===null))return;const l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:un.getInterpolation(or,ea,cr,ta,fh,Go,ph,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*ys.x-s*ys.y,lr.y=s*ys.x+r*ys.y):lr.copy(ys),i.copy(e),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(Nf)}const Yn=new P,Wo=new P,ia=new P,mi=new P,Xo=new P,sa=new P,qo=new P;class Br{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wo.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Wo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ia),o=mi.dot(this.direction),l=-mi.dot(ia),c=mi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wo).addScaledVector(ia,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){Xo.subVectors(t,e),sa.subVectors(n,e),qo.crossVectors(Xo,sa);let a=this.direction.dot(qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(sa.crossVectors(mi,sa));if(l<0)return null;const c=o*this.direction.dot(Xo.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(qo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mh=new He,Ui=new Br,ra=new kn,gh=new P,aa=new P,oa=new P,la=new P,Yo=new P,ca=new P,_h=new P,ua=new P;class Pt extends yt{constructor(e=new wt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Yo.fromBufferAttribute(h,e),a?ca.addScaledVector(Yo,u):ca.addScaledVector(Yo.sub(t),u))}t.add(ca)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(ra.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ra,gh)===null||Ui.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){const A=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=ha(this,p,e,n,c,u,h,A,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=ha(this,a,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){const A=M,R=M+1,_=M+2;s=ha(this,p,e,n,c,u,h,A,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=m,S=m+1,M=m+2;s=ha(this,a,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wg(i,e,t,n,s,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ri,o),l===null)return null;ua.copy(o),ua.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:i}}function ha(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,aa),i.getVertexPosition(l,oa),i.getVertexPosition(c,la);const u=Wg(i,e,t,n,aa,oa,la,_h);if(u){const h=new P;un.getBarycoord(_h,aa,oa,la,h),s&&(u.uv=un.getInterpolatedAttribute(s,o,l,c,h,new Be)),r&&(u.uv1=un.getInterpolatedAttribute(r,o,l,c,h,new Be)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};un.getNormal(aa,oa,la,d.normal),u.face=d,u.barycoord=h}return u}const xh=new P,vh=new vt,yh=new vt,Xg=new P,Mh=new He,da=new P,Ko=new kn,Sh=new He,jo=new Br;class qg extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(s),e.ray.intersectsSphere(Ko)!==!1&&(Sh.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Sh),!(this.boundingBox!==null&&jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Km?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;vh.fromBufferAttribute(s.attributes.skinIndex,e),yh.fromBufferAttribute(s.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yh.getComponent(r);if(a!==0){const o=vh.getComponent(r);Mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xg.copy(xh).applyMatrix4(Mh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uf extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ru extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,u=Lt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new He,Yg=new He;class au{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Yg;Eh.multiplyMatrices(o,t[r]),Eh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new au(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ru(t,e,e,dn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Re("Skeleton: No bone found with UUID:",r),a=new Uf),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Mc extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new He,bh=new He,fa=[],Th=new li,Kg=new He,ur=new Pt,hr=new kn;class jg extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Th.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),hr.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),bh.multiplyMatrices(n,Ms),ur.matrixWorld=bh,ur.raycast(e,fa);for(let a=0,o=fa.length;a<o;a++){const l=fa[a];l.instanceId=r,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ru(new Float32Array(s*this.count),s,this.count,jc,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $o=new P,$g=new P,Zg=new Ve;class Vi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$o.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zg.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new kn,Jg=new Be(.5,.5),pa=new P;class ou{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,a=new Vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,p-g,T-y).normalize(),s[1].setComponents(c+a,f+u,p+g,T+y).normalize(),s[2].setComponents(c+o,f+h,p+x,T+S).normalize(),s[3].setComponents(c-o,f-h,p-x,T-S).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,p-m,T-M).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-M).normalize(),t===Dn)s[5].setComponents(c+l,f+d,p+m,T+M).normalize();else if(t===Pr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=Jg.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ka=new P,ja=new P,Ah=new He,dr=new Br,ma=new kn,Zo=new P,wh=new P;class fo extends yt{constructor(e=new wt,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ka.fromBufferAttribute(t,s-1),ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ka.distanceTo(ja);e.setAttribute("lineDistance",new Mt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ah.copy(s).invert(),dr.copy(e.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=u.getX(x),y=u.getX(x+1),S=ga(this,e,dr,l,p,y,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=ga(this,e,dr,l,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=ga(this,e,dr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ga(this,e,dr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ga(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Ka.fromBufferAttribute(o,s),ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Ka,ja,Zo,wh)>n)return;Zo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zo);if(!(c<e.near||c>e.far))return{distance:c,point:wh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Rh=new P,Ch=new P;class Qg extends fo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Rh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new Mt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e0 extends fo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nr extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new He,Sc=new Br,_a=new kn,xa=new P;class $a extends yt{constructor(e=new wt,t=new Nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Ih.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Ih);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);xa.fromBufferAttribute(h,m),Ph(xa,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)xa.fromBufferAttribute(h,g),Ph(xa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ph(i,e,t,n,s,r,a){const o=Sc.distanceSqToPoint(i);if(o<t){const l=new P;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ff extends Nt{constructor(e=[],t=es,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cu extends Nt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ur extends Nt{constructor(e,t,n=On,s,r,a,o=Lt,l=Lt,c,u=oi,h=1){if(u!==oi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new iu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t0 extends Ur{constructor(e,t=On,n=es,s,r,a=Lt,o=Lt,l,c=oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Of extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kr extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function g(x,m,p,y,S,M,T,A,R,_,b){const B=M/R,I=T/_,O=M/2,k=T/2,X=A/2,z=R+1,G=_+1;let L=0,Z=0;const j=new P;for(let re=0;re<G;re++){const ce=re*I-k;for(let ue=0;ue<z;ue++){const Ue=ue*B-O;j[x]=Ue*y,j[m]=ce*S,j[p]=X,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(ue/R),h.push(1-re/_),L+=1}}for(let re=0;re<_;re++)for(let ce=0;ce<R;ce++){const ue=d+ce+z*re,Ue=d+ce+z*(re+1),tt=d+(ce+1)+z*(re+1),De=d+(ce+1)+z*re;l.push(ue,Ue,De),l.push(Ue,tt,De),Z+=6}o.addGroup(f,Z,b),f+=Z,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class po extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function y(){const M=new P,T=new P;let A=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const b=[],B=_/r,I=B*(t-e)+e;for(let O=0;O<=s;O++){const k=O/s,X=k*l+o,z=Math.sin(X),G=Math.cos(X);T.x=I*z,T.y=-B*n+m,T.z=I*G,h.push(T.x,T.y,T.z),M.set(z,R,G).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-B),b.push(g++)}x.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const B=x[b][_],I=x[b+1][_],O=x[b+1][_+1],k=x[b][_+1];(e>0||b!==0)&&(u.push(B,I,k),A+=3),(t>0||b!==r-1)&&(u.push(I,O,k),A+=3)}c.addGroup(p,A,0),p+=A}function S(M){const T=g,A=new Be,R=new P;let _=0;const b=M===!0?e:t,B=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*B,0),d.push(0,B,0),f.push(.5,.5),g++;const I=g;for(let O=0;O<=s;O++){const X=O/s*l+o,z=Math.cos(X),G=Math.sin(X);R.x=b*G,R.y=m*B,R.z=b*z,h.push(R.x,R.y,R.z),d.push(0,B,0),A.x=z*.5+.5,A.y=G*.5*B+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const k=T+O,X=I+O;M===!0?u.push(X,X+1,k):u.push(X+1,X,k),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uu extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new P,M=new P,T=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],M),f(t[A+2],T),l(S,M,T,y)}function l(y,S,M,T){const A=T+1,R=[];for(let _=0;_<=A;_++){R[_]=[];const b=y.clone().lerp(M,_/A),B=S.clone().lerp(M,_/A),I=A-_;for(let O=0;O<=I;O++)O===0&&_===A?R[_][O]=b:R[_][O]=b.clone().lerp(B,O/I)}for(let _=0;_<A;_++)for(let b=0;b<2*(A-_)-1;b++){const B=Math.floor(b/2);b%2===0?(d(R[_][B+1]),d(R[_+1][B]),d(R[_][B])):(d(R[_][B+1]),d(R[_+1][B+1]),d(R[_+1][B]))}}function c(y){const S=new P;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const M=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(M,1-T)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],M=a[y+2],T=a[y+4],A=Math.max(S,M,T),R=Math.min(S,M,T);A>.9&&R<.1&&(S<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){const y=new P,S=new P,M=new P,T=new P,A=new Be,R=new Be,_=new Be;for(let b=0,B=0;b<r.length;b+=9,B+=6){y.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(a[B+0],a[B+1]),R.set(a[B+2],a[B+3]),_.set(a[B+4],a[B+5]),T.copy(y).add(S).add(M).divideScalar(3);const I=m(T);x(A,B+0,y,I),x(R,B+2,S,I),x(_,B+4,M,I)}}function x(y,S,M,T){T<0&&y.x===1&&(a[S]=y.x-1),M.x===0&&M.z===0&&(a[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.vertices,e.indices,e.radius,e.detail)}}class hu extends uu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hu(e.radius,e.detail)}}class $s extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let S=0;S<c;S++){const M=S*h-r;g.push(M,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,M=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;f.push(S,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new P,g=new Be;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,M=y+n+1,T=y+n+2,A=y+1;o.push(S,M,A),o.push(M,T,A)}}this.setIndex(o),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mo extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+M,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const S=u[p][y+1],M=u[p][y],T=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&f.push(S,M,A),(p!==n-1||l<Math.PI)&&f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function n0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const i0={clone:Ws,merge:Kt};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class a0 extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fu extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends fu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ji extends pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function va(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function c0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function kf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Zs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class u0 extends Zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $u:r=e,o=2*t-n;break;case Zu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $u:a=e,l=2*n-t;break;case Zu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+y*a[c+T]+S*a[l+T]+M*a[h+T];return r}}class h0 extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class d0 extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class f0 extends Zs{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const x=(n-t)/(s-t),m=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*x;return r}const f=o*2,g=e-1;for(let x=0;x!==o;++x){const m=a[c+x],p=a[l+x],y=g*f+x*2,S=d[y],M=d[y+1],T=e*f+x*2,A=h[T],R=h[T+1];let _=(n-t)/(s-t),b,B,I,O,k;for(let X=0;X<8;X++){b=_*_,B=b*_,I=1-_,O=I*I,k=O*I;const G=k*t+3*O*_*S+3*I*b*A+B*s-n;if(Math.abs(G)<1e-10)break;const L=3*O*(S-t)+6*I*_*(A-S)+3*b*(s-A);if(Math.abs(L)<1e-10)break;_=_-G/L,_=Math.max(0,Math.min(1,_))}r[x]=k*m+3*O*_*M+3*I*b*R+B*p}return r}}class Tn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new d0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new h0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new f0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ag(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ir;class Js extends Tn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Cr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class zf extends Tn{constructor(e,t,n,s){super(e,t,n,s)}}zf.prototype.ValueTypeName="color";class Xs extends Tn{constructor(e,t,n,s){super(e,t,n,s)}}Xs.prototype.ValueTypeName="number";class p0 extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)on.slerpFlat(r,0,a,c-o,a,c,l);return r}}class qs extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new p0(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Tn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Cr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends Tn{constructor(e,t,n,s){super(e,t,n,s)}}Ys.prototype.ValueTypeName="vector";class m0{constructor(e="",t=-1,n=[],s=jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(_0(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=c0(l);l=Lh(l,1,u),c=Lh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ne("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];kf(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];m.push(S.time),p.push(S.morphTarget===x?1:0)}s.push(new Xs(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(Ys,f+".position",d,"pos",s),n(qs,f+".quaternion",d,"rot",s),n(Ys,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function g0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return zf;case"quaternion":return qs;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g0(i.type);if(i.times===void 0){const t=[],n=[];kf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Dh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Dh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Dh(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class x0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const v0=new x0;class er{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class y0 extends Error{constructor(e,t){super(e),this.response=t}}class Hf extends er{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:S,value:M})=>{if(S)p.close();else{x+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=u.length;A<R;A++){const _=u[A];_.onProgress&&_.onProgress(T)}p.enqueue(M),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new y0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Qn.add(`file:${e}`,c);const u=Kn[e];delete Kn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class M0 extends er{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ss.get(a);h===void 0&&(h=[],Ss.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Lr("img");function l(){u(),t&&t(this);const h=Ss.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Qn.remove(`image:${e}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class S0 extends er{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,a=new M0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class zr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class E0 extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Jo=new He,Nh=new P,Uh=new P;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ya=new P,Ma=new on,wn=new P;class Vf extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,Ma,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ma,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ya,Ma,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ma,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new P,Fh=new Be,Oh=new Be;class qt extends Vf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class b0 extends pu{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class T0 extends zr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new b0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class A0 extends pu{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class w0 extends zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new A0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class go extends Vf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class R0 extends pu{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _o extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new R0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mu extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qo=new WeakMap;class C0 extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Qo.has(a)===!0)s&&s(Qo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Qo.set(l,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=-90,bs=1;class I0 extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Es,bs,e,t);s.layers=this.layers,this.add(s);const r=new qt(Es,bs,e,t);r.layers=this.layers,this.add(r);const a=new qt(Es,bs,e,t);a.layers=this.layers,this.add(a);const o=new qt(Es,bs,e,t);o.layers=this.layers,this.add(o);const l=new qt(Es,bs,e,t);l.layers=this.layers,this.add(l);const c=new qt(Es,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class P0 extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gu="\\[\\]\\.:\\/",L0=new RegExp("["+gu+"]","g"),_u="[^"+gu+"]",D0="[^"+gu.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",_u),U0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),B0=new RegExp("^"+N0+U0+F0+O0+"$"),k0=["material","materials","bones","map"];class z0{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);k0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=z0;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Bh=new He;class H0{constructor(e,t,n=0,s=1/0){this.ray=new Br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,n=[]){return Ec(e,this,n,t),n.sort(kh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,n,t);return n.sort(kh),n}}function kh(i,e){return i.distance-e.distance}function Ec(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ec(r[a],e,t,!0)}}class V0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zh(i,e,t,n){const s=G0(n);switch(t){case bf:return i*e;case jc:return i*e/s.components*s.byteLength;case $c:return i*e/s.components*s.byteLength;case Vs:return i*e*2/s.components*s.byteLength;case Zc:return i*e*2/s.components*s.byteLength;case Tf:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Jc:return i*e*4/s.components*s.byteLength;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case zl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:case Yl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:case jl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(i){switch(i){case rn:case yf:return{byteLength:1,components:1};case wr:case Mf:case ai:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case On:case qc:case hn:return{byteLength:4,components:1};case Sf:case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);function Gf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function W0(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
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
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s_=`#ifdef USE_IRIDESCENCE
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
#endif`,r_=`#ifdef USE_BUMPMAP
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,p_=`#define PI 3.141592653589793
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
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
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
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V_=`PhysicalMaterial material;
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
#endif`,G_=`uniform sampler2D dfgLUT;
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
}`,W_=`
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
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
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
}`,Jx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,ov=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,_v=`#define TOON
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
}`,xv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:K0,alphatest_fragment:j0,alphatest_pars_fragment:$0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:s_,bumpmap_pars_fragment:r_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:u_,color_pars_fragment:h_,color_pars_vertex:d_,color_vertex:f_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:x_,emissivemap_fragment:v_,emissivemap_pars_fragment:y_,colorspace_fragment:M_,colorspace_pars_fragment:S_,envmap_fragment:E_,envmap_common_pars_fragment:b_,envmap_pars_fragment:T_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:O_,envmap_vertex:w_,fog_vertex:R_,fog_pars_vertex:C_,fog_fragment:I_,fog_pars_fragment:P_,gradientmap_pars_fragment:L_,lightmap_pars_fragment:D_,lights_lambert_fragment:N_,lights_lambert_pars_fragment:U_,lights_pars_begin:F_,lights_toon_fragment:B_,lights_toon_pars_fragment:k_,lights_phong_fragment:z_,lights_phong_pars_fragment:H_,lights_physical_fragment:V_,lights_physical_pars_fragment:G_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:$_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:ox,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:ux,normal_pars_vertex:hx,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:_x,opaque_fragment:xx,packing:vx,premultiplied_alpha_fragment:yx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ex,roughnessmap_fragment:bx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:wx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Ix,skinning_pars_vertex:Px,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ox,transmission_fragment:Bx,transmission_pars_fragment:kx,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:Kx,cube_frag:jx,depth_vert:$x,depth_frag:Zx,distance_vert:Jx,distance_frag:Qx,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:rv,meshlambert_vert:av,meshlambert_frag:ov,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:hv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:xv,points_frag:vv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:Ev},he={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},In={basic:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Kt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Kt([he.lights,he.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};In.physical={uniforms:Kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Sa={r:0,b:0,g:0},Oi=new bn,bv=new He;function Tv(i,e,t,n,s,r){const a=new Le(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const M=y.backgroundBlurriness>0;S=e.get(S,M)}return S}function g(y){let S=!1;const M=f(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===ho)?(c===void 0&&(c=new Pt(new kr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ws(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Oi.copy(S.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Oi)),c.material.toneMapped=Je.getTransfer(M.colorSpace)!==at,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pt(new $s(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ws(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Sa,Bf(i)),t.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Av(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(I,O,k,X,z){let G=!1;const L=h(I,X,k,O);r!==L&&(r=L,c(r.object)),G=f(I,X,k,z),G&&g(I,X,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(I,O,k,X),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,O,k,X){const z=X.wireframe===!0;let G=n[O.id];G===void 0&&(G={},n[O.id]=G);const L=I.isInstancedMesh===!0?I.id:0;let Z=G[L];Z===void 0&&(Z={},G[L]=Z);let j=Z[k.id];j===void 0&&(j={},Z[k.id]=j);let re=j[z];return re===void 0&&(re=d(l()),j[z]=re),re}function d(I){const O=[],k=[],X=[];for(let z=0;z<t;z++)O[z]=0,k[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:X,object:I,attributes:{},index:null}}function f(I,O,k,X){const z=r.attributes,G=O.attributes;let L=0;const Z=k.getAttributes();for(const j in Z)if(Z[j].location>=0){const ce=z[j];let ue=G[j];if(ue===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;L++}return r.attributesNum!==L||r.index!==X}function g(I,O,k,X){const z={},G=O.attributes;let L=0;const Z=k.getAttributes();for(const j in Z)if(Z[j].location>=0){let ce=G[j];ce===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));const ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),z[j]=ue,L++}r.attributes=z,r.attributesNum=L,r.index=X}function x(){const I=r.newAttributes;for(let O=0,k=I.length;O<k;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const k=r.newAttributes,X=r.enabledAttributes,z=r.attributeDivisors;k[I]=1,X[I]===0&&(i.enableVertexAttribArray(I),X[I]=1),z[I]!==O&&(i.vertexAttribDivisor(I,O),z[I]=O)}function y(){const I=r.newAttributes,O=r.enabledAttributes;for(let k=0,X=O.length;k<X;k++)O[k]!==I[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function S(I,O,k,X,z,G,L){L===!0?i.vertexAttribIPointer(I,O,k,z,G):i.vertexAttribPointer(I,O,k,X,z,G)}function M(I,O,k,X){x();const z=X.attributes,G=k.getAttributes(),L=O.defaultAttributeValues;for(const Z in G){const j=G[Z];if(j.location>=0){let re=z[Z];if(re===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){const ce=re.normalized,ue=re.itemSize,Ue=e.get(re);if(Ue===void 0)continue;const tt=Ue.buffer,De=Ue.type,W=Ue.bytesPerElement,J=De===i.INT||De===i.UNSIGNED_INT||re.gpuType===qc;if(re.isInterleavedBufferAttribute){const ee=re.data,Ie=ee.stride,_e=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<j.locationSize;Me++)p(j.location+Me,ee.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<j.locationSize;Me++)m(j.location+Me);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Me=0;Me<j.locationSize;Me++)S(j.location+Me,ue/j.locationSize,De,ce,Ie*W,(_e+ue/j.locationSize*Me)*W,J)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee,re.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<j.locationSize;ee++)m(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ee=0;ee<j.locationSize;ee++)S(j.location+ee,ue/j.locationSize,De,ce,ue*W,ue/j.locationSize*ee*W,J)}}else if(L!==void 0){const ce=L[Z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(j.location,ce);break;case 3:i.vertexAttrib3fv(j.location,ce);break;case 4:i.vertexAttrib4fv(j.location,ce);break;default:i.vertexAttrib1fv(j.location,ce)}}}}y()}function T(){b();for(const I in n){const O=n[I];for(const k in O){const X=O[k];for(const z in X){const G=X[z];for(const L in G)u(G[L].object),delete G[L];delete X[z]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const k in O){const X=O[k];for(const z in X){const G=X[z];for(const L in G)u(G[L].object),delete G[L];delete X[z]}}delete n[I.id]}function R(I){for(const O in n){const k=n[O];for(const X in k){const z=k[X];if(z[I.id]===void 0)continue;const G=z[I.id];for(const L in G)u(G[L].object),delete G[L];delete z[I.id]}}}function _(I){for(const O in n){const k=n[O],X=I.isInstancedMesh===!0?I.id:0,z=k[X];if(z!==void 0){for(const G in z){const L=z[G];for(const Z in L)u(L[Z].object),delete L[Z];delete z[G]}delete k[X],Object.keys(k).length===0&&delete n[O]}}}function b(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:B,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function wv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Cv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Vi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let M=p.clippingState||null;l.value=M,M=u(g,d,S,f);for(let T=0;T!==S;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==x;++S,M+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Mi=4,Hh=[.125,.215,.35,.446,.526,.582],Wi=20,Iv=256,fr=new go,Vh=new Le;let el=null,tl=0,nl=0,il=!1;const Pv=new P;class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pv}=r;el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:ai,format:dn,colorSpace:$t,depthBuffer:!1},s=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lv(r)),this._blurMaterial=Nv(r,e,t),this._ggxMaterial=Dv(r,e,t)}return s}_compileMaterial(e){const t=new Pt(new wt,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,s,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vh),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new kr,new Dt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Vh),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const T=this._cubeSize;Ts(s,M*T,S>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===es||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Mi?n-g+Mi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ts(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Wi;m>Wi&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let y=0;for(let R=0;R<Wi;++R){const _=R/x,b=Math.exp(-_*_/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const M=this._sizeLods[s],T=3*M*(s>S-Mi?s-S+Mi:0),A=4*(this._cubeSize-M);Ts(t,T,A,3*M,2*M),l.setRenderTarget(t),l.render(h,fr)}}function Lv(i){const e=[],t=[],n=[];let s=i;const r=i-Mi+1+Hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Mi?l=Hh[a-i+Mi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,_=A>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];y.set(b,x*g*A),S.set(d,m*g*A);const B=[A,A,A,A,A,A];M.set(B,p*g*A)}const T=new wt;T.setAttribute("position",new Et(y,x)),T.setAttribute("uv",new Et(S,m)),T.setAttribute("faceIndex",new Et(M,p)),n.push(new Pt(T,null)),s>Mi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wh(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dv(i,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nv(i,e,t){const n=new Float32Array(Wi),s=new P(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function xo(){return`

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
	`}class Wf extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ff(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kr(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ii});r.uniforms.tEquirect.value=t;const a=new Pt(s,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=bt),new I0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Uv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Eo||f===bo)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Wf(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Eo||f===bo,x=f===es||f===zs;if(g||x){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Gh(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Gh(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Eo?d.mapping=es:f===bo&&(d.mapping=zs),d}function l(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Fv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&qa("WebGLRenderer: "+n+" extension not supported."),s}}}function Ov(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let S=0,M=y.length;S<M;S+=3){const T=y[S+0],A=y[S+1],R=y[S+2];d.push(T,A,A,R,R,T)}}else{const y=g.array;x=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const T=S+0,A=S+1,R=S+2;d.push(T,A,A,R,R,T)}}const m=new(g.count>=65535?Lf:Pf)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Bv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zv(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};var f=B;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*h),_=new Rf(R,T,A,h);_.type=hn,_.needsUpdate=!0;const b=M*4;for(let I=0;I<h;I++){const O=p[I],k=y[I],X=S[I],z=T*A*4*I;for(let G=0;G<O.count;G++){const L=G*b;g===!0&&(s.fromBufferAttribute(O,G),R[z+L+0]=s.x,R[z+L+1]=s.y,R[z+L+2]=s.z,R[z+L+3]=0),x===!0&&(s.fromBufferAttribute(k,G),R[z+L+4]=s.x,R[z+L+5]=s.y,R[z+L+6]=s.z,R[z+L+7]=0),m===!0&&(s.fromBufferAttribute(X,G),R[z+L+8]=s.x,R[z+L+9]=s.y,R[z+L+10]=s.z,R[z+L+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new Be(T,A)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hv(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Vv={[hf]:"LINEAR_TONE_MAPPING",[df]:"REINHARD_TONE_MAPPING",[ff]:"CINEON_TONE_MAPPING",[pf]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[_f]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};function Gv(i,e,t,n,s){const r=new Fn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Fn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new wt;o.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const l=new a0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(o,l),u=new go(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,M=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===Un&&m.length===0)return!1;if(x=S,S!==null){const M=S.width,T=S.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=g,f=!0;let M=r,T=a;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(y,T,M,S),R.needsSwap!==!1)){const _=M;M=T,T=_}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},Je.getTransfer(h)===at&&(l.defines.SRGB_TRANSFER="");const A=Vv[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(x),y.render(c,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Xf=new Nt,bc=new Ur(1,1),qf=new Rf,Yf=new Lg,Kf=new Ff,Yh=[],Kh=[],jh=new Float32Array(16),$h=new Float32Array(9),Zh=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Ft(t,n)}}function jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Ft(t,n)}}function $v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Ft(t,n)}}function Zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function ty(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=t.isReversedDepthBuffer()?tu:eu,r=bc):r=Xf,t.setTexture2D(e||r,s)}function ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yf,s)}function oy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function ly(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qf,s)}function cy(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return jv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}}function uy(i,e){i.uniform1fv(this.addr,e)}function hy(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function dy(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function fy(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function py(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function my(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gy(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _y(i,e){i.uniform1iv(this.addr,e)}function xy(i,e){i.uniform2iv(this.addr,e)}function vy(i,e){i.uniform3iv(this.addr,e)}function yy(i,e){i.uniform4iv(this.addr,e)}function My(i,e){i.uniform1uiv(this.addr,e)}function Sy(i,e){i.uniform2uiv(this.addr,e)}function Ey(i,e){i.uniform3uiv(this.addr,e)}function by(i,e){i.uniform4uiv(this.addr,e)}function Ty(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bc:a=Xf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ay(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yf,r[a])}function wy(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function Ry(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qf,r[a])}function Cy(i){switch(i){case 5126:return uy;case 35664:return hy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return My;case 36294:return Sy;case 36295:return Ey;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ry}}class Iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cy(t.type)}}class Py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cy(t.type)}}class Ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function Dy(i,e,t){const n=i.name,s=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),a=sl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jh(t,c===void 0?new Iy(o,i,e):new Py(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Ly(o),Jh(t,h)),t=h}}}class Oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dy(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ny=37297;let Uy=0;function Fy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ed=new Ve;function Oy(i){Je._getMatrix(ed,Je.workingColorSpace,i);const e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Wa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function td(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fy(i.getShaderSource(e),o)}else return r}function By(i,e){const t=Oy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ky={[hf]:"Linear",[df]:"Reinhard",[ff]:"Cineon",[pf]:"ACESFilmic",[gf]:"AgX",[_f]:"Neutral",[mf]:"Custom"};function zy(i,e){const t=ky[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new P;function Hy(){Je.getLuminanceCoefficients(Ea);const i=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Gy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function nd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(Xy,Yy)}const qy=new Map;function Yy(i,e){let t=Ge[e];if(t===void 0){const n=qy.get(e);if(n!==void 0)t=Ge[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(Ky,jy)}function jy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $y={[Pa]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Zy(i){return $y[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jy={[es]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function Qy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eM={[zs]:"ENVMAP_MODE_REFRACTION"};function tM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nM={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[qm]:"ENVMAP_BLENDING_MIX",[Ym]:"ENVMAP_BLENDING_ADD"};function iM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nM[i.combine]||"ENVMAP_BLENDING_NONE"}function sM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zy(t),c=Qy(t),u=tM(t),h=iM(t),d=sM(t),f=Vy(t),g=Gy(r),x=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Un?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Tc(a),a=nd(a,t),a=id(a,t),o=Tc(o),o=nd(o,t),o=id(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,M=y+p+o,T=Qh(s,s.VERTEX_SHADER,S),A=Qh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(A)||"",z=O.trim(),G=k.trim(),L=X.trim();let Z=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,A);else{const re=td(s,T,"vertex"),ce=td(s,A,"fragment");Ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+re+`
`+ce)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(G===""||L==="")&&(j=!1);j&&(I.diagnostics={runnable:Z,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(T),s.deleteShader(A),_=new Oa(s,x),b=Wy(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(x,Ny)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let aM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lM(e),t.set(e,n)),n}}class lM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function cM(i,e,t,n,s,r){const a=new su,o=new oM,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,B,I,O){const k=I.fog,X=O.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,L=e.get(_.envMap||z,G),Z=L&&L.mapping===ho?L.image.height:null,j=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=re!==void 0?re.length:0;let ue=0;X.morphAttributes.position!==void 0&&(ue=1),X.morphAttributes.normal!==void 0&&(ue=2),X.morphAttributes.color!==void 0&&(ue=3);let Ue,tt,De,W;if(j){const rt=In[j];Ue=rt.vertexShader,tt=rt.fragmentShader}else Ue=_.vertexShader,tt=_.fragmentShader,o.update(_),De=o.getVertexShaderID(_),W=o.getFragmentShaderID(_);const J=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Me=!!_.map,ut=!!_.matcap,Ke=!!L,Ze=!!_.aoMap,ft=!!_.lightMap,We=!!_.bumpMap,Tt=!!_.normalMap,D=!!_.displacementMap,Ct=!!_.emissiveMap,nt=!!_.metalnessMap,mt=!!_.roughnessMap,be=_.anisotropy>0,w=_.clearcoat>0,v=_.dispersion>0,U=_.iridescence>0,$=_.sheen>0,Q=_.transmission>0,K=be&&!!_.anisotropyMap,xe=w&&!!_.clearcoatMap,ae=w&&!!_.clearcoatNormalMap,Pe=w&&!!_.clearcoatRoughnessMap,Oe=U&&!!_.iridescenceMap,te=U&&!!_.iridescenceThicknessMap,ie=$&&!!_.sheenColorMap,ve=$&&!!_.sheenRoughnessMap,Se=!!_.specularMap,pe=!!_.specularColorMap,Xe=!!_.specularIntensityMap,N=Q&&!!_.transmissionMap,oe=Q&&!!_.thicknessMap,se=!!_.gradientMap,ge=!!_.alphaMap,ne=_.alphaTest>0,Y=!!_.alphaHash,ye=!!_.extensions;let ke=Un;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=i.toneMapping);const gt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:tt,defines:_.defines,customVertexShaderID:De,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$t,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:ut,envMap:Ke,envMapMode:Ke&&L.mapping,envMapCubeUVHeight:Z,aoMap:Ze,lightMap:ft,bumpMap:We,normalMap:Tt,displacementMap:D,emissiveMap:Ct,normalMapObjectSpace:Tt&&_.normalMapType===Jm,normalMapTangentSpace:Tt&&_.normalMapType===Qc,metalnessMap:nt,roughnessMap:mt,anisotropy:be,anisotropyMap:K,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Pe,dispersion:v,iridescence:U,iridescenceMap:Oe,iridescenceThicknessMap:te,sheen:$,sheenColorMap:ie,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:pe,specularIntensityMap:Xe,transmission:Q,transmissionMap:N,thicknessMap:oe,gradientMap:se,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:Y,combine:_.combine,mapUv:Me&&g(_.map.channel),aoMapUv:Ze&&g(_.aoMap.channel),lightMapUv:ft&&g(_.lightMap.channel),bumpMapUv:We&&g(_.bumpMap.channel),normalMapUv:Tt&&g(_.normalMap.channel),displacementMapUv:D&&g(_.displacementMap.channel),emissiveMapUv:Ct&&g(_.emissiveMap.channel),metalnessMapUv:nt&&g(_.metalnessMap.channel),roughnessMapUv:mt&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:xe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:Se&&g(_.specularMap.channel),specularColorMapUv:pe&&g(_.specularColorMap.channel),specularIntensityMapUv:Xe&&g(_.specularIntensityMap.channel),transmissionMapUv:N&&g(_.transmissionMap.channel),thicknessMapUv:oe&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Tt||be),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Me||ge),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&Tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sn,flipSided:_.side===Jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)b.push(B),b.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(p(b,_),y(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function S(_){const b=f[_.type];let B;if(b){const I=In[b];B=i0.clone(I.uniforms)}else B=_.uniforms;return B}function M(_,b){let B=u.get(b);return B!==void 0?++B.usedTimes:(B=new rM(i,b,_,s),c.push(B),u.set(b,B)),B}function T(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function uM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function od(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,x,m,p){const y=o(d,f,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(d,f,g,x,m,p){const y=o(d,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||hM),n.length>1&&n.sort(f||ad),s.length>1&&s.sort(f||ad)}function h(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function dM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new od,i.set(n,[a])):s>=r.length?(a=new od,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function pM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mM=0;function gM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){const e=new fM,t=pM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new He,a=new He;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,S=0,M=0,T=0,A=0,R=0;c.sort(gM);for(let b=0,B=c.length;b<B;b++){const I=c[b],O=I.color,k=I.intensity,X=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vs?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*k,h+=O.g*k,d+=O.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);R++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,Z=t.get(I);Z.shadowIntensity=L.intensity,Z.shadowBias=L.bias,Z.shadowNormalBias=L.normalBias,Z.shadowRadius=L.radius,Z.shadowMapSize=L.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;const L=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,L.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=L.matrix,I.castShadow){const Z=t.get(I);Z.shadowIntensity=L.intensity,Z.shadowBias=L.bias,Z.shadowNormalBias=L.normalBias,Z.shadowRadius=L.radius,Z.shadowMapSize=L.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=z,M++}x++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const L=I.shadow,Z=t.get(I);Z.shadowIntensity=L.intensity,Z.shadowBias=L.bias,Z.shadowNormalBias=L.normalBias,Z.shadowRadius=L.radius,Z.shadowMapSize=L.mapSize,Z.shadowCameraNear=L.camera.near,Z.shadowCameraFar=L.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==T||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=T,_.numLightProbes=R,n.version=mM++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function ld(i){const e=new _M(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xM(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ld(i),e.set(s,[o])):r>=a.length?(o=new ld(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`,MM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],SM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],cd=new He,pr=new P,rl=new P;function EM(i,e,t){let n=new ou;const s=new Be,r=new Be,a=new vt,o=new o0,l=new l0,c={},u=t.maxTextureSize,h={[ri]:Jt,[Jt]:ri,[sn]:sn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:vM,fragmentShader:yM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let p=this.type;this.render=function(A,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===wm&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pa);const b=i.getRenderTarget(),B=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(z=>z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,z=A.length;X<z;X++){const G=A[X],L=G.shadow;if(L===void 0){Re("WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const Z=L.getFrameExtents();s.multiply(Z),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,L.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=j,L.map===null||k===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===xr){if(G.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Fn(s.x,s.y,{format:Vs,type:ai,minFilter:bt,magFilter:bt,generateMipmaps:!1}),L.map.texture.name=G.name+".shadowMap",L.map.depthTexture=new Ur(s.x,s.y,hn),L.map.depthTexture.name=G.name+".shadowMapDepth",L.map.depthTexture.format=oi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Lt,L.map.depthTexture.magFilter=Lt}else G.isPointLight?(L.map=new Wf(s.x),L.map.depthTexture=new t0(s.x,On)):(L.map=new Fn(s.x,s.y),L.map.depthTexture=new Ur(s.x,s.y,On)),L.map.depthTexture.name=G.name+".shadowMap",L.map.depthTexture.format=oi,this.type===Pa?(L.map.depthTexture.compareFunction=j?tu:eu,L.map.depthTexture.minFilter=bt,L.map.depthTexture.magFilter=bt):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Lt,L.map.depthTexture.magFilter=Lt);L.camera.updateProjectionMatrix()}const re=L.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<re;ce++){if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(L.map),i.clear());const ue=L.getViewport(ce);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),O.viewport(a)}if(G.isPointLight){const ue=L.camera,Ue=L.matrix,tt=G.distance||ue.far;tt!==ue.far&&(ue.far=tt,ue.updateProjectionMatrix()),pr.setFromMatrixPosition(G.matrixWorld),ue.position.copy(pr),rl.copy(ue.position),rl.add(MM[ce]),ue.up.copy(SM[ce]),ue.lookAt(rl),ue.updateMatrixWorld(),Ue.makeTranslation(-pr.x,-pr.y,-pr.z),cd.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),L._frustum.setFromProjectionMatrix(cd,ue.coordinateSystem,ue.reversedDepth)}else L.updateMatrices(G);n=L.getFrustum(),M(R,_,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===xr&&y(L,_),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,B,I)};function y(A,R){const _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(s.x,s.y,{format:Vs,type:ai})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,_,f,x,null)}function S(A,R,_,b){let B=null;const I=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)B=I;else if(B=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=B.uuid,k=R.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let z=X[k];z===void 0&&(z=B.clone(),X[k]=z,R.addEventListener("dispose",T)),B=z}if(B.visible=R.visible,B.wireframe=R.wireframe,b===xr?B.side=R.shadowSide!==null?R.shadowSide:R.side:B.side=R.shadowSide!==null?R.shadowSide:h[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,_.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const O=i.properties.get(B);O.light=_}return B}function M(A,R,_,b,B){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===xr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=e.update(A),X=A.material;if(Array.isArray(X)){const z=k.groups;for(let G=0,L=z.length;G<L;G++){const Z=z[G],j=X[Z.materialIndex];if(j&&j.visible){const re=S(A,j,b,B);A.onBeforeShadow(i,A,R,_,k,re,Z),i.renderBufferDirect(_,null,k,re,A,Z),A.onAfterShadow(i,A,R,_,k,re,Z)}}}else if(X.visible){const z=S(A,X,b,B);A.onBeforeShadow(i,A,R,_,k,z,null),i.renderBufferDirect(_,null,k,z,A,null),A.onAfterShadow(i,A,R,_,k,z,null)}}const O=A.children;for(let k=0,X=O.length;k<X;k++)M(O[k],R,_,b,B)}function T(A){A.target.removeEventListener("dispose",T);for(const _ in c){const b=c[_],B=A.target.uuid;B in b&&(b[B].dispose(),delete b[B])}}}function bM(i,e){function t(){let N=!1;const oe=new vt;let se=null;const ge=new vt(0,0,0,0);return{setMask:function(ne){se!==ne&&!N&&(i.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){N=ne},setClear:function(ne,Y,ye,ke,gt){gt===!0&&(ne*=ke,Y*=ke,ye*=ke),oe.set(ne,Y,ye,ke),ge.equals(oe)===!1&&(i.clearColor(ne,Y,ye,ke),ge.copy(oe))},reset:function(){N=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,se=null,ge=null,ne=null;return{setReversed:function(Y){if(oe!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),oe=Y;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return oe},setTest:function(Y){Y?J(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Y){se!==Y&&!N&&(i.depthMask(Y),se=Y)},setFunc:function(Y){if(oe&&(Y=cg[Y]),ge!==Y){switch(Y){case Dl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Y}},setLocked:function(Y){N=Y},setClear:function(Y){ne!==Y&&(ne=Y,oe&&(Y=1-Y),i.clearDepth(Y))},reset:function(){N=!1,se=null,ge=null,ne=null,oe=!1}}}function s(){let N=!1,oe=null,se=null,ge=null,ne=null,Y=null,ye=null,ke=null,gt=null;return{setTest:function(rt){N||(rt?J(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!N&&(i.stencilMask(rt),oe=rt)},setFunc:function(rt,Hn,Vn){(se!==rt||ge!==Hn||ne!==Vn)&&(i.stencilFunc(rt,Hn,Vn),se=rt,ge=Hn,ne=Vn)},setOp:function(rt,Hn,Vn){(Y!==rt||ye!==Hn||ke!==Vn)&&(i.stencilOp(rt,Hn,Vn),Y=rt,ye=Hn,ke=Vn)},setLocked:function(rt){N=rt},setClear:function(rt){gt!==rt&&(i.clearStencil(rt),gt=rt)},reset:function(){N=!1,oe=null,se=null,ge=null,ne=null,Y=null,ye=null,ke=null,gt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,S=null,M=null,T=null,A=null,R=new Le(0,0,0),_=0,b=!1,B=null,I=null,O=null,k=null,X=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,L=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=L>=1):Z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=L>=2);let j=null,re={};const ce=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Ue=new vt().fromArray(ce),tt=new vt().fromArray(ue);function De(N,oe,se,ge){const ne=new Uint8Array(4),Y=i.createTexture();i.bindTexture(N,Y),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<se;ye++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(oe+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Y}const W={};W[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ks),We(!1),Tt(Wu),J(i.CULL_FACE),Ze(ii);function J(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ee(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ie(N,oe){return h[N]!==oe?(i.bindFramebuffer(N,oe),h[N]=oe,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(N,oe){let se=f,ge=!1;if(N){se=d.get(oe),se===void 0&&(se=[],d.set(oe,se));const ne=N.textures;if(se.length!==ne.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ye=ne.length;Y<ye;Y++)se[Y]=i.COLOR_ATTACHMENT0+Y;se.length=ne.length,ge=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ge=!0);ge&&i.drawBuffers(se)}function Me(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ut={[Gi]:i.FUNC_ADD,[Cm]:i.FUNC_SUBTRACT,[Im]:i.FUNC_REVERSE_SUBTRACT};ut[Pm]=i.MIN,ut[Lm]=i.MAX;const Ke={[Dm]:i.ZERO,[Nm]:i.ONE,[Um]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[Hm]:i.SRC_ALPHA_SATURATE,[km]:i.DST_COLOR,[Om]:i.DST_ALPHA,[Fm]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[zm]:i.ONE_MINUS_DST_COLOR,[Bm]:i.ONE_MINUS_DST_ALPHA,[Vm]:i.CONSTANT_COLOR,[Gm]:i.ONE_MINUS_CONSTANT_COLOR,[Wm]:i.CONSTANT_ALPHA,[Xm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(N,oe,se,ge,ne,Y,ye,ke,gt,rt){if(N===ii){x===!0&&(ee(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),N!==Rm){if(N!==m||rt!==b){if((p!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,M=Gi),rt)switch(N){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.ONE,i.ONE);break;case Xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",N);break}else switch(N){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xu:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",N);break}y=null,S=null,T=null,A=null,R.set(0,0,0),_=0,m=N,b=rt}return}ne=ne||oe,Y=Y||se,ye=ye||ge,(oe!==p||ne!==M)&&(i.blendEquationSeparate(ut[oe],ut[ne]),p=oe,M=ne),(se!==y||ge!==S||Y!==T||ye!==A)&&(i.blendFuncSeparate(Ke[se],Ke[ge],Ke[Y],Ke[ye]),y=se,S=ge,T=Y,A=ye),(ke.equals(R)===!1||gt!==_)&&(i.blendColor(ke.r,ke.g,ke.b,gt),R.copy(ke),_=gt),m=N,b=!1}function ft(N,oe){N.side===sn?ee(i.CULL_FACE):J(i.CULL_FACE);let se=N.side===Jt;oe&&(se=!se),We(se),N.blending===Us&&N.transparent===!1?Ze(ii):Ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function Tt(N){N!==Tm?(J(i.CULL_FACE),N!==I&&(N===Wu?i.cullFace(i.BACK):N===Am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),I=N}function D(N){N!==O&&(G&&i.lineWidth(N),O=N)}function Ct(N,oe,se){N?(J(i.POLYGON_OFFSET_FILL),(k!==oe||X!==se)&&(k=oe,X=se,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,se))):ee(i.POLYGON_OFFSET_FILL)}function nt(N){N?J(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function mt(N){N===void 0&&(N=i.TEXTURE0+z-1),j!==N&&(i.activeTexture(N),j=N)}function be(N,oe,se){se===void 0&&(j===null?se=i.TEXTURE0+z-1:se=j);let ge=re[se];ge===void 0&&(ge={type:void 0,texture:void 0},re[se]=ge),(ge.type!==N||ge.texture!==oe)&&(j!==se&&(i.activeTexture(se),j=se),i.bindTexture(N,oe||W[N]),ge.type=N,ge.texture=oe)}function w(){const N=re[j];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function Q(){try{i.texSubImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function ae(){try{i.texStorage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function Pe(){try{i.texStorage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function Oe(){try{i.texImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function te(){try{i.texImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function ie(N){Ue.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function ve(N){tt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function Se(N,oe){let se=c.get(oe);se===void 0&&(se=new WeakMap,c.set(oe,se));let ge=se.get(N);ge===void 0&&(ge=i.getUniformBlockIndex(oe,N.name),se.set(N,ge))}function pe(N,oe){const ge=c.get(oe).get(N);l.get(oe)!==ge&&(i.uniformBlockBinding(oe,ge,N.__bindingPointIndex),l.set(oe,ge))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,re={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,S=null,M=null,T=null,A=null,R=new Le(0,0,0),_=0,b=!1,B=null,I=null,O=null,k=null,X=null,Ue.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ee,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Me,setBlending:Ze,setMaterial:ft,setFlipSided:We,setCullFace:Tt,setLineWidth:D,setPolygonOffset:Ct,setScissorTest:nt,activeTexture:mt,bindTexture:be,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Oe,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Pe,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:ie,viewport:ve,reset:Xe}}function TM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Lr("canvas")}function x(w,v,U){let $=1;const Q=be(w);if((Q.width>U||Q.height>U)&&($=U/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor($*Q.width),xe=Math.floor($*Q.height);h===void 0&&(h=g(K,xe));const ae=v?g(K,xe):h;return ae.width=K,ae.height=xe,ae.getContext("2d").drawImage(w,0,0,K,xe),Re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+xe+")."),ae}else return"data"in w&&Re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,v,U,$,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===i.RED&&(U===i.FLOAT&&(K=i.R32F),U===i.HALF_FLOAT&&(K=i.R16F),U===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.R8UI),U===i.UNSIGNED_SHORT&&(K=i.R16UI),U===i.UNSIGNED_INT&&(K=i.R32UI),U===i.BYTE&&(K=i.R8I),U===i.SHORT&&(K=i.R16I),U===i.INT&&(K=i.R32I)),v===i.RG&&(U===i.FLOAT&&(K=i.RG32F),U===i.HALF_FLOAT&&(K=i.RG16F),U===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RG8UI),U===i.UNSIGNED_SHORT&&(K=i.RG16UI),U===i.UNSIGNED_INT&&(K=i.RG32UI),U===i.BYTE&&(K=i.RG8I),U===i.SHORT&&(K=i.RG16I),U===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGB8UI),U===i.UNSIGNED_SHORT&&(K=i.RGB16UI),U===i.UNSIGNED_INT&&(K=i.RGB32UI),U===i.BYTE&&(K=i.RGB8I),U===i.SHORT&&(K=i.RGB16I),U===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),U===i.UNSIGNED_INT&&(K=i.RGBA32UI),U===i.BYTE&&(K=i.RGBA8I),U===i.SHORT&&(K=i.RGBA16I),U===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const xe=Q?Wa:Je.getTransfer($);U===i.FLOAT&&(K=i.RGBA32F),U===i.HALF_FLOAT&&(K=i.RGBA16F),U===i.UNSIGNED_BYTE&&(K=xe===at?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(w,v){let U;return w?v===null||v===On||v===Rr?U=i.DEPTH24_STENCIL8:v===hn?U=i.DEPTH32F_STENCIL8:v===wr&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===Rr?U=i.DEPTH_COMPONENT24:v===hn?U=i.DEPTH_COMPONENT32F:v===wr&&(U=i.DEPTH_COMPONENT16),U}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==bt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),B(v)}function _(w){const v=n.get(w);if(v.__webglInit===void 0)return;const U=w.source,$=d.get(U);if($){const Q=$[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys($).length===0&&d.delete(U)}n.remove(w)}function b(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const U=w.source,$=d.get(U);delete $[v.__cacheKey],a.memory.textures--}function B(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Q=0;Q<v.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=w.textures;for(let $=0,Q=U.length;$<Q;$++){const K=n.get(U[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(U[$])}n.remove(w)}let I=0;function O(){I=0}function k(){const w=I;return w>=s.maxTextures&&Re("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function X(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function z(w,v){const U=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const $=w.image;if($===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,w,v);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function G(w,v){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){W(U,w,v);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function L(w,v){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){W(U,w,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function Z(w,v){const U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){J(U,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const j={[Hs]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},re={[Lt]:i.NEAREST,[vf]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},ce={[Qm]:i.NEVER,[sg]:i.ALWAYS,[eg]:i.LESS,[eu]:i.LEQUAL,[tg]:i.EQUAL,[tu]:i.GEQUAL,[ng]:i.GREATER,[ig]:i.NOTEQUAL};function ue(w,v){if(v.type===hn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bt||v.magFilter===La||v.magFilter===vr||v.magFilter===Jn||v.minFilter===bt||v.minFilter===La||v.minFilter===vr||v.minFilter===Jn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,re[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==vr&&v.minFilter!==Jn||v.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ue(w,v){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const K=X(v);if(K!==w.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[K].usedTimes++;const xe=Q[w.__cacheKey];xe!==void 0&&(Q[w.__cacheKey].usedTimes--,xe.usedTimes===0&&b(v)),w.__cacheKey=K,w.__webglTexture=Q[K].texture}return U}function tt(w,v,U){return Math.floor(Math.floor(w/U)/v)}function De(w,v,U,$){const K=w.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,$,v.data);else{K.sort((te,ie)=>te.start-ie.start);let xe=0;for(let te=1;te<K.length;te++){const ie=K[xe],ve=K[te],Se=ie.start+ie.count,pe=tt(ve.start,v.width,4),Xe=tt(ie.start,v.width,4);ve.start<=Se+1&&pe===Xe&&tt(ve.start+ve.count-1,v.width,4)===pe?ie.count=Math.max(ie.count,ve.start+ve.count-ie.start):(++xe,K[xe]=ve)}K.length=xe+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,ie=K.length;te<ie;te++){const ve=K[te],Se=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Xe=Se%v.width,N=Math.floor(Se/v.width),oe=pe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Xe,N,oe,se,U,$,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function W(w,v,U){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const Q=Ue(w,v),K=v.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+U);const xe=n.get(K);if(K.version!==xe.__version||Q===!0){t.activeTexture(i.TEXTURE0+U);const ae=Je.getPrimaries(Je.workingColorSpace),Pe=v.colorSpace===vi?null:Je.getPrimaries(v.colorSpace),Oe=v.colorSpace===vi||ae===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let te=x(v.image,!1,s.maxTextureSize);te=mt(v,te);const ie=r.convert(v.format,v.colorSpace),ve=r.convert(v.type);let Se=S(v.internalFormat,ie,ve,v.colorSpace,v.isVideoTexture);ue($,v);let pe;const Xe=v.mipmaps,N=v.isVideoTexture!==!0,oe=xe.__version===void 0||Q===!0,se=K.dataReady,ge=T(v,te);if(v.isDepthTexture)Se=M(v.format===Yi,v.type),oe&&(N?t.texStorage2D(i.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,ie,ve,null));else if(v.isDataTexture)if(Xe.length>0){N&&oe&&t.texStorage2D(i.TEXTURE_2D,ge,Se,Xe[0].width,Xe[0].height);for(let ne=0,Y=Xe.length;ne<Y;ne++)pe=Xe[ne],N?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ie,ve,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Se,pe.width,pe.height,0,ie,ve,pe.data);v.generateMipmaps=!1}else N?(oe&&t.texStorage2D(i.TEXTURE_2D,ge,Se,te.width,te.height),se&&De(v,te,ie,ve)):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,ie,ve,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Se,Xe[0].width,Xe[0].height,te.depth);for(let ne=0,Y=Xe.length;ne<Y;ne++)if(pe=Xe[ne],v.format!==dn)if(ie!==null)if(N){if(se)if(v.layerUpdates.size>0){const ye=zh(pe.width,pe.height,v.format,v.type);for(const ke of v.layerUpdates){const gt=pe.data.subarray(ke*ye/pe.data.BYTES_PER_ELEMENT,(ke+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ke,pe.width,pe.height,1,ie,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,ie,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Se,pe.width,pe.height,te.depth,0,pe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,ie,ve,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Se,pe.width,pe.height,te.depth,0,ie,ve,pe.data)}else{N&&oe&&t.texStorage2D(i.TEXTURE_2D,ge,Se,Xe[0].width,Xe[0].height);for(let ne=0,Y=Xe.length;ne<Y;ne++)pe=Xe[ne],v.format!==dn?ie!==null?N?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Se,pe.width,pe.height,0,pe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ie,ve,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Se,pe.width,pe.height,0,ie,ve,pe.data)}else if(v.isDataArrayTexture)if(N){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Se,te.width,te.height,te.depth),se)if(v.layerUpdates.size>0){const ne=zh(te.width,te.height,v.format,v.type);for(const Y of v.layerUpdates){const ye=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,ie,ve,ye)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ie,ve,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,ie,ve,te.data);else if(v.isData3DTexture)N?(oe&&t.texStorage3D(i.TEXTURE_3D,ge,Se,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ie,ve,te.data)):t.texImage3D(i.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,ie,ve,te.data);else if(v.isFramebufferTexture){if(oe)if(N)t.texStorage2D(i.TEXTURE_2D,ge,Se,te.width,te.height);else{let ne=te.width,Y=te.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,Se,ne,Y,0,ie,ve,null),ne>>=1,Y>>=1}}else if(Xe.length>0){if(N&&oe){const ne=be(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ge,Se,ne.width,ne.height)}for(let ne=0,Y=Xe.length;ne<Y;ne++)pe=Xe[ne],N?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ie,ve,pe):t.texImage2D(i.TEXTURE_2D,ne,Se,ie,ve,pe);v.generateMipmaps=!1}else if(N){if(oe){const ne=be(te);t.texStorage2D(i.TEXTURE_2D,ge,Se,ne.width,ne.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,ve,te)}else t.texImage2D(i.TEXTURE_2D,0,Se,ie,ve,te);m(v)&&p($),xe.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,U){if(v.image.length!==6)return;const $=Ue(w,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);const K=n.get(Q);if(Q.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+U);const xe=Je.getPrimaries(Je.workingColorSpace),ae=v.colorSpace===vi?null:Je.getPrimaries(v.colorSpace),Pe=v.colorSpace===vi||xe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Oe=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let Y=0;Y<6;Y++)!Oe&&!te?ie[Y]=x(v.image[Y],!0,s.maxCubemapSize):ie[Y]=te?v.image[Y].image:v.image[Y],ie[Y]=mt(v,ie[Y]);const ve=ie[0],Se=r.convert(v.format,v.colorSpace),pe=r.convert(v.type),Xe=S(v.internalFormat,Se,pe,v.colorSpace),N=v.isVideoTexture!==!0,oe=K.__version===void 0||$===!0,se=Q.dataReady;let ge=T(v,ve);ue(i.TEXTURE_CUBE_MAP,v);let ne;if(Oe){N&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,ve.width,ve.height);for(let Y=0;Y<6;Y++){ne=ie[Y].mipmaps;for(let ye=0;ye<ne.length;ye++){const ke=ne[ye];v.format!==dn?Se!==null?N?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,ke.width,ke.height,Se,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Xe,ke.width,ke.height,0,ke.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,ke.width,ke.height,Se,pe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Xe,ke.width,ke.height,0,Se,pe,ke.data)}}}else{if(ne=v.mipmaps,N&&oe){ne.length>0&&ge++;const Y=be(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ie[Y].width,ie[Y].height,Se,pe,ie[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,ie[Y].width,ie[Y].height,0,Se,pe,ie[Y].data);for(let ye=0;ye<ne.length;ye++){const gt=ne[ye].image[Y].image;N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,gt.width,gt.height,Se,pe,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Xe,gt.width,gt.height,0,Se,pe,gt.data)}}else{N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,pe,ie[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,Se,pe,ie[Y]);for(let ye=0;ye<ne.length;ye++){const ke=ne[ye];N?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Se,pe,ke.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Xe,Se,pe,ke.image[Y])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ee(w,v,U,$,Q,K){const xe=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),Pe=S(U.internalFormat,xe,ae,U.colorSpace),Oe=n.get(v),te=n.get(U);if(te.__renderTarget=v,!Oe.__hasExternalTextures){const ie=Math.max(1,v.width>>K),ve=Math.max(1,v.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,Pe,ie,ve,v.depth,0,xe,ae,null):t.texImage2D(Q,K,Pe,ie,ve,0,xe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,te.__webglTexture,0,D(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,te.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const $=v.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=M(v.stencilBuffer,Q),xe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(v),K,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,w)}else{const $=v.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],xe=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),Pe=S(K.internalFormat,xe,ae,K.colorSpace);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(v),Pe,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(v),Pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,v,U){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ue(i.TEXTURE_CUBE_MAP,v.depthTexture);const Oe=r.convert(v.depthTexture.format),te=r.convert(v.depthTexture.type);let ie;v.depthTexture.format===oi?ie=i.DEPTH_COMPONENT24:v.depthTexture.format===Yi&&(ie=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ie,v.width,v.height,0,Oe,te,null)}}else z(v.depthTexture,0);const K=Q.__webglTexture,xe=D(v),ae=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Pe=v.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===oi)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ae,K,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ae,K,0);else if(v.depthTexture.format===Yi)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ae,K,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ae,K,0);else throw new Error("Unknown depthTexture format")}function Me(w){const v=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)_e(v.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?_e(v.__webglFramebuffer[0],w,0):_e(v.__webglFramebuffer,w,0)}else if(U){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Ie(v.__webglDepthbuffer[$],w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ie(v.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,v,U){const $=n.get(w);v!==void 0&&ee($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Me(w)}function Ke(w){const v=w.texture,U=n.get(w),$=n.get(v);w.addEventListener("dispose",R);const Q=w.textures,K=w.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),K){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let Pe=0;Pe<v.mipmaps.length;Pe++)U.__webglFramebuffer[ae][Pe]=i.createFramebuffer()}else U.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ae=0,Pe=Q.length;ae<Pe;ae++){const Oe=n.get(Q[ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ct(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const Pe=Q[ae];U.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const Oe=r.convert(Pe.format,Pe.colorSpace),te=r.convert(Pe.type),ie=S(Pe.internalFormat,Oe,te,Pe.colorSpace,w.isXRRenderTarget===!0),ve=D(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ie,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ue(i.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)ee(U.__webglFramebuffer[ae][Pe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe);else ee(U.__webglFramebuffer[ae],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,Pe=Q.length;ae<Pe;ae++){const Oe=Q[ae],te=n.get(Oe);let ie=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,te.__webglTexture),ue(ie,Oe),ee(U.__webglFramebuffer,w,Oe,i.COLOR_ATTACHMENT0+ae,ie,0),m(Oe)&&p(ie)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),ue(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)ee(U.__webglFramebuffer[Pe],w,v,i.COLOR_ATTACHMENT0,ae,Pe);else ee(U.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}w.depthBuffer&&Me(w)}function Ze(w){const v=w.textures;for(let U=0,$=v.length;U<$;U++){const Q=v[U];if(m(Q)){const K=y(w),xe=n.get(Q).__webglTexture;t.bindTexture(K,xe),p(K),t.unbindTexture()}}}const ft=[],We=[];function Tt(w){if(w.samples>0){if(Ct(w)===!1){const v=w.textures,U=w.width,$=w.height;let Q=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(w),ae=v.length>1;if(ae)for(let Oe=0;Oe<v.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<v.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const te=n.get(v[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,Q,i.NEAREST),l===!0&&(ft.length=0,We.length=0,ft.push(i.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ft.push(K),We.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Oe=0;Oe<v.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const te=n.get(v[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function D(w){return Math.min(s.maxSamples,w.samples)}function Ct(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function nt(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function mt(w,v){const U=w.colorSpace,$=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==$t&&U!==vi&&(Je.getTransfer(U)===at?($!==dn||Q!==rn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",U)),v}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=L,this.setTextureCube=Z,this.rebindTextures=ut,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AM(i,e){function t(n,s=vi){let r;const a=Je.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yf)return i.BYTE;if(n===Mf)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===bf)return i.ALPHA;if(n===Tf)return i.RGB;if(n===dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===Vs)return i.RG;if(n===Zc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===Da||n===Na||n===Ua||n===Fa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===jl||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jl)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`;class CM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Of(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:wM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends js{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new CM,p={},y=t.getContextAttributes();let S=null,M=null;const T=[],A=[],R=new Be;let _=null;const b=new qt;b.viewport=new vt;const B=new qt;B.viewport=new vt;const I=[b,B],O=new P0;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=T[W];return J===void 0&&(J=new Po,T[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=T[W];return J===void 0&&(J=new Po,T[W]=J),J.getGripSpace()},this.getHand=function(W){let J=T[W];return J===void 0&&(J=new Po,T[W]=J),J.getHandSpace()};function z(W){const J=A.indexOf(W.inputSource);if(J===-1)return;const ee=T[J];ee!==void 0&&(ee.update(W.inputSource,W.frame,c||a),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",L);for(let W=0;W<T.length;W++){const J=A[W];J!==null&&(A[W]=null,T[W].disconnect(J))}k=null,X=null,m.reset();for(const W in p)delete p[W];e.setRenderTarget(S),f=null,d=null,h=null,s=null,M=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ie=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?Yi:oi,Ie=y.stencil?Rr:On);const Me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Fn(d.textureWidth,d.textureHeight,{format:dn,type:rn,depthTexture:new Ur(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(W){for(let J=0;J<W.removed.length;J++){const ee=W.removed[J],Ie=A.indexOf(ee);Ie>=0&&(A[Ie]=null,T[Ie].disconnect(ee))}for(let J=0;J<W.added.length;J++){const ee=W.added[J];let Ie=A.indexOf(ee);if(Ie===-1){for(let Me=0;Me<T.length;Me++)if(Me>=A.length){A.push(ee),Ie=Me;break}else if(A[Me]===null){A[Me]=ee,Ie=Me;break}if(Ie===-1)break}const _e=T[Ie];_e&&_e.connect(ee)}}const Z=new P,j=new P;function re(W,J,ee){Z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Ie=Z.distanceTo(j),_e=J.projectionMatrix.elements,Me=ee.projectionMatrix.elements,ut=_e[14]/(_e[10]-1),Ke=_e[14]/(_e[10]+1),Ze=(_e[9]+1)/_e[5],ft=(_e[9]-1)/_e[5],We=(_e[8]-1)/_e[0],Tt=(Me[8]+1)/Me[0],D=ut*We,Ct=ut*Tt,nt=Ie/(-We+Tt),mt=nt*-We;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(mt),W.translateZ(nt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const be=ut+nt,w=Ke+nt,v=D-mt,U=Ct+(Ie-mt),$=Ze*Ke/w*be,Q=ft*Ke/w*be;W.projectionMatrix.makePerspective(v,U,$,Q,be,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ce(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,ee=W.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),O.near=B.near=b.near=J,O.far=B.far=b.far=ee,(k!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,X=O.far),O.layers.mask=W.layers.mask|6,b.layers.mask=O.layers.mask&-5,B.layers.mask=O.layers.mask&-3;const Ie=W.parent,_e=O.cameras;ce(O,Ie);for(let Me=0;Me<_e.length;Me++)ce(_e[Me],Ie);_e.length===2?re(O,b,B):O.projectionMatrix.copy(b.projectionMatrix),ue(W,O,Ie)};function ue(W,J,ee){ee===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(W){return p[W]};let Ue=null;function tt(W,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ie=!1;ee.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let Ke=0;Ke<ee.length;Ke++){const Ze=ee[Ke];let ft=null;if(f!==null)ft=f.getViewport(Ze);else{const Tt=h.getViewSubImage(d,Ze);ft=Tt.viewport,Ke===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(M))}let We=I[Ke];We===void 0&&(We=new qt,We.layers.enable(Ke),We.viewport=new vt,I[Ke]=We),We.matrix.fromArray(Ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ft.x,ft.y,ft.width,ft.height),Ke===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(We)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Ke=h.getDepthInformation(ee[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ke=0;Ke<ee.length;Ke++){const Ze=ee[Ke].camera;if(Ze){let ft=p[Ze];ft||(ft=new Of,p[Ze]=ft);const We=h.getCameraImage(Ze);ft.sourceTexture=We}}}}for(let ee=0;ee<T.length;ee++){const Ie=A[ee],_e=T[ee];Ie!==null&&_e!==void 0&&_e.update(Ie,J,c||a)}Ue&&Ue(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const De=new Gf;De.setAnimationLoop(tt),this.setAnimationLoop=function(W){Ue=W},this.dispose=function(){}}}const Bi=new bn,PM=new He;function LM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,Bi.copy(M),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Bi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const M=i.createBuffer(),T=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],M=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=M.length;A<R;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,B=_.length;b<B;b++){const I=_[b];if(f(I,A,b,T)===!0){const O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let z=0;z<k.length;z++){const G=k[z],L=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+X,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,M,T){const A=y.value,R=S+"_"+M;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const _=T[R];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return T[R]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function g(y){const S=y.uniforms;let M=0;const T=16;for(let R=0,_=S.length;R<_;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let B=0,I=b.length;B<I;B++){const O=b[B],k=Array.isArray(O.value)?O.value:[O.value];for(let X=0,z=k.length;X<z;X++){const G=k[X],L=x(G),Z=M%T,j=Z%L.boundary,re=Z+j;M+=j,re!==0&&T-re<L.storage&&(M+=T-re),O.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=L.storage}}}const A=M%T;return A>0&&(M+=T-A),y.__size=M,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function UM(){return Rn===null&&(Rn=new ru(NM,16,16,Vs,ai),Rn.name="DFG_LUT",Rn.minFilter=bt,Rn.magFilter=bt,Rn.wrapS=Ln,Rn.wrapT=Ln,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class jf{constructor(e={}){const{canvas:t=og(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([Jc,Zc,$c]),p=new Set([rn,On,wr,Rr,Yc,Kc]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,T=null;const A=[],R=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let B=!1;this._outputColorSpace=Vt;let I=0,O=0,k=null,X=-1,z=null;const G=new vt,L=new vt;let Z=null;const j=new Le(0);let re=0,ce=t.width,ue=t.height,Ue=1,tt=null,De=null;const W=new vt(0,0,ce,ue),J=new vt(0,0,ce,ue);let ee=!1;const Ie=new ou;let _e=!1,Me=!1;const ut=new He,Ke=new P,Ze=new vt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Tt(){return k===null?Ue:1}let D=n;function Ct(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",gt,!1),D===null){const F="webgl2";if(D=Ct(F,E),D===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ne("WebGLRenderer: "+E.message),E}let nt,mt,be,w,v,U,$,Q,K,xe,ae,Pe,Oe,te,ie,ve,Se,pe,Xe,N,oe,se,ge;function ne(){nt=new Fv(D),nt.init(),oe=new AM(D,nt),mt=new Rv(D,nt,e,oe),be=new bM(D,nt),mt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),w=new kv(D),v=new uM,U=new TM(D,nt,be,v,mt,oe,w),$=new Uv(b),Q=new W0(D),se=new Av(D,Q),K=new Ov(D,Q,w,se),xe=new Hv(D,K,Q,se,w),pe=new zv(D,mt,U),ie=new Cv(v),ae=new cM(b,$,nt,mt,se,ie),Pe=new LM(b,v),Oe=new dM,te=new xM(nt),Se=new Tv(b,$,be,xe,g,l),ve=new EM(b,xe,mt),ge=new DM(D,w,mt,be),Xe=new wv(D,nt,w),N=new Bv(D,nt,w),w.programs=ae.programs,b.capabilities=mt,b.extensions=nt,b.properties=v,b.renderLists=Oe,b.shadowMap=ve,b.state=be,b.info=w}ne(),x!==rn&&(_=new Gv(x,t.width,t.height,s,r));const Y=new IM(b,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(E){E!==void 0&&(Ue=E,this.setSize(ce,ue,!1))},this.getSize=function(E){return E.set(ce,ue)},this.setSize=function(E,F,q=!0){if(Y.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,ue=F,t.width=Math.floor(E*Ue),t.height=Math.floor(F*Ue),q===!0&&(t.style.width=E+"px",t.style.height=F+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ce*Ue,ue*Ue).floor()},this.setDrawingBufferSize=function(E,F,q){ce=E,ue=F,Ue=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(W)},this.setViewport=function(E,F,q,V){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,F,q,V),be.viewport(G.copy(W).multiplyScalar(Ue).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,F,q,V){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,F,q,V),be.scissor(L.copy(J).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){be.setScissorTest(ee=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let V=0;if(E){let H=!1;if(k!==null){const de=k.texture.format;H=m.has(de)}if(H){const de=k.texture.type,me=p.has(de),fe=Se.getClearColor(),Ee=Se.getClearAlpha(),we=fe.r,ze=fe.g,qe=fe.b;me?(y[0]=we,y[1]=ze,y[2]=qe,y[3]=Ee,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=we,S[1]=ze,S[2]=qe,S[3]=Ee,D.clearBufferiv(D.COLOR,0,S))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT),q&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Se.dispose(),Oe.dispose(),te.dispose(),v.dispose(),$.dispose(),xe.dispose(),se.dispose(),ge.dispose(),ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Fu),Y.removeEventListener("sessionend",Ou),Pi.stop()};function ye(E){E.preventDefault(),Xa("WebGLRenderer: Context Lost."),B=!0}function ke(){Xa("WebGLRenderer: Context Restored."),B=!1;const E=w.autoReset,F=ve.enabled,q=ve.autoUpdate,V=ve.needsUpdate,H=ve.type;ne(),w.autoReset=E,ve.enabled=F,ve.autoUpdate=q,ve.needsUpdate=V,ve.type=H}function gt(E){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function rt(E){const F=E.target;F.removeEventListener("dispose",rt),Hn(F)}function Hn(E){Vn(E),v.remove(E)}function Vn(E){const F=v.get(E).programs;F!==void 0&&(F.forEach(function(q){ae.releaseProgram(q)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,V,H,de){F===null&&(F=ft);const me=H.isMesh&&H.matrixWorld.determinant()<0,fe=vm(E,F,q,V,H);be.setMaterial(V,me);let Ee=q.index,we=1;if(V.wireframe===!0){if(Ee=K.getWireframeAttribute(q),Ee===void 0)return;we=2}const ze=q.drawRange,qe=q.attributes.position;let Ce=ze.start*we,ht=(ze.start+ze.count)*we;de!==null&&(Ce=Math.max(Ce,de.start*we),ht=Math.min(ht,(de.start+de.count)*we)),Ee!==null?(Ce=Math.max(Ce,0),ht=Math.min(ht,Ee.count)):qe!=null&&(Ce=Math.max(Ce,0),ht=Math.min(ht,qe.count));const At=ht-Ce;if(At<0||At===1/0)return;se.setup(H,V,fe,q,Ee);let St,dt=Xe;if(Ee!==null&&(St=Q.get(Ee),dt=N,dt.setIndex(St)),H.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*Tt()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(H.isLine){let Gt=V.linewidth;Gt===void 0&&(Gt=1),be.setLineWidth(Gt*Tt()),H.isLineSegments?dt.setMode(D.LINES):H.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else H.isPoints?dt.setMode(D.POINTS):H.isSprite&&dt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,Te=H._multiDrawCounts,en=H._multiDrawCount,Qe=Ee?Q.get(Ee).bytesPerElement:1,gn=v.get(V).currentProgram.getUniforms();for(let An=0;An<en;An++)gn.setValue(D,"_gl_DrawID",An),dt.render(Gt[An]/Qe,Te[An])}else if(H.isInstancedMesh)dt.renderInstances(Ce,At,H.count);else if(q.isInstancedBufferGeometry){const Gt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,Gt);dt.renderInstances(Ce,At,Te)}else dt.render(Ce,At)};function Uu(E,F,q){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,qr(E,F,q),E.side=ri,E.needsUpdate=!0,qr(E,F,q),E.side=sn):qr(E,F,q)}this.compile=function(E,F,q=null){q===null&&(q=E),T=te.get(q),T.init(F),R.push(T),q.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const fe=de[me];Uu(fe,q,H),V.add(fe)}else Uu(de,q,H),V.add(de)}),T=R.pop(),V},this.compileAsync=function(E,F,q=null){const V=this.compile(E,F,q);return new Promise(H=>{function de(){if(V.forEach(function(me){v.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){H(E);return}setTimeout(de,10)}nt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Mo=null;function xm(E){Mo&&Mo(E)}function Fu(){Pi.stop()}function Ou(){Pi.start()}const Pi=new Gf;Pi.setAnimationLoop(xm),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Mo=E,Y.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},Y.addEventListener("sessionstart",Fu),Y.addEventListener("sessionend",Ou),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const q=Y.enabled===!0&&Y.isPresenting===!0,V=_!==null&&(k===null||q)&&_.begin(b,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,F,k),T=te.get(E,R.length),T.init(F),R.push(T),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(ut,Dn,F.reversedDepth),Me=this.localClippingEnabled,_e=ie.init(this.clippingPlanes,Me),M=Oe.get(E,A.length),M.init(),A.push(M),Y.enabled===!0&&Y.isPresenting===!0){const me=b.xr.getDepthSensingMesh();me!==null&&So(me,F,-1/0,b.sortObjects)}So(E,F,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(tt,De),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Se.addToRenderList(M,E),this.info.render.frame++,_e===!0&&ie.beginShadows();const H=T.state.shadowsArray;if(ve.render(H,E,F),_e===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&_.hasRenderPass())===!1){const me=M.opaque,fe=M.transmissive;if(T.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(fe.length>0)for(let we=0,ze=Ee.length;we<ze;we++){const qe=Ee[we];ku(me,fe,E,qe)}We&&Se.render(E);for(let we=0,ze=Ee.length;we<ze;we++){const qe=Ee[we];Bu(M,E,qe,qe.viewport)}}else fe.length>0&&ku(me,fe,E,F),We&&Se.render(E),Bu(M,E,F)}k!==null&&O===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),V&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,F),se.resetDefaultState(),X=-1,z=null,R.pop(),R.length>0?(T=R[R.length-1],_e===!0&&ie.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function So(E,F,q,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ie.intersectsSprite(E)){V&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const me=xe.update(E),fe=E.material;fe.visible&&M.push(E,me,fe,q,Ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ie.intersectsObject(E))){const me=xe.update(E),fe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ze.copy(me.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(fe)){const Ee=me.groups;for(let we=0,ze=Ee.length;we<ze;we++){const qe=Ee[we],Ce=fe[qe.materialIndex];Ce&&Ce.visible&&M.push(E,me,Ce,q,Ze.z,qe)}}else fe.visible&&M.push(E,me,fe,q,Ze.z,null)}}const de=E.children;for(let me=0,fe=de.length;me<fe;me++)So(de[me],F,q,V)}function Bu(E,F,q,V){const{opaque:H,transmissive:de,transparent:me}=E;T.setupLightsView(q),_e===!0&&ie.setGlobalState(b.clippingPlanes,q),V&&be.viewport(G.copy(V)),H.length>0&&Xr(H,F,q),de.length>0&&Xr(de,F,q),me.length>0&&Xr(me,F,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ku(E,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ce=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Fn(1,1,{generateMipmaps:!0,type:Ce?ai:rn,minFilter:Jn,samples:mt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const de=T.state.transmissionRenderTarget[V.id],me=V.viewport||G;de.setSize(me.z*b.transmissionResolutionScale,me.w*b.transmissionResolutionScale);const fe=b.getRenderTarget(),Ee=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(de),b.getClearColor(j),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),We&&Se.render(q);const ze=b.toneMapping;b.toneMapping=Un;const qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),_e===!0&&ie.setGlobalState(b.clippingPlanes,V),Xr(E,q,V),U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ht=0,At=F.length;ht<At;ht++){const St=F[ht],{object:dt,geometry:Gt,material:Te,group:en}=St;if(Te.side===sn&&dt.layers.test(V.layers)){const Qe=Te.side;Te.side=Jt,Te.needsUpdate=!0,zu(dt,q,V,Gt,Te,en),Te.side=Qe,Te.needsUpdate=!0,Ce=!0}}Ce===!0&&(U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de))}b.setRenderTarget(fe,Ee,we),b.setClearColor(j,re),qe!==void 0&&(V.viewport=qe),b.toneMapping=ze}function Xr(E,F,q){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,de=E.length;H<de;H++){const me=E[H],{object:fe,geometry:Ee,group:we}=me;let ze=me.material;ze.allowOverride===!0&&V!==null&&(ze=V),fe.layers.test(q.layers)&&zu(fe,F,q,Ee,ze,we)}}function zu(E,F,q,V,H,de){E.onBeforeRender(b,F,q,V,H,de),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,F,q,V,E,de),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,b.renderBufferDirect(q,F,V,H,E,de),H.side=ri,H.needsUpdate=!0,b.renderBufferDirect(q,F,V,H,E,de),H.side=sn):b.renderBufferDirect(q,F,V,H,E,de),E.onAfterRender(b,F,q,V,H,de)}function qr(E,F,q){F.isScene!==!0&&(F=ft);const V=v.get(E),H=T.state.lights,de=T.state.shadowsArray,me=H.state.version,fe=ae.getParameters(E,H.state,de,F,q),Ee=ae.getProgramCacheKey(fe);let we=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=$.get(E.envMap||V.environment,ze),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",rt),we=new Map,V.programs=we);let qe=we.get(Ee);if(qe!==void 0){if(V.currentProgram===qe&&V.lightsStateVersion===me)return Vu(E,fe),qe}else fe.uniforms=ae.getUniforms(E),E.onBeforeCompile(fe,b),qe=ae.acquireProgram(fe,Ee),we.set(Ee,qe),V.uniforms=fe.uniforms;const Ce=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Vu(E,fe),V.needsLights=Mm(E),V.lightsStateVersion=me,V.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=qe,V.uniformsList=null,qe}function Hu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Oa.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Vu(E,F){const q=v.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function vm(E,F,q,V,H){F.isScene!==!0&&(F=ft),U.resetTextureUnits();const de=F.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,fe=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$t,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=$.get(V.envMap||me,Ee),ze=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let St=Un;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(St=b.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Gt=dt!==void 0?dt.length:0,Te=v.get(V),en=T.state.lights;if(_e===!0&&(Me===!0||E!==z)){const Ot=E===z&&V.id===X;ie.setState(V,E,Ot)}let Qe=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==en.state.version||Te.outputColorSpace!==fe||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==we||V.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==ze||Te.vertexTangents!==qe||Te.morphTargets!==Ce||Te.morphNormals!==ht||Te.morphColors!==At||Te.toneMapping!==St||Te.morphTargetsCount!==Gt)&&(Qe=!0):(Qe=!0,Te.__version=V.version);let gn=Te.currentProgram;Qe===!0&&(gn=qr(V,F,H));let An=!1,Li=!1,ss=!1;const pt=gn.getUniforms(),zt=Te.uniforms;if(be.useProgram(gn.program)&&(An=!0,Li=!0,ss=!0),V.id!==X&&(X=V.id,Li=!0),An||z!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",E.projectionMatrix),pt.setValue(D,"viewMatrix",E.matrixWorldInverse);const ui=pt.map.cameraPosition;ui!==void 0&&ui.setValue(D,Ke.setFromMatrixPosition(E.matrixWorld)),mt.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,Li=!0,ss=!0)}if(Te.needsLights&&(en.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",en.state.directionalShadowMap,U),en.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",en.state.spotShadowMap,U),en.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",en.state.pointShadowMap,U)),H.isSkinnedMesh){pt.setOptional(D,H,"bindMatrix"),pt.setOptional(D,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),pt.setValue(D,"boneTexture",Ot.boneTexture,U))}H.isBatchedMesh&&(pt.setOptional(D,H,"batchingTexture"),pt.setValue(D,"batchingTexture",H._matricesTexture,U),pt.setOptional(D,H,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",H._indirectTexture,U),pt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",H._colorsTexture,U));const ci=q.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&pe.update(H,q,gn),(Li||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,pt.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(zt.envMapIntensity.value=F.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=UM()),Li&&(pt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Te.needsLights&&ym(zt,ss),de&&V.fog===!0&&Pe.refreshFogUniforms(zt,de),Pe.refreshMaterialUniforms(zt,V,Ue,ue,T.state.transmissionRenderTarget[E.id]),Oa.upload(D,Hu(Te),zt,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Oa.upload(D,Hu(Te),zt,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(D,"center",H.center),pt.setValue(D,"modelViewMatrix",H.modelViewMatrix),pt.setValue(D,"normalMatrix",H.normalMatrix),pt.setValue(D,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ot=V.uniformsGroups;for(let ui=0,rs=Ot.length;ui<rs;ui++){const Gu=Ot[ui];ge.update(Gu,gn),ge.bind(Gu,gn)}}return gn}function ym(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Mm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,F,q){const V=v.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=F,v.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const q=v.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Sm=D.createFramebuffer();this.setRenderTarget=function(E,F=0,q=0){k=E,I=F,O=q;let V=null,H=!1,de=!1;if(E){const fe=v.get(E);if(fe.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(D.FRAMEBUFFER,fe.__webglFramebuffer),G.copy(E.viewport),L.copy(E.scissor),Z=E.scissorTest,be.viewport(G),be.scissor(L),be.setScissorTest(Z),X=-1;return}else if(fe.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(fe.__hasExternalTextures)U.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(fe.__boundDepthTexture!==ze){if(ze!==null&&v.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);const we=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[F])?V=we[F][q]:V=we[F],H=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?V=v.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[q]:V=we,G.copy(E.viewport),L.copy(E.scissor),Z=E.scissorTest}else G.copy(W).multiplyScalar(Ue).floor(),L.copy(J).multiplyScalar(Ue).floor(),Z=ee;if(q!==0&&(V=Sm),be.bindFramebuffer(D.FRAMEBUFFER,V)&&be.drawBuffers(E,V),be.viewport(G),be.scissor(L),be.setScissorTest(Z),H){const fe=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,q)}else if(de){const fe=F;for(let Ee=0;Ee<E.textures.length;Ee++){const we=v.get(E.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,we.__webglTexture,q,fe)}}else if(E!==null&&q!==0){const fe=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,q)}X=-1},this.readRenderTargetPixels=function(E,F,q,V,H,de,me,fe=0){if(!(E&&E.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){be.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=E.textures[fe],ze=we.format,qe=we.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),!mt.textureFormatReadable(ze)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(qe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&q>=0&&q<=E.height-H&&D.readPixels(F,q,V,H,oe.convert(ze),oe.convert(qe),de)}finally{const we=k!==null?v.get(k).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,V,H,de,me,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(F>=0&&F<=E.width-V&&q>=0&&q<=E.height-H){be.bindFramebuffer(D.FRAMEBUFFER,Ee);const we=E.textures[fe],ze=we.format,qe=we.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),!mt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(F,q,V,H,oe.convert(ze),oe.convert(qe),0);const ht=k!==null?v.get(k).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,ht);const At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lg(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ce),D.deleteSync(At),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){const V=Math.pow(2,-q),H=Math.floor(E.image.width*V),de=Math.floor(E.image.height*V),me=F!==null?F.x:0,fe=F!==null?F.y:0;U.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,me,fe,H,de),be.unbindTexture()};const Em=D.createFramebuffer(),bm=D.createFramebuffer();this.copyTextureToTexture=function(E,F,q=null,V=null,H=0,de=0){let me,fe,Ee,we,ze,qe,Ce,ht,At;const St=E.isCompressedTexture?E.mipmaps[de]:E.image;if(q!==null)me=q.max.x-q.min.x,fe=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,ze=q.min.y,qe=q.isBox3?q.min.z:0;else{const zt=Math.pow(2,-H);me=Math.floor(St.width*zt),fe=Math.floor(St.height*zt),E.isDataArrayTexture?Ee=St.depth:E.isData3DTexture?Ee=Math.floor(St.depth*zt):Ee=1,we=0,ze=0,qe=0}V!==null?(Ce=V.x,ht=V.y,At=V.z):(Ce=0,ht=0,At=0);const dt=oe.convert(F.format),Gt=oe.convert(F.type);let Te;F.isData3DTexture?(U.setTexture3D(F,0),Te=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),Te=D.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),An=D.getParameter(D.UNPACK_SKIP_ROWS),Li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const ss=E.isDataArrayTexture||E.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const zt=v.get(E),ci=v.get(F),Ot=v.get(zt.__renderTarget),ui=v.get(ci.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Ot.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let rs=0;rs<Ee;rs++)ss&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(E).__webglTexture,H,qe+rs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(F).__webglTexture,de,At+rs)),D.blitFramebuffer(we,ze,me,fe,Ce,ht,me,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||v.has(E)){const zt=v.get(E),ci=v.get(F);be.bindFramebuffer(D.READ_FRAMEBUFFER,Em),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,bm);for(let Ot=0;Ot<Ee;Ot++)ss?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,H,qe+Ot):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,H),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ci.__webglTexture,de,At+Ot):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ci.__webglTexture,de),H!==0?D.blitFramebuffer(we,ze,me,fe,Ce,ht,me,fe,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Te,de,Ce,ht,At+Ot,we,ze,me,fe):D.copyTexSubImage2D(Te,de,Ce,ht,we,ze,me,fe);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Te,de,Ce,ht,At,me,fe,Ee,dt,Gt,St.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,de,Ce,ht,At,me,fe,Ee,dt,St.data):D.texSubImage3D(Te,de,Ce,ht,At,me,fe,Ee,dt,Gt,St):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Ce,ht,me,fe,dt,Gt,St.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Ce,ht,St.width,St.height,dt,St.data):D.texSubImage2D(D.TEXTURE_2D,de,Ce,ht,me,fe,dt,Gt,St);D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,An),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Li),de===0&&F.generateMipmaps&&D.generateMipmap(Te),be.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){I=0,O=0,k=null,be.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function ud(i,e){if(e===$m)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xc||e===Af){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===xc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function FM(i){const e=new Map,t=new Map,n=i.clone();return $f(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function $f(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)$f(i.children[n],e.children[n],t)}class OM extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new hd(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hd(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new tS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Tr.extractUrlBase(e);a=Tr.resolveURL(c,this.path)}else a=Tr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zf){try{a[Ye.KHR_BINARY_GLTF]=new nS(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:a[h]=new zM;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[h]=new iS(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[h]=new sS;break;case Ye.KHR_MESH_QUANTIZATION:a[h]=new rS;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function BM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Rt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kM{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],$t);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _o(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new w0(u),c.distance=h;break;case"spot":c=new T0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class zM{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class HM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class VM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}}class GM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class WM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class XM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],$t)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class YM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],$t),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],$t),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class ZM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class JM{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class QM{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class eS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class hd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class tS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const x=new He,m=new P,p=new on,y=new P(1,1,1),S=new jg(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,p,y));for(const M in l)if(M==="_COLOR_0"){const T=l[M];S.instanceColor=new Mc(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);yt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Zf="glTF",mr=12,dd={JSON:1313821514,BIN:5130562};class nS{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-mr,r=new DataView(e,mr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===dd.JSON){const c=new Uint8Array(e,mr+a,o);this.content=n.decode(c)}else if(l===dd.BIN){const c=mr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Ac[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ac[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Os[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},o,c,$t,d)})})}}class sS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rS{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Jf extends Zs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+h;for(let M=0;M!==o;M++){const T=a[x+M+o],A=a[x+M+l]*u,R=a[g+M+o],_=a[g+M]*u;r[M]=y*T+S*A+m*R+p*_}return r}}const aS=new on;class oS extends Jf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return aS.fromArray(r).normalize().toArray(r),r}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fd={9728:Lt,9729:bt,9984:vf,9985:La,9986:vr,9987:Jn},pd={33071:Ln,33648:Ga,10497:Hs},al={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lS={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Cr},ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function hS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dS(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ll(t.attributes):e=i.indices+":"+ll(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ll(i.targets[n]);return e}function ll(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pS=new He;class mS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new BM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new S0(this.options.manager):this.textureLoader=new C0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ki(r,o,s),Cn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Tr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=al[s.type],o=Os[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Et(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=al[s.type],c=Os[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(y);S||(x=new c(o,p*f,s.count*f/u),S=new Df(x,f/u),t.cache.add(y,S)),m=new Dr(S,l,d%f/u,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new Et(x,l,g);if(s.sparse!==void 0){const p=al.SCALAR,y=Os[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,T=new y(a[1],S,s.sparse.count*p),A=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=T.length;R<_;R++){const b=T[R];if(m.setX(b,A[R*l]),l>=2&&m.setY(b,A[R*l+1]),l>=3&&m.setZ(b,A[R*l+2]),l>=4&&m.setW(b,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=fd[d.magFilter]||bt,u.minFilter=fd[d.minFilter]||Jn,u.wrapS=pd[d.wrapS]||Hs,u.wrapT=pd[d.wrapT]||Hs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Lt&&u.minFilter!==bt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Nt(x);m.needsUpdate=!0,d(m)}),t.load(Tr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Cn(h,a),h.userData.mimeType=a.mimeType||fS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Nr,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new lu,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fu}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Vt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);const u=r.alphaMode||ol.OPAQUE;if(u===ol.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ol.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Dt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Dt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Dt){const h=r.emissiveFactor;o.emissive=new Le().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&a!==Dt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Cn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ki(s,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return md(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=dS(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=md(new wt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?cS(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=a[f];let p;const y=c[f];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new qg(x,y):new Pt(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?p.geometry=ud(p.geometry,Af):m.mode===cn.TRIANGLE_FAN&&(p.geometry=ud(p.geometry,xc));else if(m.mode===cn.LINES)p=new Qg(x,y);else if(m.mode===cn.LINE_STRIP)p=new fo(x,y);else if(m.mode===cn.LINE_LOOP)p=new e0(x,y);else if(m.mode===cn.POINTS)p=new $a(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Cn(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ki(s,h[0],r),h[0];const d=new an;r.extensions&&ki(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Ag.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new go(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new au(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,M=d.length;S<M;S++){const T=d[S],A=f[S],R=g[S],_=x[S],b=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const B=n._createAnimationTracks(T,A,R,_,b);if(B)for(let I=0;I<B.length;I++)p.push(B[I])}const y=new m0(r,void 0,p);return Cn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new P().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Uf:c.length>1?u=new an:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Cn(u,r),r.extensions&&ki(n,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new an;n.name&&(r.name=s.createUniqueName(n.name)),Cn(r,n),n.extensions&&ki(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(FM(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof pn||d instanceof Nt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];_i[r.path]===_i.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(_i[r.path]){case _i.weights:c=Xs;break;case _i.rotation:c=qs;break;case _i.translation:case _i.scale:c=Ys;break;default:n.itemSize===1?c=Xs:c=Ys;break}const u=s.interpolation!==void 0?lS[s.interpolation]:Ir,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+_i[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof qs?oS:Jf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gS(i,e,t){const n=e.attributes,s=new li;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=wc(Os[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=wc(Os[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function md(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Ac[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Cn(i,e),gS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?uS(i,e.targets,t):i})}const gd=200,_S=7,ct={enemies:32,allies:32,capitalShips:3,killTarget:100,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:5,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5};function xu(i){Object.assign(ct,i)}const xS=6,vS=.3,yS=550*550,_d=80,Za="Ас",MS=["Д","М","Т","С","А"],cl=["Сокол","Орёл","Буран","Молния","Гром","Вихрь","Астра","Искра","Титан","Зенит","Пульсар","Каскад","Рубин","Стрела","Импульс","Атлас"],ul=["Фантом","Тень","Коршун","Кобра","Скорпион","Хищник","Шакал","Гадюка","Ворон","Клинок","Мрак","Призрак","Ехидна","Химера","Оса","Демон"],SS=new Ji({color:4491468,emissive:2245734,emissiveIntensity:.3,transparent:!0,opacity:.5,shininess:100}),ES=new Ji({color:11189196,emissive:3359829,emissiveIntensity:.15});function bS(i){return new Ji({color:i,emissive:i,emissiveIntensity:.2})}function TS(i){const e=new Le(i);return new Ji({color:e.clone().multiplyScalar(.7),emissive:e,emissiveIntensity:.1})}function AS(i){return new Dt({color:i,transparent:!0,opacity:.9,blending:En,depthWrite:!1})}function wS(i){return new Dt({color:i,transparent:!0,opacity:.25,blending:En,depthWrite:!1})}let Qf=null,ep=null;const RS=new OM;function xd(i){return new Promise((e,t)=>{RS.load(i,n=>e(n.scene),void 0,t)})}async function CS(){const[i,e]=await Promise.all([xd("./models/fighter.glb"),xd("./models/capital-ship.glb")]);Qf=i,ep=e}const IS=["engines","bridge","turrets","comms","hangar"],PS=["Двигатели","Мостик","Турели","Связь","Ангар"];function LS(i,e){const t=Qf.clone(),n=bS(i),s=TS(i),r=AS(e),a=wS(e);return t.traverse(o=>{if(!o.isMesh)return;const l=o,c=l.name;c.startsWith("body_")?l.material=n:c.startsWith("accent_")?l.material=s:c==="nose"?l.material=ES:c==="canopy"?l.material=SS:c==="exhaust"||c==="exhaust_L"?l.material=r:(c==="glow"||c==="glow_L")&&(l.material=a)}),t.scale.setScalar(1.5),t}function DS(i,e){const t=ep.clone(),n=new Le(e),s=new Ji({color:n,emissive:n.clone().multiplyScalar(.33),emissiveIntensity:.15}),r=new Ji({color:n.clone().multiplyScalar(.82),emissive:n.clone().multiplyScalar(.33),emissiveIntensity:.1}),a=new Ji({color:n,emissive:n.clone().multiplyScalar(.5),emissiveIntensity:.2}),o=t.getObjectByName("hull");o&&o.traverse(c=>{if(!c.isMesh)return;const u=c,h=u.name;h.startsWith("hull_")?u.material=h==="hull_bow"?a:s:h.startsWith("detail_")&&(u.material=r)});const l=IS.map((c,u)=>{const h=t.getObjectByName(c),d=h?.userData??{},f=d.center??[0,0,0];return{name:PS[u],mesh:h,health:gd,maxHealth:gd,center:new P(f[0],f[1],f[2]),radius:(d.radius??10)*1.5}});return t.userData.subsystems=l,t.userData.index=i,t.scale.setScalar(1.5),t}function tp(i,e){return DS(i,e??6715272)}function nr(i,e){return LS(i,e)}const np=new P(1.65,-.375,3),ip=new P(1.65,-.375,-3),NS=new $s(4,.4),US=new Dt({color:2228224,side:sn});function sp(i,e){const t=new an,n=new Pt(NS,US);t.add(n);const s=new Pt(new $s(4,.4),new Dt({color:e,side:sn}));return s.name="healthFill",t.add(s),t.position.y=3,i.add(t),{bar:t,fill:s}}const it=new If;it.background=new Le(659230);const $e=new qt(75,window.innerWidth/window.innerHeight,1,8e3),fn=new jf({antialias:!1,powerPreference:"high-performance"});fn.setSize(window.innerWidth,window.innerHeight);fn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));fn.shadowMap.enabled=!1;document.body.appendChild(fn.domElement);const FS=new mu(5596808,.9);it.add(FS);const rp=new _o(16777215,2);rp.position.set(500,300,-200);it.add(rp);const ap=new _o(4482764,.6);ap.position.set(-300,-100,400);it.add(ap);const OS=new E0(3359846,1118498,.4);it.add(OS);function BS(){$e.aspect=window.innerWidth/window.innerHeight,$e.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight)}let Ja=null;function kS(){const e=new wt,t=new Float32Array(2500*3),n=new Float32Array(2500*3);for(let r=0;r<2500;r++){const a=2500+Math.random()*4500,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[r*3]=a*Math.sin(l)*Math.cos(o),t[r*3+1]=a*Math.sin(l)*Math.sin(o),t[r*3+2]=a*Math.cos(l);const c=.3+Math.random()*.2,u=Math.random();n[r*3]=c*(u>.7?1:.85),n[r*3+1]=c*(u>.3?1:.85),n[r*3+2]=c}e.setAttribute("position",new Et(t,3)),e.setAttribute("color",new Et(n,3));const s=new Nr({size:1.5,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.85});Ja=new $a(e,s),it.add(Ja)}function op(i){Ja&&(Ja.visible=i)}const Fr={colors:{playerBody:"#2299dd",playerExhaust:"#00ddff",allyBody:"#33cc77",allyExhaust:"#00ffaa",enemyBody:"#dd3333",enemyExhaust:"#ff3300",capitalHull:"#667788"},counts:{capitalShips:3,allies:32,enemies:32}},lp="space-combat-settings",st=structuredClone(Fr);function zS(){try{const i=localStorage.getItem(lp);if(i){const e=JSON.parse(i);if(e.colors)for(const t of Object.keys(Fr.colors))typeof e.colors[t]=="string"&&(st.colors[t]=e.colors[t]);if(e.counts)for(const t of Object.keys(Fr.counts))typeof e.counts[t]=="number"&&(st.counts[t]=e.counts[t])}}catch{}}function vu(){localStorage.setItem(lp,JSON.stringify(st))}function HS(){Object.assign(st.colors,Fr.colors),Object.assign(st.counts,Fr.counts),vu()}function Qt(i){return parseInt(i.replace("#",""),16)}zS();let xt=null,Ti=null,vd=0,yd=0,Md=0;function yu(){try{xt=new(window.AudioContext||window.webkitAudioContext),Ti=xt.createGain(),Ti.gain.value=.6,Ti.connect(xt.destination)}catch{xt=null}}function ei(){xt&&xt.state==="suspended"&&xt.resume()}function Hr(){return xt!==null&&xt.state==="running"}function Mu(){return xt!==null}function Su(i){if(!Hr())return;const e=xt.currentTime;if(i){if(e-vd<.08)return;vd=e}else{if(e-yd<.15)return;yd=e}const t=e+.005,n=xt.createOscillator(),s=xt.createGain();n.type="sawtooth",i?(n.frequency.setValueAtTime(800,t),n.frequency.linearRampToValueAtTime(2e3,t+.05),s.gain.setValueAtTime(.35,t),s.gain.linearRampToValueAtTime(0,t+.1)):(n.frequency.setValueAtTime(400,t),n.frequency.linearRampToValueAtTime(200,t+.06),s.gain.setValueAtTime(.1,t),s.gain.linearRampToValueAtTime(0,t+.1)),n.connect(s),s.connect(Ti),n.start(t),n.stop(t+.12)}function VS(i){if(!Hr())return;const e=xt.currentTime;if(e-Md<.06)return;Md=e;const t=e+.005,n=Math.min(.2+i*.1,.8),s=Math.floor(xt.sampleRate*n),r=xt.createBuffer(1,s,xt.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*Math.pow(1-h/s,1.2);const o=xt.createBufferSource();o.buffer=r;const l=xt.createGain(),c=Math.min(.5,.1+i*.06);l.gain.setValueAtTime(c,t),l.gain.linearRampToValueAtTime(0,t+n);const u=xt.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(600+i*300,t),u.frequency.linearRampToValueAtTime(100,t+n),o.connect(u),u.connect(l),l.connect(Ti),o.start(t)}let Pn=null,yi=null,Ki=null;function cp(){if(!Hr()||Pn)return;const i=xt;Ki=i.createGain(),Ki.gain.value=.08;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=200,e.connect(Ki),Ki.connect(Ti),Pn=i.createOscillator(),Pn.type="triangle",Pn.frequency.value=55,Pn.connect(e),Pn.start();const t=i.createGain();t.gain.value=.4,t.connect(e),yi=i.createOscillator(),yi.type="sawtooth",yi.frequency.value=110,yi.connect(t),yi.start()}function GS(i){!Pn||!Ki||(Pn.frequency.value=55+i*8,yi.frequency.value=110+i*16,Ki.gain.value=.06+i*.04)}function up(){Pn?.stop(),yi?.stop(),Pn=null,yi=null,Ki=null}let xi=null,Xi=null,ji=null;function hp(){if(!Hr()||xi)return;const i=xt;ji=i.createGain(),ji.gain.value=0;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=180,e.connect(ji),ji.connect(Ti),xi=i.createOscillator(),xi.type="triangle",xi.frequency.value=70,xi.connect(e),xi.start();const t=i.createGain();t.gain.value=.35,t.connect(e),Xi=i.createOscillator(),Xi.type="sawtooth",Xi.frequency.value=140,Xi.connect(t),Xi.start()}function WS(i){if(!ji)return;const e=200,t=Math.sqrt(i),n=Math.max(0,1-t/e);ji.gain.linearRampToValueAtTime(n*.04,xt.currentTime+.05)}function dp(){xi?.stop(),Xi?.stop(),xi=null,Xi=null,ji=null}function XS(){if(!Hr())return;const i=xt.currentTime+.005,e=xt.createOscillator(),t=xt.createGain();e.type="square",e.frequency.setValueAtTime(250,i),e.frequency.linearRampToValueAtTime(50,i+.15),t.gain.setValueAtTime(.2,i),t.gain.linearRampToValueAtTime(0,i+.2),e.connect(t),t.connect(Ti),e.start(i),e.stop(i+.2)}let Ba=0,ka=0;function qS(){Ba=0,ka=0}function YS(){const i=cl[Ba%cl.length],e=Math.floor(Ba/cl.length)+1;return Ba++,`${i}-${e}`}function KS(){const i=ul[ka%ul.length],e=Math.floor(ka/ul.length)+1;return ka++,`${i}-${e}`}function jS(){return{running:!1,phase:1,score:0,lives:5,playerHealth:100,maxHealth:100,speed:80,baseSpeed:80,boostSpeed:160,invulnTimer:0,totalEnemyKills:0,lastAttacker:"",bullets:[],allyBullets:[],enemyBullets:[],allies:[],enemies:[],capitalShips:[],explosions:[],killFeed:[],keys:{},mouseX:0,mouseY:0,mouseActive:!1,shootCooldown:0,messageTimer:0,damageFlash:0,noDamageTimer:0,respawnQueue:[],lockedTarget:null}}const C=jS(),$S={shipStatus(i){let e="<h3>КОРАБЛИ ПРОТИВНИКА</h3>";for(const t of i){if(!t.alive){e+=`<div class="ship-entry"><div class="ship-name" style="color:#666;text-decoration:line-through;">Корабль ${t.index+1} — УНИЧТОЖЕН</div></div>`;continue}e+=`<div class="ship-entry"><div class="ship-name">Корабль ${t.index+1}</div><div class="subsystems">`;for(let n=0;n<t.subsystems.length;n++){const s=t.subsystems[n],r=s.health>0,a=Math.ceil(s.health/s.maxHealth*100);e+=`<div class="subsys-dot ${r?"alive":"dead"}" title="${s.name}: ${r?a+"%":"уничтожена"}">${MS[n]}</div>`}e+="</div></div>"}return e}},fp=document.getElementById("hud"),ZS=document.getElementById("score"),JS=document.getElementById("lives"),ba=document.getElementById("health-bar"),QS=document.getElementById("ally-count"),eE=document.getElementById("enemy-count"),tE=document.getElementById("speed-indicator"),Rc=document.getElementById("message"),Sd=document.getElementById("mouse-cursor"),hl=document.getElementById("ship-status"),Ed=document.getElementById("objective"),bd=document.getElementById("kill-feed");let Cc="";function nE(){Cc=""}function Qi(i,e=2){Rc.textContent=i,Rc.style.opacity="1",C.messageTimer=e}function iE(){Rc.style.opacity="0"}function sE(){ZS.textContent=String(C.score),JS.textContent=String(C.lives),ba.style.width=Math.max(0,C.playerHealth/C.maxHealth*100)+"%",C.playerHealth<30?ba.style.background="linear-gradient(90deg, #f00, #a00)":C.playerHealth<60?ba.style.background="linear-gradient(90deg, #fa0, #a80)":ba.style.background="linear-gradient(90deg, #0ff, #088)",QS.textContent=String(C.allies.length),eE.textContent=String(C.enemies.length),tE.textContent=`SPD: ${Math.floor(C.speed)}`;const i=(C.mouseX*.5+.5)*window.innerWidth,e=(C.mouseY*.5+.5)*window.innerHeight;if(Sd.style.left=i+"px",Sd.style.top=e+"px",C.phase===1){const t=C.capitalShips.filter(s=>s.alive).length,n=st.counts.capitalShips;Ed.textContent=`Цель: уничтожить корабли [${n-t}/${n}]`}else Ed.textContent=`Цель: уничтожить истребителей [${C.totalEnemyKills}/${ct.killTarget}]`;if(C.phase===1){const t=$S.shipStatus(C.capitalShips.map(n=>({alive:n.alive,index:n.mesh.userData.index,subsystems:n.subsystems})));t!==Cc&&(Cc=t,hl.innerHTML=t),hl.style.display="block",bd.style.top=""}else hl.style.display="none",bd.style.top="20px"}function Eu(){fp.style.display="block"}function Vr(){fp.style.display="none"}const pp=document.getElementById("kill-feed");function mp(i,e,t,n){C.killFeed.push({killer:i,victim:e,killerTeam:t,victimTeam:n,timer:xS}),C.killFeed.length>_S&&C.killFeed.shift(),gp()}function gp(){let i="";for(const e of C.killFeed){const t="kf-killer-"+e.killerTeam,n="kf-victim-"+e.victimTeam,s=Math.min(1,e.timer/1.5);i+=`<div class="kf-entry" style="opacity:${s}"><span class="${t}">${e.killer}</span><span class="kf-arrow"> ► </span><span class="${n}">${e.victim}</span></div>`}pp.innerHTML=i}function rE(i){let e=!1;for(let t=C.killFeed.length-1;t>=0;t--)C.killFeed[t].timer-=i,C.killFeed[t].timer<=0&&(C.killFeed.splice(t,1),e=!0);e&&gp()}function aE(){pp.innerHTML=""}const oE=new Dt({color:1118481,transparent:!0,opacity:.4}),lE=new mo(1,4,3),Td=[16729088,16737792,16746496,16755200,52479,4473924],_p=[];function cE(){const i=_p.pop();return i?(i.visible=!0,i.material.opacity=1,i):new Pt(lE,new Dt({transparent:!0,opacity:1}))}function Ad(i){i.visible=!1,it.remove(i),_p.push(i)}function Si(i,e=1){VS(e);const t=3+Math.floor(Math.random()*3),n=[];for(let s=0;s<t;s++){const r=(.5+Math.random()*1.5)*e,a=cE();a.material.color.setHex(Td[Math.floor(Math.random()*Td.length)]),a.position.copy(i),a.scale.setScalar(r),it.add(a);const o=new P((Math.random()-.5)*60*e,(Math.random()-.5)*60*e,(Math.random()-.5)*60*e);n.push({mesh:a,velocity:o,life:.4+Math.random()*.8})}C.explosions.push({particles:n,timer:1.2})}function uE(i){for(let e=C.explosions.length-1;e>=0;e--){const t=C.explosions[e];t.timer-=i;for(let n=t.particles.length-1;n>=0;n--){const s=t.particles[n];s.mesh.position.addScaledVector(s.velocity,i),s.velocity.multiplyScalar(1-2*i),s.life-=i,s.mesh.material.opacity=Math.max(0,s.life),s.mesh.scale.multiplyScalar(1-.5*i),s.life<=0&&(Ad(s.mesh),t.particles.splice(n,1))}if(t.timer<=0){for(const n of t.particles)Ad(n.mesh);C.explosions.splice(e,1)}}}const xp=new po(.15,.15,5,4);xp.rotateZ(Math.PI/2);const vp=new po(.18,.18,5,4);vp.rotateZ(Math.PI/2);const hE=new Dt({color:65484,blending:En,transparent:!0}),dE=new Dt({color:4521864,blending:En,transparent:!0}),fE=new Dt({color:16724736,blending:En,transparent:!0}),pE=new P(1,0,0),wd=new on,dl=new P;function Qa(i,e,t,n){const s=t==="enemy",r=t==="player",a=s?vp:xp,o=r?hE:s?fE:dE,l=new Pt(a,o);l.position.copy(i),dl.copy(e).normalize(),wd.setFromUnitVectors(pE,dl),l.quaternion.copy(wd),it.add(l);const c=s?250:400,u={mesh:l,velocity:new P().copy(dl).multiplyScalar(c),life:2,team:t,damage:r?15:10,shooterName:n||""};return t==="player"?C.bullets.push(u):t==="ally"?C.allyBullets.push(u):C.enemyBullets.push(u),u}function mE(){const i=C.bullets.length+C.allyBullets.length+C.enemyBullets.length;if(i>200){const e=[C.bullets,C.allyBullets,C.enemyBullets];e.sort((r,a)=>a.length-r.length);const t=e[0],n=i-160,s=Math.min(n,t.length);for(let r=0;r<s;r++)it.remove(t[r].mesh);t.splice(0,s)}}const As=new P,Rd=new P,gE=300*300;let fl=!1;function _E(i,e,t,n,s){As.copy(e),As.x+=(Math.random()-.5)*.05,As.y+=(Math.random()-.5)*.05,As.z+=(Math.random()-.5)*.05,As.normalize(),fl=!fl;const r=fl?np:ip;Rd.copy(r).applyQuaternion(i.quaternion).add(i.position),Qa(Rd,As,t,n),i.position.distanceToSquared(s.position)<gE&&Su(!1)}const Fe=new an,jt={pitch:0,yaw:0,roll:0},Ta=new P,Cd=new P,Id=new P,pl=new on,Pd=new P,ml=new P,Aa=new P;function xE(i){const s=C.mouseX,r=C.mouseY,a=.05,o=T=>{const A=Math.abs(T);return A<a?0:Math.sign(T)*((A-a)/(1-a))},l=o(s);let u=-o(r),h=-l,d=-l*.5;C.keys.KeyA&&(d-=2),C.keys.KeyD&&(d+=2),C.keys.KeyW||C.keys.ShiftLeft||C.keys.ShiftRight?C.speed=Math.min(C.speed+120*i,C.boostSpeed):C.keys.KeyS?C.speed=Math.max(C.speed-100*i,20):C.speed+=(C.baseSpeed-C.speed)*2*i,jt.pitch+=u*2.2*i,jt.roll+=d*3*i,jt.yaw+=h*1.5*i,jt.pitch*=1-1.5*i,jt.roll*=1-2*i,jt.yaw*=1-1.5*i,Fe.quaternion.multiply(pl.setFromAxisAngle(Ta.set(0,0,1),jt.pitch*i)),Fe.quaternion.multiply(pl.setFromAxisAngle(Ta.set(0,1,0),jt.yaw*i)),Fe.quaternion.multiply(pl.setFromAxisAngle(Ta.set(1,0,0),jt.roll*i)),Fe.quaternion.normalize();const f=Ta.set(1,0,0).applyQuaternion(Fe.quaternion);Fe.position.addScaledVector(f,C.speed*i);const g=C.speed/C.boostSpeed,x=Fe.getObjectByName("exhaust");x&&(x.material.opacity=.4+g*.6,x.scale.setScalar(.8+g*.6));const m=Fe.getObjectByName("glow");m&&(m.material.opacity=.1+g*.3,m.scale.setScalar(.7+g*.8)),GS(g);const p=Cd.set(-10.5,3.75,0).applyQuaternion(Fe.quaternion),y=Id.copy(Fe.position).add(p);$e.position.lerp(y,5*i);const S=Cd.copy(Fe.position).add(f.multiplyScalar(20)),M=Id.set(0,1,0).applyQuaternion(Fe.quaternion);$e.up.lerp(M,3*i).normalize(),$e.lookAt(S),C.invulnTimer>0?(C.invulnTimer-=i,Fe.visible=Math.floor(C.invulnTimer*10)%2===0):Fe.visible=!0,C.noDamageTimer+=i,C.noDamageTimer>=5&&C.playerHealth<C.maxHealth&&(C.playerHealth=Math.min(C.maxHealth,C.playerHealth+C.maxHealth*.02*i)),C.shootCooldown-=i,(C.keys.Space||C.keys.MouseLeft)&&C.shootCooldown<=0&&(C.shootCooldown=.1,Pd.set(C.mouseX,-C.mouseY,.5).unproject($e),ml.copy(Pd).sub($e.position).normalize(),Aa.copy(np).applyQuaternion(Fe.quaternion).add(Fe.position),Qa(Aa,ml,"player",Za),Aa.copy(ip).applyQuaternion(Fe.quaternion).add(Fe.position),Qa(Aa,ml,"player",Za),Su(!0))}function vE(){if(Si(Fe.position.clone(),6),mp(C.lastAttacker||"?",Za,"enemy","player"),C.lives--,C.lives<=0){C.running=!1,document.getElementById("final-score").textContent=`Счёт: ${C.score}`,document.getElementById("game-over").style.display="flex";return}Qi(`СБИТ! Жизней: ${C.lives}`,2),Fe.position.set(0,0,0),Fe.quaternion.identity(),jt.pitch=0,jt.yaw=0,jt.roll=0,C.playerHealth=C.maxHealth,C.speed=C.baseSpeed,C.invulnTimer=3,C.damageFlash=0,C.lastAttacker="",$e.position.set(-10.5,3.75,0),$e.lookAt(Fe.position)}let Ld=!1,yp=0,qi,Ps,Ls,Ds,eo,Mp=[],Sp=[];function wa(i,e,t){const n=new jf({antialias:!0,alpha:!0});n.setSize(i,e),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new If;s.add(new mu(5596808,1));const r=new _o(16777215,1.5);r.position.set(5,3,2),s.add(r);const a=new qt(45,i/e,.1,500);a.position.set(0,2,t),a.lookAt(0,0,0);const o=new an;return s.add(o),{renderer:n,scene:s,camera:a,model:o}}function Ep(i,e){i.scene.remove(i.model),i.model=e,i.scene.add(e)}function $n(i,e,t){const n=nr(Qt(st.colors[e]),Qt(st.colors[t]));Ep(i,n)}function bp(){const i=tp(0,Qt(st.colors.capitalHull));Ep(eo,i)}function zi(i,e,t,n){const s=document.createElement("label");s.textContent=e+" ";const r=document.createElement("input");r.type="color",r.value=st.colors[t],r.addEventListener("input",()=>{st.colors[t]=r.value,n()}),r.addEventListener("change",()=>{vu()}),s.appendChild(r),i.appendChild(s),Mp.push({key:t,input:r})}function gl(i,e,t,n,s,r){const a=document.createElement("div");a.className="slider-row";const o=document.createElement("label"),l=document.createElement("span");l.textContent=String(st.counts[t]),o.textContent=e+": ",o.appendChild(l);const c=document.createElement("input");c.type="range",c.min=String(n),c.max=String(s),c.step=String(r),c.value=String(st.counts[t]),c.addEventListener("input",()=>{const u=Number(c.value);st.counts[t]=u,l.textContent=String(u),vu()}),a.appendChild(o),a.appendChild(c),i.appendChild(a),Sp.push({key:t,input:c,label:l})}function Ra(i,e,t,n=!1){const s=document.createElement("div");s.className=n?"preview-card wide":"preview-card";const r=document.createElement("h3");r.textContent=e,s.appendChild(r),s.appendChild(t.renderer.domElement);const a=document.createElement("div");return a.className="color-pair",s.appendChild(a),i.appendChild(s),{card:s,colorContainer:a}}function yE(){qi=document.createElement("div"),qi.id="settings-screen";const i=document.createElement("h1");i.textContent="НАСТРОЙКИ",qi.appendChild(i);const e=document.createElement("div");e.className="settings-content";const t=document.createElement("div");t.className="settings-section";const n=document.createElement("h2");n.textContent="ТЕХНИКА",t.appendChild(n);const s=document.createElement("div");s.className="preview-row",Ps=wa(120,120,12);const{colorContainer:r}=Ra(s,"ИГРОК",Ps);zi(r,"Корпус","playerBody",()=>$n(Ps,"playerBody","playerExhaust")),zi(r,"Двигатель","playerExhaust",()=>$n(Ps,"playerBody","playerExhaust")),Ls=wa(120,120,12);const{colorContainer:a}=Ra(s,"СОЮЗНИК",Ls);zi(a,"Корпус","allyBody",()=>$n(Ls,"allyBody","allyExhaust")),zi(a,"Двигатель","allyExhaust",()=>$n(Ls,"allyBody","allyExhaust")),Ds=wa(120,120,12);const{colorContainer:o}=Ra(s,"ПРОТИВНИК",Ds);zi(o,"Корпус","enemyBody",()=>$n(Ds,"enemyBody","enemyExhaust")),zi(o,"Двигатель","enemyExhaust",()=>$n(Ds,"enemyBody","enemyExhaust")),t.appendChild(s);const l=document.createElement("div");l.className="preview-row",l.style.marginTop="20px",eo=wa(200,150,120);const{colorContainer:c}=Ra(l,"БОЕВОЙ КОРАБЛЬ",eo,!0);zi(c,"Корпус","capitalHull",bp),t.appendChild(l),e.appendChild(t);const u=document.createElement("div");u.className="settings-section";const h=document.createElement("h2");h.textContent="КОЛИЧЕСТВО",u.appendChild(h),gl(u,"Боевые корабли","capitalShips",1,5,1),gl(u,"Союзники","allies",8,64,4),gl(u,"Противники","enemies",8,64,4),e.appendChild(u);const d=document.createElement("div");d.className="settings-buttons";const f=document.createElement("button");f.id="settings-reset",f.textContent="СБРОС",f.addEventListener("click",()=>{HS(),Tp(),Ap()}),d.appendChild(f);const g=document.createElement("button");g.id="settings-back",g.textContent="НАЗАД",g.addEventListener("click",()=>{SE()}),d.appendChild(g),e.appendChild(d),qi.appendChild(e),document.body.appendChild(qi)}function Tp(){for(const{key:i,input:e}of Mp)e.value=st.colors[i];for(const{key:i,input:e,label:t}of Sp)e.value=String(st.counts[i]),t.textContent=String(st.counts[i])}function Ap(){$n(Ps,"playerBody","playerExhaust"),$n(Ls,"allyBody","allyExhaust"),$n(Ds,"enemyBody","enemyExhaust"),bp()}function wp(){yp=requestAnimationFrame(wp);const i=Date.now()*.001;for(const e of[Ps,Ls,Ds,eo])e.model.rotation.y=i*.5,e.renderer.render(e.scene,e.camera)}function ME(){Ld||(yE(),Ld=!0),Tp(),Ap(),qi.style.display="flex",document.getElementById("start-screen").style.display="none",wp()}function SE(){cancelAnimationFrame(yp),qi.style.display="none",document.getElementById("start-screen").style.display="flex"}const EE=document.getElementById("target-markers"),Ei=[],et=new P,Rp=800*800,Cp=1500*1500;function to(i){if(i<Ei.length)return Ei[i].style.display="block",Ei[i];const e=document.createElement("div");return e.className="target-marker",e.innerHTML='<div class="diamond"></div><div class="marker-dist"></div><div class="marker-label"></div>',EE.appendChild(e),Ei.push(e),e}function Dd(i,e,t,n){for(const s of C.capitalShips){if(!s.alive)continue;const r=n.position.distanceToSquared(s.mesh.position);if(!(r>Cp))if(r>yS){et.copy(s.mesh.position).project($e);const a=(et.x*.5+.5)*e,o=(-et.y*.5+.5)*t;if(et.z>=1||a<-20||a>e+20||o<-20||o>t+20)continue;const l=to(i++);l.className="target-marker capital",l.style.left=a+"px",l.style.top=o+"px";const c=Math.sqrt(r);l.children[1].textContent=Math.floor(c)+"m",l.children[2].textContent=`Корабль-${s.mesh.userData.index+1}`,l.children[0].style.width="28px",l.children[0].style.height="28px"}else for(const a of s.subsystems){if(a.health<=0)continue;et.copy(a.center).applyMatrix4(s.mesh.matrixWorld);const o=n.position.distanceTo(et);et.project($e);const l=(et.x*.5+.5)*e,c=(-et.y*.5+.5)*t;if(et.z>=1||l<-20||l>e+20||c<-20||c>t+20)continue;const u=to(i++);u.className="target-marker capital",u.style.left=l+"px",u.style.top=c+"px",u.children[1].textContent=Math.floor(o)+"m",u.children[2].textContent=a.name,u.children[0].style.width="21px",u.children[0].style.height="21px"}}return i}function bE(i,e,t,n,s){let r,a;i.kind==="fighter"?(r=s.position.distanceTo(i.fighter.mesh.position),et.copy(i.fighter.mesh.position).project($e),a=i.fighter.name):(et.copy(i.subsystem.center).applyMatrix4(i.ship.mesh.matrixWorld),r=s.position.distanceTo(et),et.project($e),a=i.subsystem.name);let o=(et.x*.5+.5)*t,l=(-et.y*.5+.5)*n;const c=et.z;if(c>=1||o<0||o>t||l<0||l>n){const f=t/2,g=n/2;let x=o-f,m=l-g;c>=1&&(x=-x,m=-m);const p=40,y=Math.abs(x)>.001?(t/2-p)/Math.abs(x):1/0,S=Math.abs(m)>.001?(n/2-p)/Math.abs(m):1/0,M=Math.min(y,S,1);o=f+x*M,l=g+m*M}const u=to(e++),h=i.kind==="subsystem";u.className="target-marker target-locked"+(h?" capital":""),u.style.left=o+"px",u.style.top=l+"px",u.children[1].textContent=Math.floor(r)+"m",u.children[2].textContent=a;const d=h?1:Math.max(.6,Math.min(1.5,300/r));return u.children[0].style.width=21*d+"px",u.children[0].style.height=21*d+"px",e}function TE(i){const e=window.innerWidth,t=window.innerHeight,n=(C.mouseX*.5+.5)*e,s=(C.mouseY*.5+.5)*t;let r=0;if(C.lockedTarget){const l=C.lockedTarget;l.kind==="fighter"?(l.fighter.health<=0||!C.enemies.includes(l.fighter))&&(C.lockedTarget=null):(l.subsystem.health<=0||!l.ship.alive)&&(C.lockedTarget=null)}if(C.lockedTarget){r=Dd(r,e,t,i),r=bE(C.lockedTarget,r,e,t,i);for(let l=r;l<Ei.length;l++)Ei[l].style.display="none";return}const a=Math.sqrt(e*e+t*t),o=(vS*a)**2;for(const l of C.enemies){const c=i.position.distanceToSquared(l.mesh.position);if(c>Rp)continue;et.copy(l.mesh.position).project($e);const u=(et.x*.5+.5)*e,h=(-et.y*.5+.5)*t;if(et.z>=1||u<-20||u>e+20||h<-20||h>t+20)continue;const d=u-n,f=h-s;if(d*d+f*f>o)continue;const g=to(r++);g.className="target-marker",g.style.left=u+"px",g.style.top=h+"px";const x=Math.sqrt(c);g.children[1].textContent=Math.floor(x)+"m",g.children[2].textContent=l.name;const m=Math.max(.6,Math.min(1.5,300/x));g.children[0].style.width=21*m+"px",g.children[0].style.height=21*m+"px"}r=Dd(r,e,t,i);for(let l=r;l<Ei.length;l++)Ei[l].style.display="none"}function Ip(i){if(C.lockedTarget){C.lockedTarget=null;return}const e=window.innerWidth,t=window.innerHeight,n=(C.mouseX*.5+.5)*e,s=(C.mouseY*.5+.5)*t,r=_d*_d;let a=null,o=1/0;for(const l of C.enemies){if(i.position.distanceToSquared(l.mesh.position)>Rp||(et.copy(l.mesh.position).project($e),et.z>=1))continue;const c=(et.x*.5+.5)*e,u=(-et.y*.5+.5)*t,h=(c-n)**2+(u-s)**2;h<r&&h<o&&(o=h,a={kind:"fighter",fighter:l})}for(const l of C.capitalShips)if(l.alive&&!(i.position.distanceToSquared(l.mesh.position)>Cp))for(const c of l.subsystems){if(c.health<=0||(et.copy(c.center).applyMatrix4(l.mesh.matrixWorld),et.project($e),et.z>=1))continue;const u=(et.x*.5+.5)*e,h=(-et.y*.5+.5)*t,d=(u-n)**2+(h-s)**2;d<r&&d<o&&(o=d,a={kind:"subsystem",subsystem:c,ship:l})}if(!a){let l=1/0;for(const c of C.enemies){const u=i.position.distanceToSquared(c.mesh.position);u<l&&(l=u,a={kind:"fighter",fighter:c})}for(const c of C.capitalShips)if(c.alive)for(const u of c.subsystems){if(u.health<=0)continue;et.copy(u.center).applyMatrix4(c.mesh.matrixWorld);const h=i.position.distanceToSquared(et);h<l&&(l=h,a={kind:"subsystem",subsystem:u,ship:c})}}C.lockedTarget=a}let Hi=null;function Pp(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function AE(i){if(!Pp())return;const e=document.getElementById("mouse-cursor");e&&(e.style.display="none");const t=document.getElementById("touch-controls");t.innerHTML="";const n=document.createElement("div");n.className="touch-aim-zone",t.appendChild(n);let s=null,r=0,a=0;const o=150;n.addEventListener("touchstart",T=>{T.preventDefault(),ei();for(const A of Array.from(T.changedTouches))s===null&&(s=A.identifier,r=A.clientX,a=A.clientY,Hi!==null&&(clearInterval(Hi),Hi=null))},{passive:!1}),n.addEventListener("touchmove",T=>{T.preventDefault();for(const A of Array.from(T.changedTouches))if(A.identifier===s){const R=A.clientX-r,_=A.clientY-a;C.mouseX=Nd(R/o,-1,1),C.mouseY=Nd(_/o,-1,1),C.mouseActive=!0}},{passive:!1});const l=T=>{for(const A of Array.from(T.changedTouches))A.identifier===s&&(s=null,Hi=window.setInterval(()=>{C.mouseX*=.8,C.mouseY*=.8,Math.abs(C.mouseX)<.01&&Math.abs(C.mouseY)<.01&&(C.mouseX=0,C.mouseY=0,Hi!==null&&(clearInterval(Hi),Hi=null))},16))};n.addEventListener("touchend",l),n.addEventListener("touchcancel",l);const c=document.createElement("div");c.className="touch-joystick";const u=document.createElement("div");u.className="touch-joystick-knob",c.appendChild(u),t.appendChild(c);let h=null,d=0,f=0;const g=40,x=.3;c.addEventListener("touchstart",T=>{T.preventDefault(),ei();for(const A of Array.from(T.changedTouches))if(h===null){h=A.identifier;const R=c.getBoundingClientRect();d=R.left+R.width/2,f=R.top+R.height/2}},{passive:!1}),c.addEventListener("touchmove",T=>{T.preventDefault();for(const A of Array.from(T.changedTouches))if(A.identifier===h){let R=A.clientX-d,_=A.clientY-f;const b=Math.sqrt(R*R+_*_);b>g&&(R=R/b*g,_=_/b*g),u.style.transform=`translate(${R-25}px, ${_-25}px)`;const B=R/g,I=_/g;C.keys.KeyA=B<-x,C.keys.KeyD=B>x,C.keys.KeyW=I<-x,C.keys.KeyS=I>x}},{passive:!1});const m=T=>{for(const A of Array.from(T.changedTouches))A.identifier===h&&(h=null,u.style.transform="translate(-25px, -25px)",C.keys.KeyA=!1,C.keys.KeyD=!1,C.keys.KeyW=!1,C.keys.KeyS=!1)};c.addEventListener("touchend",m),c.addEventListener("touchcancel",m);const p=document.createElement("div");p.className="touch-fire-btn",p.textContent="FIRE",t.appendChild(p),p.addEventListener("touchstart",T=>{T.preventDefault(),ei(),C.keys.MouseLeft=!0,p.classList.add("active")},{passive:!1});const y=T=>{T.preventDefault(),C.keys.MouseLeft=!1,p.classList.remove("active")};p.addEventListener("touchend",y,{passive:!1}),p.addEventListener("touchcancel",y,{passive:!1});const S=document.createElement("div");S.className="touch-lock-btn",S.textContent="LOCK",t.appendChild(S),S.addEventListener("touchstart",T=>{T.preventDefault(),ei(),Ip(Fe),S.classList.add("active"),setTimeout(()=>S.classList.remove("active"),200)},{passive:!1});const M=document.createElement("div");M.className="touch-pause-btn",M.textContent="❚❚",t.appendChild(M),M.addEventListener("touchstart",T=>{T.preventDefault(),i()},{passive:!1})}function Nd(i,e,t){return i<e?e:i>t?t:i}const bu=1e3,Tu=5,Au=10,wE=50,RE=1e3,CE={easy:{enemies:16,allies:40,capitalShips:1,killTarget:30,fighterHP:40,subsystemHP:150,enemySpeedMin:35,enemySpeedMax:55,enemyFireRateMin:3,enemyFireRateMax:6,allySpeedMin:60,allySpeedMax:80,allyFireRateMin:.8,allyFireRateMax:2,turretFireRateMin:5,turretFireRateMax:8,turretAccuracy:.08,respawnDelay:7},medium:{enemies:32,allies:32,capitalShips:3,killTarget:60,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:4,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5},hard:{enemies:48,allies:20,capitalShips:4,killTarget:80,fighterHP:60,subsystemHP:250,enemySpeedMin:55,enemySpeedMax:80,enemyFireRateMin:1,enemyFireRateMax:3,allySpeedMin:45,allySpeedMax:60,allyFireRateMin:1.5,allyFireRateMax:4,turretFireRateMin:2,turretFireRateMax:4,turretAccuracy:.25,respawnDelay:3}},IE={easy:{base:500,scoreMultiplier:1},medium:{base:2e3,scoreMultiplier:2},hard:{base:5e3,scoreMultiplier:3}},PE={enemies:32,allies:32,capitalShips:3,killTarget:100,fighterHP:50,subsystemHP:200,enemySpeedMin:45,enemySpeedMax:65,enemyFireRateMin:2,enemyFireRateMax:5,allySpeedMin:55,allySpeedMax:75,allyFireRateMin:1,allyFireRateMax:3,turretFireRateMin:3,turretFireRateMax:5,turretAccuracy:.15,respawnDelay:5},Lp={victory(i){const e=i.victory?"ПОБЕДА!":"ПОРАЖЕНИЕ";let n=`
    <h1 style="color:${i.victory?"#44ff88":"#ff4444"}">${e}</h1>
    <div class="result-stats">
      <div class="result-line">Очки: <span>${i.combatScore}</span></div>`;if(i.reward>0){const s=i.victory?"Награда":"Частичная награда";n+=`
      <div class="result-line">${s}: <span class="result-reward">+${i.reward}₵</span></div>`}return n+=`
      <div class="result-line result-total">Баланс: <span>${i.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`,n},desertion(i,e){let t=`
    <h1 style="color:#ff8844">ДЕЗЕРТИРСТВО</h1>
    <div class="result-stats">
      <div class="result-line">Контракт провален</div>`;return i>0&&(t+=`
      <div class="result-line">Штраф: <span style="color:#ff4444">-${i}₵</span></div>`),t+=`
      <div class="result-line result-total">Баланс: <span>${e}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`,t}};function LE(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function DE(i){return Math.sqrt(-2*Math.log(i()||1e-4))*Math.cos(2*Math.PI*i())}const _l=["Альтаир","Денеб","Ригель","Бетельгейзе","Вега","Антарес","Процион","Капелла","Альдебаран","Спика","Поллукс","Фомальгаут","Мимоза","Регул","Адара","Кастор","Гакрукс","Шаула","Беллатрикс","Эльнат","Мирфак","Алнилам","Алиот","Дубхе","Мерак","Канопус","Ахернар","Хадар","Акрукс","Атрия","Сабик","Менкалинан","Тубан","Арктур","Нова","Кассиопея","Андромеда","Орион","Нептунус","Ригель Кент","Денебола","Альгениб","Альферац","Мицар","Алькор","Расальхаг","Сухаил","Авиор","Наос","Альсуд","Маркаб","Шедар","Мирах","Алмаак","Хамаль","Шератан","Мирцам","Везен","Арнеб","Нихаль","Курса","Ментака","Альнитак","Саиф","Пхад","Мегрец","Алиот","Бенетнаш","Кор Кароли","Гемма","Зубен","Акраб","Антарес","Шаула","Лезат","Кархи","Сариф","Нунки","Каус","Альбирео","Тараз","Маркаб","Садалмелик","Садалсууд","Скат","Фомальгаут","Дифда","Менкар","Альголь","Мирфак","Капелла","Тейат","Альхена","Муфрид","Сегин","Рухба","Дженах","Минкар","Гиена","Завиява","Порима","Виндемиатрикс","Хезе","Зубен Хакраби","Сирра","Кейд","Кафф","Тених","Данб","Альрами","Садира","Кабиль","Тират","Захиль","Мусик","Альраид","Садатони","Боталин","Завра","Кремон","Тилон","Феркад","Элтамин","Растабан","Граффиас","Чара","Ла Суперба","Селаено","Электра","Майя","Тайгета","Стеропа","Меропа","Альциона","Атлас","Плейона","Хиадес","Никон","Систри","Гирлан","Кемаш","Тирок","Навия","Бестия","Ферион","Крестон","Халлия","Зефирус","Иридан","Латан","Норикум","Авента","Керн","Люмир","Сольвет","Армис","Грантис","Ксеон","Вирай","Тобрис","Кандор","Эверон","Лорин","Пилат","Мирена","Сафира","Руттен","Гальвер","Истрон","Найлус","Рошан","Крибель","Остра","Тамир","Зирак","Морвин","Сельва","Гриних","Бальтор","Кресто"],Ud=["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ"];function NE(i,e){if(i<_l.length)return _l[i];const t=(i-_l.length)%Ud.length,n=Math.floor(e()*900+100);return`${Ud[t]}-${n}`}const UE=42,Fd=1e3,Od=5,Bd=2*Math.PI,xl=15,vl=75,kd=3.5;function FE(){const i=LE(UE),e=()=>DE(i),t=[],n=[];let s=0;for(;t.length<Fd&&s<Fd*10;){s++;let h,d,f;if(i()<.85){const M=Math.floor(i()*Od),T=.03+i()*.97,A=T*4.2+M*Bd/Od,R=Math.sin(T*12+M)*.3+Math.sin(T*5.7+M*3)*.2,_=T*vl,b=(8+_*.15)*(.3+i()*.7),B=A+R+Math.PI/2,I=e()*b*.4;h=_*Math.cos(A+R)+I*Math.cos(B)+e()*2.5,d=_*Math.sin(A+R)+I*Math.sin(B)+e()*2.5,f=e()*1*(1-T*.5)}else{const M=i()*Bd,T=xl+i()*(vl-xl);h=T*Math.cos(M)+e()*5,d=T*Math.sin(M)+e()*5,f=e()*1.2}const g=Math.sqrt(h*h+d*d);if(g<xl||g>vl)continue;let x=!1;for(let M=0;M<n.length;M++){const T=h-n[M][0],A=f-n[M][1],R=d-n[M][2];if(T*T+A*A+R*R<kd*kd){x=!0;break}}if(x)continue;const m=[Math.round(h*100)/100,Math.round(f*100)/100,Math.round(d*100)/100],p=t.length,y=p===0?"solaris":`sys-${p}`,S=p===0?"Солярис":NE(p,i);t.push({id:y,name:S,position:m,connections:[]}),n.push(m)}const r=5,a=[];for(let h=0;h<t.length;h++){const d=[];for(let f=0;f<t.length;f++){if(h===f)continue;const g=n[h][0]-n[f][0],x=n[h][1]-n[f][1],m=n[h][2]-n[f][2];d.push({idx:f,dist:g*g+x*x+m*m})}d.sort((f,g)=>f.dist-g.dist),a[h]=d.slice(0,r).map(f=>f.idx)}const o=new Set;for(let h=0;h<t.length;h++){const d=a[h],f=2+Math.floor(i()*3);for(let g=0;g<Math.min(f,d.length);g++){const x=d[g],m=h<x?`${h}-${x}`:`${x}-${h}`;o.has(m)||(o.add(m),t[h].connections.push(t[x].id),t[x].connections.push(t[h].id))}}const l=new Set,c=[0];l.add(0);const u=new Map;for(let h=0;h<t.length;h++)u.set(t[h].id,h);for(;c.length>0;){const h=c.shift();for(const d of t[h].connections){const f=u.get(d);l.has(f)||(l.add(f),c.push(f))}}if(l.size<t.length)for(let h=0;h<t.length;h++){if(l.has(h))continue;let d=1/0,f=0;for(const m of l){const p=n[h][0]-n[m][0],y=n[h][1]-n[m][1],S=n[h][2]-n[m][2],M=p*p+y*y+S*S;M<d&&(d=M,f=m)}const g=h<f?`${h}-${f}`:`${f}-${h}`;o.has(g)||(o.add(g),t[h].connections.push(t[f].id),t[f].connections.push(t[h].id));const x=[h];for(l.add(h);x.length>0;){const m=x.shift();for(const p of t[m].connections){const y=u.get(p);l.has(y)||(l.add(y),x.push(y))}}}return t}const no=FE(),Dp=new Map;for(const i of no)Dp.set(i.id,i);function Zt(i){return Dp.get(i)}function OE(i,e){const t=Zt(i),n=Zt(e),s=t.position[0]-n.position[0],r=t.position[1]-n.position[1],a=t.position[2]-n.position[2];return Math.sqrt(s*s+r*r+a*a)<25?1:2}const zd=["Патрулирование","Перехват","Разведка боем"],Hd=["Оборона станции","Прорыв обороны","Конвой"],Vd=["Штурм флота","Тотальное наступление","Зачистка сектора"],Gd=["Устранить угрозу в секторе","Перехватить вражеские истребители","Провести разведку и уничтожить патруль"],Wd=["Защитить станцию от атаки","Прорвать вражескую блокаду","Обеспечить безопасность конвоя"],Xd=["Уничтожить вражеский флот","Полномасштабное наступление на врага","Очистить сектор от всех угроз"];function BE(i,e){const t=new Set([i]);let n=[i];for(let s=0;s<e;s++){const r=[];for(const a of n){const o=Zt(a);for(const l of o.connections)t.has(l)||(t.add(l),r.push(l))}n=r}return t.delete(i),Array.from(t)}function kE(i){const t=BE(i,4).sort(()=>Math.random()-.5),n=s=>t[s%t.length].length>0?t[s%t.length]:no[1].id;return[{difficulty:"easy",title:zd[Math.floor(Math.random()*zd.length)],description:Gd[Math.floor(Math.random()*Gd.length)],targetSystemId:n(0)},{difficulty:"medium",title:Hd[Math.floor(Math.random()*Hd.length)],description:Wd[Math.floor(Math.random()*Wd.length)],targetSystemId:n(1)},{difficulty:"hard",title:Vd[Math.floor(Math.random()*Vd.length)],description:Xd[Math.floor(Math.random()*Xd.length)],targetSystemId:n(2)}]}const Np="space-combat-campaign";let $i="menu",ns=!1;const le={money:bu,fuel:Tu,maxFuel:Au,currentSystemId:"solaris",activeContract:null,completedContracts:0,lastCombatScore:0};let za=[];function is(i){$i=i}function zE(i){ns=i}function HE(){ns=!0,le.money=bu,le.fuel=Tu,le.maxFuel=Au,le.currentSystemId="solaris",le.activeContract=null,le.completedContracts=0,le.lastCombatScore=0,Gr(),Ri()}function Gr(){const i=kE(le.currentSystemId);let e=le.completedContracts;za=i.map(t=>{const n=IE[t.difficulty];return e++,{id:`contract-${e}`,difficulty:t.difficulty,title:t.title,description:t.description,targetSystemId:t.targetSystemId,reward:n.base,scoreMultiplier:n.scoreMultiplier}})}function VE(i){le.activeContract=i,Ri()}function GE(i,e){if(le.lastCombatScore=e,!le.activeContract)return 0;const t=le.activeContract;let n;return i?n=t.reward+Math.floor(e*t.scoreMultiplier/100):n=Math.floor(t.reward*.3),le.money+=n,le.activeContract=null,le.completedContracts++,Ri(),n}function WE(){le.activeContract=null;const i=Math.min(RE,le.money);return le.money-=i,Ri(),i}function XE(i){const e=le.maxFuel-le.fuel,t=Math.min(i,e),n=t*50;return t<=0||le.money<n?!1:(le.money-=n,le.fuel+=t,Ri(),!0)}function qE(i){return le.fuel<i?!1:(le.fuel-=i,Ri(),!0)}function YE(i){le.currentSystemId=i,Ri()}function KE(){return le.fuel===0&&le.money<50}function jE(){le.fuel=1,Ri()}function Ri(){try{localStorage.setItem(Np,JSON.stringify({money:le.money,fuel:le.fuel,maxFuel:le.maxFuel,currentSystemId:le.currentSystemId,activeContract:le.activeContract,completedContracts:le.completedContracts,lastCombatScore:le.lastCombatScore}))}catch{}}function $E(){try{const i=localStorage.getItem(Np);if(!i)return!1;const e=JSON.parse(i);return le.money=e.money??bu,le.fuel=e.fuel??Tu,le.maxFuel=e.maxFuel??Au,le.currentSystemId=e.currentSystemId??"solaris",le.activeContract=e.activeContract??null,le.completedContracts=e.completedContracts??0,le.lastCombatScore=e.lastCombatScore??0,Zt(le.currentSystemId)||(le.currentSystemId="solaris"),!0}catch{return!1}}let Nn=null,io=null;function Up(){const i=document.getElementById("result-continue-btn");i&&i.addEventListener("click",()=>{io&&io()})}function ZE(i,e,t){if(Nn=document.getElementById("combat-result"),!Nn)return;io=t;const n=GE(i,e);Nn.innerHTML=Lp.victory({victory:i,combatScore:e,reward:n,money:le.money}),Nn.style.display="flex",Up()}function JE(i,e){Nn=document.getElementById("combat-result"),Nn&&(io=e,Nn.innerHTML=Lp.desertion(i,le.money),Nn.style.display="flex",Up())}function yo(){Nn&&(Nn.style.display="none")}const Ht=new an;Ht.visible=!1;const mn=new Map,Ar=new Map,yl=[],Ha=new Map,Zi=new Set,Mr=new Map,so=[],Ic=[],Ae={playerShipModel:null,selectionRing:null,contractMarker:null,labelsContainer:null,twinkleTimeUniform:null,mainStarsMat:null,brightStarsMat:null,galaxyBrightness:1},ws={time:0},gr=new P,QE=.34,eb=.13,Fp=1,Op=.5,tb=3;let Ml=null,Sl=null;function nb(){return Ml||(Ml=sb()),Ml}function ib(){return Sl||(Sl=rb()),Sl}function sb(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=128/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.15,"rgba(255,255,255,0.6)"),s.addColorStop(.4,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,128,128);const r=new cu(e);return r.generateMipmaps=!1,r.minFilter=bt,r}function rb(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=64/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.5,"rgba(255,255,255,0.8)"),s.addColorStop(.8,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,64,64);const r=new cu(e);return r.generateMipmaps=!1,r.minFilter=bt,r}const qd=[6737151,16755268,8978278,16737928,16768324,11176191,4521932,16746564],El=[[.55,.65,1],[.7,.8,1],[.95,.92,1],[1,.95,.8],[1,.85,.55],[1,.7,.4],[1,.5,.3],[1,.6,.5],[.8,.75,1],[.9,.95,.7]];function ab(){const i=new an,e=5,t=1e6,n=55e4,s=n+18e4,r=s+15e4,a=r+8e4,o=new Float32Array(t*3),l=new Float32Array(t*3);let c=0;const u=2*Math.PI;function h(){return Math.sqrt(-2*Math.log(Math.random()||1e-4))*Math.cos(u*Math.random())}const d=120,f=new Float32Array(d),g=new Float32Array(d),x=new Float32Array(d),m=new Uint8Array(d);for(let L=0;L<d;L++){const Z=Math.random()*u,j=5+Math.random()*80;f[L]=j*Math.cos(Z)+h()*5,g[L]=j*Math.sin(Z)+h()*5,x[L]=5+Math.random()*15,m[L]=Math.floor(Math.random()*El.length)}function p(L,Z,j){let re=1/0,ce=-1,ue=1/0,Ue=-1;for(let ee=0;ee<d;ee++){const Ie=L-f[ee],_e=Z-g[ee],Me=Ie*Ie+_e*_e;Me<re?(ue=re,Ue=ce,re=Me,ce=ee):Me<ue&&(ue=Me,Ue=ee)}const tt=Math.sqrt(re),De=Math.max(0,1-tt/(x[ce]*1.5));if(De>.05&&ce>=0){const ee=El[m[ce]];let Ie=ee[0],_e=ee[1],Me=ee[2];if(Ue>=0&&De<.5){const Ke=El[m[Ue]],Ze=De*2;Ie=Ie*Ze+Ke[0]*(1-Ze),_e=_e*Ze+Ke[1]*(1-Ze),Me=Me*Ze+Ke[2]*(1-Ze)}const ut=.9+Math.random()*.2;return[Ie*j*ut,_e*j*ut,Me*j*ut]}const W=Math.random(),J=j*(.9+Math.random()*.2);return W<.3?[J,J*.7,J*.4]:W<.55?[J,J*.88,J*.6]:W<.75?[J*.9,J*.92,J]:W<.9?[J*.7,J*.8,J]:[J,J*.95,J*.85]}const y=80,S=new Float32Array(y),M=new Float32Array(y),T=new Float32Array(y);for(let L=0;L<y;L++){const Z=Math.random()*u,j=3+Math.random()*75;S[L]=j*Math.cos(Z),M[L]=j*Math.sin(Z),T[L]=2+Math.random()*6}function A(L,Z){for(let j=0;j<y;j++){const re=L-S[j],ce=Z-M[j],ue=re*re+ce*ce,Ue=T[j]*T[j]*4;if(ue<Ue){const tt=.3+Math.random()*.4;return[L-re*tt+h()*T[j]*.3,Z-ce*tt+h()*T[j]*.3]}}return null}for(let L=0;L<t;L++){let Z,j,re,ce;if(L<n){const De=L%e,W=.03+Math.random()*.97,J=W*4.2+De*u/e,ee=Math.sin(W*12+De)*.3+Math.sin(W*5.7+De*3)*.2+Math.sin(W*23+De*7)*.1,Ie=W*88,_e=(10+Ie*.18)*(.4+Math.random()*.6),Me=J+ee+Math.PI/2,ut=h()*_e*.45;Z=Ie*Math.cos(J+ee)+ut*Math.cos(Me)+h()*3.5,j=Ie*Math.sin(J+ee)+ut*Math.sin(Me)+h()*3.5,re=h()*1.5*(1-W*.5),ce=.09+Math.random()*.22}else if(L<s){const De=Math.random()*u,W=Math.abs(h())*12,J=.45,ee=1.8,Ie=W*Math.cos(De),_e=W*Math.sin(De)/ee,Me=Math.cos(J),ut=Math.sin(J);Z=Ie*Me-_e*ut+h()*2,j=Ie*ut+_e*Me+h()*2,re=h()*1.5*Math.max(.15,1-W/20),ce=.15+Math.random()*.26}else if(L<r){const De=Math.random()*u,W=3+Math.random()*85;Z=W*Math.cos(De)+h()*6,j=W*Math.sin(De)+h()*6,re=h()*2*(1-W/120),ce=.06+Math.random()*.16}else if(L<a){const De=Math.random()*u,W=Math.sqrt(Math.random())*90;Z=W*Math.cos(De)+h()*2,j=W*Math.sin(De)+h()*2,re=h()*.8*(1-W/100),ce=.045+Math.random()*.13}else{const De=Math.random()*u,W=8+Math.random()*95;Z=W*Math.cos(De)+h()*12,j=W*Math.sin(De)+h()*12,re=h()*5,ce=.03+Math.random()*.075}if(L<a&&Math.random()<.15){const De=A(Z,j);De&&(Z=De[0],j=De[1])}o[c*3]=Z,o[c*3+1]=re,o[c*3+2]=j;const[ue,Ue,tt]=p(Z,j,ce);l[c*3]=ue,l[c*3+1]=Ue,l[c*3+2]=tt,c++}const R=new wt;R.setAttribute("position",new Et(o,3)),R.setAttribute("color",new Et(l,3));const _=ib(),b=new Nr({size:.25,map:_,vertexColors:!0,transparent:!0,opacity:.34,depthWrite:!1,blending:En,sizeAttenuation:!0});b.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <clipping_planes_vertex>",`gl_PointSize = min(gl_PointSize, 64.0);
#include <clipping_planes_vertex>`),L.fragmentShader=L.fragmentShader.replace("void main() {",`void main() {
if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;`)},Ae.mainStarsMat=b,i.add(new $a(R,b));const B=1500,I=new Float32Array(B*3),O=new Float32Array(B*3),k=new Float32Array(B);for(let L=0;L<B;L++){const Z=Math.floor(Math.random()*t);I[L*3]=o[Z*3],I[L*3+1]=o[Z*3+1],I[L*3+2]=o[Z*3+2],O[L*3]=Math.min(1,l[Z*3]*1.3),O[L*3+1]=Math.min(1,l[Z*3+1]*1.3),O[L*3+2]=Math.min(1,l[Z*3+2]*1.3),k[L]=Math.random()*Math.PI*2}const X=new wt;X.setAttribute("position",new Et(I,3)),X.setAttribute("color",new Et(O,3)),X.setAttribute("aPhase",new Et(k,1));const z={value:0};Ae.twinkleTimeUniform=z;const G=new Nr({size:.7,map:_,vertexColors:!0,transparent:!0,opacity:.13,depthWrite:!1,blending:En,sizeAttenuation:!0});return G.onBeforeCompile=L=>{L.uniforms.uTime=z,L.vertexShader=L.vertexShader.replace("void main() {",`attribute float aPhase;
varying float vTwinkle;
void main() {`),L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vTwinkle = 0.55 + 0.45 * sin(uTime * 1.8 + aPhase) * sin(uTime * 0.7 + aPhase * 2.3);`),L.vertexShader=L.vertexShader.replace("#include <clipping_planes_vertex>",`gl_PointSize = min(gl_PointSize, 64.0);
#include <clipping_planes_vertex>`),L.fragmentShader=L.fragmentShader.replace("void main() {",`uniform float uTime;
varying float vTwinkle;
void main() {
if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;`),L.fragmentShader=L.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`gl_FragColor.a *= vTwinkle;
#include <premultiplied_alpha_fragment>`)},Ae.brightStarsMat=G,i.add(new $a(X,G)),i}function Bp(){Ae.labelsContainer||(Ae.labelsContainer=document.createElement("div"),Ae.labelsContainer.id="galaxy-labels",document.body.appendChild(Ae.labelsContainer));for(const i of Ha.values())i.remove();Ha.clear();for(const i of Zi){const e=Zt(i);if(!e)continue;const t=document.createElement("div");t.className="galaxy-label",t.textContent=e.name,Ae.labelsContainer.appendChild(t),Ha.set(e.id,t)}}function ob(i){if(!Ae.labelsContainer)return;const e=window.innerWidth,t=window.innerHeight;for(const[n,s]of Ha){const r=mn.get(n);if(!r)continue;if(gr.copy(r.position),gr.project(i),gr.z>1){s.style.display="none";continue}const a=(.5+gr.x/2)*e,o=(.5-gr.y/2)*t;s.style.display="",s.style.left=`${a}px`,s.style.top=`${o+18}px`,s.classList.toggle("current",n===le.currentSystemId),s.classList.toggle("contract-target",le.activeContract?.targetSystemId===n)}}const lb=6;function kp(){Zi.clear();const i=[[le.currentSystemId,0]];for(Zi.add(le.currentSystemId);i.length>0;){const[e,t]=i.shift();if(t>=lb)continue;const n=Zt(e);if(n)for(const s of n.connections)Zi.has(s)||(Zi.add(s),i.push([s,t+1]))}}function Yd(i,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d"),r=256/2,a=s.createRadialGradient(r,r,0,r,r,r),o=new Le().setHSL(i,e,.5),l=Math.round(o.r*255),c=Math.round(o.g*255),u=Math.round(o.b*255);a.addColorStop(0,`rgba(${l},${c},${u},0.6)`),a.addColorStop(.3,`rgba(${l},${c},${u},0.2)`),a.addColorStop(.6,`rgba(${l},${c},${u},0.05)`),a.addColorStop(1,`rgba(${l},${c},${u},0)`),s.fillStyle=a,s.fillRect(0,0,256,256);const h=new cu(n);return h.generateMipmaps=!1,h.minFilter=bt,h}function cb(){const i=new an,e=[{hue:.6,sat:.8,pos:[25,.5,-18],scale:20,opacity:.045},{hue:.55,sat:.7,pos:[-22,-.3,-25],scale:25,opacity:.037},{hue:.75,sat:.6,pos:[-35,.2,15],scale:22,opacity:.037},{hue:0,sat:.7,pos:[40,-.5,20],scale:18,opacity:.03},{hue:.85,sat:.5,pos:[10,.3,40],scale:24,opacity:.037},{hue:.12,sat:.6,pos:[0,0,0],scale:30,opacity:.06},{hue:.08,sat:.4,pos:[2,0,-3],scale:20,opacity:.045},{hue:.58,sat:.9,pos:[50,0,-30],scale:28,opacity:.022},{hue:.7,sat:.7,pos:[-45,0,-35],scale:22,opacity:.026},{hue:.45,sat:.6,pos:[-30,0,45],scale:26,opacity:.026},{hue:.15,sat:.5,pos:[30,0,50],scale:20,opacity:.022},{hue:.65,sat:.3,pos:[0,-1,30],scale:50,opacity:.015},{hue:.5,sat:.3,pos:[-20,.5,-10],scale:55,opacity:.015}];so.length=0,Ic.length=0;for(const s of e){const r=Yd(s.hue,s.sat),a=new Ya({map:r,transparent:!0,opacity:s.opacity,blending:En,depthWrite:!1});so.push(a),Ic.push(s.opacity);const o=new yc(a);o.position.set(...s.pos),o.scale.setScalar(s.scale),i.add(o)}const t=[{pos:[15,0,-8],scale:15,opacity:.09},{pos:[-12,0,10],scale:18,opacity:.075},{pos:[30,0,5],scale:12,opacity:.067},{pos:[-8,0,-30],scale:14,opacity:.06},{pos:[5,0,25],scale:16,opacity:.075}],n=Yd(0,0);for(const s of t){const r=new Ya({map:n,transparent:!0,opacity:s.opacity,color:197384,depthWrite:!1}),a=new yc(r);a.position.set(...s.pos),a.scale.setScalar(s.scale),i.add(a)}return i}function zp(){for(const e of yl)Ht.remove(e),e.geometry.dispose(),e.material.dispose();yl.length=0;const i=Zt(le.currentSystemId);if(i)for(const e of i.connections){const t=mn.get(le.currentSystemId),n=mn.get(e);if(!t||!n)continue;const s=[t.position,n.position],r=new wt().setFromPoints(s),a=new lu({color:52479,transparent:!0,opacity:.5}),o=new fo(r,a);Ht.add(o),yl.push(o)}}function ub(i){ws.time+=i,Ae.twinkleTimeUniform&&(Ae.twinkleTimeUniform.value=ws.time);const e=Ar.get(le.currentSystemId);if(e){const r=3+Math.sin(ws.time*3)*.5;e.scale.setScalar(r)}if(Ae.contractMarker&&Ae.contractMarker.visible&&(Ae.contractMarker.rotation.y+=i*2,Ae.contractMarker.position.y=Ae.contractMarker.userData.baseY+Math.sin(ws.time*4)*.5),Ae.playerShipModel&&(Ae.playerShipModel.rotation.y+=i*.5),Ae.selectionRing&&Ae.selectionRing.visible){const r=Ae.selectionRing.material;r.opacity=.5+Math.sin(ws.time*4)*.2}const t=10,n=5,s=$e.position;for(const[r,a]of mn){const o=Zi.has(r)?Fp:Op,l=Mr.get(r)??o,c=o-l;if(Math.abs(c)>.005){const f=l+c*Math.min(1,i*tb);Mr.set(r,f),a.scale.setScalar(f)}else l!==o&&(Mr.set(r,o),a.scale.setScalar(o));const u=Ar.get(r);if(!u)continue;const h=s.distanceTo(a.position),d=Math.max(0,Math.min(1,(h-n)/(t-n)));if(r===le.currentSystemId)u.material.opacity=d*(.8+Math.sin(ws.time*3)*.2);else{const f=Mr.get(r)??o;u.scale.setScalar(2.5*f),u.material.opacity=d*.7}}}function Kd(i){Ae.galaxyBrightness=i,Ae.mainStarsMat&&(Ae.mainStarsMat.opacity=QE*i),Ae.brightStarsMat&&(Ae.brightStarsMat.opacity=eb*i);for(let e=0;e<so.length;e++)so[e].opacity=Ic[e]*i}function hb(){for(;Ht.children.length>0;)Ht.remove(Ht.children[0]);mn.clear(),Ar.clear();const i=new mu(3359846,.6);Ht.add(i),Ht.add(ab()),Ht.add(cb());const e=new mo(.4,8,8),t=nb();for(let o=0;o<no.length;o++){const l=no[o],c=qd[o%qd.length],u=new Dt({color:c}),h=new Pt(e,u);h.position.set(...l.position),h.userData.systemId=l.id,Ht.add(h),mn.set(l.id,h);const d=new Ya({map:t,color:c,transparent:!0,opacity:.7,blending:En,depthWrite:!1}),f=new yc(d);f.position.set(...l.position),f.scale.setScalar(2.5),Ht.add(f),Ar.set(l.id,f)}const n=new du(.7,.9,32),s=new Dt({color:16776960,transparent:!0,opacity:.7,side:sn});Ae.selectionRing=new Pt(n,s),Ae.selectionRing.rotation.x=-Math.PI/2,Ae.selectionRing.visible=!1,Ht.add(Ae.selectionRing);const r=new hu(.5,0),a=new Dt({color:16724787});Ae.contractMarker=new Pt(r,a),Ae.contractMarker.visible=!1,Ht.add(Ae.contractMarker),Ae.playerShipModel=nr(Qt(st.colors.playerBody),Qt(st.colors.playerExhaust)),Ae.playerShipModel.scale.setScalar(.3),Ht.add(Ae.playerShipModel),wu(),kp();for(const[o,l]of mn){const c=Zi.has(o)?Fp:Op;Mr.set(o,c),l.scale.setScalar(c);const u=Ar.get(o);u&&u.scale.setScalar(2.5*c)}zp(),Bp()}function wu(){const i=mn.get(le.currentSystemId);i&&Ae.playerShipModel&&(Ae.playerShipModel.position.copy(i.position),Ae.playerShipModel.position.y+=2.5)}function jd(i){const e=mn.get(i);return e?e.position.clone():null}function db(i){Ae.playerShipModel&&Ae.playerShipModel.position.set(i.x,i.y+2.5,i.z)}function Pc(i){if(!Ae.selectionRing)return;if(!i){Ae.selectionRing.visible=!1;return}const e=mn.get(i);e&&(Ae.selectionRing.position.copy(e.position),Ae.selectionRing.position.y+=.05,Ae.selectionRing.visible=!0)}function Ru(){if(Ae.contractMarker){if(le.activeContract){const i=mn.get(le.activeContract.targetSystemId);if(i){Ae.contractMarker.position.copy(i.position),Ae.contractMarker.userData.baseY=i.position.y+3.5,Ae.contractMarker.position.y=Ae.contractMarker.userData.baseY,Ae.contractMarker.visible=!0;return}}Ae.contractMarker.visible=!1}}function fb(){Ht.visible=!0,op(!1),$e.near=5,$e.updateProjectionMatrix(),Ae.labelsContainer&&(Ae.labelsContainer.style.display="block")}function Hp(){Ht.visible=!1,op(!0),$e.near=1,$e.updateProjectionMatrix(),Ae.selectionRing&&(Ae.selectionRing.visible=!1),Ae.labelsContainer&&(Ae.labelsContainer.style.display="none")}function pb(){return mn}function Cu(){kp(),zp(),Bp()}let ro=0,Bs=Math.PI/4,Ai=52;const bi=new P(0,0,0);function wi(){const i=bi.x+Ai*Math.sin(Bs)*Math.sin(ro),e=bi.y+Ai*Math.cos(Bs),t=bi.z+Ai*Math.sin(Bs)*Math.cos(ro);$e.position.set(i,e,t),$e.lookAt(bi)}function mb(){$e.up.set(0,1,0);const i=Zt(le.currentSystemId);bi.set(...i.position),ro=0,Bs=Math.PI/4,Ai=52,wi()}function gb(){$e.up.set(0,1,0);const i=Zt(le.currentSystemId);bi.set(...i.position)}function Vp(i,e){ro-=i,Bs=Math.max(.2,Math.min(Math.PI/2.2,Bs-e))}function _b(i){Ai=Math.max(10,Math.min(120,Ai+i))}function xb(){return Ai}function vb(i){Ai=Math.max(10,Math.min(120,i))}function yb(i,e,t){bi.set(i,e,t)}function Mb(i,e,t){bi.lerpVectors(i,e,t)}const ao={hint(i){return i?"Нажмите на звезду для выбора  •  Проведите для вращения  •  Щипок — масштаб":"Нажмите на звезду для выбора  •  Перетаскивайте для вращения  •  Колёсико — масштаб"},brightnessSlider(i){return`<label>Яркость</label><input type="range" min="0" max="200" value="${i}" /><span>${i}%</span>`},hud(i,e,t,n){let s=`<span class="gal-money">${i}₵</span> <span class="gal-fuel">⛽ ${e}/${t}</span>`;return n&&(s+=`<br><span class="gal-contract">Контракт → ${n}</span>`),s},infoPanel(i){let e=`<h3>${i.name}</h3>`;return i.isCurrent?(e+='<div class="gal-info-line">Вы здесь</div>',e+='<button class="gal-btn" id="gal-station-btn">НА СТАНЦИЮ</button>'):i.isConnected?(e+=`<div class="gal-info-line">Топливо: ${i.fuelCost} ед.</div>`,i.isContractTarget&&(e+='<div class="gal-info-line gal-contract-marker">Цель контракта!</div>'),i.canTravel?e+='<button class="gal-btn" id="gal-travel-btn">ЛЕТЕТЬ</button>':e+='<div class="gal-info-line gal-no-fuel">Недостаточно топлива</div>'):e+='<div class="gal-info-line gal-no-route">Нет прямого маршрута</div>',e}};let ts=null,ti=null,Zn=null,yn=null,jn=null,Lc=null,Dc=null;const $d="galaxyBrightness";function Zd(i){jn=i}function Sb(i,e){Lc=i,Dc=e}function Eb(){if(ts=document.getElementById("galaxy-hud"),ti=document.getElementById("galaxy-info-panel"),Zn||(Zn=document.createElement("div"),Zn.id="galaxy-hint",Zn.textContent=ao.hint(Pp()),document.body.appendChild(Zn)),!yn){const i=localStorage.getItem($d),e=i!==null?parseFloat(i):1;Kd(e),yn=document.createElement("div"),yn.id="galaxy-brightness",yn.innerHTML=ao.brightnessSlider(Math.round(e*100)),document.body.appendChild(yn);const t=yn.querySelector("input"),n=yn.querySelector("span");t.addEventListener("input",()=>{const s=parseInt(t.value,10)/100;Kd(s),n.textContent=`${t.value}%`,localStorage.setItem($d,String(s))})}}function Iu(){if(!ts)return;const i=le.activeContract?Zt(le.activeContract.targetSystemId).name:void 0;ts.innerHTML=ao.hud(le.money,le.fuel,le.maxFuel,i)}function bb(){if(!ti)return;if(!jn){ti.style.display="none";return}const i=Zt(jn),e=jn===le.currentSystemId,n=Zt(le.currentSystemId).connections.includes(jn),s=n?OE(le.currentSystemId,jn):0,r=n&&!e&&le.fuel>=s,a=le.activeContract?.targetSystemId===jn;ti.innerHTML=ao.infoPanel({name:i.name,isCurrent:e,isConnected:n,fuelCost:s,canTravel:r,isContractTarget:!!a}),ti.style.display="block";const o=document.getElementById("gal-station-btn");o&&o.addEventListener("click",()=>{Dc&&Dc()});const l=document.getElementById("gal-travel-btn");if(l){const c=jn;l.addEventListener("click",()=>{c&&qE(s)&&Lc&&Lc(c)})}}function Tb(){ti&&(ti.style.display="none")}function Ab(){ts&&(ts.style.display="block"),Zn&&(Zn.style.display="block"),yn&&(yn.style.display="flex")}function wb(){ts&&(ts.style.display="none"),ti&&(ti.style.display="none"),Zn&&(Zn.style.display="none"),yn&&(yn.style.display="none")}function Gp(){jn=null,Pc(null),Tb()}let oo=!1;const Nc=new P,Uc=new P;let Sr=0;const Rb=1.5;let Va=null,Wp=!1;const Jd=new P;let Fc=null;function Ci(){return oo}function Cb(i){Fc=i}function Ib(i){const e=jd(le.currentSystemId),t=jd(i);!e||!t||(Nc.copy(e),Uc.copy(t),Sr=0,Va=i,Wp=le.activeContract?.targetSystemId===i,oo=!0,Gp(),Iu())}function Pb(i){if(!oo||!Va)return;if(Sr+=i/Rb,Sr>=1){Sr=1,oo=!1,YE(Va),wu(),Cu(),Ru(),Iu();const n=Zt(Va);yb(...n.position),wi(),Wp&&le.activeContract?Fc&&Fc():Gr();return}const e=Sr,t=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Jd.lerpVectors(Nc,Uc,t),db(Jd),Mb(Nc,Uc,t),wi()}let Ii=!1,lo=!1,Xp=0,qp=0,Oc=0,Bc=0,Ks=null,Yp=0,Kp=0,kc=0,zc=0,jp=0,$p=0,co=!1;const Qd=new H0,bl=new Be;function Zp(i){Ii=i}function Pu(i){return i instanceof HTMLElement?!!i.closest("#galaxy-info-panel, #galaxy-hud, #galaxy-brightness"):!1}function Jp(i,e){bl.x=i/window.innerWidth*2-1,bl.y=-(e/window.innerHeight)*2+1,Qd.setFromCamera(bl,$e);const t=Array.from(pb().values()),n=Qd.intersectObjects(t);if(n.length>0){const s=n[0].object.userData.systemId;Zd(s),Pc(s)}else Zd(null),Pc(null);bb()}function Qp(i){!Ii||Ci()||Pu(i.target)||i.button===0&&(lo=!0,Xp=i.clientX,qp=i.clientY,Oc=i.clientX,Bc=i.clientY)}function em(i){if(!(!Ii||Ci())&&lo){const e=i.clientX-Oc,t=i.clientY-Bc;Vp(e*.005,t*.005),Oc=i.clientX,Bc=i.clientY,wi()}}function tm(i){if(!(!Ii||Ci())){if(Pu(i.target)){lo=!1;return}if(i.button===0){const e=Math.abs(i.clientX-Xp)>3||Math.abs(i.clientY-qp)>3;lo=!1,e||Jp(i.clientX,i.clientY)}}}function nm(i){!Ii||Ci()||(i.preventDefault(),_b(i.deltaY*.05),wi())}function im(i){const e=i.touches[0],t=i.touches[1],n=e.clientX-t.clientX,s=e.clientY-t.clientY;return Math.sqrt(n*n+s*s)}function sm(i){if(!(!Ii||Ci())&&!Pu(i.target)){if(i.touches.length===2){co=!0,Ks=null,jp=im(i),$p=xb(),i.preventDefault();return}if(i.touches.length===1){const e=i.touches[0];Ks=e.identifier,Yp=e.clientX,Kp=e.clientY,kc=e.clientX,zc=e.clientY,i.preventDefault()}}}function rm(i){if(!(!Ii||Ci())){if(co&&i.touches.length>=2){i.preventDefault();const e=im(i),t=jp/e;vb($p*t),wi();return}if(Ks!==null)for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];if(t.identifier===Ks){i.preventDefault();const n=t.clientX-kc,s=t.clientY-zc;Vp(n*.005,s*.005),kc=t.clientX,zc=t.clientY,wi()}}}}function uo(i){if(!(!Ii||Ci())){if(co){i.touches.length<2&&(co=!1);return}for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];if(t.identifier!==Ks)continue;if(Ks=null,Math.abs(t.clientX-Yp)>8||Math.abs(t.clientY-Kp)>8)return;Jp(t.clientX,t.clientY)}}}function Lb(){window.addEventListener("mousedown",Qp),window.addEventListener("mousemove",em),window.addEventListener("mouseup",tm),window.addEventListener("wheel",nm,{passive:!1}),window.addEventListener("touchstart",sm,{passive:!1}),window.addEventListener("touchmove",rm,{passive:!1}),window.addEventListener("touchend",uo),window.addEventListener("touchcancel",uo)}function Db(){window.removeEventListener("mousedown",Qp),window.removeEventListener("mousemove",em),window.removeEventListener("mouseup",tm),window.removeEventListener("wheel",nm),window.removeEventListener("touchstart",sm),window.removeEventListener("touchmove",rm),window.removeEventListener("touchend",uo),window.removeEventListener("touchcancel",uo)}function Nb(i,e,t=!0){Eb(),Zp(!0),Cb(e),Sb(n=>{Ci()||Ib(n)},i),Lb(),t?mb():(gb(),wi()),Cu(),Ru(),Iu(),Gp(),Ab(),document.body.classList.add("galaxy-mode")}function am(){Zp(!1),Db(),wb(),document.body.classList.remove("galaxy-mode")}const Ub={easy:"ПРОСТОЙ",medium:"СРЕДНИЙ",hard:"СЛОЖНЫЙ"},Fb={easy:"#44ff88",medium:"#ffaa44",hard:"#ff4444"},Ob={page(i){let e=`
    <div class="station-header">
      <h1>СТАНЦИЯ «${i.systemName}»</h1>
      <div class="station-balance">
        <span class="station-money">${i.money}₵</span>
        <span class="station-fuel">⛽ ${i.fuel}/${i.maxFuel}</span>
      </div>
    </div>
    <div class="station-body">
      <div class="station-section station-fuel-section">
        <h2>ТОПЛИВО</h2>
        <div class="fuel-price">${i.fuelPrice}₵ за единицу</div>
        <div class="fuel-buttons">
          <button class="station-btn fuel-btn" data-amount="1">+1</button>
          <button class="station-btn fuel-btn" data-amount="5">+5</button>
          <button class="station-btn fuel-btn" data-amount="${i.maxFuel}">MAX</button>
        </div>
      </div>
      <div class="station-section station-contracts-section">
        <h2>КОНТРАКТЫ</h2>
        <div class="contracts-list">`;const t=i.activeContractId!==null;for(const n of i.contracts){const s=n.id===i.activeContractId,r=Fb[n.difficulty],a=Ub[n.difficulty],o=i.targetNames[n.targetSystemId]??n.targetSystemId;e+=`
      <div class="contract-card ${n.difficulty}${s?" active":""}">
        <div class="contract-diff" style="color:${r}">[${a}]</div>
        <div class="contract-title">${n.title}</div>
        <div class="contract-desc">${n.description}</div>
        <div class="contract-target">→ ${o}</div>
        <div class="contract-reward">${n.reward}₵</div>
        ${s?'<div class="contract-status">ПРИНЯТ</div>':t?"":`<button class="station-btn contract-accept-btn" data-id="${n.id}">ВЗЯТЬ</button>`}
      </div>`}return e+=`
        </div>
      </div>
    </div>
    <button class="station-btn station-map-btn" id="station-map-btn">НА КАРТУ</button>`,e}};let ni=null,Hc=null;function Bb(i){ni=document.getElementById("station-screen"),ni&&(Hc=i,KE()&&jE(),Vc(),ni.style.display="flex")}function om(){ni&&(ni.style.display="none")}function Vc(){if(!ni)return;const i=Zt(le.currentSystemId),e={};for(const n of za)e[n.targetSystemId]=Zt(n.targetSystemId).name;ni.innerHTML=Ob.page({systemName:i.name,money:le.money,fuel:le.fuel,maxFuel:le.maxFuel,fuelPrice:wE,contracts:za,activeContractId:le.activeContract?.id??null,targetNames:e}),ni.querySelectorAll(".fuel-btn").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.amount||"1");XE(s),Vc()})}),ni.querySelectorAll(".contract-accept-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id,r=za.find(a=>a.id===s);r&&(VE(r),Vc())})});const t=document.getElementById("station-map-btn");t&&t.addEventListener("click",()=>{Hc&&Hc()})}let Gc=null,Or=null;function kb(i,e){Gc=i,Or=e}let ef=!1;function zb(){ef||(hb(),it.add(Ht),ef=!0)}function Hb(){$E()?(zE(!0),Gr()):HE(),zb(),lm()}function lm(i=!0){is("galaxy"),om(),yo(),Vr(),Du(),Fe.visible=!1,fb(),wu(),Ru(),Cu(),Nb(()=>Lu(),()=>Vb(),i)}function Lu(){is("station"),am(),Hp(),Vr(),Du(),Bb(()=>lm(!1))}function Vb(){if(!le.activeContract)return;const i=le.activeContract.difficulty,e=CE[i];is("combat"),am(),Hp(),om(),yo(),Du(),Eu(),Fe.visible=!0,xu(e),Gc&&Gc(e)}function cm(i,e){ns&&(is("result"),Vr(),Or&&Or(),ZE(i,e,()=>{yo(),Gr(),Lu()}))}function Gb(){if(!ns)return;is("result"),Vr(),Or&&Or();const i=WE();JE(i,()=>{yo(),Gr(),Lu()})}function Du(){const i=["start-screen","game-over","victory-screen","pause-screen"];for(const e of i){const t=document.getElementById(e);t&&(t.style.display="none")}}const Wb=[new P(2e3,100,0),new P(-1e3,-200,2200),new P(-500,300,-2500),new P(1500,-300,-1800),new P(-2e3,200,1e3)];function Xb(){const i=st.counts.capitalShips,e=Qt(st.colors.capitalHull);for(let t=0;t<i;t++){const n=tp(t,e);n.position.copy(Wb[t]),n.lookAt(0,0,0),it.add(n),C.capitalShips.push({mesh:n,subsystems:n.userData.subsystems,alive:!0,turretTimer:2+Math.random()*3})}}function Tl(i,e){for(const t of i.subsystems)t.health<=0&&t.mesh.visible&&t.mesh.traverse(n=>{n.isMesh&&n.material&&(n.material=oE)});i.subsystems[0].health>0&&(i.mesh.rotation.y+=.02*e)}const Rs=[],Cs=new P,tf=new P,Is=new P,qb=800*800,Yb=600*600,Kb=600*600;function jb(i){for(const e of C.capitalShips){if(!e.alive)continue;if(e.subsystems[2].health<=0){Tl(e,i);continue}if(e.turretTimer-=i,e.turretTimer<=0){e.turretTimer=ct.turretFireRateMin+Math.random()*(ct.turretFireRateMax-ct.turretFireRateMin),Rs.length=0;const n=e.mesh.position;n.distanceToSquared(Fe.position)<qb&&Rs.push(Fe.position);for(const c of C.allies)n.distanceToSquared(c.mesh.position)<Yb&&Rs.push(c.mesh.position);if(Rs.length===0){Tl(e,i);continue}const s=Rs[Math.floor(Math.random()*Rs.length)];Cs.copy(s).sub(n).normalize();const a=e.subsystems[1].health<=0?ct.turretAccuracy*2.5:ct.turretAccuracy;Cs.x+=(Math.random()-.5)*a,Cs.y+=(Math.random()-.5)*a,Cs.z+=(Math.random()-.5)*a,Cs.normalize();const o=`Корабль-${e.mesh.userData.index+1}`,l=2+Math.floor(Math.random()*2);for(let c=0;c<l;c++)tf.set(n.x+(Math.random()-.5)*30,n.y+(Math.random()-.5)*15,n.z+(Math.random()-.5)*30),Is.copy(Cs),Is.x+=(Math.random()-.5)*.05,Is.y+=(Math.random()-.5)*.05,Is.z+=(Math.random()-.5)*.05,Is.normalize(),Qa(tf,Is,"enemy",o);n.distanceToSquared(Fe.position)<Kb&&Su(!1)}Tl(e,i)}}function um(i){const e=nr(Qt(st.colors.allyBody),Qt(st.colors.allyExhaust));it.add(e);const t=new P((Math.random()-.5)*200,(Math.random()-.5)*100,(Math.random()-.5)*200);e.position.copy(i).add(t),e.quaternion.copy(Fe.quaternion);const n=sp(e,65348),s=YS();C.allies.push({mesh:e,name:s,healthBar:n.bar,healthFill:n.fill,health:ct.fighterHP,maxHealth:ct.fighterHP,speed:ct.allySpeedMin+Math.random()*(ct.allySpeedMax-ct.allySpeedMin),shootTimer:ct.allyFireRateMin+Math.random()*(ct.allyFireRateMax-ct.allyFireRateMin),ai:{state:"chase",timer:0,evadeDir:new P,target:null}})}function hm(i){const e=nr(Qt(st.colors.enemyBody),Qt(st.colors.enemyExhaust));it.add(e);const t=new P((Math.random()-.5)*300,(Math.random()-.5)*150,(Math.random()-.5)*300);e.position.copy(i).add(t);const n=sp(e,16711680),s=KS();C.enemies.push({mesh:e,name:s,healthBar:n.bar,healthFill:n.fill,health:ct.fighterHP,maxHealth:ct.fighterHP,speed:ct.enemySpeedMin+Math.random()*(ct.enemySpeedMax-ct.enemySpeedMin),shootTimer:ct.enemyFireRateMin+Math.random()*(ct.enemyFireRateMax-ct.enemyFireRateMin),ai:{state:"chase",timer:0,evadeDir:new P,target:null}})}function $b(i){for(let e=C.respawnQueue.length-1;e>=0;e--)if(C.respawnQueue[e].timer-=i,C.respawnQueue[e].timer<=0)if(C.respawnQueue.splice(e,1)[0].team==="ally")um(Fe.position);else{let n=new P(1500,0,0);const s=C.capitalShips.filter(r=>r.alive);s.length>0&&(n=s[Math.floor(Math.random()*s.length)].mesh.position.clone()),hm(n)}}const Nu=new V0,Wr=document.getElementById("pause-screen"),kt={paused:!1,playerModel:null,hudFrameCounter:0,lastFrameTime:0};function dm(){!C.running||kt.paused||(kt.paused=!0,Wr.style.display="flex",document.exitFullscreen?.())}function Zb(){kt.paused&&(document.documentElement.requestFullscreen?.(),kt.paused=!1,Wr.style.display="none",Nu.getDelta())}function Jb(){kt.paused=!1,Wr.style.display="none",ns?Gb():(mm(),document.getElementById("start-screen").style.display="flex")}function fm(){for(const i of C.bullets)it.remove(i.mesh);for(const i of C.allyBullets)it.remove(i.mesh);for(const i of C.enemyBullets)it.remove(i.mesh);for(const i of C.allies)it.remove(i.mesh);for(const i of C.enemies)it.remove(i.mesh);for(const i of C.capitalShips)it.remove(i.mesh);for(const i of C.explosions)for(const e of i.particles)it.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();C.bullets=[],C.allyBullets=[],C.enemyBullets=[],C.allies=[],C.enemies=[],C.capitalShips=[],C.explosions=[],C.respawnQueue=[]}function pm(){fm(),C.killFeed=[],C.phase=1,C.score=0,C.lives=5,C.playerHealth=100,C.totalEnemyKills=0,C.lastAttacker="",C.speed=C.baseSpeed,C.shootCooldown=0,C.messageTimer=0,C.damageFlash=0,C.noDamageTimer=0,C.invulnTimer=0,C.keys={},C.mouseX=0,C.mouseY=0,C.lockedTarget=null,nE(),qS(),aE(),Fe.position.set(0,0,0),Fe.quaternion.identity(),Fe.visible=!0,jt.pitch=0,jt.yaw=0,jt.roll=0,$e.position.set(-10.5,3.75,0),$e.lookAt(Fe.position),kt.playerModel&&Fe.remove(kt.playerModel),kt.playerModel=nr(Qt(st.colors.playerBody),Qt(st.colors.playerExhaust)),Fe.add(kt.playerModel);const i=Math.min(ct.capitalShips,5);st.counts.capitalShips=i,Xb();const e=ct.allies;for(let n=0;n<e;n++)um(Fe.position);const t=ct.enemies;for(let n=0;n<t;n++){const s=n%Math.max(1,C.capitalShips.length);hm(C.capitalShips[s].mesh.position)}}function Al(){document.documentElement.requestFullscreen?.(),kt.paused=!1,Wr.style.display="none",document.getElementById("start-screen").style.display="none",document.getElementById("game-over").style.display="none",document.getElementById("victory-screen").style.display="none",Mu()||yu(),ei(),xu(PE),is("combat"),pm(),Eu(),cp(),hp(),C.running=!0,Qi("В БОЙ!",2)}function Qb(i){document.documentElement.requestFullscreen?.(),kt.paused=!1,Wr.style.display="none",Mu()||yu(),ei(),xu(i),is("combat"),pm(),Eu(),cp(),hp(),C.running=!0,Qi("В БОЙ!",2)}function mm(){C.running=!1,up(),dp(),Vr(),fm()}kb(Qb,mm);function eT(){document.getElementById("start-screen").style.display="none",Mu()||yu(),ei(),Hb()}const wl=new P,nf=new P,_r=new P,sf=new on,rf=new on,af=new P,tT=new P,of=new P,lf=new P;let Rl=null;function nT(i,e){Rl=null;let t=1/0;for(const n of e){const s=i.distanceToSquared(n.mesh.position);s<t&&(t=s,Rl=n)}return Rl}function gm(i,e,t,n,s,r,a){if((!i.ai.target||Math.random()<.01)&&(r&&Math.random()<.5&&s?i.ai.target={mesh:{position:s},name:Za}:i.ai.target=nT(i.mesh.position,t)),!r&&Math.random()<.005){for(const x of C.capitalShips)if(x.alive){for(const m of x.subsystems)if(m.health>0){lf.copy(m.center).applyMatrix4(x.mesh.matrixWorld),i.ai.target={mesh:{position:lf.clone()},name:`Корабль-${x.mesh.userData.index+1}`};break}if(i.ai.target)break}}const o=i.ai.target;if(!o)return;wl.copy(o.mesh.position).sub(i.mesh.position);const l=wl.length(),c=wl.normalize();i.ai.timer-=e,i.ai.timer<=0&&(l<100?(i.ai.state="evade",i.ai.evadeDir.copy(c).negate(),i.ai.evadeDir.x+=(Math.random()-.5)*.8,i.ai.evadeDir.y+=(Math.random()-.5)*.4,i.ai.evadeDir.z+=(Math.random()-.5)*.8,i.ai.evadeDir.normalize(),i.ai.timer=2+Math.random()*2):l>500?(i.ai.state="chase",i.ai.timer=3):(i.ai.state="orbit",i.ai.evadeDir.set(-c.z,(Math.random()-.5)*.3,c.x).normalize(),Math.random()<.5&&i.ai.evadeDir.negate(),i.ai.timer=3+Math.random()*3));let u;switch(i.ai.state){case"chase":u=c;break;case"evade":u=i.ai.evadeDir;break;case"orbit":{const x=(l-250)/250*.3;of.copy(i.ai.evadeDir).addScaledVector(c,x).normalize(),u=of;break}default:u=c}nf.set(1,0,0).applyQuaternion(i.mesh.quaternion),_r.copy(nf).cross(u);const h=_r.length();if(h>.001){const x=Math.asin(Math.min(1,h))*1.5*e;_r.divideScalar(h),sf.setFromAxisAngle(_r,x),i.mesh.quaternion.premultiply(sf),i.mesh.quaternion.normalize()}rf.setFromAxisAngle(tT.set(1,0,0),-_r.y*1.5*e),i.mesh.quaternion.multiply(rf),af.set(1,0,0).applyQuaternion(i.mesh.quaternion),i.mesh.position.addScaledVector(af,i.speed*e),i.shootTimer-=e,i.shootTimer<=0&&l<400&&(i.shootTimer=.5+Math.random()*.7,_E(i.mesh,c,n,i.name,a));const d=Math.sin(Date.now()*.006+i.mesh.id*1.7)*.5+.5,f=i.mesh.getObjectByName("exhaust");f&&(f.material.opacity=.6+d*.3,f.scale.setScalar(.9+d*.2)),i.healthBar.lookAt($e.position);const g=i.health/i.maxHealth;i.healthFill.scale.x=Math.max(.01,g),i.healthFill.position.x=-(1-g)*2}function iT(i,e){for(const t of C.allies)gm(t,i,C.enemies,"ally",null,!1,e)}function sT(i,e){for(const t of C.enemies)gm(t,i,C.allies,"enemy",e.position,!0,e)}const rT=144,aT=36,Cl=new P;function cf(i,e,t){for(let n=e.length-1;n>=0;n--){const s=e[n];if(i.mesh.position.distanceToSquared(s.mesh.position)<rT){if(s.health-=i.damage,Si(i.mesh.position.clone(),.3),s.health<=0){Si(s.mesh.position.clone(),3),it.remove(s.mesh),s.healthFill&&s.healthFill.geometry&&s.healthFill.geometry.dispose(),s.healthFill&&s.healthFill.material&&s.healthFill.material.dispose();const r=s.name,a=i.shooterName||"?",o=e===C.enemies;e.splice(n,1);const l=i.team==="player"?"player":i.team==="ally"?"ally":"enemy";mp(a,r,l,o?"enemy":"ally"),o&&C.totalEnemyKills++,t&&(C.score+=100,C.playerHealth=Math.min(C.maxHealth,C.playerHealth+C.maxHealth*.1),Qi("+100 | +10% HP",1.5)),C.respawnQueue.push({team:o?"enemy":"ally",timer:ct.respawnDelay})}return!0}}return!1}function oT(i){for(const e of C.capitalShips)if(e.alive){for(const t of e.subsystems)if(!(t.health<=0)&&(Cl.copy(t.center).applyMatrix4(e.mesh.matrixWorld),i.mesh.position.distanceToSquared(Cl)<t.radius*t.radius)){if(t.health-=i.damage,Si(i.mesh.position.clone(),.5),t.health<=0&&(Si(Cl.clone(),4.5),C.score+=500,Qi(`${t.name} УНИЧТОЖЕНА! +500`,2)),e.subsystems.every(n=>n.health<=0)){e.alive=!1,Si(e.mesh.position.clone(),12);for(let n=0;n<5;n++)setTimeout(()=>{if(!e.mesh.parent)return;const s=new P((Math.random()-.5)*90,(Math.random()-.5)*30,(Math.random()-.5)*45);Si(e.mesh.position.clone().add(s),6)},n*300);setTimeout(()=>{it.remove(e.mesh)},1800),C.score+=2e3,Qi("КОРАБЛЬ УНИЧТОЖЕН! +2000",3),C.phase===1&&C.capitalShips.every(n=>!n.alive)&&(C.phase=2,setTimeout(()=>{Qi(`ВСЕ КОРАБЛИ УНИЧТОЖЕНЫ!
Уничтожьте ${ct.killTarget} истребителей!`,4)},3500))}return!0}}return!1}function lT(i){const e=[{arr:C.bullets,hitEnemies:!0,hitAllies:!1,hitPlayer:!1,isPlayer:!0},{arr:C.allyBullets,hitEnemies:!0,hitAllies:!1,hitPlayer:!1,isPlayer:!1},{arr:C.enemyBullets,hitEnemies:!1,hitAllies:!0,hitPlayer:!0,isPlayer:!1}];for(const{arr:t,hitEnemies:n,hitAllies:s,hitPlayer:r,isPlayer:a}of e)for(let o=t.length-1;o>=0;o--){const l=t[o];if(l.mesh.position.addScaledVector(l.velocity,i),l.life-=i,l.life<=0){it.remove(l.mesh),t.splice(o,1);continue}let c=!1;n&&!c&&(c=cf(l,C.enemies,a)),s&&!c&&(c=cf(l,C.allies,!1)),r&&!c&&C.invulnTimer<=0&&l.mesh.position.distanceToSquared(Fe.position)<aT&&(C.playerHealth-=l.damage,C.damageFlash=.3,C.noDamageTimer=0,C.lastAttacker=l.shooterName||"?",Si(l.mesh.position.clone(),.3),XS(),c=!0),(a||l.team==="ally")&&!c&&(c=oT(l)),c&&(it.remove(l.mesh),t.splice(o,1))}mE()}const cT=document.getElementById("enemy-indicators"),Ns=[],Ca=new P;function uT(i){if(i<Ns.length)return Ns[i].style.display="flex",Ns[i];const e=document.createElement("div");return e.className="enemy-indicator",e.innerHTML='<div class="arrow"></div><div class="dist"></div>',cT.appendChild(e),Ns.push(e),e}function hT(i){const t=window.innerWidth,n=window.innerHeight,s=t/2,r=n/2;let a=0;for(const o of C.capitalShips){if(!o.alive)continue;Ca.copy(o.mesh.position).project($e);const l=(Ca.x*.5+.5)*t,c=(-Ca.y*.5+.5)*n,u=Ca.z<1;if(u&&l>40&&l<t-40&&c>40&&c<n-40)continue;const d=uT(a);a++;let f=l-s,g=c-r;u||(f=-f,g=-g);const x=Math.atan2(g,f),m=s-40,p=r-40,y=Math.abs(f),S=Math.abs(g);let M,T;if(y<.001&&S<.001)M=s,T=40;else{const _=y>.001?m/y:1/0,b=S>.001?p/S:1/0,B=Math.min(_,b);M=s+f*B,T=r+g*B}const A=i.position.distanceTo(o.mesh.position),R=A<1e3?Math.floor(A)+"m":(A/1e3).toFixed(1)+"km";d.style.left=M+"px",d.style.top=T+"px",d.style.transform="translate(-50%, -50%)",d.children[0].style.transform=`rotate(${x*180/Math.PI-90}deg)`,d.children[0].style.borderBottomColor="#ff8800",d.children[1].textContent="★ "+R,d.children[1].style.color="#ff8800",d.style.opacity="0.9"}for(let o=a;o<Ns.length;o++)Ns[o].style.display="none"}const dT=document.getElementById("minimap-canvas"),_t=dT.getContext("2d"),Il=new P,Ia=Math.PI*2;function fT(i){_t.clearRect(0,0,180,180);const e=90,t=90,n=.025,s=i.position.x,r=i.position.z;_t.fillStyle="#00ccff",_t.beginPath(),_t.arc(e,t,4,0,Ia),_t.fill(),Il.set(1,0,0).applyQuaternion(i.quaternion),_t.strokeStyle="#00ccff",_t.lineWidth=1.5,_t.beginPath(),_t.moveTo(e,t),_t.lineTo(e+Il.x*15,t+Il.z*15),_t.stroke(),_t.fillStyle="#00ff66";for(const a of C.allies){const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&(_t.beginPath(),_t.arc(o,l,2,0,Ia),_t.fill())}_t.fillStyle="#ff2200";for(const a of C.enemies){const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&(_t.beginPath(),_t.arc(o,l,2,0,Ia),_t.fill())}_t.fillStyle="#ff8800";for(const a of C.capitalShips){if(!a.alive)continue;const o=e+(a.mesh.position.x-s)*n,l=t+(a.mesh.position.z-r)*n;o>3&&o<177&&l>3&&l<177&&_t.fillRect(o-4,l-4,8,8)}_t.strokeStyle="rgba(0,255,255,0.3)",_t.lineWidth=1,_t.beginPath(),_t.arc(90,90,88,0,Ia),_t.stroke()}const pT=60,uf=1e3/pT;function mT(i){if(C.damageFlash>0?(C.damageFlash-=i,fn.domElement.style.boxShadow=`inset 0 0 ${80*C.damageFlash}px rgba(255,0,0,${C.damageFlash})`):fn.domElement.style.boxShadow="none",C.playerHealth<30&&C.running){const e=Math.sin(Date.now()*.01)*.5+.5;fn.domElement.style.boxShadow=`inset 0 0 ${30*e}px rgba(255,0,0,${.3*e})`}}function gT(){C.phase!==1&&C.phase===2&&C.totalEnemyKills>=ct.killTarget&&(C.running=!1,ns?cm(!0,C.score):(document.getElementById("victory-score").textContent=`Счёт: ${C.score} | Уничтожено: ${C.totalEnemyKills}`,document.getElementById("victory-screen").style.display="flex"))}function _T(){vE(),C.lives<=0&&ns&&!C.running&&(document.getElementById("game-over").style.display="none",cm(!1,C.score))}function _m(i=0){requestAnimationFrame(_m);const e=i-kt.lastFrameTime;if(e<uf)return;kt.lastFrameTime=i-e%uf;const t=Math.min(Nu.getDelta(),.05);if($i==="galaxy"){ub(t),Pb(t),ob($e),fn.render(it,$e);return}if($i!=="combat"){fn.render(it,$e);return}if(!C.running||kt.paused){fn.render(it,$e);return}xE(t),iT(t,Fe),sT(t,Fe),jb(t),lT(t),uE(t),$b(t);let n=1/0;for(const s of C.allies){const r=Fe.position.distanceToSquared(s.mesh.position);r<n&&(n=r)}for(const s of C.enemies){const r=Fe.position.distanceToSquared(s.mesh.position);r<n&&(n=r)}WS(n),mT(t),rE(t),kt.hudFrameCounter++,kt.hudFrameCounter%2===0&&(sE(),hT(Fe),TE(Fe),fT(Fe)),C.messageTimer>0&&(C.messageTimer-=t,C.messageTimer<=0&&iE()),C.playerHealth<=0&&_T(),gT(),C.running||(up(),dp()),fn.render(it,$e)}function xT(){window.addEventListener("keydown",i=>{if($i==="combat"){if(i.code==="Escape"||i.code==="KeyP"){dm();return}C.keys[i.code]=!0,i.preventDefault()}}),window.addEventListener("keyup",i=>{$i==="combat"&&(C.keys[i.code]=!1,i.preventDefault())}),window.addEventListener("mousemove",i=>{$i==="combat"&&(C.mouseX=(i.clientX/window.innerWidth-.5)*2,C.mouseY=(i.clientY/window.innerHeight-.5)*2,C.mouseActive=!0)}),window.addEventListener("mousedown",i=>{$i==="combat"&&(i.button===0&&(C.keys.MouseLeft=!0),i.button===1&&C.running&&(i.preventDefault(),Ip(Fe))),ei()}),window.addEventListener("mouseup",i=>{i.button===0&&(C.keys.MouseLeft=!1)}),window.addEventListener("keydown",()=>ei(),{once:!0}),window.addEventListener("resize",BS)}async function vT(){await CS(),kt.playerModel=nr(Qt(st.colors.playerBody),Qt(st.colors.playerExhaust)),Fe.add(kt.playerModel),it.add(Fe),Fe.position.set(0,0,0),kS(),$e.position.set(-10.5,3.75,0),$e.lookAt(0,0,0),xT(),document.getElementById("resume-btn").addEventListener("click",Zb),document.getElementById("quit-btn").addEventListener("click",Jb),document.getElementById("start-btn").addEventListener("click",Al),document.getElementById("restart-btn").addEventListener("click",Al),document.getElementById("victory-restart-btn").addEventListener("click",Al),document.getElementById("campaign-btn").addEventListener("click",eT),document.getElementById("settings-btn").addEventListener("click",ME),AE(dm),Nu.start(),_m()}vT();
