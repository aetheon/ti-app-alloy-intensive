function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_446";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_446 = Ti.UI.createView({
        id: "widget_446"
    });
    $.__views.widget_446 && $.addTopLevelView($.__views.widget_446);
    $.__views.__alloyId10062 = Ti.UI.createView({
        id: "__alloyId10062"
    });
    $.__views.widget_446.add($.__views.__alloyId10062);
    $.__views.__alloyId10063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10063"
    });
    $.__views.__alloyId10062.add($.__views.__alloyId10063);
    $.__views.__alloyId10064 = Ti.UI.createView({
        id: "__alloyId10064"
    });
    $.__views.__alloyId10064 && $.addTopLevelView($.__views.__alloyId10064);
    $.__views.__alloyId10065 = Ti.UI.createView({
        id: "__alloyId10065"
    });
    $.__views.__alloyId10064.add($.__views.__alloyId10065);
    $.__views.__alloyId10066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10066"
    });
    $.__views.__alloyId10065.add($.__views.__alloyId10066);
    $.__views.__alloyId10067 = Ti.UI.createView({
        id: "__alloyId10067"
    });
    $.__views.__alloyId10067 && $.addTopLevelView($.__views.__alloyId10067);
    $.__views.__alloyId10068 = Ti.UI.createView({
        id: "__alloyId10068"
    });
    $.__views.__alloyId10067.add($.__views.__alloyId10068);
    $.__views.__alloyId10069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10069"
    });
    $.__views.__alloyId10068.add($.__views.__alloyId10069);
    $.__views.__alloyId10070 = Ti.UI.createView({
        id: "__alloyId10070"
    });
    $.__views.__alloyId10070 && $.addTopLevelView($.__views.__alloyId10070);
    $.__views.__alloyId10071 = Ti.UI.createView({
        id: "__alloyId10071"
    });
    $.__views.__alloyId10070.add($.__views.__alloyId10071);
    $.__views.__alloyId10072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10072"
    });
    $.__views.__alloyId10071.add($.__views.__alloyId10072);
    $.__views.__alloyId10073 = Ti.UI.createView({
        id: "__alloyId10073"
    });
    $.__views.__alloyId10073 && $.addTopLevelView($.__views.__alloyId10073);
    $.__views.__alloyId10074 = Ti.UI.createView({
        id: "__alloyId10074"
    });
    $.__views.__alloyId10073.add($.__views.__alloyId10074);
    $.__views.__alloyId10075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10075"
    });
    $.__views.__alloyId10074.add($.__views.__alloyId10075);
    $.__views.__alloyId10076 = Ti.UI.createView({
        id: "__alloyId10076"
    });
    $.__views.__alloyId10076 && $.addTopLevelView($.__views.__alloyId10076);
    $.__views.__alloyId10077 = Ti.UI.createView({
        id: "__alloyId10077"
    });
    $.__views.__alloyId10076.add($.__views.__alloyId10077);
    $.__views.__alloyId10078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10078"
    });
    $.__views.__alloyId10077.add($.__views.__alloyId10078);
    $.__views.__alloyId10079 = Ti.UI.createView({
        id: "__alloyId10079"
    });
    $.__views.__alloyId10079 && $.addTopLevelView($.__views.__alloyId10079);
    $.__views.__alloyId10080 = Ti.UI.createView({
        id: "__alloyId10080"
    });
    $.__views.__alloyId10079.add($.__views.__alloyId10080);
    $.__views.__alloyId10081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10081"
    });
    $.__views.__alloyId10080.add($.__views.__alloyId10081);
    $.__views.__alloyId10082 = Ti.UI.createView({
        id: "__alloyId10082"
    });
    $.__views.__alloyId10082 && $.addTopLevelView($.__views.__alloyId10082);
    $.__views.__alloyId10083 = Ti.UI.createView({
        id: "__alloyId10083"
    });
    $.__views.__alloyId10082.add($.__views.__alloyId10083);
    $.__views.__alloyId10084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10084"
    });
    $.__views.__alloyId10083.add($.__views.__alloyId10084);
    $.__views.__alloyId10085 = Ti.UI.createView({
        id: "__alloyId10085"
    });
    $.__views.__alloyId10085 && $.addTopLevelView($.__views.__alloyId10085);
    $.__views.__alloyId10086 = Ti.UI.createView({
        id: "__alloyId10086"
    });
    $.__views.__alloyId10085.add($.__views.__alloyId10086);
    $.__views.__alloyId10087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10087"
    });
    $.__views.__alloyId10086.add($.__views.__alloyId10087);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;