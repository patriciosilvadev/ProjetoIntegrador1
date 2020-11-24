function _inherits(l,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&_setPrototypeOf(l,n)}function _setPrototypeOf(l,n){return(_setPrototypeOf=Object.setPrototypeOf||function(l,n){return l.__proto__=n,l})(l,n)}function _createSuper(l){var n=_isNativeReflectConstruct();return function(){var u,t=_getPrototypeOf(l);if(n){var e=_getPrototypeOf(this).constructor;u=Reflect.construct(t,arguments,e)}else u=t.apply(this,arguments);return _possibleConstructorReturn(this,u)}}function _possibleConstructorReturn(l,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(l):n}function _assertThisInitialized(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(l){return!1}}function _getPrototypeOf(l){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(l)}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Bp5B:function(l,n,u){"use strict";u.r(n);var t,e=u("8Y7J"),i=function l(){_classCallCheck(this,l)},a=u("pMnS"),r=u("978R"),o=u("z/SZ"),c=u("2uy1"),s=u("SVse"),b=u("s7LF"),p=u("xkgV"),f=u("jvCn"),g=u("7g+E"),d=function(){function l(n,u,t,e,i){_classCallCheck(this,l),this.http=n,this.router=u,this.route=t,this.spiner=e,this.alert=i,this.controles=[],this.timer=null,this.campoBusca="",this.meses=[{}]}return _createClass(l,[{key:"ngOnInit",value:function(){this.atualizaLista(),this.meses=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"]}},{key:"atualizaLista",value:function(){var l=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.spiner.show(),this.http.listaGeral(n,this.campoBusca).subscribe((function(n){l.controles=n.data,l.totalRegistros=n.total,l.paginaAtual=n.current_page,l.spiner.hide()}),(function(n){l.alert.showAlertDanger("Erro ao buscar dados!"),l.spiner.hide()}))}},{key:"buscaDados",value:function(){var l=this;clearTimeout(this.timer),this.timer=setTimeout((function(){l.atualizaLista()}),500)}},{key:"previous",value:function(l){this.atualizaLista(l-1)}},{key:"next",value:function(l){this.atualizaLista(l+1)}},{key:"setarPagina",value:function(l){this.atualizaLista(l)}},{key:"verObservacoes",value:function(l){this.router.navigate(["/observacoes/"+l])}},{key:"verControle",value:function(l){this.router.navigate(["/controles/"+l])}}]),l}(),m=u("eWbo"),h=u("IheW"),v=u("iInd"),w=u("sdrn"),O=((t=function(l){_inherits(u,l);var n=_createSuper(u);function u(l,t,e){var i;return _classCallCheck(this,u),(i=n.call(this)).http=l,i.router=t,i.alertService=e,i.url=i.urlBase+"/relatorios/controle",i.httpOptions={headers:new h.g({"Content-Type":"application/json"})},i}return _createClass(u,[{key:"listaGeral",value:function(l,n){return this.http.get("".concat(this.url,"/relatorio-geral?page=").concat(l,"&filtro=").concat(n))}}]),u}(m.a)).ngInjectableDef=e.Ub({factory:function(){return new t(e.Vb(h.c),e.Vb(v.k),e.Vb(w.a))},token:t,providedIn:"root"}),t),x=e.ub({encapsulation:0,styles:[[""]],data:{}});function I(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"td",[["class","text-center align-middle"]],null,null,null,null,null)),(l()(),e.Ob(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.empresa.tipo)}))}function C(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"td",[["class","align-middle"]],null,null,null,null,null)),(l()(),e.Ob(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.empresa.nome)}))}function y(l){return e.Qb(0,[(l()(),e.wb(0,16777216,null,null,2,"div",[["placement","auto"]],null,null,null,null,null)),e.vb(1,212992,null,0,r.c,[e.T,o.a,r.a,e.n,e.I,c.a],{tooltip:[0,"tooltip"],placement:[1,"placement"]},null),(l()(),e.wb(2,0,null,null,0,"i",[["class","fas fa-eye"]],null,null,null,null,null)),(l()(),e.lb(0,null,null,0))],(function(l,n){l(n,1,0,n.parent.context.$implicit.observacao,"auto")}),null)}function _(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,y)),e.vb(2,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.mes_referencia==n.parent.parent.context.$implicit&&"Pendente"==n.context.$implicit.estado)}),null)}function k(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,_)),e.vb(2,278528,null,0,s.i,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.parent.parent.context.$implicit.observacoes)}),null)}function P(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,6,"td",[["class","text-center align-middle"]],null,null,null,null,null)),e.Lb(512,null,s.s,s.t,[e.u,e.v,e.n,e.I]),e.vb(2,278528,null,0,s.h,[s.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(3,{"table-success":0,"table-danger":1,"table-secondary":2}),(l()(),e.lb(16777216,null,null,1,null,k)),e.vb(5,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.Ob(6,null,[" "," "]))],(function(l,n){var u=l(n,3,0,"OK"==n.parent.context.$implicit[n.context.$implicit],"X"==n.parent.context.$implicit[n.context.$implicit],""==n.parent.context.$implicit[n.context.$implicit]);l(n,2,0,"text-center align-middle",u),l(n,5,0,n.parent.context.$implicit.observacoes)}),(function(l,n){l(n,6,0,n.parent.context.$implicit[n.context.$implicit])}))}function Q(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"button",[["class","btn btn-secondary btn-sm ml-0 mb-2"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.verObservacoes(l.parent.context.$implicit.id_controle)&&t),t}),null,null)),(l()(),e.wb(1,0,null,null,0,"i",[["class","fas fa-eye"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Obs"]))],null,null)}function $(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,I)),e.vb(2,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,C)),e.vb(4,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(5,0,null,null,1,"td",[["class","text-center align-middle"]],null,null,null,null,null)),(l()(),e.Ob(6,null,["",""])),(l()(),e.lb(16777216,null,null,1,null,P)),e.vb(8,278528,null,0,s.i,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.wb(9,0,null,null,1,"td",[["class","text-center align-middle"]],null,null,null,null,null)),(l()(),e.Ob(10,null,["",""])),(l()(),e.wb(11,0,null,null,2,"td",[["class","text-center align-middle"]],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,Q)),e.vb(13,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(14,0,null,null,3,"td",[["class","text-center align-middle"]],null,null,null,null,null)),(l()(),e.wb(15,0,null,null,2,"button",[["class","btn btn-info btn-sm mr-0 mb-2"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.verControle(l.context.$implicit.empresa.id_empresa)&&t),t}),null,null)),(l()(),e.wb(16,0,null,null,0,"i",[["class","fas fa-eye"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Controle"]))],(function(l,n){var u=n.component;l(n,2,0,n.context.$implicit.empresa),l(n,4,0,n.context.$implicit.empresa),l(n,8,0,u.meses),l(n,13,0,n.context.$implicit.observacoes&&n.context.$implicit.observacoes[0])}),(function(l,n){l(n,6,0,n.context.$implicit.ano),l(n,10,0,n.context.$implicit.empresa.usuario.nome)}))}function T(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.previous(e.paginaAtual)&&t),t}),null,null)),(l()(),e.Ob(-1,null,[" \xab "]))],null,null)}function j(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setarPagina(l.parent.context.$implicit.value)&&t),t}),null,null)),(l()(),e.wb(1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.label)}))}function R(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"div",[["class","page-item"]],null,null,null,null,null)),(l()(),e.wb(1,0,null,null,1,"span",[["class","page-link"]],null,null,null,null,null)),(l()(),e.Ob(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.label)}))}function G(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,4,"div",[["class","page-item"]],[[2,"current",null]],null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,j)),e.vb(2,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,R)),e.vb(4,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,e.Ib(n.parent,60).getCurrent()!==n.context.$implicit.value),l(n,4,0,e.Ib(n.parent,60).getCurrent()===n.context.$implicit.value)}),(function(l,n){l(n,0,0,e.Ib(n.parent,60).getCurrent()===n.context.$implicit.value)}))}function B(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.next(e.paginaAtual)&&t),t}),null,null)),(l()(),e.Ob(-1,null,[" \xbb "]))],null,null)}function S(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.wb(1,0,null,null,1,"h4",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Nenhum registro encontrado!"]))],null,null)}function L(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Relatorio Geral"])),(l()(),e.wb(2,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.wb(3,0,null,null,0,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e.wb(4,0,null,null,0,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e.wb(5,0,null,null,10,"div",[["class","col-sm-4 form-inline mb-2 justify-content-end"]],null,null,null,null,null)),(l()(),e.wb(6,0,null,null,9,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e.wb(7,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e.wb(8,0,null,null,1,"span",[["class","input-group-text"],["id","inputGroupPrepend2"]],null,null,null,null,null)),(l()(),e.wb(9,0,null,null,0,"i",[["class","fas fa-search"]],null,null,null,null,null)),(l()(),e.wb(10,0,null,null,5,"input",[["aria-label","Busca"],["class","form-control mr-sm-2"],["placeholder","Pesquisar..."],["type","search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ngModelChange"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ib(l,11)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ib(l,11).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ib(l,11)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ib(l,11)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==i.buscaDados()&&t),"ngModelChange"===n&&(t=!1!==(i.campoBusca=u)&&t),t}),null,null)),e.vb(11,16384,null,0,b.c,[e.I,e.n,[2,b.a]],null,null),e.Lb(1024,null,b.k,(function(l){return[l]}),[b.c]),e.vb(13,671744,null,0,b.o,[[8,null],[8,null],[8,null],[6,b.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,b.l,null,[b.o]),e.vb(15,16384,null,0,b.m,[[4,b.l]],null,null),(l()(),e.wb(16,0,null,null,42,"table",[["class","table table-sm table-striped table-hover table-bordered table-responsive-sm"]],null,null,null,null,null)),(l()(),e.wb(17,0,null,null,36,"thead",[],null,null,null,null,null)),(l()(),e.wb(18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Tipo"])),(l()(),e.wb(20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Empresa"])),(l()(),e.wb(22,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Ano"])),(l()(),e.wb(24,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["JAN"])),(l()(),e.wb(26,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["FEV"])),(l()(),e.wb(28,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["MAR"])),(l()(),e.wb(30,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ABR"])),(l()(),e.wb(32,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["MAI"])),(l()(),e.wb(34,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["JUN"])),(l()(),e.wb(36,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["JUL"])),(l()(),e.wb(38,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["AGO"])),(l()(),e.wb(40,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["SET"])),(l()(),e.wb(42,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["OUT"])),(l()(),e.wb(44,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["NOV"])),(l()(),e.wb(46,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["DEZ"])),(l()(),e.wb(48,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["RESPONS\xc1VEL"])),(l()(),e.wb(50,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["OBS"])),(l()(),e.wb(52,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["CONTROLES"])),(l()(),e.wb(54,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,3,null,$)),e.vb(56,278528,null,0,s.i,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),e.Kb(57,{itemsPerPage:0,currentPage:1,totalItems:2}),e.Jb(0,p.b,[p.d]),(l()(),e.wb(59,0,null,null,9,"pagination-template",[["class","pagination justify-content-end mr-5 mb-3"]],null,[[null,"pageChange"],[null,"pageBoundsCorrection"]],(function(l,n,u){var t=!0,e=l.component;return"pageChange"===n&&(t=!1!==e.pageChange.emit(u)&&t),"pageBoundsCorrection"===n&&(t=!1!==e.pageBoundsCorrection.emit(u)&&t),t}),null,null)),e.vb(60,737280,[["p",4]],0,p.c,[p.d,e.i],null,{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"}),(l()(),e.wb(61,0,null,null,2,"div",[["class","page-item"]],[[2,"disabled",null]],null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,T)),e.vb(63,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,G)),e.vb(65,278528,null,0,s.i,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.wb(66,0,null,null,2,"div",[["class","page-item"]],[[2,"disabled",null]],null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,B)),e.vb(68,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,S)),e.vb(70,16384,null,0,s.j,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(71,0,null,null,1,"ngx-spinner",[],null,null,null,f.b,f.a)),e.vb(72,770048,null,0,g.a,[g.c,e.i],null,null)],(function(l,n){var u=n.component;l(n,13,0,u.campoBusca);var t=e.Pb(n,56,0,e.Ib(n,58).transform(u.controles,l(n,57,0,30,u.paginaAtual,u.totalRegistros)));l(n,56,0,t),l(n,60,0),l(n,63,0,!e.Ib(n,60).isFirstPage()),l(n,65,0,e.Ib(n,60).pages),l(n,68,0,!e.Ib(n,60).isLastPage()),l(n,70,0,0==u.totalRegistros),l(n,72,0)}),(function(l,n){l(n,10,0,e.Ib(n,15).ngClassUntouched,e.Ib(n,15).ngClassTouched,e.Ib(n,15).ngClassPristine,e.Ib(n,15).ngClassDirty,e.Ib(n,15).ngClassValid,e.Ib(n,15).ngClassInvalid,e.Ib(n,15).ngClassPending),l(n,61,0,e.Ib(n,60).isFirstPage()),l(n,66,0,e.Ib(n,60).isLastPage())}))}var F=e.sb("app-relatorio-geral",d,(function(l){return e.Qb(0,[(l()(),e.wb(0,0,null,null,1,"app-relatorio-geral",[],null,null,null,L,x)),e.vb(1,114688,null,0,d,[O,v.k,v.a,g.c,w.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{id:"id",maxSize:"maxSize"},{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},[]),E=u("Xg1U"),z=function l(){_classCallCheck(this,l)};u.d(n,"RelatoriosModuleNgFactory",(function(){return A}));var A=e.tb(i,[],(function(l){return e.Fb([e.Gb(512,e.l,e.eb,[[8,[a.a,F,E.a]],[3,e.l],e.A]),e.Gb(4608,s.l,s.k,[e.w,[2,s.v]]),e.Gb(4608,b.v,b.v,[]),e.Gb(4608,p.d,p.d,[]),e.Gb(1073742336,s.b,s.b,[]),e.Gb(1073742336,b.u,b.u,[]),e.Gb(1073742336,b.g,b.g,[]),e.Gb(1073742336,g.b,g.b,[]),e.Gb(1073742336,p.a,p.a,[]),e.Gb(1073742336,v.o,v.o,[[2,v.t],[2,v.k]]),e.Gb(1073742336,z,z,[]),e.Gb(1073742336,r.d,r.d,[]),e.Gb(1073742336,i,i,[]),e.Gb(1024,v.i,(function(){return[[{path:"controle",children:[{path:"relatorio-geral",component:d}]}]]}),[])])}))}}]);