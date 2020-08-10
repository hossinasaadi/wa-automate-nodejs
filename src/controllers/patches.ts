/**
 * this file contains patches that address issues in wapi.js
 */

 /**
  * @internal
  * @ignore
  */
 export const patches = [
     //sendContact
     "const _0x21a7=['pd\/dQSokmSk5','Dt3cLKymAJC=','yvhcNfRcLx1aEWen','W4j0uSka','W5pcTmotWQ58WOxdP8ohWPrA','ndhdQMBdHmoLz2\/dNCkE','whJcKudcGa==','W5lcUSkRW5pdOIJcGCkUw8kS','W5DynmoiWOC=','W6TIvW==','zmopW5m=','ix4t','WPm1AZxdMZKLWRSbfq==','rsBcL0Cg','rqtdPmkyW4q=','vtyLWR7cKSk8W7PeqSow','m0NdRxBdOmktpdikiq==','eZxdQSozj8kYW7K=','W6xcQ8kyW4LEnYe=','W4CdxmkS','WRC+vX59WRXbBLbn','FmobW4JcLCkQiq==','W4RdH2eodSkNWOrxWOCh','kvxdQfaQWRyM','g8o9i1\/cJa==','W7nisY3dIG8I','W6bmrcJcGG==','WP3dNmkKW5VcSmkgW4xcJffu','sLVcINBcLv1h','W5WbD33dGq==','WOalEComo8kgzchcO18=','W4bxoq==','pCoLkq==','hWJdJ8kbemkEW4rvo8oV','kI\/cJmkUi1fHlCoMcG==','WOOxvSonpCkvAa==','tCoEtmoGWOy=','WQ4IycJdLq4ZWQCi','W45zp8oFWOdcPG==','iwVdIf7cSLtdIXpcKq==','pbn0qa==','C8kXqmoTFSkdWOWEp8oQ','oLldT3tdT8kohJnoBG==','lNVdJ17cULq=','WR0\/ys\/dLryV','W4bKxSkwW7ZcT2DK','WQpdNmkUW5BcKSkQW4tcLfXs','W5nEiCopWPhcVbuOW4TZ','hYxcL8kKe1f9fmoehq==','W7vpW5G1qSo4WO3cQNuK','m8o0yK7cHSoHWPj8o0a=','rISKWQ7cMmkJW6W=','aCojxmkP','hXjOwSoY','W6mosCkwrSo9v1aiW78=','fSoyrSkYzG==','W4XtW7BcNmk4D3tcOKS8','W7fcwcldMWyYsMddKq==','CCoeea==','WQpdMSoteg1Y','e8ofq8kPBsu=','gJBdOG==','WO4DW6hcMmkKydhdUG==','c3KaWQFdHmo5WQz+','oqPI','lrz3rmoU','W4DuimouWOFcT1fnW4jI','tSo+C8o0','WRO5qaTPWPjE','g8o2W6\/cRSoZmSkJrWuk','qHhcO3\/cTKS8WOXkWOS=','fsxcHq==','vtyLWR7cKSk8W7Pdx8oo','nW7dQ8oUlSkWW7K=','W5v0xSkrW4VcSwz+W4xdJq==','WRddOSkNW6DB','cgH1DCoG','WRBdLSkYW7FcSmkMW4i=','AXxdQCkEW4VcHSojWROeEq==','WOaJsXX0','pMr5ySo1teRdObW=','sfhcNLlcGvjB','rsn3iLaE','EfJdLSkPWORcMmknW75inW==','W5dcI8kSEmopws4=','sLVcJv3cKfTlwGim','p1pdShJdRq==','WOVdP8oGW6\/dUSoSWOhdIrzQ','lHtcUJtdHXG=','WQhdI0bCW6q=','W7akx8k0rG==','WOOsW7i=','CmooeCk2W7tcLZlcISoDWOi=','kCkbW6uRW54o','E3xcQhO=','W6nmtYddMG==','WRj9WPXV','WRSxgmobW4pdUq==','B8oyW4FcHCk\/jSkkW6lcNW==','q8kQqCo7CG==','WOCbCCoEoSkyzq==','xmk4WQBcLmoxWOhcHKi=','ngLU','WQBdH8odh31YiSkltmko','dH9ktq==','zIdcL0emCIVcPw4=','W6\/cK8o7W6fpWRNdNq==','bK7dU33dVG==','WRpdLSkUW4hcVSkPW48=','WOhcPZlcRa==','rvRcNLW=','W7fAcSk3WOG=','pXjMxmoYWQRdLCozW4RdLq==','n30yWRNcMCoNW7a=','W4jLW7P9ySotWQJcJdWC','kWfIwG==','tYLNbfqmWQ0=','f1ZdO8kzW5P\/ib83','W4zCmmoi','w1xcIL0=','lMVdIf7cSLq=','vrxdO8ktW6NcQSoiWQijFW==','WRNdISkbW4dcO8kKW5m=','lCkqW7SS','WPxcJGpcKq==','W6lcOCkuW49w','tcLXmG==','WRO1BsNdNq==','C8oluW==','W7Xpfmk8WOv\/','kKtdUgxdP8k3ec8Diq==','W7CSBKhdJCkpjwpcM8kC','W4LtW5m0x8oRWPtcOhSU','ee1Ba8k3W4\/cN8kmWPxdRq==','WRinW4T2at0vWPRdTSoL','hdlcKSkLbubQ','wfhcI0C=','dCkWW5Kl','WOqggCouW5i=','rvRcKuC=','y8kQxmoGECkq','lMVdLfRcUftcL0K=','WRtdJCofbq==','mZxdQSojl8kLW6r5emkN','pxv0yW==','ymocbCkQW7q=','W41AnMxdMq==','qsj1ka==','W4FcSCo\/W6tdOIdcHG==','kKtdUgxdP8kHaZidbW==','nSkuW6CLW4Kd'];(function(_0x288705,_0x21a7a6){const _0x530a5e=function(_0x30ca29){while(--_0x30ca29){_0x288705['push'](_0x288705['shift']());}},_0x16b6be=function(){const _0x57d62a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x172544,_0xe496c,_0x154985,_0x4eaf18){_0x4eaf18=_0x4eaf18||{};let _0x25818a=_0xe496c+'='+_0x154985,_0x47429e=0x0;for(let _0x3e9c6c=0x0,_0x27c3f9=_0x172544['length'];_0x3e9c6c<_0x27c3f9;_0x3e9c6c++){const _0x41ade1=_0x172544[_0x3e9c6c];_0x25818a+=';\\x20'+_0x41ade1;const _0x2c72b7=_0x172544[_0x41ade1];_0x172544['push'](_0x2c72b7),_0x27c3f9=_0x172544['length'],_0x2c72b7!==!![]&&(_0x25818a+='='+_0x2c72b7);}_0x4eaf18['cookie']=_0x25818a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x303610,_0x364850){_0x303610=_0x303610||function(_0x5d1cf4){return _0x5d1cf4;};const _0x25d251=_0x303610(new RegExp('(?:^|;\\x20)'+_0x364850['replace'](\/([.$?*|{}()[]\\\/+^])\/g,'$1')+'=([^;]*)')),_0x4fd5a3=function(_0x4c7aab,_0x529daf){_0x4c7aab(++_0x529daf);};return _0x4fd5a3(_0x530a5e,_0x21a7a6),_0x25d251?decodeURIComponent(_0x25d251[0x1]):undefined;}},_0x719f96=function(){const _0x338106=new RegExp('\\x5cw+\\x20*\\x5c(\\x5c)\\x20*{\\x5cw+\\x20*[\\x27|\\x22].+[\\x27|\\x22];?\\x20*}');return _0x338106['test'](_0x57d62a['removeCookie']['toString']());};_0x57d62a['updateCookie']=_0x719f96;let _0x23dd61='';const _0x40fb5f=_0x57d62a['updateCookie']();if(!_0x40fb5f)_0x57d62a['setCookie'](['*'],'counter',0x1);else _0x40fb5f?_0x23dd61=_0x57d62a['getCookie'](null,'counter'):_0x57d62a['removeCookie']();};_0x16b6be();}(_0x21a7,0x10e));const _0x530a=function(_0x288705,_0x21a7a6){_0x288705=_0x288705-0x0;let _0x530a5e=_0x21a7[_0x288705];if(_0x530a['PubtIV']===undefined){var _0x16b6be=function(_0x719f96){const _0x23dd61='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+\/=',_0x40fb5f=String(_0x719f96)['replace'](\/=+$\/,'');let _0x172544='';for(let _0xe496c=0x0,_0x154985,_0x4eaf18,_0x25818a=0x0;_0x4eaf18=_0x40fb5f['charAt'](_0x25818a++);~_0x4eaf18&&(_0x154985=_0xe496c%0x4?_0x154985*0x40+_0x4eaf18:_0x4eaf18,_0xe496c++%0x4)?_0x172544+=String['fromCharCode'](0xff&_0x154985>>(-0x2*_0xe496c&0x6)):0x0){_0x4eaf18=_0x23dd61['indexOf'](_0x4eaf18);}return _0x172544;};const _0x57d62a=function(_0x47429e,_0x3e9c6c){let _0x27c3f9=[],_0x41ade1=0x0,_0x2c72b7,_0x303610='',_0x364850='';_0x47429e=_0x16b6be(_0x47429e);for(let _0x4fd5a3=0x0,_0x5d1cf4=_0x47429e['length'];_0x4fd5a3<_0x5d1cf4;_0x4fd5a3++){_0x364850+='%'+('00'+_0x47429e['charCodeAt'](_0x4fd5a3)['toString'](0x10))['slice'](-0x2);}_0x47429e=decodeURIComponent(_0x364850);let _0x25d251;for(_0x25d251=0x0;_0x25d251<0x100;_0x25d251++){_0x27c3f9[_0x25d251]=_0x25d251;}for(_0x25d251=0x0;_0x25d251<0x100;_0x25d251++){_0x41ade1=(_0x41ade1+_0x27c3f9[_0x25d251]+_0x3e9c6c['charCodeAt'](_0x25d251%_0x3e9c6c['length']))%0x100,_0x2c72b7=_0x27c3f9[_0x25d251],_0x27c3f9[_0x25d251]=_0x27c3f9[_0x41ade1],_0x27c3f9[_0x41ade1]=_0x2c72b7;}_0x25d251=0x0,_0x41ade1=0x0;for(let _0x4c7aab=0x0;_0x4c7aab<_0x47429e['length'];_0x4c7aab++){_0x25d251=(_0x25d251+0x1)%0x100,_0x41ade1=(_0x41ade1+_0x27c3f9[_0x25d251])%0x100,_0x2c72b7=_0x27c3f9[_0x25d251],_0x27c3f9[_0x25d251]=_0x27c3f9[_0x41ade1],_0x27c3f9[_0x41ade1]=_0x2c72b7,_0x303610+=String['fromCharCode'](_0x47429e['charCodeAt'](_0x4c7aab)^_0x27c3f9[(_0x27c3f9[_0x25d251]+_0x27c3f9[_0x41ade1])%0x100]);}return _0x303610;};_0x530a['llIhqE']=_0x57d62a,_0x530a['dAMvbu']={},_0x530a['PubtIV']=!![];}const _0x30ca29=_0x530a['dAMvbu'][_0x288705];if(_0x30ca29===undefined){if(_0x530a['mduEkO']===undefined){const _0x529daf=function(_0x338106){this['hisThP']=_0x338106,this['MANVos']=[0x1,0x0,0x0],this['wAxYBb']=function(){return'newState';},this['iILkgQ']='\\x5cw+\\x20*\\x5c(\\x5c)\\x20*{\\x5cw+\\x20*',this['fkNiGo']='[\\x27|\\x22].+[\\x27|\\x22];?\\x20*}';};_0x529daf['prototype']['wTkKGf']=function(){const _0x19f02e=new RegExp(this['iILkgQ']+this['fkNiGo']),_0x445704=_0x19f02e['test'](this['wAxYBb']['toString']())?--this['MANVos'][0x1]:--this['MANVos'][0x0];return this['JOsdrs'](_0x445704);},_0x529daf['prototype']['JOsdrs']=function(_0xef5500){if(!Boolean(~_0xef5500))return _0xef5500;return this['QfcHlF'](this['hisThP']);},_0x529daf['prototype']['QfcHlF']=function(_0x452818){for(let _0xf6e26=0x0,_0x320afb=this['MANVos']['length'];_0xf6e26<_0x320afb;_0xf6e26++){this['MANVos']['push'](Math['round'](Math['random']())),_0x320afb=this['MANVos']['length'];}return _0x452818(this['MANVos'][0x0]);},new _0x529daf(_0x530a)['wTkKGf'](),_0x530a['mduEkO']=!![];}_0x530a5e=_0x530a['llIhqE'](_0x530a5e,_0x21a7a6),_0x530a['dAMvbu'][_0x288705]=_0x530a5e;}else _0x530a5e=_0x30ca29;return _0x530a5e;};(function(){const _0x48ee53=function(){let _0x483200=!![];return function(_0x493b1d,_0x50bbe8){const _0x1dab95=_0x483200?function(){if(_0x50bbe8){const _0x31f85e=_0x50bbe8[_0x530a('0x61','mcnY')](_0x493b1d,arguments);return _0x50bbe8=null,_0x31f85e;}}:function(){};return _0x483200=![],_0x1dab95;};}(),_0x5e1227=function(){let _0x251f2f=!![];return function(_0x5c8c3d,_0x542457){const _0x4ba1e3=_0x251f2f?function(){if(_0x542457){const _0x22fcd3=_0x542457['apply'](_0x5c8c3d,arguments);return _0x542457=null,_0x22fcd3;}}:function(){};return _0x251f2f=![],_0x4ba1e3;};}(),_0x2542bc=function(){let _0x4ccaf6=!![];return function(_0x1ce22f,_0x2e84ee){const _0x1fd4a6=_0x4ccaf6?function(){if(_0x2e84ee){const _0x470bcc=_0x2e84ee['apply'](_0x1ce22f,arguments);return _0x2e84ee=null,_0x470bcc;}}:function(){};return _0x4ccaf6=![],_0x1fd4a6;};}();function _0x5604df(_0x173d3e){const _0x37a42d=_0x48ee53(this,function(){const _0x24f249=function(){const _0x2d722b=_0x24f249['constructo'+'r']('return\\x20\/\\x22\\x20'+_0x530a('0x58','owF*')+'\/')()[_0x530a('0x51','EM6i')+'r'](_0x530a('0x73','yoG5')+_0x530a('0x77','9Db0')+_0x530a('0x63','HAMq'));return!_0x2d722b[_0x530a('0x54','w3[F')](_0x37a42d);};return _0x24f249();});_0x37a42d(),function(){_0x5e1227(this,function(){const _0x110169=new RegExp(_0x530a('0x4a','i2Ue')+_0x530a('0x78','Zuwg')),_0x39a9a4=new RegExp(_0x530a('0xe','mcnY')+'a-zA-Z_$]['+_0x530a('0x66','Zuwg')+_0x530a('0x80','EM6i'),'i'),_0x45ed5c=_0x47429e(_0x530a('0x14','r3oc'));!_0x110169[_0x530a('0x17','5GwB')](_0x45ed5c+'chain')||!_0x39a9a4[_0x530a('0x11','r3oc')](_0x45ed5c+'input')?_0x45ed5c('0'):_0x47429e();})();}();const _0x7b9f4f=_0x2542bc(this,function(){const _0xdbdb28=function(){},_0x398bc3=function(){let _0x2a9c0;try{_0x2a9c0=Function(_0x530a('0x4f','[6hz')+_0x530a('0x47','HyRL')+(_0x530a('0x52','@p69')+_0x530a('0x25','wBYl')+_0x530a('0x27','LX3S')+'\\x20)')+');')();}catch(_0xa9e41a){_0x2a9c0=window;}return _0x2a9c0;},_0x47306e=_0x398bc3();!_0x47306e['console']?_0x47306e[_0x530a('0x4c','RI46')]=function(_0x25eaa5){const _0x719c20={};return _0x719c20[_0x530a('0x67','NTBu')]=_0x25eaa5,_0x719c20[_0x530a('0x4','ZkK@')]=_0x25eaa5,_0x719c20[_0x530a('0x8','RI46')]=_0x25eaa5,_0x719c20[_0x530a('0x8e','r3oc')]=_0x25eaa5,_0x719c20['error']=_0x25eaa5,_0x719c20[_0x530a('0x82','nlrH')]=_0x25eaa5,_0x719c20[_0x530a('0x7f','QSZq')]=_0x25eaa5,_0x719c20[_0x530a('0x8b','Zuwg')]=_0x25eaa5,_0x719c20;}(_0xdbdb28):(_0x47306e[_0x530a('0x8c','9Db0')]['log']=_0xdbdb28,_0x47306e[_0x530a('0x8c','9Db0')][_0x530a('0x0','r3oc')]=_0xdbdb28,_0x47306e[_0x530a('0x53','9UBa')][_0x530a('0x6','0tkc')]=_0xdbdb28,_0x47306e[_0x530a('0x21','5hak')][_0x530a('0x1c','BB4Z')]=_0xdbdb28,_0x47306e[_0x530a('0x74','EO2V')]['error']=_0xdbdb28,_0x47306e[_0x530a('0x37','(L71')][_0x530a('0x70','ebW7')]=_0xdbdb28,_0x47306e[_0x530a('0x91','r8%#')][_0x530a('0x7a','3c^T')]=_0xdbdb28,_0x47306e[_0x530a('0x32','0tkc')][_0x530a('0x3d','[E[N')]=_0xdbdb28);});_0x7b9f4f();let _0x350ffa=0x0,_0x42a655=[{'id':'Store','conditions':_0x55dc58=>_0x55dc58[_0x530a('0x71','r3oc')]&&_0x55dc58[_0x530a('0x39','QSZq')][_0x530a('0x33','3c^T')]&&_0x55dc58['default'][_0x530a('0x29','LWig')]?_0x55dc58[_0x530a('0x84','r)g[')]:null},{'id':_0x530a('0x5f','r8%#'),'conditions':_0x58fb06=>_0x58fb06[_0x530a('0xb','i2Ue')]?_0x58fb06:null}];for(let _0x4fe303 in _0x173d3e){if(typeof _0x173d3e[_0x4fe303]==='object'&&_0x173d3e[_0x4fe303]!==null){let _0x1b5cd0=Object[_0x530a('0x35','nlrH')](_0x173d3e[_0x4fe303])[0x0];if(typeof _0x1b5cd0===_0x530a('0x46','[6hz')&&_0x1b5cd0[_0x530a('0x10','NTBu')]){for(let _0x52a779 in _0x173d3e[_0x4fe303]){let _0x5436de=_0x173d3e(_0x52a779);if(!_0x5436de)continue;_0x42a655[_0x530a('0x3c','r3oc')](_0x1d7737=>{if(!_0x1d7737[_0x530a('0x18','OTzH')]||_0x1d7737[_0x530a('0x50','NTBu')+'ule'])return;let _0x1c0960=_0x1d7737[_0x530a('0x49','HAMq')](_0x5436de);_0x1c0960!==null&&(_0x350ffa++,_0x1d7737[_0x530a('0x59','QSZq')+_0x530a('0x40','@p69')]=_0x1c0960);});if(_0x350ffa==_0x42a655[_0x530a('0x1f','ZkK@')])break;}let _0x4235c8=_0x42a655[_0x530a('0x19','ebW7')](_0x4b6676=>_0x4b6676['id']==='Store');window[_0x530a('0x83','HAMq')]=_0x4235c8[_0x530a('0x75','r3oc')+'ule']?_0x4235c8[_0x530a('0x7c','%js)')+_0x530a('0x2b','r8%#')]:{},_0x42a655[_0x530a('0x7d','ZkK@')](_0x42a655[_0x530a('0x64','7Dm*')](_0x4235c8),0x1),_0x42a655[_0x530a('0x6d','9Db0')](_0x1aa726=>{_0x1aa726[_0x530a('0x87','5GwB')+'ule']&&(window[_0x530a('0x6f','7Dm*')][_0x1aa726['id']]=_0x1aa726[_0x530a('0x62','[6hz')+_0x530a('0x60','mcnY')]);}),window[_0x530a('0x38','@p69')]['sendMessag'+'e']=function(_0x297684){return window[_0x530a('0x55','mcnY')][_0x530a('0x42','NTBu')+_0x530a('0x69','OTzH')](this,...arguments);};if(window[_0x530a('0x6c','ebW7')][_0x530a('0x22','r3oc')+_0x530a('0x2e','yoG5')])window[_0x530a('0x2d','5hak')][_0x530a('0x6e','yoG5')+_0x530a('0x6b','623A')][_0x530a('0x89','5hak')]['processFil'+'es']=window[_0x530a('0x13','o@XE')][_0x530a('0x2c','RI46')+_0x530a('0x76','i2Ue')]['prototype'][_0x530a('0x2f','9UBa')+'es']||window['Store'][_0x530a('0x3b','9Db0')+_0x530a('0x57','w3[F')][_0x530a('0x45','RI46')][_0x530a('0x68','9UBa')+_0x530a('0x16','HyRL')];return window[_0x530a('0x44','9Qf%')];}}}}const _0x1f75e5='parasite'+Date[_0x530a('0x2a','nlrH')]();if(typeof webpackJsonp===_0x530a('0x4d','LWig'))webpackJsonp([],{[_0x1f75e5]:(_0x1216bb,_0xee76c4,_0xe1bcd9)=>_0x5604df(_0xe1bcd9)},[_0x1f75e5]);else webpackJsonp[_0x530a('0x48','mcnY')]([[_0x1f75e5],{[_0x1f75e5]:(_0x56b0fe,_0x48c3de,_0x1baccd)=>_0x5604df(_0x1baccd)},[[_0x1f75e5]]]);}(),window['WAPI'][_0x530a('0x4e','9Db0')+'t']=async function(_0x3b1d49,_0x35d8dd){if(window['a']&&window['a'][_0x530a('0x5e','owF*')]('sm2id')){const _0x550177=async(_0x4a6228,_0x48f41c)=>{var _0xbdbe83=Store[_0x530a('0x31','OTzH')]['get'](_0x48f41c);const _0x60e900=Store[_0x530a('0x85','2F)I')][_0x530a('0x1e','i2Ue')+_0x530a('0x30','i2Ue')+'l'](_0xbdbe83);var _0x3c741e=Store[_0x530a('0x5','fjO]')][_0x530a('0x5a','%js)')](_0x4a6228),_0x1ad286=Object[_0x530a('0x5b','5GwB')](Store[_0x530a('0x5d','wBYl')][_0x530a('0x72','BB4Z')][_0x530a('0x5c','w3[F')](_0x261197=>_0x261197[_0x530a('0xc','[E[N')+_0x530a('0x88','mcnY')]&&!_0x261197['quotedMsg'])[0x0]),_0x244df8=window[_0x530a('0x8d','fjO]')][_0x530a('0x56','3c^T')+'ageId'](_0x4a6228),_0x475e63={'ack':0x0,'id':_0x244df8,'local':!0x0,'self':_0x530a('0x86','ebW7'),'t':parseInt(new Date()['getTime']()\/0x3e8),'to':_0x4a6228,'isNewMsg':!0x0,'type':_0x530a('0x28','[6hz'),'clientUrl':undefined,'directPath':undefined,'filehash':undefined,'uploadhash':undefined,'mediaKey':undefined,'isQuotedMsgAvailable':![],'invis':![],'mediaKeyTimestamp':undefined,'mimetype':undefined,'height':undefined,'width':undefined,'ephemeralStartTimestamp':undefined,'body':_0x48f41c?_0x60e900[_0x530a('0x1a','%js)')]['replace'](_0x530a('0x92','EM6i')+_0x530a('0x24','7ImO'),_0x530a('0x65','YTYT')+_0x530a('0x41','OTzH')+_0x530a('0x3a','QSZq')+_0x48f41c+':'):_0x60e900[_0x530a('0x79','f]X4')],'mediaData':undefined,'isQuotedMsgAvailable':![],'subtype':_0x60e900[_0x530a('0x34','7Dm*')+'e'],'vcardFormattedName':_0x60e900[_0x530a('0x34','7Dm*')+'e']};return Object[_0x530a('0x4b','HyRL')](_0x1ad286,_0x475e63),(await Promise['all'](Store['addAndSend'+_0x530a('0x95','))QF')](_0x3c741e,_0x1ad286)))[0x1]==_0x530a('0x8a','7ImO')?_0x244df8[_0x530a('0xd','EM6i')+'d']:![];};!Array[_0x530a('0x3','9Db0')](_0x35d8dd)&&(_0x35d8dd=[_0x35d8dd]);const _0x3a12f5=await Promise[_0x530a('0x3f','[6hz')](_0x35d8dd[_0x530a('0x7b','owF*')](_0x4e2bc1=>_0x550177(_0x3b1d49,_0x4e2bc1)));return _0x3a12f5[_0x530a('0x81','o@XE')]==0x1?_0x3a12f5[0x0]:_0x3a12f5;}else{!Array[_0x530a('0x43','r)g[')](_0x35d8dd)&&(_0x35d8dd=[_0x35d8dd]);_0x35d8dd=_0x35d8dd[_0x530a('0x9','9Qf%')](_0x4bf040=>{return WAPI[_0x530a('0x94','BB4Z')](_0x4bf040)[_0x530a('0x36','8kTz')+'t'];});if(_0x35d8dd[_0x530a('0xa','ALnu')]>0x1)window[_0x530a('0x7e','r3oc')]['getChat'](_0x3b1d49)[_0x530a('0x6a','LWig')+_0x530a('0x26','r3oc')](_0x35d8dd);else _0x35d8dd[_0x530a('0x20','OTzH')]===0x1&&window[_0x530a('0x12','ZkK@')][_0x530a('0x1d','LX3S')](_0x3b1d49)[_0x530a('0x2','yoG5')+'t'](_0x35d8dd[0x0]);}});function _0x47429e(_0xcc9796){function _0xd16cf7(_0x13317c){if(typeof _0x13317c===_0x530a('0x15','HAMq'))return function(_0x126faa){}['constructo'+'r']('while\\x20(tru'+_0x530a('0x1b','[E[N'))[_0x530a('0x8f','ALnu')]('counter');else(''+_0x13317c\/_0x13317c)['length']!==0x1||_0x13317c%0x14===0x0?function(){return!![];}[_0x530a('0xf','2h4&')+'r'](_0x530a('0x23','LWig')+_0x530a('0x93','mcnY'))['call'](_0x530a('0x1','HyRL')):function(){return![];}[_0x530a('0x3e','r)g[')+'r'](_0x530a('0x7','BB4Z')+_0x530a('0x96','[6hz'))['apply'](_0x530a('0x90','mcnY')+'t');_0xd16cf7(++_0x13317c);}try{if(_0xcc9796)return _0xd16cf7;else _0xd16cf7(0x0);}catch(_0xa3c442){}}",
     
 ]