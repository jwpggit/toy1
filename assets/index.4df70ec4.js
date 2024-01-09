import{o as a,f as d,g as f,j as _,k as o,t as c,F as w,l as v,m as g}from"./@vue.208f91f0.js";import{a as $}from"./axios.a2e7c818.js";import{c as k,m as h,a as m}from"./vuex.03fd5b11.js";import{c as y,a as A}from"./vue-router.55d6f6c4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const u=(e,n)=>{const r=e.__vccOpts||e;for(const[l,t]of n)r[l]=t;return r},b={components:{},data(){return{}},computed:{}},C={class:"app"};function q(e,n,r,l,t,s){const i=_("RouterView");return a(),d("div",C,[f(i)])}const x=u(b,[["render",q]]),N={state:{answers:{answer1:"",answer2:"",answer3:"",answer4:""},questions:{option1:{title:"\uB108\uB294 \uB204\uAD6C\uC785\uB2C8\uAE4C?",options:[{id:1,title:"\uB2F9\uC2E0\uC740 \uCEE4\uC2E0\uC744 \uC5B4\uCA4C\uAD6C"},{id:2,title:"\uB2F9\uC2E0\uC740 \uC8C4\uC724\uD658?"},{id:3,title:"\uB2F9\uC2E0\uC740 \uB9AC\uB3D9\uD601?"},{id:4,title:"\uB2F9\uC2E0\uC740 \uB9AC\uC7AC\uACE7?"}]},option2:{title:"\uB2F9\uC2E0\uC740 \u3147\u3147\uC785\uB2C8\uAE4C?",options:[{id:1,title:"\uD604\uC7AC\uC758 \uC0AC\uD68C \uBB38\uC81C\uC5D0 \uB300\uD55C \uB2F9\uC2E0\uC758 \uC0DD\uAC01\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?"},{id:2,title:"\uB2F9\uC2E0\uC740 \uC774\uAC70\uC57C?"},{id:3,title:"\uB2F9\uC2E0\uC740 \uC800\uAC70\uC57C?"},{id:4,title:"\uB2F9\uC2E0\uC740 \uCD5C\uACE0\uC57C?"}]},option3:{title:"\uC9C8\uBB38\uC774\uBAA8\uC57C?",options:[{id:1,title:"\uB2F9\uC2E0\uC740 \uB2E8\uC18C\uC0B4\uC778\uB9C8?"},{id:2,title:"\uB2F9\uC2E0\uC740 \uACF5\uD56D\uB3C4\uB451?"},{id:3,title:"\uB2F9\uC2E0\uC740 \uC815\uC0C1\uC218?"},{id:4,title:"\uB2F9\uC2E0\uC740 \uC815\uC0C1\uC218?"},{id:5,title:"\uB2F9\uC2E0\uC740 \uC9C0\uB4DC\uB798\uACE4?"}]},option4:{title:"\uC774\u3147\u3147\uC740 \uC774\uAC70\uB2E4?",options:[{id:1,title:"\uBD09\uACE8\uB808?"},{id:2,title:"\uD30C\uC2A4\uD0C0?"},{id:3,title:"\uC57D\uC7C1\uC4F0?"},{id:4,title:"\uC559\uAE30\uBAA8?"}]}}},mutations:{setAnswer:(e,{index:n,answer:r})=>{e.answers[`answer${n}`]!==void 0?e.answers[`answer${n}`]=r:console.error("Invalid index provided for setAnswer mutation.")},resetAnswers:e=>{Object.keys(e.answers).forEach(n=>{e.answers[n]=""})}},actions:{setAnswer({commit:e},{index:n,answer:r}){e("setAnswer",{index:n,answer:r})},resetAnswers({commit:e}){e("resetAnswers")}},getters:{getAnswers:e=>e.answers,getQuestions:e=>e.questions}},O=k({modules:{questions:N}}),P={components:{},data(){return{}},computed:{},methods:{handleClick(){this.$router.push({name:"question"})}}},L={class:"main"},B=o("h1",null,"\uD558\uC774 \uBD80\uC801 \uD638\uC774",-1);function S(e,n,r,l,t,s){return a(),d("div",L,[B,o("button",{onClick:n[0]||(n[0]=(...i)=>s.handleClick&&s.handleClick(...i))},"\uD55C\uBC88 \uAC00 \uBD05\uC2DC\uB2E4.")])}const V=u(P,[["render",S]]),D={data(){return{}},computed:{...h({answers:"getAnswers"})},methods:{...m(["resetAnswers"]),handleClick(){this.resetAnswers(),this.$router.push({name:"main"})}}},E={class:"question"};function F(e,n,r,l,t,s){return a(),d("div",E,[o("h1",null,"\uACB0\uACFC\uB294\uC694?"+c(e.answers),1),o("button",{onClick:n[0]||(n[0]=(...i)=>s.handleClick&&s.handleClick(...i))},"\uCC98\uC74C\uC73C\uB8E8")])}const R=u(D,[["render",F]]),j={data(){return{level:1}},computed:{...h({answers:"getAnswers",questions:"getQuestions"}),isNextButtonDisabled(){return this.answers[`answer${this.level}`]===""||this.answers[`answer${this.level}`]===void 0}},methods:{...m(["setAnswer"]),handlePrevious(){this.level-=1},handleNext(){this.answers[`answer${this.level}`]!==""&&(this.level<4?this.level+=1:this.$router.push({name:"result"}))},handleOptionClick(e){const n=this.level;this.setAnswer({index:n,answer:e})},isSelected(e){return this.answers[`answer${this.level}`]===e},getOptionTitle(e){return this.questions[e].title}}},I={class:"question"},Q=["id","name","value","checked","onClick"],T=["for"],G=["disabled"],H=["disabled"];function K(e,n,r,l,t,s){return a(),d("div",I,[o("h1",null,c(t.level)+". \uB2F9\uC2E0\uC758 \uB300\uB2F5\uB4E4\uC740?: "+c(e.answers[`answer${t.level}`]),1),o("h2",null,c(s.getOptionTitle(`option${t.level}`)),1),(a(!0),d(w,null,v(e.questions[`option${t.level}`].options,i=>(a(),d("div",{key:i.id},[o("input",{type:"radio",id:i.id,name:`question_${t.level}`,value:i.id,checked:s.isSelected(i.id),onClick:J=>s.handleOptionClick(i.id)},null,8,Q),o("label",{for:i.id},c(i.title),9,T)]))),128)),o("button",{onClick:n[0]||(n[0]=(...i)=>s.handlePrevious&&s.handlePrevious(...i)),disabled:t.level===1},"\uC774\uC804",8,G),o("button",{onClick:n[1]||(n[1]=(...i)=>s.handleNext&&s.handleNext(...i)),disabled:s.isNextButtonDisabled},"\uB2E4\uC74C",8,H)])}const M=u(j,[["render",K]]),W=y({history:A(),routes:[{path:"/",name:"main",component:V},{path:"/question",name:"question",component:M},{path:"/result",name:"result",component:R}]});function z(e){e.use(O).use(W)}const p=g(x);p.config.globalProperties.$http=$;z(p);p.mount("#app");
