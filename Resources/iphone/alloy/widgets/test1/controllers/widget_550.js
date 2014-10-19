function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_550";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_550 = Ti.UI.createView({
        id: "widget_550"
    });
    $.__views.widget_550 && $.addTopLevelView($.__views.widget_550);
    $.__views.__alloyId13078 = Ti.UI.createView({
        id: "__alloyId13078"
    });
    $.__views.widget_550.add($.__views.__alloyId13078);
    $.__views.__alloyId13079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13079"
    });
    $.__views.__alloyId13078.add($.__views.__alloyId13079);
    $.__views.__alloyId13080 = Ti.UI.createView({
        id: "__alloyId13080"
    });
    $.__views.__alloyId13080 && $.addTopLevelView($.__views.__alloyId13080);
    $.__views.__alloyId13081 = Ti.UI.createView({
        id: "__alloyId13081"
    });
    $.__views.__alloyId13080.add($.__views.__alloyId13081);
    $.__views.__alloyId13082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13082"
    });
    $.__views.__alloyId13081.add($.__views.__alloyId13082);
    $.__views.__alloyId13083 = Ti.UI.createView({
        id: "__alloyId13083"
    });
    $.__views.__alloyId13083 && $.addTopLevelView($.__views.__alloyId13083);
    $.__views.__alloyId13084 = Ti.UI.createView({
        id: "__alloyId13084"
    });
    $.__views.__alloyId13083.add($.__views.__alloyId13084);
    $.__views.__alloyId13085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13085"
    });
    $.__views.__alloyId13084.add($.__views.__alloyId13085);
    $.__views.__alloyId13086 = Ti.UI.createView({
        id: "__alloyId13086"
    });
    $.__views.__alloyId13086 && $.addTopLevelView($.__views.__alloyId13086);
    $.__views.__alloyId13087 = Ti.UI.createView({
        id: "__alloyId13087"
    });
    $.__views.__alloyId13086.add($.__views.__alloyId13087);
    $.__views.__alloyId13088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13088"
    });
    $.__views.__alloyId13087.add($.__views.__alloyId13088);
    $.__views.__alloyId13089 = Ti.UI.createView({
        id: "__alloyId13089"
    });
    $.__views.__alloyId13089 && $.addTopLevelView($.__views.__alloyId13089);
    $.__views.__alloyId13090 = Ti.UI.createView({
        id: "__alloyId13090"
    });
    $.__views.__alloyId13089.add($.__views.__alloyId13090);
    $.__views.__alloyId13091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13091"
    });
    $.__views.__alloyId13090.add($.__views.__alloyId13091);
    $.__views.__alloyId13092 = Ti.UI.createView({
        id: "__alloyId13092"
    });
    $.__views.__alloyId13092 && $.addTopLevelView($.__views.__alloyId13092);
    $.__views.__alloyId13093 = Ti.UI.createView({
        id: "__alloyId13093"
    });
    $.__views.__alloyId13092.add($.__views.__alloyId13093);
    $.__views.__alloyId13094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13094"
    });
    $.__views.__alloyId13093.add($.__views.__alloyId13094);
    $.__views.__alloyId13095 = Ti.UI.createView({
        id: "__alloyId13095"
    });
    $.__views.__alloyId13095 && $.addTopLevelView($.__views.__alloyId13095);
    $.__views.__alloyId13096 = Ti.UI.createView({
        id: "__alloyId13096"
    });
    $.__views.__alloyId13095.add($.__views.__alloyId13096);
    $.__views.__alloyId13097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13097"
    });
    $.__views.__alloyId13096.add($.__views.__alloyId13097);
    $.__views.__alloyId13098 = Ti.UI.createView({
        id: "__alloyId13098"
    });
    $.__views.__alloyId13098 && $.addTopLevelView($.__views.__alloyId13098);
    $.__views.__alloyId13099 = Ti.UI.createView({
        id: "__alloyId13099"
    });
    $.__views.__alloyId13098.add($.__views.__alloyId13099);
    $.__views.__alloyId13100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13100"
    });
    $.__views.__alloyId13099.add($.__views.__alloyId13100);
    $.__views.__alloyId13101 = Ti.UI.createView({
        id: "__alloyId13101"
    });
    $.__views.__alloyId13101 && $.addTopLevelView($.__views.__alloyId13101);
    $.__views.__alloyId13102 = Ti.UI.createView({
        id: "__alloyId13102"
    });
    $.__views.__alloyId13101.add($.__views.__alloyId13102);
    $.__views.__alloyId13103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13103"
    });
    $.__views.__alloyId13102.add($.__views.__alloyId13103);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;