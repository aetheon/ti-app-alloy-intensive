function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_824";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_824 = Ti.UI.createView({
        id: "widget_824"
    });
    $.__views.widget_824 && $.addTopLevelView($.__views.widget_824);
    $.__views.__alloyId20982 = Ti.UI.createView({
        id: "__alloyId20982"
    });
    $.__views.widget_824.add($.__views.__alloyId20982);
    $.__views.__alloyId20983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20983"
    });
    $.__views.__alloyId20982.add($.__views.__alloyId20983);
    $.__views.__alloyId20984 = Ti.UI.createView({
        id: "__alloyId20984"
    });
    $.__views.__alloyId20984 && $.addTopLevelView($.__views.__alloyId20984);
    $.__views.__alloyId20985 = Ti.UI.createView({
        id: "__alloyId20985"
    });
    $.__views.__alloyId20984.add($.__views.__alloyId20985);
    $.__views.__alloyId20986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20986"
    });
    $.__views.__alloyId20985.add($.__views.__alloyId20986);
    $.__views.__alloyId20987 = Ti.UI.createView({
        id: "__alloyId20987"
    });
    $.__views.__alloyId20987 && $.addTopLevelView($.__views.__alloyId20987);
    $.__views.__alloyId20988 = Ti.UI.createView({
        id: "__alloyId20988"
    });
    $.__views.__alloyId20987.add($.__views.__alloyId20988);
    $.__views.__alloyId20989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20989"
    });
    $.__views.__alloyId20988.add($.__views.__alloyId20989);
    $.__views.__alloyId20990 = Ti.UI.createView({
        id: "__alloyId20990"
    });
    $.__views.__alloyId20990 && $.addTopLevelView($.__views.__alloyId20990);
    $.__views.__alloyId20991 = Ti.UI.createView({
        id: "__alloyId20991"
    });
    $.__views.__alloyId20990.add($.__views.__alloyId20991);
    $.__views.__alloyId20992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20992"
    });
    $.__views.__alloyId20991.add($.__views.__alloyId20992);
    $.__views.__alloyId20993 = Ti.UI.createView({
        id: "__alloyId20993"
    });
    $.__views.__alloyId20993 && $.addTopLevelView($.__views.__alloyId20993);
    $.__views.__alloyId20994 = Ti.UI.createView({
        id: "__alloyId20994"
    });
    $.__views.__alloyId20993.add($.__views.__alloyId20994);
    $.__views.__alloyId20995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20995"
    });
    $.__views.__alloyId20994.add($.__views.__alloyId20995);
    $.__views.__alloyId20996 = Ti.UI.createView({
        id: "__alloyId20996"
    });
    $.__views.__alloyId20996 && $.addTopLevelView($.__views.__alloyId20996);
    $.__views.__alloyId20997 = Ti.UI.createView({
        id: "__alloyId20997"
    });
    $.__views.__alloyId20996.add($.__views.__alloyId20997);
    $.__views.__alloyId20998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20998"
    });
    $.__views.__alloyId20997.add($.__views.__alloyId20998);
    $.__views.__alloyId20999 = Ti.UI.createView({
        id: "__alloyId20999"
    });
    $.__views.__alloyId20999 && $.addTopLevelView($.__views.__alloyId20999);
    $.__views.__alloyId21000 = Ti.UI.createView({
        id: "__alloyId21000"
    });
    $.__views.__alloyId20999.add($.__views.__alloyId21000);
    $.__views.__alloyId21001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21001"
    });
    $.__views.__alloyId21000.add($.__views.__alloyId21001);
    $.__views.__alloyId21002 = Ti.UI.createView({
        id: "__alloyId21002"
    });
    $.__views.__alloyId21002 && $.addTopLevelView($.__views.__alloyId21002);
    $.__views.__alloyId21003 = Ti.UI.createView({
        id: "__alloyId21003"
    });
    $.__views.__alloyId21002.add($.__views.__alloyId21003);
    $.__views.__alloyId21004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21004"
    });
    $.__views.__alloyId21003.add($.__views.__alloyId21004);
    $.__views.__alloyId21005 = Ti.UI.createView({
        id: "__alloyId21005"
    });
    $.__views.__alloyId21005 && $.addTopLevelView($.__views.__alloyId21005);
    $.__views.__alloyId21006 = Ti.UI.createView({
        id: "__alloyId21006"
    });
    $.__views.__alloyId21005.add($.__views.__alloyId21006);
    $.__views.__alloyId21007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21007"
    });
    $.__views.__alloyId21006.add($.__views.__alloyId21007);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;