function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_66";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_66 = Ti.UI.createView({
        id: "widget_66"
    });
    $.__views.widget_66 && $.addTopLevelView($.__views.widget_66);
    $.__views.__alloyId16224 = Ti.UI.createView({
        id: "__alloyId16224"
    });
    $.__views.widget_66.add($.__views.__alloyId16224);
    $.__views.__alloyId16225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16225"
    });
    $.__views.__alloyId16224.add($.__views.__alloyId16225);
    $.__views.__alloyId16226 = Ti.UI.createView({
        id: "__alloyId16226"
    });
    $.__views.__alloyId16226 && $.addTopLevelView($.__views.__alloyId16226);
    $.__views.__alloyId16227 = Ti.UI.createView({
        id: "__alloyId16227"
    });
    $.__views.__alloyId16226.add($.__views.__alloyId16227);
    $.__views.__alloyId16228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16228"
    });
    $.__views.__alloyId16227.add($.__views.__alloyId16228);
    $.__views.__alloyId16229 = Ti.UI.createView({
        id: "__alloyId16229"
    });
    $.__views.__alloyId16229 && $.addTopLevelView($.__views.__alloyId16229);
    $.__views.__alloyId16230 = Ti.UI.createView({
        id: "__alloyId16230"
    });
    $.__views.__alloyId16229.add($.__views.__alloyId16230);
    $.__views.__alloyId16231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16231"
    });
    $.__views.__alloyId16230.add($.__views.__alloyId16231);
    $.__views.__alloyId16232 = Ti.UI.createView({
        id: "__alloyId16232"
    });
    $.__views.__alloyId16232 && $.addTopLevelView($.__views.__alloyId16232);
    $.__views.__alloyId16233 = Ti.UI.createView({
        id: "__alloyId16233"
    });
    $.__views.__alloyId16232.add($.__views.__alloyId16233);
    $.__views.__alloyId16234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16234"
    });
    $.__views.__alloyId16233.add($.__views.__alloyId16234);
    $.__views.__alloyId16235 = Ti.UI.createView({
        id: "__alloyId16235"
    });
    $.__views.__alloyId16235 && $.addTopLevelView($.__views.__alloyId16235);
    $.__views.__alloyId16236 = Ti.UI.createView({
        id: "__alloyId16236"
    });
    $.__views.__alloyId16235.add($.__views.__alloyId16236);
    $.__views.__alloyId16237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16237"
    });
    $.__views.__alloyId16236.add($.__views.__alloyId16237);
    $.__views.__alloyId16238 = Ti.UI.createView({
        id: "__alloyId16238"
    });
    $.__views.__alloyId16238 && $.addTopLevelView($.__views.__alloyId16238);
    $.__views.__alloyId16239 = Ti.UI.createView({
        id: "__alloyId16239"
    });
    $.__views.__alloyId16238.add($.__views.__alloyId16239);
    $.__views.__alloyId16240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16240"
    });
    $.__views.__alloyId16239.add($.__views.__alloyId16240);
    $.__views.__alloyId16241 = Ti.UI.createView({
        id: "__alloyId16241"
    });
    $.__views.__alloyId16241 && $.addTopLevelView($.__views.__alloyId16241);
    $.__views.__alloyId16242 = Ti.UI.createView({
        id: "__alloyId16242"
    });
    $.__views.__alloyId16241.add($.__views.__alloyId16242);
    $.__views.__alloyId16243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16243"
    });
    $.__views.__alloyId16242.add($.__views.__alloyId16243);
    $.__views.__alloyId16244 = Ti.UI.createView({
        id: "__alloyId16244"
    });
    $.__views.__alloyId16244 && $.addTopLevelView($.__views.__alloyId16244);
    $.__views.__alloyId16245 = Ti.UI.createView({
        id: "__alloyId16245"
    });
    $.__views.__alloyId16244.add($.__views.__alloyId16245);
    $.__views.__alloyId16246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16246"
    });
    $.__views.__alloyId16245.add($.__views.__alloyId16246);
    $.__views.__alloyId16247 = Ti.UI.createView({
        id: "__alloyId16247"
    });
    $.__views.__alloyId16247 && $.addTopLevelView($.__views.__alloyId16247);
    $.__views.__alloyId16248 = Ti.UI.createView({
        id: "__alloyId16248"
    });
    $.__views.__alloyId16247.add($.__views.__alloyId16248);
    $.__views.__alloyId16249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16249"
    });
    $.__views.__alloyId16248.add($.__views.__alloyId16249);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;