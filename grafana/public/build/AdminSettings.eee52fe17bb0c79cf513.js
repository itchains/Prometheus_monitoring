(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Cqi4:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"AdminSettings",function(){return m});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),s=n("/MKj"),c=n("0cfB"),o=n("t8hP"),l=n("lzJ5"),d=n("ZGyg"),u=Object(o.getBackendSrv)(),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={settings:{},isLoading:!0},t}return Object(a.__extends)(t,e),t.prototype.componentDidMount=function(){return Object(a.__awaiter)(this,void 0,void 0,function(){var e;return Object(a.__generator)(this,function(t){switch(t.label){case 0:return[4,u.get("/api/admin/settings")];case 1:return e=t.sent(),this.setState({settings:e,isLoading:!1}),[2]}})})},t.prototype.render=function(){var e=this.state,t=e.settings,n=e.isLoading,r=this.props.navModel;return i.a.createElement(d.a,{navModel:r},i.a.createElement(d.a.Contents,{isLoading:n},i.a.createElement("div",{className:"grafana-info-box span8",style:{margin:"20px 0 25px 0"}},"These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart grafana."),i.a.createElement("table",{className:"filter-table"},i.a.createElement("tbody",null,Object.entries(t).map(function(e,t){var n=Object(a.__read)(e,2),r=n[0],s=n[1];return i.a.createElement(i.a.Fragment,{key:"section-"+t},i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-settings-section"},r),i.a.createElement("td",null)),Object.entries(s).map(function(e,t){var n=Object(a.__read)(e,2),r=n[0],s=n[1];return i.a.createElement("tr",{key:"property-"+t},i.a.createElement("td",{style:{paddingLeft:"25px"}},r),i.a.createElement("td",null,s))}))})))))},t}(i.a.PureComponent);t.default=Object(c.hot)(e)(Object(s.connect)(function(e){return{navModel:Object(l.a)(e.navIndex,"server-settings")}})(m))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=AdminSettings.eee52fe17bb0c79cf513.js.map