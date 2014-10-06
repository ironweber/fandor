(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['film'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\" col-sm-3\">\n	<div class=\"film\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hd : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<div class=\"thumb\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.thumb_url || (depth0 != null ? depth0.thumb_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thumb_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\">\n		</div>\n		\n		<div class=\"meta\">\n			<h5 class=\"title\">\n				"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</h5>\n			<div class=\"release\">\n				("
    + escapeExpression(((helper = (helper = helpers.release || (depth0 != null ? depth0.release : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"release","hash":{},"data":data}) : helper)))
    + ") "
    + escapeExpression(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duration","hash":{},"data":data}) : helper)))
    + "\n			</div>\n			<div class=\"genre\">\n				"
    + escapeExpression(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"genre","hash":{},"data":data}) : helper)))
    + "\n			</div>\n			<div class=\"director\">\n				"
    + escapeExpression(((helper = (helper = helpers.director || (depth0 != null ? depth0.director : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"director","hash":{},"data":data}) : helper)))
    + "\n			</div>\n			<div class=\"desc\">\n				"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\n			</div>\n		</div>\n	</div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "			<div class=\"hd-ribbon\">HD</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
})();