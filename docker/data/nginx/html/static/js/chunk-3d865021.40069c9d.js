(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d865021"],{"01ca":function(e,t,l){"use strict";l.d(t,"f",(function(){return r})),l.d(t,"d",(function(){return o})),l.d(t,"a",(function(){return n})),l.d(t,"e",(function(){return i})),l.d(t,"g",(function(){return s})),l.d(t,"c",(function(){return c})),l.d(t,"b",(function(){return u}));var a=l("b775");function r(e){return Object(a["a"])({url:"/iot/model/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/iot/model/"+e,method:"get"})}function n(e){return Object(a["a"])({url:"/iot/model",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/iot/model/import",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/iot/model",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/iot/model/"+e,method:"delete"})}function u(e){return Object(a["a"])({url:"/iot/model/cache/"+e,method:"get"})}},1850:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{"padding-left":"20px"}},[l("el-row",{staticClass:"mb8",attrs:{gutter:10}},[l("el-col",{attrs:{span:1.5}},[l("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:alert:add"],expression:"['iot:alert:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),l("el-col",{attrs:{span:1.5}},[l("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-refresh",size:"mini"},on:{click:e.getList}},[e._v("刷新")])],1),l("el-tag",{staticStyle:{"margin-left":"15px"},attrs:{type:"danger"}},[e._v("该功能暂不可用,后面版本发布")])],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.alertList,border:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),l("el-table-column",{attrs:{label:"告警ID",align:"center",prop:"alertId"}}),l("el-table-column",{attrs:{label:"告警名称",align:"center",prop:"alertName"}}),l("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?l("el-tag",{attrs:{type:"success"}},[e._v("启动")]):e._e(),2==t.row.status?l("el-tag",{attrs:{type:"danger"}},[e._v("暂停")]):e._e()]}}])}),l("el-table-column",{attrs:{label:"告警级别",align:"center",prop:"alertLevel"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("dict-tag",{attrs:{options:e.dict.type.iot_alert_level,value:t.row.alertLevel}})]}}])}),l("el-table-column",{attrs:{label:"触发器",align:"center",prop:"triggers"}}),l("el-table-column",{attrs:{label:"执行动作",align:"center",prop:"actions"}}),l("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),l("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),l("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:alert:edit"],expression:"['iot:alert:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(l){return e.handleUpdate(t.row)}}},[e._v("修改")]),l("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:alert:remove"],expression:"['iot:alert:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(l){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),l("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),l("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[l("div",{staticClass:"el-divider el-divider--horizontal",staticStyle:{"margin-top":"-25px"}}),l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[l("el-row",{attrs:{gutter:50}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"告警名称",prop:"alertName"}},[l("el-input",{attrs:{placeholder:"请输入告警名称"},model:{value:e.form.alertName,callback:function(t){e.$set(e.form,"alertName",t)},expression:"form.alertName"}})],1),l("el-form-item",{attrs:{label:"告警级别",prop:"alertLevel"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择告警级别"},model:{value:e.form.alertLevel,callback:function(t){e.$set(e.form,"alertLevel",t)},expression:"form.alertLevel"}},e._l(e.dict.type.iot_alert_level,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1),l("el-form-item",{attrs:{label:"告警状态"}},[l("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"备注",prop:"remark"}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"6"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1),l("el-divider"),l("el-form-item",{attrs:{label:"触发器",prop:"griggers"}},[l("el-select",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:"请选择",size:"small"},model:{value:e.form.condition,callback:function(t){e.$set(e.form,"condition",t)},expression:"form.condition"}},e._l(e.triggerConditions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._l(e.form.triggers,(function(t,a){return l("div",{key:a,staticStyle:{"margin-bottom":"15px",border:"1px solid #ddd",padding:"10px"}},[l("el-row",[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择",size:"small"},on:{change:e.changeTriggerSource},model:{value:t.source,callback:function(l){e.$set(t,"source",l)},expression:"item.source"}},e._l(e.triggerSource,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),2==t.source?l("el-col",{attrs:{span:16,offset:1}},[l("el-time-picker",{attrs:{size:"small","value-format":"HH:mm",placeholder:"选择执行时间",disabled:1==t.isAdvance},on:{change:e.timeChange},model:{value:e.timerTimeValue,callback:function(t){e.timerTimeValue=t},expression:"timerTimeValue"}})],1):e._e(),0!=a?l("el-col",{attrs:{span:2,offset:1==t.source?17:1}},[l("a",{staticStyle:{color:"#F56C6C"},on:{click:function(t){return e.removeTriggerItem(a)}}},[e._v("删除")])]):e._e()],1),2==t.source?l("el-row",[l("el-col",{attrs:{span:24}},[l("el-row",{staticStyle:{"margin-bottom":"5px"}},[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择",size:"small",disabled:1==t.isAdvance},on:{change:e.repeatChange},model:{value:e.timerWeekRepeatValue,callback:function(t){e.timerWeekRepeatValue=t},expression:"timerWeekRepeatValue"}},e._l(e.timerWeekRepeats,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),3==e.timerWeekRepeatValue?l("el-col",{attrs:{span:15,offset:1}},[l("el-select",{staticStyle:{width:"485px"},attrs:{placeholder:"请选择",multiple:"",size:"small",disabled:1==t.isAdvance},on:{change:e.weekChange},model:{value:e.timerWeekValue,callback:function(t){e.timerWeekValue=t},expression:"timerWeekValue"}},e._l(e.timerWeeks,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()],1)],1),l("el-col",{attrs:{span:24}},[l("el-row",[l("el-col",{attrs:{span:18}},[l("el-input",{attrs:{placeholder:"cron执行表达式",disabled:0==t.isAdvance,size:"small"},model:{value:t.cronExpression,callback:function(l){e.$set(t,"cronExpression",l)},expression:"item.cronExpression"}},[l("template",{slot:"append"},[l("el-button",{attrs:{type:"primary",disabled:0==t.isAdvance},on:{click:function(l){return e.handleShowCron(t,a)}}},[e._v(" 生成表达式 "),l("i",{staticClass:"el-icon-time el-icon--right"})])],1)],2)],1),l("el-col",{attrs:{span:4,offset:1}},[l("el-checkbox",{attrs:{"true-label":1,"false-label":0},on:{change:e.customerCronChange},model:{value:t.isAdvance,callback:function(l){e.$set(t,"isAdvance",l)},expression:"item.isAdvance"}},[e._v("自定义表达式")])],1)],1)],1)],1):e._e(),l("el-row",[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.modelType,callback:function(l){e.$set(t,"modelType",l)},expression:"item.modelType"}},e._l(e.modelTypes,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-col",{attrs:{span:4,offset:1}},[l("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.modelType,callback:function(l){e.$set(t,"modelType",l)},expression:"item.modelType"}},e._l(e.modelTypes,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-col",{attrs:{span:5,offset:1}},[l("el-select",{attrs:{placeholder:"请选择操作符",size:"small"},model:{value:t.operator,callback:function(l){e.$set(t,"operator",l)},expression:"item.operator"}},[l("el-option",{key:"=",attrs:{label:"等于(=)",value:"="}}),l("el-option",{key:"!=",attrs:{label:"不等于(!=)",value:"!="}}),l("el-option",{key:">",attrs:{label:"大于(>)",value:">"}}),l("el-option",{key:"<",attrs:{label:"小于(<)",value:"<"}}),l("el-option",{key:">=",attrs:{label:"大于等于(>=)",value:">="}}),l("el-option",{key:"<=",attrs:{label:"小于等于(<=)",value:"<="}}),l("el-option",{key:"contain",attrs:{label:"包含(contain)",value:"contain"}}),l("el-option",{key:"notcontain",attrs:{label:"不包含(not contain)",value:"notcontain"}})],1)],1),l("el-col",{attrs:{span:5,offset:1}},[l("el-input",{attrs:{placeholder:"值",size:"small"},model:{value:t.value,callback:function(l){e.$set(t,"value",l)},expression:"item.value"}})],1)],1)],1)})),l("div",[e._v("+ "),l("a",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.addTriggerItem()}}},[e._v("添加触发器")])])],2),l("el-divider"),l("el-form-item",{attrs:{label:"执行动作"}},[e._l(e.form.actions,(function(t,a){return l("el-row",{key:a,staticStyle:{"margin-bottom":"10px"}},[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.modelType,callback:function(l){e.$set(t,"modelType",l)},expression:"item.modelType"}},e._l(e.modelTypes,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-col",{attrs:{span:4,offset:1}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.modelType,callback:function(l){e.$set(t,"modelType",l)},expression:"item.modelType"}},e._l(e.modelTypes,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-col",{attrs:{span:11,offset:1}},[l("el-input",{attrs:{placeholder:"值"},model:{value:t.value,callback:function(l){e.$set(t,"value",l)},expression:"item.value"}})],1),0!=a?l("el-col",{attrs:{span:2,offset:1}},[l("a",{staticStyle:{color:"#F56C6C"},on:{click:function(t){return e.removeActionItem(a)}}},[e._v("删除")])]):e._e()],1)})),l("div",[e._v("+ "),l("a",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.addActionItem()}}},[e._v("添加执行动作")])])],2)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary",disabled:""},on:{click:e.submitForm}},[e._v("确 定")]),l("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),l("el-dialog",{staticClass:"scrollbar",attrs:{title:"Cron表达式生成器",visible:e.openCron,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.openCron=t}}},[l("crontab",{staticStyle:{"padding-bottom":"80px"},attrs:{expression:e.expression},on:{hide:function(t){e.openCron=!1},fill:e.crontabFill}})],1)],1)},r=[],o=l("5530"),n=(l("d81d"),l("a434"),l("38cf"),l("b775"));function i(e){return Object(n["a"])({url:"/iot/alert/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/iot/alert/"+e,method:"get"})}function c(e){return Object(n["a"])({url:"/iot/alert",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/iot/alert",method:"put",data:e})}function d(e){return Object(n["a"])({url:"/iot/alert/"+e,method:"delete"})}var m=l("01ca"),p=l("bdd0"),f={name:"device-alert",dicts:["iot_alert_level","sys_job_status"],components:{Crontab:p["a"]},props:{product:{type:Object,default:null}},watch:{product:function(e,t){var l=this;this.productInfo=e,this.productInfo&&0!=this.productInfo.productId&&(this.queryParams.productId=this.productInfo.productId,this.getList(),Object(m["b"])(e.productId).then((function(e){l.thingsModel=JSON.parse(e.data)})))}},data:function(){return{thingsModel:{},loading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,alertList:[],title:"",open:!1,openCron:!1,expression:"",triggerIndex:0,queryParams:{pageNum:1,pageSize:10,alertName:null,alertLevel:null,productId:null,productName:null},timerWeekRepeats:[{value:"1",label:"每天"},{value:"2",label:"仅此一次"},{value:"3",label:"指定"}],timerWeekRepeatValue:"1",timerWeeks:[{value:1,label:"周一"},{value:2,label:"周二"},{value:3,label:"周三"},{value:4,label:"周四"},{value:5,label:"周五"},{value:6,label:"周六"},{value:7,label:"周日"}],timerWeekValue:[1,2,3,4,5,6,7],timerTimeValue:"",triggerSource:[{value:1,label:"设备"},{value:2,label:"定时"}],actionSource:[{value:1,label:"设备"},{value:3,label:"告警输出"}],modelTypes:[{value:1,label:"属性"},{value:2,label:"功能"}],triggerConditions:[{value:"all",label:"满足所有条件"},{value:"any",label:"满足任一条件"}],alertType:[{value:1,label:"启动"},{value:2,label:"停止"}],form:{condition:"all",triggers:[],actions:[]},productInfo:{},rules:{alertName:[{required:!0,message:"告警名称不能为空",trigger:"blur"}],alertLevel:[{required:!0,message:"告警级别不能为空",trigger:"change"}],productId:[{required:!0,message:"产品ID不能为空",trigger:"blur"}],productName:[{required:!0,message:"产品名称不能为空",trigger:"blur"}],triggers:[{required:!0,message:"触发器不能为空",trigger:"blur"}],actions:[{required:!0,message:"执行动作不能为空",trigger:"blur"}]}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.alertList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={alertId:null,alertName:null,alertLevel:null,productId:null,productName:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,status:1,condition:"all",triggers:[{id:"",name:"",value:"",deviceId:0,deviceName:"请选择一个设备",source:1,modelType:1,jobId:0,cronExpression:"",isAdvance:0}],actions:[{id:"",name:"",value:"",deviceId:0,deviceName:"请选择一个设备",source:1,modelType:1}]},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.alertId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加自定义告警"},handleUpdate:function(e){var t=this;this.reset();var l=e.alertId||this.ids;s(l).then((function(e){t.form=e.data,t.open=!0,t.title="修改设备告警"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.alertId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,l=e.alertId||this.ids;this.$modal.confirm('是否确认删除设备告警编号为"'+l+'"的数据项？').then((function(){return d(l)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/alert/export",Object(o["a"])({},this.queryParams),"alert_".concat((new Date).getTime(),".xlsx"))},addActionItem:function(){this.form.actions.push({id:"",name:"",value:""})},removeActionItem:function(e){this.form.actions.splice(e,1)},changeTriggerSource:function(){this.setTriggerSource()},setTriggerSource:function(){for(var e=!1,t=0;t<this.form.triggers.length;t++)2==this.form.triggers[t].source&&(e=!0);this.triggerSource=e?[{value:1,label:"设备"}]:[{value:1,label:"设备"},{value:2,label:"定时"}]},addTriggerItem:function(){this.setTriggerSource(),this.form.triggers.push({id:"",name:"",value:"",deviceId:0,deviceName:"请选择一个设备",source:1,modelType:1,jobId:0,cronExpression:"",isAdvance:0})},removeTriggerItem:function(e){this.form.triggers.splice(e,1),this.setTriggerSource()},handleShowCron:function(e,t){this.expression=e.cronExpression,this.triggerIndex=t,this.openCron=!0},crontabFill:function(e){this.form.triggers[this.triggerIndex].cronExpression=e},repeatChange:function(e){1==this.timerWeekRepeatValue?(this.timerWeekValue=[1,2,3,4,5,6,7],this.form.repeat=1):2==this.timerWeekRepeatValue?(this.timerWeekValue=[],this.form.isRepeat=0):this.form.isRepeat=1,this.gentCronExpression()},weekChange:function(e){this.gentCronExpression()},timeChange:function(e){this.gentCronExpression()},customerCronChange:function(e){this.gentCronExpression()},gentCronExpression:function(){""==this.timerTimeValue&&this.$modal.alertError("执行时间不能为空");var e=this.timerTimeValue.substring(0,2),t=this.timerTimeValue.substring(3),l="*";this.timerWeekValue.length>0&&(l=this.timerWeekValue),this.form.triggers[this.triggerIndex].cronExpression="0 "+e+" "+t+" ? * "+l}}},v=f,g=l("2877"),h=Object(g["a"])(v,a,r,!1,null,null,null);t["default"]=h.exports},"38cf":function(e,t,l){var a=l("23e7"),r=l("1148");a({target:"String",proto:!0},{repeat:r})}}]);