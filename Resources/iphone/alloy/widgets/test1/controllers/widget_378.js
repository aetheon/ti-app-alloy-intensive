function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_378";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_378 = Ti.UI.createView({
        id: "widget_378"
    });
    $.__views.widget_378 && $.addTopLevelView($.__views.widget_378);
    $.__views.__alloyId8086 = Ti.UI.createView({
        id: "__alloyId8086"
    });
    $.__views.widget_378.add($.__views.__alloyId8086);
    $.__views.__alloyId8087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8087"
    });
    $.__views.__alloyId8086.add($.__views.__alloyId8087);
    $.__views.__alloyId8088 = Ti.UI.createView({
        id: "__alloyId8088"
    });
    $.__views.__alloyId8088 && $.addTopLevelView($.__views.__alloyId8088);
    $.__views.__alloyId8089 = Ti.UI.createView({
        id: "__alloyId8089"
    });
    $.__views.__alloyId8088.add($.__views.__alloyId8089);
    $.__views.__alloyId8090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8090"
    });
    $.__views.__alloyId8089.add($.__views.__alloyId8090);
    $.__views.__alloyId8091 = Ti.UI.createView({
        id: "__alloyId8091"
    });
    $.__views.__alloyId8091 && $.addTopLevelView($.__views.__alloyId8091);
    $.__views.__alloyId8092 = Ti.UI.createView({
        id: "__alloyId8092"
    });
    $.__views.__alloyId8091.add($.__views.__alloyId8092);
    $.__views.__alloyId8093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8093"
    });
    $.__views.__alloyId8092.add($.__views.__alloyId8093);
    $.__views.__alloyId8094 = Ti.UI.createView({
        id: "__alloyId8094"
    });
    $.__views.__alloyId8094 && $.addTopLevelView($.__views.__alloyId8094);
    $.__views.__alloyId8095 = Ti.UI.createView({
        id: "__alloyId8095"
    });
    $.__views.__alloyId8094.add($.__views.__alloyId8095);
    $.__views.__alloyId8096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8096"
    });
    $.__views.__alloyId8095.add($.__views.__alloyId8096);
    $.__views.__alloyId8097 = Ti.UI.createView({
        id: "__alloyId8097"
    });
    $.__views.__alloyId8097 && $.addTopLevelView($.__views.__alloyId8097);
    $.__views.__alloyId8098 = Ti.UI.createView({
        id: "__alloyId8098"
    });
    $.__views.__alloyId8097.add($.__views.__alloyId8098);
    $.__views.__alloyId8099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8099"
    });
    $.__views.__alloyId8098.add($.__views.__alloyId8099);
    $.__views.__alloyId8100 = Ti.UI.createView({
        id: "__alloyId8100"
    });
    $.__views.__alloyId8100 && $.addTopLevelView($.__views.__alloyId8100);
    $.__views.__alloyId8101 = Ti.UI.createView({
        id: "__alloyId8101"
    });
    $.__views.__alloyId8100.add($.__views.__alloyId8101);
    $.__views.__alloyId8102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8102"
    });
    $.__views.__alloyId8101.add($.__views.__alloyId8102);
    $.__views.__alloyId8103 = Ti.UI.createView({
        id: "__alloyId8103"
    });
    $.__views.__alloyId8103 && $.addTopLevelView($.__views.__alloyId8103);
    $.__views.__alloyId8104 = Ti.UI.createView({
        id: "__alloyId8104"
    });
    $.__views.__alloyId8103.add($.__views.__alloyId8104);
    $.__views.__alloyId8105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8105"
    });
    $.__views.__alloyId8104.add($.__views.__alloyId8105);
    $.__views.__alloyId8106 = Ti.UI.createView({
        id: "__alloyId8106"
    });
    $.__views.__alloyId8106 && $.addTopLevelView($.__views.__alloyId8106);
    $.__views.__alloyId8107 = Ti.UI.createView({
        id: "__alloyId8107"
    });
    $.__views.__alloyId8106.add($.__views.__alloyId8107);
    $.__views.__alloyId8108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8108"
    });
    $.__views.__alloyId8107.add($.__views.__alloyId8108);
    $.__views.__alloyId8109 = Ti.UI.createView({
        id: "__alloyId8109"
    });
    $.__views.__alloyId8109 && $.addTopLevelView($.__views.__alloyId8109);
    $.__views.__alloyId8110 = Ti.UI.createView({
        id: "__alloyId8110"
    });
    $.__views.__alloyId8109.add($.__views.__alloyId8110);
    $.__views.__alloyId8111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8111"
    });
    $.__views.__alloyId8110.add($.__views.__alloyId8111);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;