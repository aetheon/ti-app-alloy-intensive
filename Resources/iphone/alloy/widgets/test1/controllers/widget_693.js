function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_693";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_693 = Ti.UI.createView({
        id: "widget_693"
    });
    $.__views.widget_693 && $.addTopLevelView($.__views.widget_693);
    $.__views.__alloyId17186 = Ti.UI.createView({
        id: "__alloyId17186"
    });
    $.__views.widget_693.add($.__views.__alloyId17186);
    $.__views.__alloyId17187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17187"
    });
    $.__views.__alloyId17186.add($.__views.__alloyId17187);
    $.__views.__alloyId17188 = Ti.UI.createView({
        id: "__alloyId17188"
    });
    $.__views.__alloyId17188 && $.addTopLevelView($.__views.__alloyId17188);
    $.__views.__alloyId17189 = Ti.UI.createView({
        id: "__alloyId17189"
    });
    $.__views.__alloyId17188.add($.__views.__alloyId17189);
    $.__views.__alloyId17190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17190"
    });
    $.__views.__alloyId17189.add($.__views.__alloyId17190);
    $.__views.__alloyId17191 = Ti.UI.createView({
        id: "__alloyId17191"
    });
    $.__views.__alloyId17191 && $.addTopLevelView($.__views.__alloyId17191);
    $.__views.__alloyId17192 = Ti.UI.createView({
        id: "__alloyId17192"
    });
    $.__views.__alloyId17191.add($.__views.__alloyId17192);
    $.__views.__alloyId17193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17193"
    });
    $.__views.__alloyId17192.add($.__views.__alloyId17193);
    $.__views.__alloyId17194 = Ti.UI.createView({
        id: "__alloyId17194"
    });
    $.__views.__alloyId17194 && $.addTopLevelView($.__views.__alloyId17194);
    $.__views.__alloyId17195 = Ti.UI.createView({
        id: "__alloyId17195"
    });
    $.__views.__alloyId17194.add($.__views.__alloyId17195);
    $.__views.__alloyId17196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17196"
    });
    $.__views.__alloyId17195.add($.__views.__alloyId17196);
    $.__views.__alloyId17197 = Ti.UI.createView({
        id: "__alloyId17197"
    });
    $.__views.__alloyId17197 && $.addTopLevelView($.__views.__alloyId17197);
    $.__views.__alloyId17198 = Ti.UI.createView({
        id: "__alloyId17198"
    });
    $.__views.__alloyId17197.add($.__views.__alloyId17198);
    $.__views.__alloyId17199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17199"
    });
    $.__views.__alloyId17198.add($.__views.__alloyId17199);
    $.__views.__alloyId17200 = Ti.UI.createView({
        id: "__alloyId17200"
    });
    $.__views.__alloyId17200 && $.addTopLevelView($.__views.__alloyId17200);
    $.__views.__alloyId17201 = Ti.UI.createView({
        id: "__alloyId17201"
    });
    $.__views.__alloyId17200.add($.__views.__alloyId17201);
    $.__views.__alloyId17202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17202"
    });
    $.__views.__alloyId17201.add($.__views.__alloyId17202);
    $.__views.__alloyId17203 = Ti.UI.createView({
        id: "__alloyId17203"
    });
    $.__views.__alloyId17203 && $.addTopLevelView($.__views.__alloyId17203);
    $.__views.__alloyId17204 = Ti.UI.createView({
        id: "__alloyId17204"
    });
    $.__views.__alloyId17203.add($.__views.__alloyId17204);
    $.__views.__alloyId17205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17205"
    });
    $.__views.__alloyId17204.add($.__views.__alloyId17205);
    $.__views.__alloyId17206 = Ti.UI.createView({
        id: "__alloyId17206"
    });
    $.__views.__alloyId17206 && $.addTopLevelView($.__views.__alloyId17206);
    $.__views.__alloyId17207 = Ti.UI.createView({
        id: "__alloyId17207"
    });
    $.__views.__alloyId17206.add($.__views.__alloyId17207);
    $.__views.__alloyId17208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17208"
    });
    $.__views.__alloyId17207.add($.__views.__alloyId17208);
    $.__views.__alloyId17209 = Ti.UI.createView({
        id: "__alloyId17209"
    });
    $.__views.__alloyId17209 && $.addTopLevelView($.__views.__alloyId17209);
    $.__views.__alloyId17210 = Ti.UI.createView({
        id: "__alloyId17210"
    });
    $.__views.__alloyId17209.add($.__views.__alloyId17210);
    $.__views.__alloyId17211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17211"
    });
    $.__views.__alloyId17210.add($.__views.__alloyId17211);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;