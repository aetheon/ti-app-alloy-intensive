function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_758";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_758 = Ti.UI.createView({
        id: "widget_758"
    });
    $.__views.widget_758 && $.addTopLevelView($.__views.widget_758);
    $.__views.__alloyId19058 = Ti.UI.createView({
        id: "__alloyId19058"
    });
    $.__views.widget_758.add($.__views.__alloyId19058);
    $.__views.__alloyId19059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19059"
    });
    $.__views.__alloyId19058.add($.__views.__alloyId19059);
    $.__views.__alloyId19060 = Ti.UI.createView({
        id: "__alloyId19060"
    });
    $.__views.__alloyId19060 && $.addTopLevelView($.__views.__alloyId19060);
    $.__views.__alloyId19061 = Ti.UI.createView({
        id: "__alloyId19061"
    });
    $.__views.__alloyId19060.add($.__views.__alloyId19061);
    $.__views.__alloyId19062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19062"
    });
    $.__views.__alloyId19061.add($.__views.__alloyId19062);
    $.__views.__alloyId19063 = Ti.UI.createView({
        id: "__alloyId19063"
    });
    $.__views.__alloyId19063 && $.addTopLevelView($.__views.__alloyId19063);
    $.__views.__alloyId19064 = Ti.UI.createView({
        id: "__alloyId19064"
    });
    $.__views.__alloyId19063.add($.__views.__alloyId19064);
    $.__views.__alloyId19065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19065"
    });
    $.__views.__alloyId19064.add($.__views.__alloyId19065);
    $.__views.__alloyId19066 = Ti.UI.createView({
        id: "__alloyId19066"
    });
    $.__views.__alloyId19066 && $.addTopLevelView($.__views.__alloyId19066);
    $.__views.__alloyId19067 = Ti.UI.createView({
        id: "__alloyId19067"
    });
    $.__views.__alloyId19066.add($.__views.__alloyId19067);
    $.__views.__alloyId19068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19068"
    });
    $.__views.__alloyId19067.add($.__views.__alloyId19068);
    $.__views.__alloyId19069 = Ti.UI.createView({
        id: "__alloyId19069"
    });
    $.__views.__alloyId19069 && $.addTopLevelView($.__views.__alloyId19069);
    $.__views.__alloyId19070 = Ti.UI.createView({
        id: "__alloyId19070"
    });
    $.__views.__alloyId19069.add($.__views.__alloyId19070);
    $.__views.__alloyId19071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19071"
    });
    $.__views.__alloyId19070.add($.__views.__alloyId19071);
    $.__views.__alloyId19072 = Ti.UI.createView({
        id: "__alloyId19072"
    });
    $.__views.__alloyId19072 && $.addTopLevelView($.__views.__alloyId19072);
    $.__views.__alloyId19073 = Ti.UI.createView({
        id: "__alloyId19073"
    });
    $.__views.__alloyId19072.add($.__views.__alloyId19073);
    $.__views.__alloyId19074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19074"
    });
    $.__views.__alloyId19073.add($.__views.__alloyId19074);
    $.__views.__alloyId19075 = Ti.UI.createView({
        id: "__alloyId19075"
    });
    $.__views.__alloyId19075 && $.addTopLevelView($.__views.__alloyId19075);
    $.__views.__alloyId19076 = Ti.UI.createView({
        id: "__alloyId19076"
    });
    $.__views.__alloyId19075.add($.__views.__alloyId19076);
    $.__views.__alloyId19077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19077"
    });
    $.__views.__alloyId19076.add($.__views.__alloyId19077);
    $.__views.__alloyId19078 = Ti.UI.createView({
        id: "__alloyId19078"
    });
    $.__views.__alloyId19078 && $.addTopLevelView($.__views.__alloyId19078);
    $.__views.__alloyId19079 = Ti.UI.createView({
        id: "__alloyId19079"
    });
    $.__views.__alloyId19078.add($.__views.__alloyId19079);
    $.__views.__alloyId19080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19080"
    });
    $.__views.__alloyId19079.add($.__views.__alloyId19080);
    $.__views.__alloyId19081 = Ti.UI.createView({
        id: "__alloyId19081"
    });
    $.__views.__alloyId19081 && $.addTopLevelView($.__views.__alloyId19081);
    $.__views.__alloyId19082 = Ti.UI.createView({
        id: "__alloyId19082"
    });
    $.__views.__alloyId19081.add($.__views.__alloyId19082);
    $.__views.__alloyId19083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19083"
    });
    $.__views.__alloyId19082.add($.__views.__alloyId19083);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;