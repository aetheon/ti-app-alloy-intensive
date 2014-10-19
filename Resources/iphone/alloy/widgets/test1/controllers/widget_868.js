function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_868";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_868 = Ti.UI.createView({
        id: "widget_868"
    });
    $.__views.widget_868 && $.addTopLevelView($.__views.widget_868);
    $.__views.__alloyId22230 = Ti.UI.createView({
        id: "__alloyId22230"
    });
    $.__views.widget_868.add($.__views.__alloyId22230);
    $.__views.__alloyId22231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22231"
    });
    $.__views.__alloyId22230.add($.__views.__alloyId22231);
    $.__views.__alloyId22232 = Ti.UI.createView({
        id: "__alloyId22232"
    });
    $.__views.__alloyId22232 && $.addTopLevelView($.__views.__alloyId22232);
    $.__views.__alloyId22233 = Ti.UI.createView({
        id: "__alloyId22233"
    });
    $.__views.__alloyId22232.add($.__views.__alloyId22233);
    $.__views.__alloyId22234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22234"
    });
    $.__views.__alloyId22233.add($.__views.__alloyId22234);
    $.__views.__alloyId22235 = Ti.UI.createView({
        id: "__alloyId22235"
    });
    $.__views.__alloyId22235 && $.addTopLevelView($.__views.__alloyId22235);
    $.__views.__alloyId22236 = Ti.UI.createView({
        id: "__alloyId22236"
    });
    $.__views.__alloyId22235.add($.__views.__alloyId22236);
    $.__views.__alloyId22237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22237"
    });
    $.__views.__alloyId22236.add($.__views.__alloyId22237);
    $.__views.__alloyId22238 = Ti.UI.createView({
        id: "__alloyId22238"
    });
    $.__views.__alloyId22238 && $.addTopLevelView($.__views.__alloyId22238);
    $.__views.__alloyId22239 = Ti.UI.createView({
        id: "__alloyId22239"
    });
    $.__views.__alloyId22238.add($.__views.__alloyId22239);
    $.__views.__alloyId22240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22240"
    });
    $.__views.__alloyId22239.add($.__views.__alloyId22240);
    $.__views.__alloyId22241 = Ti.UI.createView({
        id: "__alloyId22241"
    });
    $.__views.__alloyId22241 && $.addTopLevelView($.__views.__alloyId22241);
    $.__views.__alloyId22242 = Ti.UI.createView({
        id: "__alloyId22242"
    });
    $.__views.__alloyId22241.add($.__views.__alloyId22242);
    $.__views.__alloyId22243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22243"
    });
    $.__views.__alloyId22242.add($.__views.__alloyId22243);
    $.__views.__alloyId22244 = Ti.UI.createView({
        id: "__alloyId22244"
    });
    $.__views.__alloyId22244 && $.addTopLevelView($.__views.__alloyId22244);
    $.__views.__alloyId22245 = Ti.UI.createView({
        id: "__alloyId22245"
    });
    $.__views.__alloyId22244.add($.__views.__alloyId22245);
    $.__views.__alloyId22246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22246"
    });
    $.__views.__alloyId22245.add($.__views.__alloyId22246);
    $.__views.__alloyId22247 = Ti.UI.createView({
        id: "__alloyId22247"
    });
    $.__views.__alloyId22247 && $.addTopLevelView($.__views.__alloyId22247);
    $.__views.__alloyId22248 = Ti.UI.createView({
        id: "__alloyId22248"
    });
    $.__views.__alloyId22247.add($.__views.__alloyId22248);
    $.__views.__alloyId22249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22249"
    });
    $.__views.__alloyId22248.add($.__views.__alloyId22249);
    $.__views.__alloyId22250 = Ti.UI.createView({
        id: "__alloyId22250"
    });
    $.__views.__alloyId22250 && $.addTopLevelView($.__views.__alloyId22250);
    $.__views.__alloyId22251 = Ti.UI.createView({
        id: "__alloyId22251"
    });
    $.__views.__alloyId22250.add($.__views.__alloyId22251);
    $.__views.__alloyId22252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22252"
    });
    $.__views.__alloyId22251.add($.__views.__alloyId22252);
    $.__views.__alloyId22253 = Ti.UI.createView({
        id: "__alloyId22253"
    });
    $.__views.__alloyId22253 && $.addTopLevelView($.__views.__alloyId22253);
    $.__views.__alloyId22254 = Ti.UI.createView({
        id: "__alloyId22254"
    });
    $.__views.__alloyId22253.add($.__views.__alloyId22254);
    $.__views.__alloyId22255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22255"
    });
    $.__views.__alloyId22254.add($.__views.__alloyId22255);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;