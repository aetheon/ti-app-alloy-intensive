function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_586";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_586 = Ti.UI.createView({
        id: "widget_586"
    });
    $.__views.widget_586 && $.addTopLevelView($.__views.widget_586);
    $.__views.__alloyId14092 = Ti.UI.createView({
        id: "__alloyId14092"
    });
    $.__views.widget_586.add($.__views.__alloyId14092);
    $.__views.__alloyId14093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14093"
    });
    $.__views.__alloyId14092.add($.__views.__alloyId14093);
    $.__views.__alloyId14094 = Ti.UI.createView({
        id: "__alloyId14094"
    });
    $.__views.__alloyId14094 && $.addTopLevelView($.__views.__alloyId14094);
    $.__views.__alloyId14095 = Ti.UI.createView({
        id: "__alloyId14095"
    });
    $.__views.__alloyId14094.add($.__views.__alloyId14095);
    $.__views.__alloyId14096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14096"
    });
    $.__views.__alloyId14095.add($.__views.__alloyId14096);
    $.__views.__alloyId14097 = Ti.UI.createView({
        id: "__alloyId14097"
    });
    $.__views.__alloyId14097 && $.addTopLevelView($.__views.__alloyId14097);
    $.__views.__alloyId14098 = Ti.UI.createView({
        id: "__alloyId14098"
    });
    $.__views.__alloyId14097.add($.__views.__alloyId14098);
    $.__views.__alloyId14099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14099"
    });
    $.__views.__alloyId14098.add($.__views.__alloyId14099);
    $.__views.__alloyId14100 = Ti.UI.createView({
        id: "__alloyId14100"
    });
    $.__views.__alloyId14100 && $.addTopLevelView($.__views.__alloyId14100);
    $.__views.__alloyId14101 = Ti.UI.createView({
        id: "__alloyId14101"
    });
    $.__views.__alloyId14100.add($.__views.__alloyId14101);
    $.__views.__alloyId14102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14102"
    });
    $.__views.__alloyId14101.add($.__views.__alloyId14102);
    $.__views.__alloyId14103 = Ti.UI.createView({
        id: "__alloyId14103"
    });
    $.__views.__alloyId14103 && $.addTopLevelView($.__views.__alloyId14103);
    $.__views.__alloyId14104 = Ti.UI.createView({
        id: "__alloyId14104"
    });
    $.__views.__alloyId14103.add($.__views.__alloyId14104);
    $.__views.__alloyId14105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14105"
    });
    $.__views.__alloyId14104.add($.__views.__alloyId14105);
    $.__views.__alloyId14106 = Ti.UI.createView({
        id: "__alloyId14106"
    });
    $.__views.__alloyId14106 && $.addTopLevelView($.__views.__alloyId14106);
    $.__views.__alloyId14107 = Ti.UI.createView({
        id: "__alloyId14107"
    });
    $.__views.__alloyId14106.add($.__views.__alloyId14107);
    $.__views.__alloyId14108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14108"
    });
    $.__views.__alloyId14107.add($.__views.__alloyId14108);
    $.__views.__alloyId14109 = Ti.UI.createView({
        id: "__alloyId14109"
    });
    $.__views.__alloyId14109 && $.addTopLevelView($.__views.__alloyId14109);
    $.__views.__alloyId14110 = Ti.UI.createView({
        id: "__alloyId14110"
    });
    $.__views.__alloyId14109.add($.__views.__alloyId14110);
    $.__views.__alloyId14111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14111"
    });
    $.__views.__alloyId14110.add($.__views.__alloyId14111);
    $.__views.__alloyId14112 = Ti.UI.createView({
        id: "__alloyId14112"
    });
    $.__views.__alloyId14112 && $.addTopLevelView($.__views.__alloyId14112);
    $.__views.__alloyId14113 = Ti.UI.createView({
        id: "__alloyId14113"
    });
    $.__views.__alloyId14112.add($.__views.__alloyId14113);
    $.__views.__alloyId14114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14114"
    });
    $.__views.__alloyId14113.add($.__views.__alloyId14114);
    $.__views.__alloyId14115 = Ti.UI.createView({
        id: "__alloyId14115"
    });
    $.__views.__alloyId14115 && $.addTopLevelView($.__views.__alloyId14115);
    $.__views.__alloyId14116 = Ti.UI.createView({
        id: "__alloyId14116"
    });
    $.__views.__alloyId14115.add($.__views.__alloyId14116);
    $.__views.__alloyId14117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14117"
    });
    $.__views.__alloyId14116.add($.__views.__alloyId14117);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;