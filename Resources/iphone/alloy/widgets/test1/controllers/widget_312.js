function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_312";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_312 = Ti.UI.createView({
        id: "widget_312"
    });
    $.__views.widget_312 && $.addTopLevelView($.__views.widget_312);
    $.__views.__alloyId6214 = Ti.UI.createView({
        id: "__alloyId6214"
    });
    $.__views.widget_312.add($.__views.__alloyId6214);
    $.__views.__alloyId6215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6215"
    });
    $.__views.__alloyId6214.add($.__views.__alloyId6215);
    $.__views.__alloyId6216 = Ti.UI.createView({
        id: "__alloyId6216"
    });
    $.__views.__alloyId6216 && $.addTopLevelView($.__views.__alloyId6216);
    $.__views.__alloyId6217 = Ti.UI.createView({
        id: "__alloyId6217"
    });
    $.__views.__alloyId6216.add($.__views.__alloyId6217);
    $.__views.__alloyId6218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6218"
    });
    $.__views.__alloyId6217.add($.__views.__alloyId6218);
    $.__views.__alloyId6219 = Ti.UI.createView({
        id: "__alloyId6219"
    });
    $.__views.__alloyId6219 && $.addTopLevelView($.__views.__alloyId6219);
    $.__views.__alloyId6220 = Ti.UI.createView({
        id: "__alloyId6220"
    });
    $.__views.__alloyId6219.add($.__views.__alloyId6220);
    $.__views.__alloyId6221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6221"
    });
    $.__views.__alloyId6220.add($.__views.__alloyId6221);
    $.__views.__alloyId6222 = Ti.UI.createView({
        id: "__alloyId6222"
    });
    $.__views.__alloyId6222 && $.addTopLevelView($.__views.__alloyId6222);
    $.__views.__alloyId6223 = Ti.UI.createView({
        id: "__alloyId6223"
    });
    $.__views.__alloyId6222.add($.__views.__alloyId6223);
    $.__views.__alloyId6224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6224"
    });
    $.__views.__alloyId6223.add($.__views.__alloyId6224);
    $.__views.__alloyId6225 = Ti.UI.createView({
        id: "__alloyId6225"
    });
    $.__views.__alloyId6225 && $.addTopLevelView($.__views.__alloyId6225);
    $.__views.__alloyId6226 = Ti.UI.createView({
        id: "__alloyId6226"
    });
    $.__views.__alloyId6225.add($.__views.__alloyId6226);
    $.__views.__alloyId6227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6227"
    });
    $.__views.__alloyId6226.add($.__views.__alloyId6227);
    $.__views.__alloyId6228 = Ti.UI.createView({
        id: "__alloyId6228"
    });
    $.__views.__alloyId6228 && $.addTopLevelView($.__views.__alloyId6228);
    $.__views.__alloyId6229 = Ti.UI.createView({
        id: "__alloyId6229"
    });
    $.__views.__alloyId6228.add($.__views.__alloyId6229);
    $.__views.__alloyId6230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6230"
    });
    $.__views.__alloyId6229.add($.__views.__alloyId6230);
    $.__views.__alloyId6231 = Ti.UI.createView({
        id: "__alloyId6231"
    });
    $.__views.__alloyId6231 && $.addTopLevelView($.__views.__alloyId6231);
    $.__views.__alloyId6232 = Ti.UI.createView({
        id: "__alloyId6232"
    });
    $.__views.__alloyId6231.add($.__views.__alloyId6232);
    $.__views.__alloyId6233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6233"
    });
    $.__views.__alloyId6232.add($.__views.__alloyId6233);
    $.__views.__alloyId6234 = Ti.UI.createView({
        id: "__alloyId6234"
    });
    $.__views.__alloyId6234 && $.addTopLevelView($.__views.__alloyId6234);
    $.__views.__alloyId6235 = Ti.UI.createView({
        id: "__alloyId6235"
    });
    $.__views.__alloyId6234.add($.__views.__alloyId6235);
    $.__views.__alloyId6236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6236"
    });
    $.__views.__alloyId6235.add($.__views.__alloyId6236);
    $.__views.__alloyId6237 = Ti.UI.createView({
        id: "__alloyId6237"
    });
    $.__views.__alloyId6237 && $.addTopLevelView($.__views.__alloyId6237);
    $.__views.__alloyId6238 = Ti.UI.createView({
        id: "__alloyId6238"
    });
    $.__views.__alloyId6237.add($.__views.__alloyId6238);
    $.__views.__alloyId6239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6239"
    });
    $.__views.__alloyId6238.add($.__views.__alloyId6239);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;