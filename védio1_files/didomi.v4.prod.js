function scrollListener(e){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,n=Math.max(document.body.scrollHeight||0,document.documentElement.scrollHeight||0,document.body.offsetHeight||0,document.documentElement.offsetHeight||0,document.body.clientHeight||0,document.documentElement.clientHeight||0);(window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0)/(n-t)*100>=1&&(Didomi.setUserAgreeToAll(),window.removeEventListener("scroll",scrollListener))}window.didomiEventListeners=window.didomiEventListeners||[],window.didomiEventListeners.push({event:"notice.hidden",listener:function(){void 0!==window.gmtdataLayer&&window.gmtdataLayer.push({event:"track-event",categorie:"didomi",action:"notice hidden"})}}),window.didomiEventListeners.push({event:"notice.shown",listener:function(){void 0!==window.gmtdataLayer&&window.gmtdataLayer.push({event:"track-event",categorie:"didomi",action:"notice shown"})}}),window.didomiEventListeners.push({event:"integrations.consentpassedtodfp",listener:function(e){}}),window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push((function(e){e.notice.isVisible()&&window.addEventListener("scroll",scrollListener)})),window.gdprAppliesGlobally=!0,function(e,t,n,i,o){function d(e,n,i,d){if("function"==typeof i){window[t]||(window[t]=[]);var c=!1;o&&(c=o(e,n,i)),c||window[t].push({command:e,parameter:n,callback:i,version:d})}}function c(t){if(window[e]&&!0===window[e].stub&&t.data){var o,d="string"==typeof t.data;try{o=d?JSON.parse(t.data):t.data}catch(e){return}if(o[n]){var c=o[n];window[e](c.command,c.parameter,(function(e,n){var o={};o[i]={returnValue:e,success:n,callId:c.callId},t.source.postMessage(d?JSON.stringify(o):o,"*")}),c.version)}}}d.stub=!0,"function"!=typeof window[e]&&(window[e]=d,window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent("onmessage",c))}("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn"),function e(t){if(!window.frames[t])if(document.body&&document.body.firstChild){var n=document.body,i=document.createElement("iframe");i.style.display="none",i.name=t,i.title=t,n.insertBefore(i,n.firstChild)}else setTimeout((function(){e(t)}),5)}("__tcfapiLocator"),function(e){var t=document.createElement("script");t.id="spcloader",t.type="text/javascript",t.async=!0,t.src="https://sdk.privacy-center.org/745a135f-908d-4bfb-beca-56b93e25dc45/loader.js?target="+document.location.hostname,t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}();