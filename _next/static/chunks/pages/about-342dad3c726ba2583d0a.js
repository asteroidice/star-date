(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3579:function(e,s,t){"use strict";var n=t(5697),r=t.n(n),i=t(7294),a=t(4184),o=t.n(a);function l(){return(l=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function j(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=t(9033).Z.prefix,u=function(e){var s,t=e.children,n=e.className,r=e.href,a=e.disabled,u=e.inline,d=e.visited,m=e.renderIcon,f=e.size,p=j(e,["children","className","href","disabled","inline","visited","renderIcon","size"]),g=o()("".concat(h,"--link"),n,(c(s={},"".concat(h,"--link--disabled"),a),c(s,"".concat(h,"--link--inline"),u),c(s,"".concat(h,"--link--visited"),d),c(s,"".concat(h,"--link--").concat(f),f),s)),b=a?"p":"a",y="_blank"===p.target?"noopener":null;return i.createElement(b,l({href:a?null:r,className:g,rel:y},p),t,!u&&m&&i.createElement("div",{className:"".concat(h,"--link__icon")},i.createElement(m,null)))};u.propTypes={children:r().node,className:r().string,disabled:r().bool,href:r().string,inline:r().bool,renderIcon:r().oneOfType([r().func,r().object]),size:r().oneOf(["sm","md","lg"]),visited:r().bool},s.Z=u},6700:function(e,s,t){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":7149,"./gom-latn.js":7149,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":9822,"./vi.js":9822,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9913,"./zh-mo.js":9913,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var s=i(e);return t(s)}function i(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=6700},4027:function(e,s,t){"use strict";t.d(s,{m:function(){return h}});var n=t(6577),r=t(7863),i=(t(7294),t(8107)),a=t.n(i),o=t(381),l=t.n(o),c=l()("20000101","YYYYMMDD"),j=[{initAngle:-.3013,orbitDays:88},{initAngle:-1.5568,orbitDays:224.7},{initAngle:3.2931,orbitDays:365.2},{initAngle:1.5635,orbitDays:687},{initAngle:2.1933,orbitDays:4331},{initAngle:2.36,orbitDays:10747},{initAngle:.8054,orbitDays:30589},{initAngle:.5838,orbitDays:59800}];function h(e){var s=e.date,t=a()(),i=t.ref,o=t.width,h=void 0===o?100:o,f=t.height,p=void 0===f?100:f,g=[h/2,p/2],b=(Math.min(h/2,p/2)-20)/8,y=function(e){var s=l()(e).diff(c,"days",!0);return j.map((function(e,t){var n=e.initAngle,r=e.orbitDays,i=s/r;return 2*Math.PI*i+n}))}(s),v=Array.from(new Array(8)).map((function(e,s){return{from:{r:0,angle:y[s]-Math.PI},r:b*(s+1),angle:y[s],config:{mass:1,tension:280,friction:160}}})),k=(0,r.useSprings)(v.length,v);return(0,n.tZ)("div",{ref:i,css:u,children:(0,n.BX)("svg",{width:"100%",height:"100%",children:[k.map((function(e,s){var t=e.r;return(0,n.tZ)(r.animated.circle,{cx:g[0],cy:g[1],r:t,css:d},s)})),k.map((function(e,s){var t=e.r,i=e.angle;return(0,n.tZ)(r.animated.circle,{cx:(0,r.to)([t,i],(function(e,s){return Math.cos(s)*e+g[0]})),cy:(0,r.to)([t,i],(function(e,s){return-Math.sin(s)*e+g[1]})),r:10,css:m},s)}))]})})}var u={name:"1kzq5ms",styles:"height:100%;width:100%"},d={name:"1dzh8wi",styles:"stroke:white;stroke-width:2px;fill:transparent"},m={name:"1b3qpiw",styles:"fill:white"}},5681:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var n=t(6577),r=t(9008),i=t(7294),a=t(3579),o=t(4027),l=t(8442),c=t(381),j=t.n(c);var h=new Date(Date.now()),u=j()(h).subtract(1,"years").toDate(),d=j()(h).add(1,"years").toDate(),m=(0,l.Xf)().domain([u,d]).range([0,100]).clamp(!0);function f(){var e=(0,i.useState)(h),s=e[0],t=e[1],l=(0,i.useState)(0),c=l[0],j=l[1];return(0,i.useEffect)((function(){var e=setTimeout((function(){var e=m.invert(100*Math.random());t(e)}),7e3);return function(){return clearTimeout(e)}}),[c,j]),(0,n.BX)(i.Fragment,{children:[(0,n.BX)(r.default,{children:[(0,n.tZ)("title",{children:"About - Star Date"}),(0,n.tZ)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.BX)("main",{css:p,children:[(0,n.tZ)("div",{css:g,children:(0,n.tZ)(o.m,{date:s})}),(0,n.tZ)("h1",{children:"About"}),(0,n.tZ)("p",{children:"This application was inspired by those companies that will make a poster of a significant date. I thought I would make a web app that could do some of the math."}),(0,n.tZ)("h3",{children:"Accuracy"}),(0,n.BX)("p",{children:["Note, you probably shouldn't use this if you work at NASA. The math under the hood assumes our solar system is 2D and that the planets follow a perfect circle. I also haven't addressed any precision issues with JavsScript so viewing dates like when the sun will explode will likely not work. I have a feeling this tool is only accurate to \xb1100 years from Jan 01 2000. If you need something more accurate checkout a"," ",(0,n.tZ)(a.Z,{href:"https://in-the-sky.org/solarsystem.php",target:"_BLANK",children:"3D Diagram of the Solar System"}),"."]}),(0,n.tZ)("h3",{children:"Approach"}),(0,n.tZ)("p",{children:"This site uses Nextjs, React, SVG and react-spring. Nextjs handles compiling and the app into static and re-hyrdratable assets. React handles renering elemtns to the DOM and storing the state of things (like the date to visualize). SVG is used for rendering the view of the solar system (with infinite resolution). React-spring is used for animating dom attributes in react according to physics based springs. Using springs gives the animations that organic feel."})]})]})}var p={name:"1cl8uze",styles:"width:min(100%, 700px);margin:auto;padding:15px;margin-top:50px;h1,h2,h3,h4,h5,p{margin-bottom:20px;}"},g={name:"wvmfvx",styles:"height:400px;padding:0 20px"}},4613:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(5681)}])}},function(e){e.O(0,[774,885,547,962],(function(){return s=4613,e(e.s=s);var s}));var s=e.O();_N_E=s}]);