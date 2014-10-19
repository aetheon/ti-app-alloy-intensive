function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_377";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_377 = Ti.UI.createView({
        id: "widget_377"
    });
    $.__views.widget_377 && $.addTopLevelView($.__views.widget_377);
    $.__views.__alloyId8060 = Ti.UI.createView({
        id: "__alloyId8060"
    });
    $.__views.widget_377.add($.__views.__alloyId8060);
    $.__views.__alloyId8061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8061"
    });
    $.__views.__alloyId8060.add($.__views.__alloyId8061);
    $.__views.__alloyId8062 = Ti.UI.createView({
        id: "__alloyId8062"
    });
    $.__views.__alloyId8062 && $.addTopLevelView($.__views.__alloyId8062);
    $.__views.__alloyId8063 = Ti.UI.createView({
        id: "__alloyId8063"
    });
    $.__views.__alloyId8062.add($.__views.__alloyId8063);
    $.__views.__alloyId8064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8064"
    });
    $.__views.__alloyId8063.add($.__views.__alloyId8064);
    $.__views.__alloyId8065 = Ti.UI.createView({
        id: "__alloyId8065"
    });
    $.__views.__alloyId8065 && $.addTopLevelView($.__views.__alloyId8065);
    $.__views.__alloyId8066 = Ti.UI.createView({
        id: "__alloyId8066"
    });
    $.__views.__alloyId8065.add($.__views.__alloyId8066);
    $.__views.__alloyId8067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8067"
    });
    $.__views.__alloyId8066.add($.__views.__alloyId8067);
    $.__views.__alloyId8068 = Ti.UI.createView({
        id: "__alloyId8068"
    });
    $.__views.__alloyId8068 && $.addTopLevelView($.__views.__alloyId8068);
    $.__views.__alloyId8069 = Ti.UI.createView({
        id: "__alloyId8069"
    });
    $.__views.__alloyId8068.add($.__views.__alloyId8069);
    $.__views.__alloyId8070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8070"
    });
    $.__views.__alloyId8069.add($.__views.__alloyId8070);
    $.__views.__alloyId8071 = Ti.UI.createView({
        id: "__alloyId8071"
    });
    $.__views.__alloyId8071 && $.addTopLevelView($.__views.__alloyId8071);
    $.__views.__alloyId8072 = Ti.UI.createView({
        id: "__alloyId8072"
    });
    $.__views.__alloyId8071.add($.__views.__alloyId8072);
    $.__views.__alloyId8073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8073"
    });
    $.__views.__alloyId8072.add($.__views.__alloyId8073);
    $.__views.__alloyId8074 = Ti.UI.createView({
        id: "__alloyId8074"
    });
    $.__views.__alloyId8074 && $.addTopLevelView($.__views.__alloyId8074);
    $.__views.__alloyId8075 = Ti.UI.createView({
        id: "__alloyId8075"
    });
    $.__views.__alloyId8074.add($.__views.__alloyId8075);
    $.__views.__alloyId8076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8076"
    });
    $.__views.__alloyId8075.add($.__views.__alloyId8076);
    $.__views.__alloyId8077 = Ti.UI.createView({
        id: "__alloyId8077"
    });
    $.__views.__alloyId8077 && $.addTopLevelView($.__views.__alloyId8077);
    $.__views.__alloyId8078 = Ti.UI.createView({
        id: "__alloyId8078"
    });
    $.__views.__alloyId8077.add($.__views.__alloyId8078);
    $.__views.__alloyId8079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8079"
    });
    $.__views.__alloyId8078.add($.__views.__alloyId8079);
    $.__views.__alloyId8080 = Ti.UI.createView({
        id: "__alloyId8080"
    });
    $.__views.__alloyId8080 && $.addTopLevelView($.__views.__alloyId8080);
    $.__views.__alloyId8081 = Ti.UI.createView({
        id: "__alloyId8081"
    });
    $.__views.__alloyId8080.add($.__views.__alloyId8081);
    $.__views.__alloyId8082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8082"
    });
    $.__views.__alloyId8081.add($.__views.__alloyId8082);
    $.__views.__alloyId8083 = Ti.UI.createView({
        id: "__alloyId8083"
    });
    $.__views.__alloyId8083 && $.addTopLevelView($.__views.__alloyId8083);
    $.__views.__alloyId8084 = Ti.UI.createView({
        id: "__alloyId8084"
    });
    $.__views.__alloyId8083.add($.__views.__alloyId8084);
    $.__views.__alloyId8085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8085"
    });
    $.__views.__alloyId8084.add($.__views.__alloyId8085);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;