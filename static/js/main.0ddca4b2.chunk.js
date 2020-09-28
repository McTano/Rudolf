(this["webpackJsonptruth-tree"]=this["webpackJsonptruth-tree"]||[]).push([[0],{82:function(e,t,n){e.exports=n(97)},88:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=n(33),l=n(14),u=n(10),s=(n(87),n(88),n(124)),d=n(125),f=n(126),m=n(65),p=n(66),h=n(74),v=n(73),b=n(56),w=n(67),g=function(e){var t=e.formulas,n=void 0===t?[]:t,r=e.forest;return{nodeType:"formulas",formulas:n,forest:void 0===r?[]:r,id:e.id}},y=function e(t,n){"contradiction"!==t.nodeType&&("finished"!==t.nodeType?0===t.forest.length?t.forest=n(t.id):t.forest.forEach((function(t){return e(t,n)})):console.warn("shouldn't try to append to finished branch"))},E=function(e){return g({formulas:e.map((function(e,t){return k(e,t+1)})),forest:[],id:""})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{value:e,resolved:!1,row:t}},j=function(e){return null!=e&&"formulas"===e.nodeType&&0===e.forest.length},O=function(e){return e.formulas[0].row},C=function(e,t){for(var n=[];e-- >0;)n.push(k("",t++));return n},x=function(e,t){var n,r=function(e){return e.split("").map((function(t){if("0"===t||"1"===t)return Number(t);throw new Error("invalid character in node id: ".concat(t," in ").concat(e))}))}(t),a=e,o=Object(w.a)(r);try{for(o.s();!(n=o.n()).done;){var c=n.value;if("formulas"!==a.nodeType)throw new Error("Failed to get node path");a=a.forest[c]}}catch(i){o.e(i)}finally{o.f()}return a},R=function(e){return"formulas"===e.nodeType},S=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"updateFormula",value:function(e,t,n){x(this.draftState.tree,e).formulas[t].value=n}},{key:"updateJustification",value:function(e,t){Object.assign(this.draftState.justifications[e],t)}},{key:"updateContradiction",value:function(e,t){Object.assign(x(this.draftState.tree,e),{contradictoryRows:t})}},{key:"updateFeedback",value:function(e){this.draftState.feedback=e}},{key:"toggleResolved",value:function(e,t){var n=x(this.draftState.tree,e);n.formulas[t].resolved=!n.formulas[t].resolved}},{key:"createTree",value:function(e){this.draftState.tree=E(e),this.draftState.nextRow=e.length+1,this.draftState.justifications={}}},{key:"continueBranch",value:function(e,t){var n=this,r=x(this.draftState.tree,e);y(r,(function(e){return[g({id:"".concat(e,"0"),formulas:C(t,n.draftState.nextRow)})]})),this.draftState.justifications[this.draftState.nextRow]={rule:"",parentRow:""},this.draftState.nextRow+=t}},{key:"splitBranch",value:function(e,t){var n=this,r=x(this.draftState.tree,e);y(r,(function(e){var r=C(t,n.draftState.nextRow);return[g({id:"".concat(e,"0"),formulas:r}),g({id:"".concat(e,"1"),formulas:r})]})),this.draftState.justifications[this.draftState.nextRow]={rule:"",parentRow:""},this.draftState.nextRow+=t}},{key:"markContradiction",value:function(e){var t,n=x(this.draftState.tree,e);n.forest=[(t=n.id,{nodeType:"contradiction",formulas:[],contradictoryRows:"",id:"".concat(t,"0")})]}},{key:"markFinished",value:function(e){var t;x(this.draftState.tree,e).forest=[(t=e,{nodeType:"finished",formulas:[],id:"".concat(t,"0")})]}},{key:"reopenBranch",value:function(e){x(this.draftState.tree,e).forest=[]}}]),n}(b.ImmerReducer),T=Object(b.createReducerFunction)(S),N=Object(b.createActionCreators)(S),B=N.continueBranch,I=N.createTree,A=N.markContradiction,z=N.markFinished,F=N.reopenBranch,D=N.splitBranch,P=N.toggleResolved,J=N.updateContradiction,M=N.updateFeedback,W=N.updateFormula,G=N.updateJustification,V=n(60),L=n(119),U=n(21),Q=Object(U.a)({Bounder:{minWidth:"100%",position:"fixed",bottom:0,display:"flex",flexDirection:"column",zIndex:10},TextArea:{overflow:"hidden scroll",fontSize:"16px"},Toggle:{backgroundColor:"black",color:"white",fontSize:"13px",alignSelf:"flex-end","&:hover":{cursor:"pointer"},padding:"2px 10px"}}),X=function(e){var t=e.tree,n=e.justifications,o=e.feedback,c=Q(),i=Object(r.useState)(!1),l=Object(u.a)(i,2),s=l[0],d=l[1];return a.a.createElement("div",{className:c.Bounder},a.a.createElement("div",{className:c.Toggle,onClick:function(){d(!s)}},s?"close":"open"),a.a.createElement(L.a,{className:c.TextArea,value:JSON.stringify({tree:t,justifications:n,feedback:o}),style:{maxHeight:s?"50vh":"0vh"}}))},H=n(49),$=n.n(H),q=function(e){var t=e.onSubmit,n=e.premises,r=e.setPremises;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n)}},a.a.createElement($.a,{type:"text",name:"premises","aria-label":"Enter Premises",value:n,onChange:function(e){return r(e.target.value)}}),a.a.createElement("button",{className:"submit-premises",type:"submit"},"Declare Premises"))},K=n(30),Y=Object(U.a)({AppBounder:{color:"black",fontSize:"calc(8px + 1.5vmin)",display:"flex",flexDirection:"column",alignItems:"center",margin:"1em"},TopItemsBounder:{display:"flex",flexDirection:"column",alignItems:"center"},TreeBounder:{borderStyle:"solid",borderWidth:".1em",borderRadius:".2em","&::-webkit-scrollbar":{height:"6px",width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"black"},maxWidth:"80vw",overflowX:"scroll"}}),Z=n(53),_=n(123),ee=n(127),te=n(130),ne=function(e){var t=e.open,n=e.dispatch,r=e.index,o=e.anchorEl,c=e.onClose,i=e.node,l=i.formulas[r];return a.a.createElement(ee.a,{open:t,getContentAnchorEl:null,anchorEl:o,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},style:{zIndex:2e3}},a.a.createElement(te.a,{onClick:function(){n(B(i.id,1)),c()}},"Continue Branch w/ 1 formula"),a.a.createElement(te.a,{onClick:function(){n(D(i.id,1)),c()}},"Split Branch w/ 1 formula"),a.a.createElement(te.a,{onClick:function(){n(B(i.id,2)),c()}},"Continue Branch w/ 2 formulas"),a.a.createElement(te.a,{onClick:function(){n(D(i.id,2)),c()}},"Split Branch w/ 2 formulas"),a.a.createElement(te.a,{onClick:function(){n(P(i.id,r)),c()}},"Mark as ",l.resolved?"Un":"","Resolved"),j(i)&&a.a.createElement(te.a,{onClick:function(){n(A(i.id)),c()}},"Close Branch With Contradiction"),j(i)&&a.a.createElement(te.a,{onClick:function(){n(z(i.id)),c()}},"Mark Branch Finished"),"contradiction"===i.nodeType&&a.a.createElement(te.a,{onClick:function(){n(F(i.id)),c()}},"Reopen Branch"))},re=Object(U.a)({TruthTree:{display:"grid",padding:"0.2em",gridTemplateColumns:"[rowNumber] auto [nodeView] auto [justification] auto",placeItems:"center",columnGap:".5em",rowGap:".75em"},RowNumber:{gridColumn:"rowNumber"},Justification:{gridColumn:"justification",display:"flex",alignSelf:"start"},NodeViewContainer:{gridColumn:"nodeView"},NodeView:{display:"grid",textAlign:"center",columnGap:".5em",rowGap:".75em"},FormulaBounder:{display:"grid",borderRadius:".2em",borderWidth:".1em",borderStyle:"solid",borderColor:"transparent",rowGap:".75em"},Tooltip:{fontSize:"3em"}});var ae=function(e){var t=e.onChange,n=e.value,r=e.placeholder,o=e.style;return a.a.createElement($.a,{style:o,inputStyle:{padding:"0vmin .5vmin",backgroundColor:"transparent",borderStyle:"none"},onChange:t,value:n,placeholder:r})},oe=function(e){var t=e.index,n=e.dispatch,o=e.node,c=o.formulas[t],i=c.value,l=c.resolved,s=Object(r.useState)(!1),d=Object(u.a)(s,2),f=d[0],m=d[1],p=Object(r.useRef)(null);return a.a.createElement("div",{style:{height:"1.5em",gridRow:t+1},ref:p,onContextMenu:function(e){e.preventDefault(),m(!0)}},a.a.createElement(ae,{onChange:function(e){n(W(o.id,t,e.currentTarget.value))},value:i,placeholder:"formula"}),a.a.createElement(ne,{open:f,onClose:function(){return m(!1)},dispatch:n,anchorEl:p.current,index:t,node:o}),l?a.a.createElement(_.a,null):"")},ce=n(8),ie=n(129),le=Object(ce.a)({tooltip:{fontSize:16}})(ie.a),ue=Object(U.a)({Correct:{borderColor:"green"},Incorrect:{borderColor:"red"}}),se=function e(t){var n=t.node,r=t.dispatch,o=t.justifications,c=t.feedbackMap,i=t.nextRow,l=Object(Z.a)(t,["node","dispatch","justifications","feedbackMap","nextRow"]),u=re(),s=ue(),d="",f="";if(c){var m,p=c[n.id];if(p)d=null!==(m=p.info)&&void 0!==m?m:"",f="correct"===p.class?s.Correct:s.Incorrect}if(R(n)){var h=n.id,v=n.formulas,b=n.forest;return a.a.createElement("div",{className:u.NodeView,style:{gridTemplateRows:"repeat(".concat(i-O(n),", ").concat("1.5em",")"),gridTemplateColumns:"repeat(".concat(b.length,", auto)")}},a.a.createElement("div",{style:{gridRow:"1",gridColumn:"1 / span ".concat(b.length)}},a.a.createElement(le,{title:d},a.a.createElement("div",null,a.a.createElement(K.ArcherElement,{id:h,relations:b.map((function(e){return{targetId:e.id,targetAnchor:"top",sourceAnchor:"bottom"}}))},a.a.createElement("div",Object.assign({className:"".concat(u.FormulaBounder," ").concat(f," ")},l),v.map((function(e,t){return a.a.createElement(oe,Object.assign({key:"".concat(e,"-").concat(t),node:n,index:t,dispatch:r},e))}))))))),b.map((function(t,l){return a.a.createElement("div",{key:t.id,style:{gridColumn:"".concat(l," / span 1"),gridRow:t.formulas[0]?"".concat(t.formulas[0].row-O(n)+1):2}},a.a.createElement(e,{node:t,dispatch:r,justifications:o,nextRow:i,feedbackMap:c}))})))}if("contradiction"===n.nodeType)return a.a.createElement(le,{title:d},a.a.createElement("div",null,a.a.createElement(K.ArcherElement,{id:n.id},a.a.createElement("div",Object.assign({className:"closed-branch-marker node ".concat(f)},l),"X",a.a.createElement(ae,{onChange:function(e){var t=e.currentTarget.value;return r(J(n.id,t))},value:n.contradictoryRows,placeholder:"rows"})))));if("finished"===n.nodeType)return a.a.createElement(le,{title:d},a.a.createElement("div",null,a.a.createElement(K.ArcherElement,{id:n.id},a.a.createElement("div",Object.assign({className:"finished-branch-marker ".concat(f)},l),"O"))));throw new Error("Invariant violation: Invalid nodeType on node: ".concat(JSON.stringify(n)))},de=function(e){var t=e.currentState,n=e.dispatch,r=re(),o=t.nextRow,c=t.tree,i=t.justifications,u=t.feedback,s=function e(t,n){return t<n?[t].concat(Object(l.a)(e(t+1,n))):[]}(1,o);return a.a.createElement(le,{title:u.success?"":u.errorMessage},a.a.createElement("div",{className:r.TruthTree,style:{gridTemplateRows:"repeat(".concat(o-1,", ").concat("1.5em",")")}},s.map((function(e){return a.a.createElement("div",{className:r.RowNumber,key:e,style:{gridRow:e}},"".concat(e,"."))})),a.a.createElement("div",{className:r.NodeViewContainer,style:{gridRow:"1 / span ".concat(s.length)}},a.a.createElement(se,{node:c,dispatch:n,justifications:i,feedbackMap:u.success?u.feedback:void 0,nextRow:o})),Object.keys(i).map((function(e){var t=Number(e),o=i[t],c=o.parentRow,l=o.rule;return a.a.createElement("div",{className:r.Justification,key:t,style:{gridRow:t}},a.a.createElement(ae,{style:{marginRight:".1em"},onChange:function(e){var r=e.currentTarget.value;return n(G(t,{parentRow:r}))},value:c,placeholder:"row"}),a.a.createElement(ae,{onChange:function(e){var r=e.currentTarget.value;return n(G(t,{rule:r}))},value:l,placeholder:"rule"}))}))))},fe=n(38),me=n.n(fe),pe=n(62),he=function e(t,n){var r=t.formulas,a=t.forest,o=t.id,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=c.concat(r);if(0===a.length)return{label:ye(i),rule:"",forest:[],id:o};var s=Object(u.a)(a,1),d=s[0];if("formulas"===d.nodeType){var f=n[O(d)],m=f.rule,p=Number(f.parentRow);if(!Ee(p))throw new Error('Cited row must be a positive integer. Got "'.concat(p,'"'));if(p>=O(d))throw new Error("Row cited (".concat(p,") must be less than current row (").concat(O(d),")."));return{label:ye(i),rule:"St",forest:[{label:ge(i,p),rule:m,id:o,forest:a.map((function(t){return e(t,n,i.filter((function(e){return!(e.row===p)})))}))}]}}if("contradiction"===d.nodeType){var h=d.contradictoryRows.split(",").map(Number),v=Object(u.a)(h,2),b=v[0],w=v[1];if(![b,w].every(Ee))throw new Error('Contradiction must cite 2 rows, separated by a comma. Got "'.concat(d.contradictoryRows,'"'));var g=i.filter((function(e){return[b,w].includes(e.row)})).sort((function(e,t){return t.value.length-e.value.length})),y=Object(u.a)(g,2),E=y[0],k=y[1];if(!E||!k)throw new Error("Contradiction cites non-existent row");var j=ye([].concat(Object(l.a)(i.filter((function(e){return![b,w].includes(e.row)}))),[E,k]));return{label:ye(i),rule:"St",id:o,forest:[{label:j,rule:"Ax",id:d.id,forest:[{label:"",rule:"",forest:[]}]}]}}if("finished"===d.nodeType)return{label:ye(i),rule:"St",id:o,forest:[{label:ye(i),rule:"Lit",id:d.id,forest:[{label:"",rule:"",forest:[]}]}]};throw new Error("this was supposed to be exhaustive")},ve=function(e,t){var n={};if(e.forest.length){!function e(t,r,a){if("string"===typeof t.id){if("Ax"===t.rule||"Lit"===t.rule)return void(n[t.id]=ke(r));n[t.id]=a,t.forest.forEach((function(t,n){e(t,r.forest[n],ke(r))}))}else t.forest.forEach((function(t,n){e(t,r.forest[n],a)}))}(e,t,{class:"correct",info:"Assumptions"})}return n},be=function(){var e=Object(pe.a)(me.a.mark((function e(t,n){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){try{n(t,(function(t){e(t)}))}catch(a){r(a)}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),we=function(){var e=Object(pe.a)(me.a.mark((function e(t,n,r){var a,o;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=he(t,n),e.next=3,be(a,r);case 3:return o=e.sent,e.abrupt("return",{success:!0,feedback:ve(a,o)});case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ge=function(e,t){var n=e.findIndex((function(e){return e.row===t})),r=e[n],a=e.slice(0,n).concat(e.slice(n+1)),o=[].concat(Object(l.a)(a),[r]);return ye(o)},ye=function(e){return e.map((function(e){return e.value})).join(",").concat(":|-:")},Ee=function(e){return e>0},ke=function(e){e.forest;var t=Object(Z.a)(e,["forest"]);return Oe(t)},je={"Wrong number of Premises":"Wrong number of branches.","This doesn't follow by this rule":"Incorrect application of rule."},Oe=function(e){var t;return Object(i.a)(Object(i.a)({},e),{},{info:null!==(t=je[e.info])&&void 0!==t?t:e.info})},Ce=function(e){var t,n=e.initialPremises,o=void 0===n?"":n,c=e.checker,m=Object(r.useState)(o),p=Object(u.a)(m,2),h=p[0],v=p[1],b=r.useReducer.apply(void 0,Object(l.a)((t=T,[function(e,n){var r=Object(u.a)(e,3),a=r[0],o=r[1],c=r[2];switch(n.type){case"UNDO":var i=Object(V.a)(a),s=i[0];return[i.slice(1),s,[o].concat(Object(l.a)(c))];case"REDO":var d=Object(V.a)(c),f=d[0],m=d.slice(1);return[[o].concat(Object(l.a)(a)),f,m];default:return[[o].concat(Object(l.a)(a)),t(o,n),[]]}},[[],function(e){var t=e.split(",");return{tree:E(t),nextRow:t.length+1,justifications:{},feedback:{success:!0,feedback:{}}}}(h),[]]]))),w=Object(u.a)(b,2),g=Object(u.a)(w[0],3),y=g[0],k=g[1],j=g[2],O=w[1],C=k.tree,x=k.justifications,R=k.feedback;Object(r.useEffect)((function(){window.Carnap&&we(C,x,c).then((function(e){var t=e.feedback;return O(M({success:!0,feedback:t}))})).catch((function(e){var t=e.message;return O(M({success:!1,errorMessage:t}))}))}),[O,x,C,c]);var S=Y(),N=ue(),B=Object(r.useRef)(null);return a.a.createElement("main",{className:S.AppBounder},a.a.createElement("div",{className:S.TopItemsBounder,ref:B},a.a.createElement(q,{premises:h,onSubmit:function(e){v(e);var t=e.split(",");O(I(t))},setPremises:v}),a.a.createElement("span",{className:"tree-buttons"},a.a.createElement(s.a,{"aria-label":"Undo",className:"undo-button",onClick:function(){O({type:"UNDO"})},disabled:!y.length},a.a.createElement(d.a,null)),a.a.createElement(s.a,{"aria-label":"Redo",className:"redo-button",onClick:function(){O({type:"REDO"})},disabled:!j.length},a.a.createElement(f.a,null)))),a.a.createElement("div",{className:"".concat(S.TreeBounder," ").concat(R.success?"":N.Incorrect)},a.a.createElement(K.ArcherContainer,{arrowLength:0,style:{zIndex:1},svgContainerStyle:{zIndex:-1},strokeColor:"black",noCurves:!1},a.a.createElement(de,{currentState:k,dispatch:O}))),a.a.createElement(X,Object(i.a)(Object(i.a)({},k),{},{dispatch:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Ce,{initialPremises:"P->Q,P,~Q",checker:Carnap.checkIchikawaJenkinsSLTableau}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[82,1,2]]]);
//# sourceMappingURL=main.0ddca4b2.chunk.js.map