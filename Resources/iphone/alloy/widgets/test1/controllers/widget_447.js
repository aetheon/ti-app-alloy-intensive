function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_447";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_447 = Ti.UI.createView({
        id: "widget_447"
    });
    $.__views.widget_447 && $.addTopLevelView($.__views.widget_447);
    $.__views.__alloyId10088 = Ti.UI.createView({
        id: "__alloyId10088"
    });
    $.__views.widget_447.add($.__views.__alloyId10088);
    $.__views.__alloyId10089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10089"
    });
    $.__views.__alloyId10088.add($.__views.__alloyId10089);
    $.__views.__alloyId10090 = Ti.UI.createView({
        id: "__alloyId10090"
    });
    $.__views.__alloyId10090 && $.addTopLevelView($.__views.__alloyId10090);
    $.__views.__alloyId10091 = Ti.UI.createView({
        id: "__alloyId10091"
    });
    $.__views.__alloyId10090.add($.__views.__alloyId10091);
    $.__views.__alloyId10092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10092"
    });
    $.__views.__alloyId10091.add($.__views.__alloyId10092);
    $.__views.__alloyId10093 = Ti.UI.createView({
        id: "__alloyId10093"
    });
    $.__views.__alloyId10093 && $.addTopLevelView($.__views.__alloyId10093);
    $.__views.__alloyId10094 = Ti.UI.createView({
        id: "__alloyId10094"
    });
    $.__views.__alloyId10093.add($.__views.__alloyId10094);
    $.__views.__alloyId10095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10095"
    });
    $.__views.__alloyId10094.add($.__views.__alloyId10095);
    $.__views.__alloyId10096 = Ti.UI.createView({
        id: "__alloyId10096"
    });
    $.__views.__alloyId10096 && $.addTopLevelView($.__views.__alloyId10096);
    $.__views.__alloyId10097 = Ti.UI.createView({
        id: "__alloyId10097"
    });
    $.__views.__alloyId10096.add($.__views.__alloyId10097);
    $.__views.__alloyId10098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10098"
    });
    $.__views.__alloyId10097.add($.__views.__alloyId10098);
    $.__views.__alloyId10099 = Ti.UI.createView({
        id: "__alloyId10099"
    });
    $.__views.__alloyId10099 && $.addTopLevelView($.__views.__alloyId10099);
    $.__views.__alloyId10100 = Ti.UI.createView({
        id: "__alloyId10100"
    });
    $.__views.__alloyId10099.add($.__views.__alloyId10100);
    $.__views.__alloyId10101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10101"
    });
    $.__views.__alloyId10100.add($.__views.__alloyId10101);
    $.__views.__alloyId10102 = Ti.UI.createView({
        id: "__alloyId10102"
    });
    $.__views.__alloyId10102 && $.addTopLevelView($.__views.__alloyId10102);
    $.__views.__alloyId10103 = Ti.UI.createView({
        id: "__alloyId10103"
    });
    $.__views.__alloyId10102.add($.__views.__alloyId10103);
    $.__views.__alloyId10104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10104"
    });
    $.__views.__alloyId10103.add($.__views.__alloyId10104);
    $.__views.__alloyId10105 = Ti.UI.createView({
        id: "__alloyId10105"
    });
    $.__views.__alloyId10105 && $.addTopLevelView($.__views.__alloyId10105);
    $.__views.__alloyId10106 = Ti.UI.createView({
        id: "__alloyId10106"
    });
    $.__views.__alloyId10105.add($.__views.__alloyId10106);
    $.__views.__alloyId10107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10107"
    });
    $.__views.__alloyId10106.add($.__views.__alloyId10107);
    $.__views.__alloyId10108 = Ti.UI.createView({
        id: "__alloyId10108"
    });
    $.__views.__alloyId10108 && $.addTopLevelView($.__views.__alloyId10108);
    $.__views.__alloyId10109 = Ti.UI.createView({
        id: "__alloyId10109"
    });
    $.__views.__alloyId10108.add($.__views.__alloyId10109);
    $.__views.__alloyId10110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10110"
    });
    $.__views.__alloyId10109.add($.__views.__alloyId10110);
    $.__views.__alloyId10111 = Ti.UI.createView({
        id: "__alloyId10111"
    });
    $.__views.__alloyId10111 && $.addTopLevelView($.__views.__alloyId10111);
    $.__views.__alloyId10112 = Ti.UI.createView({
        id: "__alloyId10112"
    });
    $.__views.__alloyId10111.add($.__views.__alloyId10112);
    $.__views.__alloyId10113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10113"
    });
    $.__views.__alloyId10112.add($.__views.__alloyId10113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;