function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_34";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_34 = Ti.UI.createView({
        id: "widget_34"
    });
    $.__views.widget_34 && $.addTopLevelView($.__views.widget_34);
    $.__views.__alloyId6994 = Ti.UI.createView({
        id: "__alloyId6994"
    });
    $.__views.widget_34.add($.__views.__alloyId6994);
    $.__views.__alloyId6995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6995"
    });
    $.__views.__alloyId6994.add($.__views.__alloyId6995);
    $.__views.__alloyId6996 = Ti.UI.createView({
        id: "__alloyId6996"
    });
    $.__views.__alloyId6996 && $.addTopLevelView($.__views.__alloyId6996);
    $.__views.__alloyId6997 = Ti.UI.createView({
        id: "__alloyId6997"
    });
    $.__views.__alloyId6996.add($.__views.__alloyId6997);
    $.__views.__alloyId6998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6998"
    });
    $.__views.__alloyId6997.add($.__views.__alloyId6998);
    $.__views.__alloyId6999 = Ti.UI.createView({
        id: "__alloyId6999"
    });
    $.__views.__alloyId6999 && $.addTopLevelView($.__views.__alloyId6999);
    $.__views.__alloyId7000 = Ti.UI.createView({
        id: "__alloyId7000"
    });
    $.__views.__alloyId6999.add($.__views.__alloyId7000);
    $.__views.__alloyId7001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7001"
    });
    $.__views.__alloyId7000.add($.__views.__alloyId7001);
    $.__views.__alloyId7002 = Ti.UI.createView({
        id: "__alloyId7002"
    });
    $.__views.__alloyId7002 && $.addTopLevelView($.__views.__alloyId7002);
    $.__views.__alloyId7003 = Ti.UI.createView({
        id: "__alloyId7003"
    });
    $.__views.__alloyId7002.add($.__views.__alloyId7003);
    $.__views.__alloyId7004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7004"
    });
    $.__views.__alloyId7003.add($.__views.__alloyId7004);
    $.__views.__alloyId7005 = Ti.UI.createView({
        id: "__alloyId7005"
    });
    $.__views.__alloyId7005 && $.addTopLevelView($.__views.__alloyId7005);
    $.__views.__alloyId7006 = Ti.UI.createView({
        id: "__alloyId7006"
    });
    $.__views.__alloyId7005.add($.__views.__alloyId7006);
    $.__views.__alloyId7007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7007"
    });
    $.__views.__alloyId7006.add($.__views.__alloyId7007);
    $.__views.__alloyId7008 = Ti.UI.createView({
        id: "__alloyId7008"
    });
    $.__views.__alloyId7008 && $.addTopLevelView($.__views.__alloyId7008);
    $.__views.__alloyId7009 = Ti.UI.createView({
        id: "__alloyId7009"
    });
    $.__views.__alloyId7008.add($.__views.__alloyId7009);
    $.__views.__alloyId7010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7010"
    });
    $.__views.__alloyId7009.add($.__views.__alloyId7010);
    $.__views.__alloyId7011 = Ti.UI.createView({
        id: "__alloyId7011"
    });
    $.__views.__alloyId7011 && $.addTopLevelView($.__views.__alloyId7011);
    $.__views.__alloyId7012 = Ti.UI.createView({
        id: "__alloyId7012"
    });
    $.__views.__alloyId7011.add($.__views.__alloyId7012);
    $.__views.__alloyId7013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7013"
    });
    $.__views.__alloyId7012.add($.__views.__alloyId7013);
    $.__views.__alloyId7014 = Ti.UI.createView({
        id: "__alloyId7014"
    });
    $.__views.__alloyId7014 && $.addTopLevelView($.__views.__alloyId7014);
    $.__views.__alloyId7015 = Ti.UI.createView({
        id: "__alloyId7015"
    });
    $.__views.__alloyId7014.add($.__views.__alloyId7015);
    $.__views.__alloyId7016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7016"
    });
    $.__views.__alloyId7015.add($.__views.__alloyId7016);
    $.__views.__alloyId7017 = Ti.UI.createView({
        id: "__alloyId7017"
    });
    $.__views.__alloyId7017 && $.addTopLevelView($.__views.__alloyId7017);
    $.__views.__alloyId7018 = Ti.UI.createView({
        id: "__alloyId7018"
    });
    $.__views.__alloyId7017.add($.__views.__alloyId7018);
    $.__views.__alloyId7019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7019"
    });
    $.__views.__alloyId7018.add($.__views.__alloyId7019);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;