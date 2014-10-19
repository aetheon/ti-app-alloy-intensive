function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_279";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_279 = Ti.UI.createView({
        id: "widget_279"
    });
    $.__views.widget_279 && $.addTopLevelView($.__views.widget_279);
    $.__views.__alloyId5226 = Ti.UI.createView({
        id: "__alloyId5226"
    });
    $.__views.widget_279.add($.__views.__alloyId5226);
    $.__views.__alloyId5227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5227"
    });
    $.__views.__alloyId5226.add($.__views.__alloyId5227);
    $.__views.__alloyId5228 = Ti.UI.createView({
        id: "__alloyId5228"
    });
    $.__views.__alloyId5228 && $.addTopLevelView($.__views.__alloyId5228);
    $.__views.__alloyId5229 = Ti.UI.createView({
        id: "__alloyId5229"
    });
    $.__views.__alloyId5228.add($.__views.__alloyId5229);
    $.__views.__alloyId5230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5230"
    });
    $.__views.__alloyId5229.add($.__views.__alloyId5230);
    $.__views.__alloyId5231 = Ti.UI.createView({
        id: "__alloyId5231"
    });
    $.__views.__alloyId5231 && $.addTopLevelView($.__views.__alloyId5231);
    $.__views.__alloyId5232 = Ti.UI.createView({
        id: "__alloyId5232"
    });
    $.__views.__alloyId5231.add($.__views.__alloyId5232);
    $.__views.__alloyId5233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5233"
    });
    $.__views.__alloyId5232.add($.__views.__alloyId5233);
    $.__views.__alloyId5234 = Ti.UI.createView({
        id: "__alloyId5234"
    });
    $.__views.__alloyId5234 && $.addTopLevelView($.__views.__alloyId5234);
    $.__views.__alloyId5235 = Ti.UI.createView({
        id: "__alloyId5235"
    });
    $.__views.__alloyId5234.add($.__views.__alloyId5235);
    $.__views.__alloyId5236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5236"
    });
    $.__views.__alloyId5235.add($.__views.__alloyId5236);
    $.__views.__alloyId5237 = Ti.UI.createView({
        id: "__alloyId5237"
    });
    $.__views.__alloyId5237 && $.addTopLevelView($.__views.__alloyId5237);
    $.__views.__alloyId5238 = Ti.UI.createView({
        id: "__alloyId5238"
    });
    $.__views.__alloyId5237.add($.__views.__alloyId5238);
    $.__views.__alloyId5239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5239"
    });
    $.__views.__alloyId5238.add($.__views.__alloyId5239);
    $.__views.__alloyId5240 = Ti.UI.createView({
        id: "__alloyId5240"
    });
    $.__views.__alloyId5240 && $.addTopLevelView($.__views.__alloyId5240);
    $.__views.__alloyId5241 = Ti.UI.createView({
        id: "__alloyId5241"
    });
    $.__views.__alloyId5240.add($.__views.__alloyId5241);
    $.__views.__alloyId5242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5242"
    });
    $.__views.__alloyId5241.add($.__views.__alloyId5242);
    $.__views.__alloyId5243 = Ti.UI.createView({
        id: "__alloyId5243"
    });
    $.__views.__alloyId5243 && $.addTopLevelView($.__views.__alloyId5243);
    $.__views.__alloyId5244 = Ti.UI.createView({
        id: "__alloyId5244"
    });
    $.__views.__alloyId5243.add($.__views.__alloyId5244);
    $.__views.__alloyId5245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5245"
    });
    $.__views.__alloyId5244.add($.__views.__alloyId5245);
    $.__views.__alloyId5246 = Ti.UI.createView({
        id: "__alloyId5246"
    });
    $.__views.__alloyId5246 && $.addTopLevelView($.__views.__alloyId5246);
    $.__views.__alloyId5247 = Ti.UI.createView({
        id: "__alloyId5247"
    });
    $.__views.__alloyId5246.add($.__views.__alloyId5247);
    $.__views.__alloyId5248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5248"
    });
    $.__views.__alloyId5247.add($.__views.__alloyId5248);
    $.__views.__alloyId5249 = Ti.UI.createView({
        id: "__alloyId5249"
    });
    $.__views.__alloyId5249 && $.addTopLevelView($.__views.__alloyId5249);
    $.__views.__alloyId5250 = Ti.UI.createView({
        id: "__alloyId5250"
    });
    $.__views.__alloyId5249.add($.__views.__alloyId5250);
    $.__views.__alloyId5251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5251"
    });
    $.__views.__alloyId5250.add($.__views.__alloyId5251);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;