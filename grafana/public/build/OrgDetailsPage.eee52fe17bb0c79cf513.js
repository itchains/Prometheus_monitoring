(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4kIt":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),o=t("kDLi");n.a=function(e){var n=e.onSubmit,t=e.onOrgNameChange,a=e.orgName;return r.a.createElement("div",null,r.a.createElement("h3",{className:"page-sub-heading"},"Organization profile"),r.a.createElement("form",{name:"orgForm",className:"gf-form-group",onSubmit:function(e){e.preventDefault(),n()}},r.a.createElement("div",{className:"gf-form-inline"},r.a.createElement("div",{className:"gf-form max-width-28"},r.a.createElement("span",{className:"gf-form-label"},"Organization name"),r.a.createElement(o.Input,{className:"gf-form-input",type:"text",onChange:function(e){return t(e.target.value)},value:a}))),r.a.createElement("div",{className:"gf-form-button-row"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))))}},e5mm:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"OrgDetailsPage",function(){return p});var a=t("mrSG"),r=t("q1tI"),o=t.n(r),i=t("0cfB"),c=t("/MKj"),u=t("ZGyg"),s=t("4kIt"),m=t("mHLn"),l=t("vl1P"),g=t("lzJ5"),f=t("fZn8"),p=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.onOrgNameChange=function(e){n.props.setOrganizationName(e)},n.onUpdateOrganization=function(){n.props.updateOrganization()},n}return Object(a.__extends)(n,e),n.prototype.componentDidMount=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,this.props.loadOrganization()];case 1:return e.sent(),[2]}})})},n.prototype.render=function(){var e=this,n=this.props,t=n.navModel,a=n.organization,r=0===Object.keys(a).length;return o.a.createElement(u.a,{navModel:t},o.a.createElement(u.a.Contents,{isLoading:r},!r&&o.a.createElement("div",null,o.a.createElement(s.a,{onOrgNameChange:function(n){return e.onOrgNameChange(n)},onSubmit:this.onUpdateOrganization,orgName:a.name}),o.a.createElement(m.b,{resourceUri:"org"}))))},n}(r.PureComponent);var d={loadOrganization:l.a,setOrganizationName:f.c,updateOrganization:l.b};n.default=Object(i.hot)(e)(Object(c.connect)(function(e){return{navModel:Object(g.a)(e.navIndex,"org-settings"),organization:e.organization.organization}},d)(p))}.call(this,t("3UD+")(e))},vl1P:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return c});var a=t("mrSG"),r=t("t8hP"),o=t("fZn8");function i(){var e=this;return function(n){return Object(a.__awaiter)(e,void 0,void 0,function(){var e;return Object(a.__generator)(this,function(t){switch(t.label){case 0:return[4,Object(r.getBackendSrv)().get("/api/org")];case 1:return e=t.sent(),n(Object(o.b)(e)),[2,e]}})})}}function c(){var e=this;return function(n,t){return Object(a.__awaiter)(e,void 0,void 0,function(){var e;return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=t().organization.organization,[4,Object(r.getBackendSrv)().put("/api/org",{name:e.name})];case 1:return a.sent(),n(i()),[2]}})})}}}}]);
//# sourceMappingURL=OrgDetailsPage.eee52fe17bb0c79cf513.js.map