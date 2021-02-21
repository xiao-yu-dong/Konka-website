

   if(typeof(_365call_load_SwitchLoadScript_95983) == 'undefined' || !_365call_load_SwitchLoadScript_95983){
       var _365call_load_SwitchLoadScript_95983=true;

       var _365webcall_language = 'ch_cn';
       
        if( typeof(_365call_include_js) == 'undefined' ){
            function _365call_include_js(file) {
try {
                var _365call_oHtml = document.documentElement;
                var _doc = _365call_oHtml.firstChild;
                
                if (typeof (_doc) == 'undefined' || _doc.nodeType != 1) {
                    for (var i = 0; i < _365call_oHtml.childNodes.length; i++) {
                        if (typeof (_365call_oHtml.childNodes.item(i)) != 'undefined' && _365call_oHtml.childNodes.item(i).nodeType == 1) {
                            _doc = _365call_oHtml.childNodes.item(i);
                            break;
                        }
                    }
                }
                
                if( typeof (_doc) != 'undefined' && _doc.nodeType == 1 ){
                    var js = document.createElement('script');   
                    js.setAttribute('type', 'text/javascript');   
                    js.setAttribute('src', file);
                    _doc.appendChild(js);
                }
             }
             catch (e) { 
             }
            }
        }
        
        var webcall_url = "https://www.365webcall.com/sa3.aspx?settings=mw7mw06mIw7Xm7z3AP0wNwz3AI0I7Xz3AX6mmbw&LL=0" + "&showID=" + "95983";

_365call_include_js(webcall_url);        
   }
   else{
   

  }

function _365call_hj_onclick(){
     var spanID = document.getElementById('');
     var user_agent = navigator.userAgent;
     var url='https://www.365webcall.com/chat/ChatWin3.aspx?settings=mw7mw06mIw7Xm7z3AP0wNwz3AI0I7Xz3AX6mmbw';
     var _365call_settings='mw7mw06mIw7Xm7z3AP0wNwz3AI0I7Xz3AX6mmbw';
     var _365call_box_width=730;
     var _365call_box_height=530;

     if( spanID == null )
         return;

     if (user_agent.indexOf(' MetaSr ') > -1){
        spanID.href=url;
        spanID.target='_blank';
     }
     else{
        var _webcall_left = (window.screen.width - _365call_box_width) / 2;
        var _webcall_top = (window.screen.height - _365call_box_height) / 2;
        spanID.onclick=function () {
                window.open(url, _365call_settings + '0', 'width=' + _365call_box_width + ',height=' + _365call_box_height +
                                         ', top=' + _webcall_top + ',left=' + _webcall_left +
                                         ',toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no,center=yes'); 
         }
     }
}