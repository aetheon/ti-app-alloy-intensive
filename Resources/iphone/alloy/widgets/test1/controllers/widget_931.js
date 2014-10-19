function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_931";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_931 = Ti.UI.createView({
        id: "widget_931"
    });
    $.__views.widget_931 && $.addTopLevelView($.__views.widget_931);
    $.__views.__alloyId24076 = Ti.UI.createView({
        id: "__alloyId24076"
    });
    $.__views.widget_931.add($.__views.__alloyId24076);
    $.__views.__alloyId24077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24077"
    });
    $.__views.__alloyId24076.add($.__views.__alloyId24077);
    $.__views.__alloyId24078 = Ti.UI.createView({
        id: "__alloyId24078"
    });
    $.__views.__alloyId24078 && $.addTopLevelView($.__views.__alloyId24078);
    $.__views.__alloyId24079 = Ti.UI.createView({
        id: "__alloyId24079"
    });
    $.__views.__alloyId24078.add($.__views.__alloyId24079);
    $.__views.__alloyId24080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24080"
    });
    $.__views.__alloyId24079.add($.__views.__alloyId24080);
    $.__views.__alloyId24081 = Ti.UI.createView({
        id: "__alloyId24081"
    });
    $.__views.__alloyId24081 && $.addTopLevelView($.__views.__alloyId24081);
    $.__views.__alloyId24082 = Ti.UI.createView({
        id: "__alloyId24082"
    });
    $.__views.__alloyId24081.add($.__views.__alloyId24082);
    $.__views.__alloyId24083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24083"
    });
    $.__views.__alloyId24082.add($.__views.__alloyId24083);
    $.__views.__alloyId24084 = Ti.UI.createView({
        id: "__alloyId24084"
    });
    $.__views.__alloyId24084 && $.addTopLevelView($.__views.__alloyId24084);
    $.__views.__alloyId24085 = Ti.UI.createView({
        id: "__alloyId24085"
    });
    $.__views.__alloyId24084.add($.__views.__alloyId24085);
    $.__views.__alloyId24086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24086"
    });
    $.__views.__alloyId24085.add($.__views.__alloyId24086);
    $.__views.__alloyId24087 = Ti.UI.createView({
        id: "__alloyId24087"
    });
    $.__views.__alloyId24087 && $.addTopLevelView($.__views.__alloyId24087);
    $.__views.__alloyId24088 = Ti.UI.createView({
        id: "__alloyId24088"
    });
    $.__views.__alloyId24087.add($.__views.__alloyId24088);
    $.__views.__alloyId24089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24089"
    });
    $.__views.__alloyId24088.add($.__views.__alloyId24089);
    $.__views.__alloyId24090 = Ti.UI.createView({
        id: "__alloyId24090"
    });
    $.__views.__alloyId24090 && $.addTopLevelView($.__views.__alloyId24090);
    $.__views.__alloyId24091 = Ti.UI.createView({
        id: "__alloyId24091"
    });
    $.__views.__alloyId24090.add($.__views.__alloyId24091);
    $.__views.__alloyId24092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24092"
    });
    $.__views.__alloyId24091.add($.__views.__alloyId24092);
    $.__views.__alloyId24093 = Ti.UI.createView({
        id: "__alloyId24093"
    });
    $.__views.__alloyId24093 && $.addTopLevelView($.__views.__alloyId24093);
    $.__views.__alloyId24094 = Ti.UI.createView({
        id: "__alloyId24094"
    });
    $.__views.__alloyId24093.add($.__views.__alloyId24094);
    $.__views.__alloyId24095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24095"
    });
    $.__views.__alloyId24094.add($.__views.__alloyId24095);
    $.__views.__alloyId24096 = Ti.UI.createView({
        id: "__alloyId24096"
    });
    $.__views.__alloyId24096 && $.addTopLevelView($.__views.__alloyId24096);
    $.__views.__alloyId24097 = Ti.UI.createView({
        id: "__alloyId24097"
    });
    $.__views.__alloyId24096.add($.__views.__alloyId24097);
    $.__views.__alloyId24098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24098"
    });
    $.__views.__alloyId24097.add($.__views.__alloyId24098);
    $.__views.__alloyId24099 = Ti.UI.createView({
        id: "__alloyId24099"
    });
    $.__views.__alloyId24099 && $.addTopLevelView($.__views.__alloyId24099);
    $.__views.__alloyId24100 = Ti.UI.createView({
        id: "__alloyId24100"
    });
    $.__views.__alloyId24099.add($.__views.__alloyId24100);
    $.__views.__alloyId24101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24101"
    });
    $.__views.__alloyId24100.add($.__views.__alloyId24101);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;