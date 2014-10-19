function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_516";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_516 = Ti.UI.createView({
        id: "widget_516"
    });
    $.__views.widget_516 && $.addTopLevelView($.__views.widget_516);
    $.__views.__alloyId12090 = Ti.UI.createView({
        id: "__alloyId12090"
    });
    $.__views.widget_516.add($.__views.__alloyId12090);
    $.__views.__alloyId12091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12091"
    });
    $.__views.__alloyId12090.add($.__views.__alloyId12091);
    $.__views.__alloyId12092 = Ti.UI.createView({
        id: "__alloyId12092"
    });
    $.__views.__alloyId12092 && $.addTopLevelView($.__views.__alloyId12092);
    $.__views.__alloyId12093 = Ti.UI.createView({
        id: "__alloyId12093"
    });
    $.__views.__alloyId12092.add($.__views.__alloyId12093);
    $.__views.__alloyId12094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12094"
    });
    $.__views.__alloyId12093.add($.__views.__alloyId12094);
    $.__views.__alloyId12095 = Ti.UI.createView({
        id: "__alloyId12095"
    });
    $.__views.__alloyId12095 && $.addTopLevelView($.__views.__alloyId12095);
    $.__views.__alloyId12096 = Ti.UI.createView({
        id: "__alloyId12096"
    });
    $.__views.__alloyId12095.add($.__views.__alloyId12096);
    $.__views.__alloyId12097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12097"
    });
    $.__views.__alloyId12096.add($.__views.__alloyId12097);
    $.__views.__alloyId12098 = Ti.UI.createView({
        id: "__alloyId12098"
    });
    $.__views.__alloyId12098 && $.addTopLevelView($.__views.__alloyId12098);
    $.__views.__alloyId12099 = Ti.UI.createView({
        id: "__alloyId12099"
    });
    $.__views.__alloyId12098.add($.__views.__alloyId12099);
    $.__views.__alloyId12100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12100"
    });
    $.__views.__alloyId12099.add($.__views.__alloyId12100);
    $.__views.__alloyId12101 = Ti.UI.createView({
        id: "__alloyId12101"
    });
    $.__views.__alloyId12101 && $.addTopLevelView($.__views.__alloyId12101);
    $.__views.__alloyId12102 = Ti.UI.createView({
        id: "__alloyId12102"
    });
    $.__views.__alloyId12101.add($.__views.__alloyId12102);
    $.__views.__alloyId12103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12103"
    });
    $.__views.__alloyId12102.add($.__views.__alloyId12103);
    $.__views.__alloyId12104 = Ti.UI.createView({
        id: "__alloyId12104"
    });
    $.__views.__alloyId12104 && $.addTopLevelView($.__views.__alloyId12104);
    $.__views.__alloyId12105 = Ti.UI.createView({
        id: "__alloyId12105"
    });
    $.__views.__alloyId12104.add($.__views.__alloyId12105);
    $.__views.__alloyId12106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12106"
    });
    $.__views.__alloyId12105.add($.__views.__alloyId12106);
    $.__views.__alloyId12107 = Ti.UI.createView({
        id: "__alloyId12107"
    });
    $.__views.__alloyId12107 && $.addTopLevelView($.__views.__alloyId12107);
    $.__views.__alloyId12108 = Ti.UI.createView({
        id: "__alloyId12108"
    });
    $.__views.__alloyId12107.add($.__views.__alloyId12108);
    $.__views.__alloyId12109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12109"
    });
    $.__views.__alloyId12108.add($.__views.__alloyId12109);
    $.__views.__alloyId12110 = Ti.UI.createView({
        id: "__alloyId12110"
    });
    $.__views.__alloyId12110 && $.addTopLevelView($.__views.__alloyId12110);
    $.__views.__alloyId12111 = Ti.UI.createView({
        id: "__alloyId12111"
    });
    $.__views.__alloyId12110.add($.__views.__alloyId12111);
    $.__views.__alloyId12112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12112"
    });
    $.__views.__alloyId12111.add($.__views.__alloyId12112);
    $.__views.__alloyId12113 = Ti.UI.createView({
        id: "__alloyId12113"
    });
    $.__views.__alloyId12113 && $.addTopLevelView($.__views.__alloyId12113);
    $.__views.__alloyId12114 = Ti.UI.createView({
        id: "__alloyId12114"
    });
    $.__views.__alloyId12113.add($.__views.__alloyId12114);
    $.__views.__alloyId12115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12115"
    });
    $.__views.__alloyId12114.add($.__views.__alloyId12115);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;