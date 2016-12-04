webpackJsonp([2,0],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=s(186),i=a(n);s(162);var o=s(172),r=a(o),c=s(173),l=a(c);new i.default({el:"#app",template:"<App/>",components:{App:r.default}}),new i.default({el:"#customFooter",template:"<custom-footer/>",components:{CustomFooter:l.default}})},110:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(175),i=a(n),o=s(174),r=a(o),c=s(176),l=a(c);$(document).ready(function(){$(".parallax").parallax()}),e.default={name:"app",components:{Examples:i.default,AboutMe:r.default,Experience:l.default},data:function(){return{aboutMe:{show:!0},examples:{show:!0},sections:[{name:"Experience",show:!0},{name:"About Blake",show:!0},{name:"Examples",show:!0}]}},methods:{switchShow:function(t){t.show=t.show===!1}}}},111:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"customFooter",data:function(){return{toolsUsed:[{label:"VueJS",link:"https://vuejs.org/"},{label:"Materialize CSS",link:"http://materializecss.com/"}],contactAt:[{label:"LinkedIn",icon:"fa fa-linkedin-square",link:"https://www.linkedin.com/in/blake-campbell"},{label:"GitHub",icon:"fa fa-github",link:"https://github.com/BlakeCampbells"},{label:"Email",icon:"fa fa-envelope",link:"mailto:blakecampbell.dev@gmail.com"}]}}}},112:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"aboutMe",data:function(){return{cards:[{name:"About Me",description:"Developer, Dog Lover, Hiker. In my spare time I work on small projects for fun. Always trying to learn something new"}]}}}},113:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(178),i=a(n),o=s(177),r=a(o);e.default={name:"examples",components:{Todo:i.default,ChartEx:r.default},data:function(){return{msg:"Welcome to My Vue.js App",todo:{title:"Todo List Example",component:"<todo></todo>"},chart:{title:"Chart Example",components:""}}}}},114:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"experience",data:function(){return{cards:[{name:"Work",title:"Full Stack Developer at MortarStone",expand:!1,description:"Building, maintaining and testing a financial analytics web application. Built with AngularJS and Rails. Applications intended for churches and non-profits.",notable:["Ruby on Rails","AngularJS","NodeJS","Prawn Gem"]},{name:"OpenSource",title:"Experian Data Dictionary",expand:!1,description:"Created an Experian Data Dictionary for public use. Translating between columns and values to definitions. Currently at 5,000+ downloads. Included tests and examples. ",notable:["Ruby","RSpec"]},{name:"Other",title:"Other Development Stuff",expand:!1,description:"",notable:[]}]}}}},115:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(117),i=a(n);e.default={name:"chartEx",data:function(){return{sections:[{label:"Red",votes:12,hex:"#ff0000"},{label:"Blue",votes:10,hex:"#0a2998"},{label:"Green",votes:15,hex:"#3fda34"},{label:"Orange",votes:9,hex:"#e0921d"}]}},mounted:function(){this.buildChart()},methods:{updateChart:function(){this.votesChart&&this.votesChart.destroy(),this.buildChart()},buildChart:function(){var t=this;this.votes=[],this.labels=[],this.colors=[],this.sections.forEach(function(e){t.votes.push(e.votes),t.labels.push(e.label),t.colors.push(e.hex)});var e=document.getElementById("votesChart");this.votesChart=new i.default(e,{type:"bar",data:{labels:t.labels,datasets:[{label:"# of Votes",data:t.votes,backgroundColor:t.colors,borderColor:t.colors,borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}}}},116:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"todo",data:function(){return{items:[{name:"this",checked:!1},{name:"that",checked:!1},{name:"another",checked:!1},{name:"stuff",checked:!1}],newTask:{name:"Here",checked:!1}}},methods:{addTask:function(t){this.items.push(t),this.newTask={name:"",checked:!1}},removeTask:function(t){this.items.splice(t,1)}}}},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},167:function(t,e){},168:function(t,e){},169:function(t,e){},170:function(t,e,s){function a(t){return s(n(t))}function n(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./af":2,"./af.js":2,"./ar":8,"./ar-dz":3,"./ar-dz.js":3,"./ar-ly":4,"./ar-ly.js":4,"./ar-ma":5,"./ar-ma.js":5,"./ar-sa":6,"./ar-sa.js":6,"./ar-tn":7,"./ar-tn.js":7,"./ar.js":8,"./az":9,"./az.js":9,"./be":10,"./be.js":10,"./bg":12,"./bg-x":11,"./bg-x.js":11,"./bg.js":12,"./bn":13,"./bn.js":13,"./bo":14,"./bo.js":14,"./br":15,"./br.js":15,"./bs":16,"./bs.js":16,"./ca":17,"./ca.js":17,"./cs":18,"./cs.js":18,"./cv":19,"./cv.js":19,"./cy":20,"./cy.js":20,"./da":21,"./da.js":21,"./de":23,"./de-at":22,"./de-at.js":22,"./de.js":23,"./dv":24,"./dv.js":24,"./el":25,"./el.js":25,"./en-au":26,"./en-au.js":26,"./en-ca":27,"./en-ca.js":27,"./en-gb":28,"./en-gb.js":28,"./en-ie":29,"./en-ie.js":29,"./en-nz":30,"./en-nz.js":30,"./eo":31,"./eo.js":31,"./es":33,"./es-do":32,"./es-do.js":32,"./es.js":33,"./et":34,"./et.js":34,"./eu":35,"./eu.js":35,"./fa":36,"./fa.js":36,"./fi":37,"./fi.js":37,"./fo":38,"./fo.js":38,"./fr":41,"./fr-ca":39,"./fr-ca.js":39,"./fr-ch":40,"./fr-ch.js":40,"./fr.js":41,"./fy":42,"./fy.js":42,"./gd":43,"./gd.js":43,"./gl":44,"./gl.js":44,"./he":45,"./he.js":45,"./hi":46,"./hi.js":46,"./hr":47,"./hr.js":47,"./hu":48,"./hu.js":48,"./hy-am":49,"./hy-am.js":49,"./id":50,"./id.js":50,"./is":51,"./is.js":51,"./it":52,"./it.js":52,"./ja":53,"./ja.js":53,"./jv":54,"./jv.js":54,"./ka":55,"./ka.js":55,"./kk":56,"./kk.js":56,"./km":57,"./km.js":57,"./ko":58,"./ko.js":58,"./ky":59,"./ky.js":59,"./lb":60,"./lb.js":60,"./lo":61,"./lo.js":61,"./lt":62,"./lt.js":62,"./lv":63,"./lv.js":63,"./me":64,"./me.js":64,"./mi":65,"./mi.js":65,"./mk":66,"./mk.js":66,"./ml":67,"./ml.js":67,"./mr":68,"./mr.js":68,"./ms":70,"./ms-my":69,"./ms-my.js":69,"./ms.js":70,"./my":71,"./my.js":71,"./nb":72,"./nb.js":72,"./ne":73,"./ne.js":73,"./nl":75,"./nl-be":74,"./nl-be.js":74,"./nl.js":75,"./nn":76,"./nn.js":76,"./pa-in":77,"./pa-in.js":77,"./pl":78,"./pl.js":78,"./pt":80,"./pt-br":79,"./pt-br.js":79,"./pt.js":80,"./ro":81,"./ro.js":81,"./ru":82,"./ru.js":82,"./se":83,"./se.js":83,"./si":84,"./si.js":84,"./sk":85,"./sk.js":85,"./sl":86,"./sl.js":86,"./sq":87,"./sq.js":87,"./sr":89,"./sr-cyrl":88,"./sr-cyrl.js":88,"./sr.js":89,"./ss":90,"./ss.js":90,"./sv":91,"./sv.js":91,"./sw":92,"./sw.js":92,"./ta":93,"./ta.js":93,"./te":94,"./te.js":94,"./tet":95,"./tet.js":95,"./th":96,"./th.js":96,"./tl-ph":97,"./tl-ph.js":97,"./tlh":98,"./tlh.js":98,"./tr":99,"./tr.js":99,"./tzl":100,"./tzl.js":100,"./tzm":102,"./tzm-latn":101,"./tzm-latn.js":101,"./tzm.js":102,"./uk":103,"./uk.js":103,"./uz":104,"./uz.js":104,"./vi":105,"./vi.js":105,"./x-pseudo":106,"./x-pseudo.js":106,"./zh-cn":107,"./zh-cn.js":107,"./zh-hk":108,"./zh-hk.js":108,"./zh-tw":109,"./zh-tw.js":109};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=170},171:function(t,e,s){t.exports=s.p+"static/img/nova.0b864b8.jpg"},172:function(t,e,s){var a,n;s(169),a=s(110);var i=s(185);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=a},173:function(t,e,s){var a,n;s(167),a=s(111);var i=s(183);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-5e926564",t.exports=a},174:function(t,e,s){var a,n;s(166),a=s(112);var i=s(182);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-231bcd2e",t.exports=a},175:function(t,e,s){var a,n;s(165),a=s(113);var i=s(181);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-0ea78520",t.exports=a},176:function(t,e,s){var a,n;s(168),a=s(114);var i=s(184);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-71050b5e",t.exports=a},177:function(t,e,s){var a,n;s(163),a=s(115);var i=s(179);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-09a91652",t.exports=a},178:function(t,e,s){var a,n;s(164),a=s(116);var i=s(180);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-0e418975",t.exports=a},179:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"card blue charting-example hoverable"},[_h("div",{staticClass:"card-content white-text"},[_h("span",{staticClass:"card-title",on:{click:function(t){buildChart()}}},["Charting Example"])])," ",_h("div",{staticClass:"row"},[_h("div",{staticClass:"col s12 m12"},[_h("div",{staticClass:"card white"},[_m(0)," ",_h("div",{staticClass:"card-reveal activator"},["\n          Chart Values\n          ",_h("table",[_m(1)," ",_h("tbody",[_l(sections,function(t,e){return _h("tr",[_h("td",[_h("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"section.label"}],attrs:{type:"text"},domProps:{value:_s(t.label)},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}})])," ",_h("td",[_h("input",{directives:[{name:"model",rawName:"v-model",value:t.votes,expression:"section.votes"}],attrs:{type:"number"},domProps:{value:_s(t.votes)},on:{input:function(e){e.target.composing||(t.votes=_n(e.target.value))}}})])," ",_h("td",[_h("input",{directives:[{name:"model",rawName:"v-model",value:t.hex,expression:"section.hex"}],attrs:{type:"text"},domProps:{value:_s(t.hex)},on:{input:function(e){e.target.composing||(t.hex=e.target.value)}}})])])})])])," ",_h("div",{staticClass:"card-action activator"},[_h("i",{staticClass:"material-icons center card-title",on:{click:function(t){updateChart()}}},["keyboard_arrow_up"])])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"card-content black-text activator"},[_h("canvas",{attrs:{id:"votesChart"}})," ",_h("div",{staticClass:"card-action activator"},[_h("i",{staticClass:"material-icons center"},["keyboard_arrow_down"])])])},function(){with(this)return _h("thead",[_h("tr",[_h("th",{attrs:{"data-field":"id"}},["Label"])," ",_h("th",{attrs:{"data-field":"name"}},["Votes"])," ",_h("th",{attrs:{"data-field":"price"}},["Hex Value"])])])}]}},180:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"card blue hoverable"},[_m(0)," ",_h("div",{staticClass:"row"},[_l(items,function(t,e){return _h("div",{staticClass:"col s12 m6"},[_h("div",{staticClass:"card white"},[_h("div",{staticClass:"card-content white-text"},[_h("div",{staticClass:"left-align"},[_h("span",{staticClass:"card-title"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],attrs:{type:"checkbox",id:"checkbox"+e,value:"true"},domProps:{checked:Array.isArray(t.checked)?_i(t.checked,"true")>-1:_q(t.checked,!0)},on:{change:function(e){var s=t.checked,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i="true",o=_i(s,i);n?o<0&&(t.checked=s.concat(i)):o>-1&&(t.checked=s.slice(0,o).concat(s.slice(o+1)))}else t.checked=n}}})," ",_h("label",{staticClass:"black-text",attrs:{for:"checkbox"+e}},[_s(t.name)])," ",_h("a",{staticClass:"btn-floating right blue darken-2",on:{click:function(t){removeTask(e)}}},[_m(1,!0)])])])])])])})," ",_h("div",{staticClass:"col s12 m12"},[_h("div",{staticClass:"card white"},[_h("div",{staticClass:"card-content black-text"},[_h("div",{staticClass:"left-align"},[_h("span",{staticClass:"card-title"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:newTask.name,expression:"newTask.name"}],attrs:{type:"text",name:"name"},domProps:{value:_s(newTask.name)},on:{input:function(t){t.target.composing||(newTask.name=t.target.value)}}})," ",_h("a",{staticClass:"btn-floating right blue lighten-2",on:{click:function(t){addTask(newTask)}}},[_m(2)])])])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"card-content white-text"},[_h("span",{staticClass:"card-title"},["Todo List Example"])])},function(){with(this)return _h("i",{staticClass:"material-icons"},["delete"])},function(){with(this)return _h("i",{staticClass:"material-icons"},["add"])}]}},181:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row"},[_h("div",{staticClass:"col s12 m6 l6"},[_h("todo")])," ",_h("div",{staticClass:"col s12 m6 l6"},[_h("chart-ex")])])},staticRenderFns:[]}},182:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row"},[_l(cards,function(t,e){return _h("div",[_h("div",{staticClass:"col s12 m6 l6 offset-l3 offset-m3"},[_h("div",{staticClass:"card blue lighten-3 "},[_h("div",{staticClass:"card-content"},[_h("p",[_s(t.description)])])])])])})])},staticRenderFns:[]}},183:function(module,exports){module.exports={render:function(){with(this)return _h("footer",{staticClass:"page-footer blue darken-4"},[_h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_m(0)," ",_h("div",{staticClass:"col l3 s12"},[_m(1)," ",_h("ul",[_l(contactAt,function(t,e){return _h("li",[_h("a",{staticClass:"grey-text text-lighten-3 row",attrs:{href:t.link,target:"_blank"}},[_h("i",{class:t.icon,attrs:{"aria-hidden":"true"}}),"\n              "+_s(t.label)+"\n            "])])})])])," ",_h("div",{staticClass:"offset-l3 col l3 s12"},[_m(2)," ",_h("ul",[_l(toolsUsed,function(t,e){return _h("li",[_h("div",{staticClass:"row"},[_h("a",{staticClass:"grey-text text-lighten-3",attrs:{href:t.link,target:"_blank"}},["\n                "+_s(t.label)+"\n              "])])])})])])])])," ",_m(3)])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"col l3 s12"},[_h("h5",{staticClass:"white-text"},["Blake Campbell"])," ",_h("p",{staticClass:"grey-text text-lighten-4"},["Developer"])])},function(){with(this)return _h("h5",{staticClass:"white-text"},["Contact"])},function(){with(this)return _h("h5",{staticClass:"white-text"},["Tools Used"])},function(){with(this)return _h("div",{staticClass:"footer-copyright"},[_h("div",{staticClass:"container"},["\n      © 2016 Copyright Text\n    "])])}]}},184:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row"},[_l(cards,function(t,e){return _h("div",[_h("div",{staticClass:"col s12 m4"},[_h("div",{staticClass:"card small blue lighten-1 hoverable"},[_h("div",{staticClass:"card-content"},[_h("span",{staticClass:"card-title activator white-text"},["\n            "+_s(t.name)+"\n          "])," ",_h("p",{staticClass:"white-text activator"},[_s(t.title)])])," ",_h("div",{staticClass:"card-reveal"},[_h("span",{staticClass:"grey-text text-darken-4"},[_s(t.title)])," ",_h("p",[_s(t.description)])," ",t.notable.length?_h("span",[_m(0,!0)]):_e()," ",_h("ul",[_l(t.notable,function(t,e){return _h("li",["\n              "+_s(t)+"\n            "])})])," ",_m(1,!0)])," ",_m(2,!0)])])])})])},staticRenderFns:[function(){with(this)return _h("u",["Tools used"])},function(){with(this)return _h("div",{staticClass:"card-action activator"},[_h("i",{staticClass:"material-icons center card-title"},["keyboard_arrow_up"])])},function(){with(this)return _h("div",{staticClass:"card-action activator"},[_h("i",{staticClass:"material-icons center"},["keyboard_arrow_down"])])}]}},185:function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_m(0)," ",_h("div",{staticClass:"section2"},[_h("div",{staticClass:"col s12 m6 offset-m3"},[_h("div",{staticClass:"card blue-grey darken-1"},[_m(1)," ",_h("div",{staticClass:"row"},[_l(sections,function(t,e){return _h("div",{staticClass:"col s12 m4"},[_h("div",{staticClass:"card white hoverable"},[_h("div",{staticClass:"card-content white-text"},[_h("div",{staticClass:"left-align"},[_h("span",{staticClass:"card-title"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:t.show,expression:"item.show"}],attrs:{type:"checkbox",id:"checkbox"+e,value:"true"},domProps:{checked:Array.isArray(t.show)?_i(t.show,"true")>-1:_q(t.show,!0)},on:{change:function(e){var s=t.show,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i="true",o=_i(s,i);n?o<0&&(t.show=s.concat(i)):o>-1&&(t.show=s.slice(0,o).concat(s.slice(o+1)))}else t.show=n}}})," ",_h("label",{attrs:{for:"checkbox"+e}},[_s(t.name)])])])])])])})])])])])," ",_m(2)," ",_h("span",{directives:[{name:"show",rawName:"v-show",value:sections[0].show,expression:"sections[0].show"}]},[_h("experience")])," ",_h("span",{directives:[{name:"show",rawName:"v-show",value:sections[1].show,expression:"sections[1].show"}]},[_h("about-me")])," ",_h("span",{directives:[{name:"show",rawName:"v-show",value:sections[2].show,expression:"sections[2].show"}]},[_h("examples",[_h("examples")])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"navbar-fixed"},[_h("nav",[_h("div",{staticClass:"nav-wrapper blue lighten-2"},[_h("a",{staticClass:"brand-logo left",attrs:{href:"#",id:"logo__left"}},["Blake Campbell"])," ",_h("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[_h("li",[_h("a",{attrs:{href:"sass.html"}},["Sass"])])," ",_h("li",[_h("a",{attrs:{href:"badges.html"}},["Components"])])," ",_h("li",[_h("a",{attrs:{href:"collapsible.html"}},["JavaScript"])])])])])])},function(){with(this)return _h("div",{staticClass:"card-content white-text"},[_h("span",{staticClass:"card-title"},["What do you want to see?"])])},function(){with(this)return _h("div",{staticClass:"parallax-container"},[_h("div",{staticClass:"parallax"},[_h("img",{attrs:{src:__webpack_require__(171)}})])])}]}}});
//# sourceMappingURL=app.edabac0cf6b6e577fed4.js.map