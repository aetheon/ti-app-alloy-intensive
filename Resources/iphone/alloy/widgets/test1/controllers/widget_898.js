function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_898";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_898 = Ti.UI.createView({
        id: "widget_898"
    });
    $.__views.widget_898 && $.addTopLevelView($.__views.widget_898);
    $.__views.__alloyId23088 = Ti.UI.createView({
        id: "__alloyId23088"
    });
    $.__views.widget_898.add($.__views.__alloyId23088);
    $.__views.__alloyId23089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23089"
    });
    $.__views.__alloyId23088.add($.__views.__alloyId23089);
    $.__views.__alloyId23090 = Ti.UI.createView({
        id: "__alloyId23090"
    });
    $.__views.__alloyId23090 && $.addTopLevelView($.__views.__alloyId23090);
    $.__views.__alloyId23091 = Ti.UI.createView({
        id: "__alloyId23091"
    });
    $.__views.__alloyId23090.add($.__views.__alloyId23091);
    $.__views.__alloyId23092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23092"
    });
    $.__views.__alloyId23091.add($.__views.__alloyId23092);
    $.__views.__alloyId23093 = Ti.UI.createView({
        id: "__alloyId23093"
    });
    $.__views.__alloyId23093 && $.addTopLevelView($.__views.__alloyId23093);
    $.__views.__alloyId23094 = Ti.UI.createView({
        id: "__alloyId23094"
    });
    $.__views.__alloyId23093.add($.__views.__alloyId23094);
    $.__views.__alloyId23095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23095"
    });
    $.__views.__alloyId23094.add($.__views.__alloyId23095);
    $.__views.__alloyId23096 = Ti.UI.createView({
        id: "__alloyId23096"
    });
    $.__views.__alloyId23096 && $.addTopLevelView($.__views.__alloyId23096);
    $.__views.__alloyId23097 = Ti.UI.createView({
        id: "__alloyId23097"
    });
    $.__views.__alloyId23096.add($.__views.__alloyId23097);
    $.__views.__alloyId23098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23098"
    });
    $.__views.__alloyId23097.add($.__views.__alloyId23098);
    $.__views.__alloyId23099 = Ti.UI.createView({
        id: "__alloyId23099"
    });
    $.__views.__alloyId23099 && $.addTopLevelView($.__views.__alloyId23099);
    $.__views.__alloyId23100 = Ti.UI.createView({
        id: "__alloyId23100"
    });
    $.__views.__alloyId23099.add($.__views.__alloyId23100);
    $.__views.__alloyId23101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23101"
    });
    $.__views.__alloyId23100.add($.__views.__alloyId23101);
    $.__views.__alloyId23102 = Ti.UI.createView({
        id: "__alloyId23102"
    });
    $.__views.__alloyId23102 && $.addTopLevelView($.__views.__alloyId23102);
    $.__views.__alloyId23103 = Ti.UI.createView({
        id: "__alloyId23103"
    });
    $.__views.__alloyId23102.add($.__views.__alloyId23103);
    $.__views.__alloyId23104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23104"
    });
    $.__views.__alloyId23103.add($.__views.__alloyId23104);
    $.__views.__alloyId23105 = Ti.UI.createView({
        id: "__alloyId23105"
    });
    $.__views.__alloyId23105 && $.addTopLevelView($.__views.__alloyId23105);
    $.__views.__alloyId23106 = Ti.UI.createView({
        id: "__alloyId23106"
    });
    $.__views.__alloyId23105.add($.__views.__alloyId23106);
    $.__views.__alloyId23107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23107"
    });
    $.__views.__alloyId23106.add($.__views.__alloyId23107);
    $.__views.__alloyId23108 = Ti.UI.createView({
        id: "__alloyId23108"
    });
    $.__views.__alloyId23108 && $.addTopLevelView($.__views.__alloyId23108);
    $.__views.__alloyId23109 = Ti.UI.createView({
        id: "__alloyId23109"
    });
    $.__views.__alloyId23108.add($.__views.__alloyId23109);
    $.__views.__alloyId23110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23110"
    });
    $.__views.__alloyId23109.add($.__views.__alloyId23110);
    $.__views.__alloyId23111 = Ti.UI.createView({
        id: "__alloyId23111"
    });
    $.__views.__alloyId23111 && $.addTopLevelView($.__views.__alloyId23111);
    $.__views.__alloyId23112 = Ti.UI.createView({
        id: "__alloyId23112"
    });
    $.__views.__alloyId23111.add($.__views.__alloyId23112);
    $.__views.__alloyId23113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23113"
    });
    $.__views.__alloyId23112.add($.__views.__alloyId23113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;