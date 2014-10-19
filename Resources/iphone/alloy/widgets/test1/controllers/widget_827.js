function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_827";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_827 = Ti.UI.createView({
        id: "widget_827"
    });
    $.__views.widget_827 && $.addTopLevelView($.__views.widget_827);
    $.__views.__alloyId21060 = Ti.UI.createView({
        id: "__alloyId21060"
    });
    $.__views.widget_827.add($.__views.__alloyId21060);
    $.__views.__alloyId21061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21061"
    });
    $.__views.__alloyId21060.add($.__views.__alloyId21061);
    $.__views.__alloyId21062 = Ti.UI.createView({
        id: "__alloyId21062"
    });
    $.__views.__alloyId21062 && $.addTopLevelView($.__views.__alloyId21062);
    $.__views.__alloyId21063 = Ti.UI.createView({
        id: "__alloyId21063"
    });
    $.__views.__alloyId21062.add($.__views.__alloyId21063);
    $.__views.__alloyId21064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21064"
    });
    $.__views.__alloyId21063.add($.__views.__alloyId21064);
    $.__views.__alloyId21065 = Ti.UI.createView({
        id: "__alloyId21065"
    });
    $.__views.__alloyId21065 && $.addTopLevelView($.__views.__alloyId21065);
    $.__views.__alloyId21066 = Ti.UI.createView({
        id: "__alloyId21066"
    });
    $.__views.__alloyId21065.add($.__views.__alloyId21066);
    $.__views.__alloyId21067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21067"
    });
    $.__views.__alloyId21066.add($.__views.__alloyId21067);
    $.__views.__alloyId21068 = Ti.UI.createView({
        id: "__alloyId21068"
    });
    $.__views.__alloyId21068 && $.addTopLevelView($.__views.__alloyId21068);
    $.__views.__alloyId21069 = Ti.UI.createView({
        id: "__alloyId21069"
    });
    $.__views.__alloyId21068.add($.__views.__alloyId21069);
    $.__views.__alloyId21070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21070"
    });
    $.__views.__alloyId21069.add($.__views.__alloyId21070);
    $.__views.__alloyId21071 = Ti.UI.createView({
        id: "__alloyId21071"
    });
    $.__views.__alloyId21071 && $.addTopLevelView($.__views.__alloyId21071);
    $.__views.__alloyId21072 = Ti.UI.createView({
        id: "__alloyId21072"
    });
    $.__views.__alloyId21071.add($.__views.__alloyId21072);
    $.__views.__alloyId21073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21073"
    });
    $.__views.__alloyId21072.add($.__views.__alloyId21073);
    $.__views.__alloyId21074 = Ti.UI.createView({
        id: "__alloyId21074"
    });
    $.__views.__alloyId21074 && $.addTopLevelView($.__views.__alloyId21074);
    $.__views.__alloyId21075 = Ti.UI.createView({
        id: "__alloyId21075"
    });
    $.__views.__alloyId21074.add($.__views.__alloyId21075);
    $.__views.__alloyId21076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21076"
    });
    $.__views.__alloyId21075.add($.__views.__alloyId21076);
    $.__views.__alloyId21077 = Ti.UI.createView({
        id: "__alloyId21077"
    });
    $.__views.__alloyId21077 && $.addTopLevelView($.__views.__alloyId21077);
    $.__views.__alloyId21078 = Ti.UI.createView({
        id: "__alloyId21078"
    });
    $.__views.__alloyId21077.add($.__views.__alloyId21078);
    $.__views.__alloyId21079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21079"
    });
    $.__views.__alloyId21078.add($.__views.__alloyId21079);
    $.__views.__alloyId21080 = Ti.UI.createView({
        id: "__alloyId21080"
    });
    $.__views.__alloyId21080 && $.addTopLevelView($.__views.__alloyId21080);
    $.__views.__alloyId21081 = Ti.UI.createView({
        id: "__alloyId21081"
    });
    $.__views.__alloyId21080.add($.__views.__alloyId21081);
    $.__views.__alloyId21082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21082"
    });
    $.__views.__alloyId21081.add($.__views.__alloyId21082);
    $.__views.__alloyId21083 = Ti.UI.createView({
        id: "__alloyId21083"
    });
    $.__views.__alloyId21083 && $.addTopLevelView($.__views.__alloyId21083);
    $.__views.__alloyId21084 = Ti.UI.createView({
        id: "__alloyId21084"
    });
    $.__views.__alloyId21083.add($.__views.__alloyId21084);
    $.__views.__alloyId21085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21085"
    });
    $.__views.__alloyId21084.add($.__views.__alloyId21085);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;