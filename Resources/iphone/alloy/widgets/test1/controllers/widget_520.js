function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_520";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_520 = Ti.UI.createView({
        id: "widget_520"
    });
    $.__views.widget_520 && $.addTopLevelView($.__views.widget_520);
    $.__views.__alloyId12220 = Ti.UI.createView({
        id: "__alloyId12220"
    });
    $.__views.widget_520.add($.__views.__alloyId12220);
    $.__views.__alloyId12221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12221"
    });
    $.__views.__alloyId12220.add($.__views.__alloyId12221);
    $.__views.__alloyId12222 = Ti.UI.createView({
        id: "__alloyId12222"
    });
    $.__views.__alloyId12222 && $.addTopLevelView($.__views.__alloyId12222);
    $.__views.__alloyId12223 = Ti.UI.createView({
        id: "__alloyId12223"
    });
    $.__views.__alloyId12222.add($.__views.__alloyId12223);
    $.__views.__alloyId12224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12224"
    });
    $.__views.__alloyId12223.add($.__views.__alloyId12224);
    $.__views.__alloyId12225 = Ti.UI.createView({
        id: "__alloyId12225"
    });
    $.__views.__alloyId12225 && $.addTopLevelView($.__views.__alloyId12225);
    $.__views.__alloyId12226 = Ti.UI.createView({
        id: "__alloyId12226"
    });
    $.__views.__alloyId12225.add($.__views.__alloyId12226);
    $.__views.__alloyId12227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12227"
    });
    $.__views.__alloyId12226.add($.__views.__alloyId12227);
    $.__views.__alloyId12228 = Ti.UI.createView({
        id: "__alloyId12228"
    });
    $.__views.__alloyId12228 && $.addTopLevelView($.__views.__alloyId12228);
    $.__views.__alloyId12229 = Ti.UI.createView({
        id: "__alloyId12229"
    });
    $.__views.__alloyId12228.add($.__views.__alloyId12229);
    $.__views.__alloyId12230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12230"
    });
    $.__views.__alloyId12229.add($.__views.__alloyId12230);
    $.__views.__alloyId12231 = Ti.UI.createView({
        id: "__alloyId12231"
    });
    $.__views.__alloyId12231 && $.addTopLevelView($.__views.__alloyId12231);
    $.__views.__alloyId12232 = Ti.UI.createView({
        id: "__alloyId12232"
    });
    $.__views.__alloyId12231.add($.__views.__alloyId12232);
    $.__views.__alloyId12233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12233"
    });
    $.__views.__alloyId12232.add($.__views.__alloyId12233);
    $.__views.__alloyId12234 = Ti.UI.createView({
        id: "__alloyId12234"
    });
    $.__views.__alloyId12234 && $.addTopLevelView($.__views.__alloyId12234);
    $.__views.__alloyId12235 = Ti.UI.createView({
        id: "__alloyId12235"
    });
    $.__views.__alloyId12234.add($.__views.__alloyId12235);
    $.__views.__alloyId12236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12236"
    });
    $.__views.__alloyId12235.add($.__views.__alloyId12236);
    $.__views.__alloyId12237 = Ti.UI.createView({
        id: "__alloyId12237"
    });
    $.__views.__alloyId12237 && $.addTopLevelView($.__views.__alloyId12237);
    $.__views.__alloyId12238 = Ti.UI.createView({
        id: "__alloyId12238"
    });
    $.__views.__alloyId12237.add($.__views.__alloyId12238);
    $.__views.__alloyId12239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12239"
    });
    $.__views.__alloyId12238.add($.__views.__alloyId12239);
    $.__views.__alloyId12240 = Ti.UI.createView({
        id: "__alloyId12240"
    });
    $.__views.__alloyId12240 && $.addTopLevelView($.__views.__alloyId12240);
    $.__views.__alloyId12241 = Ti.UI.createView({
        id: "__alloyId12241"
    });
    $.__views.__alloyId12240.add($.__views.__alloyId12241);
    $.__views.__alloyId12242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12242"
    });
    $.__views.__alloyId12241.add($.__views.__alloyId12242);
    $.__views.__alloyId12243 = Ti.UI.createView({
        id: "__alloyId12243"
    });
    $.__views.__alloyId12243 && $.addTopLevelView($.__views.__alloyId12243);
    $.__views.__alloyId12244 = Ti.UI.createView({
        id: "__alloyId12244"
    });
    $.__views.__alloyId12243.add($.__views.__alloyId12244);
    $.__views.__alloyId12245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12245"
    });
    $.__views.__alloyId12244.add($.__views.__alloyId12245);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;