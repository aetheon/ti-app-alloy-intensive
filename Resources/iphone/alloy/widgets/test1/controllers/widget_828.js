function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_828";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_828 = Ti.UI.createView({
        id: "widget_828"
    });
    $.__views.widget_828 && $.addTopLevelView($.__views.widget_828);
    $.__views.__alloyId21086 = Ti.UI.createView({
        id: "__alloyId21086"
    });
    $.__views.widget_828.add($.__views.__alloyId21086);
    $.__views.__alloyId21087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21087"
    });
    $.__views.__alloyId21086.add($.__views.__alloyId21087);
    $.__views.__alloyId21088 = Ti.UI.createView({
        id: "__alloyId21088"
    });
    $.__views.__alloyId21088 && $.addTopLevelView($.__views.__alloyId21088);
    $.__views.__alloyId21089 = Ti.UI.createView({
        id: "__alloyId21089"
    });
    $.__views.__alloyId21088.add($.__views.__alloyId21089);
    $.__views.__alloyId21090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21090"
    });
    $.__views.__alloyId21089.add($.__views.__alloyId21090);
    $.__views.__alloyId21091 = Ti.UI.createView({
        id: "__alloyId21091"
    });
    $.__views.__alloyId21091 && $.addTopLevelView($.__views.__alloyId21091);
    $.__views.__alloyId21092 = Ti.UI.createView({
        id: "__alloyId21092"
    });
    $.__views.__alloyId21091.add($.__views.__alloyId21092);
    $.__views.__alloyId21093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21093"
    });
    $.__views.__alloyId21092.add($.__views.__alloyId21093);
    $.__views.__alloyId21094 = Ti.UI.createView({
        id: "__alloyId21094"
    });
    $.__views.__alloyId21094 && $.addTopLevelView($.__views.__alloyId21094);
    $.__views.__alloyId21095 = Ti.UI.createView({
        id: "__alloyId21095"
    });
    $.__views.__alloyId21094.add($.__views.__alloyId21095);
    $.__views.__alloyId21096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21096"
    });
    $.__views.__alloyId21095.add($.__views.__alloyId21096);
    $.__views.__alloyId21097 = Ti.UI.createView({
        id: "__alloyId21097"
    });
    $.__views.__alloyId21097 && $.addTopLevelView($.__views.__alloyId21097);
    $.__views.__alloyId21098 = Ti.UI.createView({
        id: "__alloyId21098"
    });
    $.__views.__alloyId21097.add($.__views.__alloyId21098);
    $.__views.__alloyId21099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21099"
    });
    $.__views.__alloyId21098.add($.__views.__alloyId21099);
    $.__views.__alloyId21100 = Ti.UI.createView({
        id: "__alloyId21100"
    });
    $.__views.__alloyId21100 && $.addTopLevelView($.__views.__alloyId21100);
    $.__views.__alloyId21101 = Ti.UI.createView({
        id: "__alloyId21101"
    });
    $.__views.__alloyId21100.add($.__views.__alloyId21101);
    $.__views.__alloyId21102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21102"
    });
    $.__views.__alloyId21101.add($.__views.__alloyId21102);
    $.__views.__alloyId21103 = Ti.UI.createView({
        id: "__alloyId21103"
    });
    $.__views.__alloyId21103 && $.addTopLevelView($.__views.__alloyId21103);
    $.__views.__alloyId21104 = Ti.UI.createView({
        id: "__alloyId21104"
    });
    $.__views.__alloyId21103.add($.__views.__alloyId21104);
    $.__views.__alloyId21105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21105"
    });
    $.__views.__alloyId21104.add($.__views.__alloyId21105);
    $.__views.__alloyId21106 = Ti.UI.createView({
        id: "__alloyId21106"
    });
    $.__views.__alloyId21106 && $.addTopLevelView($.__views.__alloyId21106);
    $.__views.__alloyId21107 = Ti.UI.createView({
        id: "__alloyId21107"
    });
    $.__views.__alloyId21106.add($.__views.__alloyId21107);
    $.__views.__alloyId21108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21108"
    });
    $.__views.__alloyId21107.add($.__views.__alloyId21108);
    $.__views.__alloyId21109 = Ti.UI.createView({
        id: "__alloyId21109"
    });
    $.__views.__alloyId21109 && $.addTopLevelView($.__views.__alloyId21109);
    $.__views.__alloyId21110 = Ti.UI.createView({
        id: "__alloyId21110"
    });
    $.__views.__alloyId21109.add($.__views.__alloyId21110);
    $.__views.__alloyId21111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21111"
    });
    $.__views.__alloyId21110.add($.__views.__alloyId21111);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;