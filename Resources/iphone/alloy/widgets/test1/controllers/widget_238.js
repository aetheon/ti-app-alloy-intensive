function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_238";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_238 = Ti.UI.createView({
        id: "widget_238"
    });
    $.__views.widget_238 && $.addTopLevelView($.__views.widget_238);
    $.__views.__alloyId4056 = Ti.UI.createView({
        id: "__alloyId4056"
    });
    $.__views.widget_238.add($.__views.__alloyId4056);
    $.__views.__alloyId4057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4057"
    });
    $.__views.__alloyId4056.add($.__views.__alloyId4057);
    $.__views.__alloyId4058 = Ti.UI.createView({
        id: "__alloyId4058"
    });
    $.__views.__alloyId4058 && $.addTopLevelView($.__views.__alloyId4058);
    $.__views.__alloyId4059 = Ti.UI.createView({
        id: "__alloyId4059"
    });
    $.__views.__alloyId4058.add($.__views.__alloyId4059);
    $.__views.__alloyId4060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4060"
    });
    $.__views.__alloyId4059.add($.__views.__alloyId4060);
    $.__views.__alloyId4061 = Ti.UI.createView({
        id: "__alloyId4061"
    });
    $.__views.__alloyId4061 && $.addTopLevelView($.__views.__alloyId4061);
    $.__views.__alloyId4062 = Ti.UI.createView({
        id: "__alloyId4062"
    });
    $.__views.__alloyId4061.add($.__views.__alloyId4062);
    $.__views.__alloyId4063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4063"
    });
    $.__views.__alloyId4062.add($.__views.__alloyId4063);
    $.__views.__alloyId4064 = Ti.UI.createView({
        id: "__alloyId4064"
    });
    $.__views.__alloyId4064 && $.addTopLevelView($.__views.__alloyId4064);
    $.__views.__alloyId4065 = Ti.UI.createView({
        id: "__alloyId4065"
    });
    $.__views.__alloyId4064.add($.__views.__alloyId4065);
    $.__views.__alloyId4066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4066"
    });
    $.__views.__alloyId4065.add($.__views.__alloyId4066);
    $.__views.__alloyId4067 = Ti.UI.createView({
        id: "__alloyId4067"
    });
    $.__views.__alloyId4067 && $.addTopLevelView($.__views.__alloyId4067);
    $.__views.__alloyId4068 = Ti.UI.createView({
        id: "__alloyId4068"
    });
    $.__views.__alloyId4067.add($.__views.__alloyId4068);
    $.__views.__alloyId4069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4069"
    });
    $.__views.__alloyId4068.add($.__views.__alloyId4069);
    $.__views.__alloyId4070 = Ti.UI.createView({
        id: "__alloyId4070"
    });
    $.__views.__alloyId4070 && $.addTopLevelView($.__views.__alloyId4070);
    $.__views.__alloyId4071 = Ti.UI.createView({
        id: "__alloyId4071"
    });
    $.__views.__alloyId4070.add($.__views.__alloyId4071);
    $.__views.__alloyId4072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4072"
    });
    $.__views.__alloyId4071.add($.__views.__alloyId4072);
    $.__views.__alloyId4073 = Ti.UI.createView({
        id: "__alloyId4073"
    });
    $.__views.__alloyId4073 && $.addTopLevelView($.__views.__alloyId4073);
    $.__views.__alloyId4074 = Ti.UI.createView({
        id: "__alloyId4074"
    });
    $.__views.__alloyId4073.add($.__views.__alloyId4074);
    $.__views.__alloyId4075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4075"
    });
    $.__views.__alloyId4074.add($.__views.__alloyId4075);
    $.__views.__alloyId4076 = Ti.UI.createView({
        id: "__alloyId4076"
    });
    $.__views.__alloyId4076 && $.addTopLevelView($.__views.__alloyId4076);
    $.__views.__alloyId4077 = Ti.UI.createView({
        id: "__alloyId4077"
    });
    $.__views.__alloyId4076.add($.__views.__alloyId4077);
    $.__views.__alloyId4078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4078"
    });
    $.__views.__alloyId4077.add($.__views.__alloyId4078);
    $.__views.__alloyId4079 = Ti.UI.createView({
        id: "__alloyId4079"
    });
    $.__views.__alloyId4079 && $.addTopLevelView($.__views.__alloyId4079);
    $.__views.__alloyId4080 = Ti.UI.createView({
        id: "__alloyId4080"
    });
    $.__views.__alloyId4079.add($.__views.__alloyId4080);
    $.__views.__alloyId4081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4081"
    });
    $.__views.__alloyId4080.add($.__views.__alloyId4081);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;