function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_967";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_967 = Ti.UI.createView({
        id: "widget_967"
    });
    $.__views.widget_967 && $.addTopLevelView($.__views.widget_967);
    $.__views.__alloyId25090 = Ti.UI.createView({
        id: "__alloyId25090"
    });
    $.__views.widget_967.add($.__views.__alloyId25090);
    $.__views.__alloyId25091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25091"
    });
    $.__views.__alloyId25090.add($.__views.__alloyId25091);
    $.__views.__alloyId25092 = Ti.UI.createView({
        id: "__alloyId25092"
    });
    $.__views.__alloyId25092 && $.addTopLevelView($.__views.__alloyId25092);
    $.__views.__alloyId25093 = Ti.UI.createView({
        id: "__alloyId25093"
    });
    $.__views.__alloyId25092.add($.__views.__alloyId25093);
    $.__views.__alloyId25094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25094"
    });
    $.__views.__alloyId25093.add($.__views.__alloyId25094);
    $.__views.__alloyId25095 = Ti.UI.createView({
        id: "__alloyId25095"
    });
    $.__views.__alloyId25095 && $.addTopLevelView($.__views.__alloyId25095);
    $.__views.__alloyId25096 = Ti.UI.createView({
        id: "__alloyId25096"
    });
    $.__views.__alloyId25095.add($.__views.__alloyId25096);
    $.__views.__alloyId25097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25097"
    });
    $.__views.__alloyId25096.add($.__views.__alloyId25097);
    $.__views.__alloyId25098 = Ti.UI.createView({
        id: "__alloyId25098"
    });
    $.__views.__alloyId25098 && $.addTopLevelView($.__views.__alloyId25098);
    $.__views.__alloyId25099 = Ti.UI.createView({
        id: "__alloyId25099"
    });
    $.__views.__alloyId25098.add($.__views.__alloyId25099);
    $.__views.__alloyId25100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25100"
    });
    $.__views.__alloyId25099.add($.__views.__alloyId25100);
    $.__views.__alloyId25101 = Ti.UI.createView({
        id: "__alloyId25101"
    });
    $.__views.__alloyId25101 && $.addTopLevelView($.__views.__alloyId25101);
    $.__views.__alloyId25102 = Ti.UI.createView({
        id: "__alloyId25102"
    });
    $.__views.__alloyId25101.add($.__views.__alloyId25102);
    $.__views.__alloyId25103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25103"
    });
    $.__views.__alloyId25102.add($.__views.__alloyId25103);
    $.__views.__alloyId25104 = Ti.UI.createView({
        id: "__alloyId25104"
    });
    $.__views.__alloyId25104 && $.addTopLevelView($.__views.__alloyId25104);
    $.__views.__alloyId25105 = Ti.UI.createView({
        id: "__alloyId25105"
    });
    $.__views.__alloyId25104.add($.__views.__alloyId25105);
    $.__views.__alloyId25106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25106"
    });
    $.__views.__alloyId25105.add($.__views.__alloyId25106);
    $.__views.__alloyId25107 = Ti.UI.createView({
        id: "__alloyId25107"
    });
    $.__views.__alloyId25107 && $.addTopLevelView($.__views.__alloyId25107);
    $.__views.__alloyId25108 = Ti.UI.createView({
        id: "__alloyId25108"
    });
    $.__views.__alloyId25107.add($.__views.__alloyId25108);
    $.__views.__alloyId25109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25109"
    });
    $.__views.__alloyId25108.add($.__views.__alloyId25109);
    $.__views.__alloyId25110 = Ti.UI.createView({
        id: "__alloyId25110"
    });
    $.__views.__alloyId25110 && $.addTopLevelView($.__views.__alloyId25110);
    $.__views.__alloyId25111 = Ti.UI.createView({
        id: "__alloyId25111"
    });
    $.__views.__alloyId25110.add($.__views.__alloyId25111);
    $.__views.__alloyId25112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25112"
    });
    $.__views.__alloyId25111.add($.__views.__alloyId25112);
    $.__views.__alloyId25113 = Ti.UI.createView({
        id: "__alloyId25113"
    });
    $.__views.__alloyId25113 && $.addTopLevelView($.__views.__alloyId25113);
    $.__views.__alloyId25114 = Ti.UI.createView({
        id: "__alloyId25114"
    });
    $.__views.__alloyId25113.add($.__views.__alloyId25114);
    $.__views.__alloyId25115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25115"
    });
    $.__views.__alloyId25114.add($.__views.__alloyId25115);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;