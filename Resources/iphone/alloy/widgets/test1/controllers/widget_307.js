function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_307";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_307 = Ti.UI.createView({
        id: "widget_307"
    });
    $.__views.widget_307 && $.addTopLevelView($.__views.widget_307);
    $.__views.__alloyId6058 = Ti.UI.createView({
        id: "__alloyId6058"
    });
    $.__views.widget_307.add($.__views.__alloyId6058);
    $.__views.__alloyId6059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6059"
    });
    $.__views.__alloyId6058.add($.__views.__alloyId6059);
    $.__views.__alloyId6060 = Ti.UI.createView({
        id: "__alloyId6060"
    });
    $.__views.__alloyId6060 && $.addTopLevelView($.__views.__alloyId6060);
    $.__views.__alloyId6061 = Ti.UI.createView({
        id: "__alloyId6061"
    });
    $.__views.__alloyId6060.add($.__views.__alloyId6061);
    $.__views.__alloyId6062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6062"
    });
    $.__views.__alloyId6061.add($.__views.__alloyId6062);
    $.__views.__alloyId6063 = Ti.UI.createView({
        id: "__alloyId6063"
    });
    $.__views.__alloyId6063 && $.addTopLevelView($.__views.__alloyId6063);
    $.__views.__alloyId6064 = Ti.UI.createView({
        id: "__alloyId6064"
    });
    $.__views.__alloyId6063.add($.__views.__alloyId6064);
    $.__views.__alloyId6065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6065"
    });
    $.__views.__alloyId6064.add($.__views.__alloyId6065);
    $.__views.__alloyId6066 = Ti.UI.createView({
        id: "__alloyId6066"
    });
    $.__views.__alloyId6066 && $.addTopLevelView($.__views.__alloyId6066);
    $.__views.__alloyId6067 = Ti.UI.createView({
        id: "__alloyId6067"
    });
    $.__views.__alloyId6066.add($.__views.__alloyId6067);
    $.__views.__alloyId6068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6068"
    });
    $.__views.__alloyId6067.add($.__views.__alloyId6068);
    $.__views.__alloyId6069 = Ti.UI.createView({
        id: "__alloyId6069"
    });
    $.__views.__alloyId6069 && $.addTopLevelView($.__views.__alloyId6069);
    $.__views.__alloyId6070 = Ti.UI.createView({
        id: "__alloyId6070"
    });
    $.__views.__alloyId6069.add($.__views.__alloyId6070);
    $.__views.__alloyId6071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6071"
    });
    $.__views.__alloyId6070.add($.__views.__alloyId6071);
    $.__views.__alloyId6072 = Ti.UI.createView({
        id: "__alloyId6072"
    });
    $.__views.__alloyId6072 && $.addTopLevelView($.__views.__alloyId6072);
    $.__views.__alloyId6073 = Ti.UI.createView({
        id: "__alloyId6073"
    });
    $.__views.__alloyId6072.add($.__views.__alloyId6073);
    $.__views.__alloyId6074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6074"
    });
    $.__views.__alloyId6073.add($.__views.__alloyId6074);
    $.__views.__alloyId6075 = Ti.UI.createView({
        id: "__alloyId6075"
    });
    $.__views.__alloyId6075 && $.addTopLevelView($.__views.__alloyId6075);
    $.__views.__alloyId6076 = Ti.UI.createView({
        id: "__alloyId6076"
    });
    $.__views.__alloyId6075.add($.__views.__alloyId6076);
    $.__views.__alloyId6077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6077"
    });
    $.__views.__alloyId6076.add($.__views.__alloyId6077);
    $.__views.__alloyId6078 = Ti.UI.createView({
        id: "__alloyId6078"
    });
    $.__views.__alloyId6078 && $.addTopLevelView($.__views.__alloyId6078);
    $.__views.__alloyId6079 = Ti.UI.createView({
        id: "__alloyId6079"
    });
    $.__views.__alloyId6078.add($.__views.__alloyId6079);
    $.__views.__alloyId6080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6080"
    });
    $.__views.__alloyId6079.add($.__views.__alloyId6080);
    $.__views.__alloyId6081 = Ti.UI.createView({
        id: "__alloyId6081"
    });
    $.__views.__alloyId6081 && $.addTopLevelView($.__views.__alloyId6081);
    $.__views.__alloyId6082 = Ti.UI.createView({
        id: "__alloyId6082"
    });
    $.__views.__alloyId6081.add($.__views.__alloyId6082);
    $.__views.__alloyId6083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6083"
    });
    $.__views.__alloyId6082.add($.__views.__alloyId6083);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;