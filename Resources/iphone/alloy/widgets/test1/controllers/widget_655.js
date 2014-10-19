function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_655";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_655 = Ti.UI.createView({
        id: "widget_655"
    });
    $.__views.widget_655 && $.addTopLevelView($.__views.widget_655);
    $.__views.__alloyId16094 = Ti.UI.createView({
        id: "__alloyId16094"
    });
    $.__views.widget_655.add($.__views.__alloyId16094);
    $.__views.__alloyId16095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16095"
    });
    $.__views.__alloyId16094.add($.__views.__alloyId16095);
    $.__views.__alloyId16096 = Ti.UI.createView({
        id: "__alloyId16096"
    });
    $.__views.__alloyId16096 && $.addTopLevelView($.__views.__alloyId16096);
    $.__views.__alloyId16097 = Ti.UI.createView({
        id: "__alloyId16097"
    });
    $.__views.__alloyId16096.add($.__views.__alloyId16097);
    $.__views.__alloyId16098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16098"
    });
    $.__views.__alloyId16097.add($.__views.__alloyId16098);
    $.__views.__alloyId16099 = Ti.UI.createView({
        id: "__alloyId16099"
    });
    $.__views.__alloyId16099 && $.addTopLevelView($.__views.__alloyId16099);
    $.__views.__alloyId16100 = Ti.UI.createView({
        id: "__alloyId16100"
    });
    $.__views.__alloyId16099.add($.__views.__alloyId16100);
    $.__views.__alloyId16101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16101"
    });
    $.__views.__alloyId16100.add($.__views.__alloyId16101);
    $.__views.__alloyId16102 = Ti.UI.createView({
        id: "__alloyId16102"
    });
    $.__views.__alloyId16102 && $.addTopLevelView($.__views.__alloyId16102);
    $.__views.__alloyId16103 = Ti.UI.createView({
        id: "__alloyId16103"
    });
    $.__views.__alloyId16102.add($.__views.__alloyId16103);
    $.__views.__alloyId16104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16104"
    });
    $.__views.__alloyId16103.add($.__views.__alloyId16104);
    $.__views.__alloyId16105 = Ti.UI.createView({
        id: "__alloyId16105"
    });
    $.__views.__alloyId16105 && $.addTopLevelView($.__views.__alloyId16105);
    $.__views.__alloyId16106 = Ti.UI.createView({
        id: "__alloyId16106"
    });
    $.__views.__alloyId16105.add($.__views.__alloyId16106);
    $.__views.__alloyId16107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16107"
    });
    $.__views.__alloyId16106.add($.__views.__alloyId16107);
    $.__views.__alloyId16108 = Ti.UI.createView({
        id: "__alloyId16108"
    });
    $.__views.__alloyId16108 && $.addTopLevelView($.__views.__alloyId16108);
    $.__views.__alloyId16109 = Ti.UI.createView({
        id: "__alloyId16109"
    });
    $.__views.__alloyId16108.add($.__views.__alloyId16109);
    $.__views.__alloyId16110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16110"
    });
    $.__views.__alloyId16109.add($.__views.__alloyId16110);
    $.__views.__alloyId16111 = Ti.UI.createView({
        id: "__alloyId16111"
    });
    $.__views.__alloyId16111 && $.addTopLevelView($.__views.__alloyId16111);
    $.__views.__alloyId16112 = Ti.UI.createView({
        id: "__alloyId16112"
    });
    $.__views.__alloyId16111.add($.__views.__alloyId16112);
    $.__views.__alloyId16113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16113"
    });
    $.__views.__alloyId16112.add($.__views.__alloyId16113);
    $.__views.__alloyId16114 = Ti.UI.createView({
        id: "__alloyId16114"
    });
    $.__views.__alloyId16114 && $.addTopLevelView($.__views.__alloyId16114);
    $.__views.__alloyId16115 = Ti.UI.createView({
        id: "__alloyId16115"
    });
    $.__views.__alloyId16114.add($.__views.__alloyId16115);
    $.__views.__alloyId16116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16116"
    });
    $.__views.__alloyId16115.add($.__views.__alloyId16116);
    $.__views.__alloyId16117 = Ti.UI.createView({
        id: "__alloyId16117"
    });
    $.__views.__alloyId16117 && $.addTopLevelView($.__views.__alloyId16117);
    $.__views.__alloyId16118 = Ti.UI.createView({
        id: "__alloyId16118"
    });
    $.__views.__alloyId16117.add($.__views.__alloyId16118);
    $.__views.__alloyId16119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16119"
    });
    $.__views.__alloyId16118.add($.__views.__alloyId16119);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;