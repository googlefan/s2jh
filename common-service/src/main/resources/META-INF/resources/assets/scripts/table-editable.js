var TableEditable=function(){return{init:function(){function e(j,m){var k=j.fnGetData(m);var h=$(">td",m);for(var l=0,g=h.length;l<g;l++){j.fnUpdate(k[l],m,l,false)}j.fnDraw()}function d(h,j){var i=h.fnGetData(j);var g=$(">td",j);g[0].innerHTML='<input type="text" class="form-control input-small" value="'+i[0]+'">';g[1].innerHTML='<input type="text" class="form-control input-small" value="'+i[1]+'">';g[2].innerHTML='<input type="text" class="form-control input-small" value="'+i[2]+'">';g[3].innerHTML='<input type="text" class="form-control input-small" value="'+i[3]+'">';g[4].innerHTML='<a class="edit" href="">Save</a>';g[5].innerHTML='<a class="cancel" href="">Cancel</a>'}function b(g,i){var h=$("input",i);g.fnUpdate(h[0].value,i,0,false);g.fnUpdate(h[1].value,i,1,false);g.fnUpdate(h[2].value,i,2,false);g.fnUpdate(h[3].value,i,3,false);g.fnUpdate('<a class="edit" href="">Edit</a>',i,4,false);g.fnUpdate('<a class="delete" href="">Delete</a>',i,5,false);g.fnDraw()}function f(g,i){var h=$("input",i);g.fnUpdate(h[0].value,i,0,false);g.fnUpdate(h[1].value,i,1,false);g.fnUpdate(h[2].value,i,2,false);g.fnUpdate(h[3].value,i,3,false);g.fnUpdate('<a class="edit" href="">Edit</a>',i,4,false);g.fnDraw()}var c=$("#sample_editable_1").dataTable({aLengthMenu:[[5,15,20,-1],[5,15,20,"All"]],iDisplayLength:5,sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"_MENU_ records",oPaginate:{sPrevious:"Prev",sNext:"Next"}},aoColumnDefs:[{bSortable:false,aTargets:[0]}]});jQuery("#sample_editable_1_wrapper .dataTables_filter input").addClass("form-control input-medium");jQuery("#sample_editable_1_wrapper .dataTables_length select").addClass("form-control input-small");jQuery("#sample_editable_1_wrapper .dataTables_length select").select2({showSearchInput:false});var a=null;$("#sample_editable_1_new").click(function(i){i.preventDefault();var g=c.fnAddData(["","","","",'<a class="edit" href="">Edit</a>','<a class="cancel" data-mode="new" href="">Cancel</a>']);var h=c.fnGetNodes(g[0]);d(c,h);a=h});$("#sample_editable_1 a.delete").live("click",function(h){h.preventDefault();if(confirm("Are you sure to delete this row ?")==false){return}var g=$(this).parents("tr")[0];c.fnDeleteRow(g);alert("Deleted! Do not forget to do some ajax to sync with backend :)")});$("#sample_editable_1 a.cancel").live("click",function(h){h.preventDefault();if($(this).attr("data-mode")=="new"){var g=$(this).parents("tr")[0];c.fnDeleteRow(g)}else{e(c,a);a=null}});$("#sample_editable_1 a.edit").live("click",function(h){h.preventDefault();var g=$(this).parents("tr")[0];if(a!==null&&a!=g){e(c,a);d(c,g);a=g}else{if(a==g&&this.innerHTML=="Save"){b(c,a);a=null;alert("Updated! Do not forget to do some ajax to sync with backend :)")}else{d(c,g);a=g}}})}}}();