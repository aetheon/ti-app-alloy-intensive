function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_686";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_686 = Ti.UI.createView({
        id: "widget_686"
    });
    $.__views.widget_686 && $.addTopLevelView($.__views.widget_686);
    $.__views.__alloyId16978 = Ti.UI.createView({
        id: "__alloyId16978"
    });
    $.__views.widget_686.add($.__views.__alloyId16978);
    $.__views.__alloyId16979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16979"
    });
    $.__views.__alloyId16978.add($.__views.__alloyId16979);
    $.__views.__alloyId16980 = Ti.UI.createView({
        id: "__alloyId16980"
    });
    $.__views.__alloyId16980 && $.addTopLevelView($.__views.__alloyId16980);
    $.__views.__alloyId16981 = Ti.UI.createView({
        id: "__alloyId16981"
    });
    $.__views.__alloyId16980.add($.__views.__alloyId16981);
    $.__views.__alloyId16982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16982"
    });
    $.__views.__alloyId16981.add($.__views.__alloyId16982);
    $.__views.__alloyId16983 = Ti.UI.createView({
        id: "__alloyId16983"
    });
    $.__views.__alloyId16983 && $.addTopLevelView($.__views.__alloyId16983);
    $.__views.__alloyId16984 = Ti.UI.createView({
        id: "__alloyId16984"
    });
    $.__views.__alloyId16983.add($.__views.__alloyId16984);
    $.__views.__alloyId16985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16985"
    });
    $.__views.__alloyId16984.add($.__views.__alloyId16985);
    $.__views.__alloyId16986 = Ti.UI.createView({
        id: "__alloyId16986"
    });
    $.__views.__alloyId16986 && $.addTopLevelView($.__views.__alloyId16986);
    $.__views.__alloyId16987 = Ti.UI.createView({
        id: "__alloyId16987"
    });
    $.__views.__alloyId16986.add($.__views.__alloyId16987);
    $.__views.__alloyId16988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16988"
    });
    $.__views.__alloyId16987.add($.__views.__alloyId16988);
    $.__views.__alloyId16989 = Ti.UI.createView({
        id: "__alloyId16989"
    });
    $.__views.__alloyId16989 && $.addTopLevelView($.__views.__alloyId16989);
    $.__views.__alloyId16990 = Ti.UI.createView({
        id: "__alloyId16990"
    });
    $.__views.__alloyId16989.add($.__views.__alloyId16990);
    $.__views.__alloyId16991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16991"
    });
    $.__views.__alloyId16990.add($.__views.__alloyId16991);
    $.__views.__alloyId16992 = Ti.UI.createView({
        id: "__alloyId16992"
    });
    $.__views.__alloyId16992 && $.addTopLevelView($.__views.__alloyId16992);
    $.__views.__alloyId16993 = Ti.UI.createView({
        id: "__alloyId16993"
    });
    $.__views.__alloyId16992.add($.__views.__alloyId16993);
    $.__views.__alloyId16994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16994"
    });
    $.__views.__alloyId16993.add($.__views.__alloyId16994);
    $.__views.__alloyId16995 = Ti.UI.createView({
        id: "__alloyId16995"
    });
    $.__views.__alloyId16995 && $.addTopLevelView($.__views.__alloyId16995);
    $.__views.__alloyId16996 = Ti.UI.createView({
        id: "__alloyId16996"
    });
    $.__views.__alloyId16995.add($.__views.__alloyId16996);
    $.__views.__alloyId16997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16997"
    });
    $.__views.__alloyId16996.add($.__views.__alloyId16997);
    $.__views.__alloyId16998 = Ti.UI.createView({
        id: "__alloyId16998"
    });
    $.__views.__alloyId16998 && $.addTopLevelView($.__views.__alloyId16998);
    $.__views.__alloyId16999 = Ti.UI.createView({
        id: "__alloyId16999"
    });
    $.__views.__alloyId16998.add($.__views.__alloyId16999);
    $.__views.__alloyId17000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17000"
    });
    $.__views.__alloyId16999.add($.__views.__alloyId17000);
    $.__views.__alloyId17001 = Ti.UI.createView({
        id: "__alloyId17001"
    });
    $.__views.__alloyId17001 && $.addTopLevelView($.__views.__alloyId17001);
    $.__views.__alloyId17002 = Ti.UI.createView({
        id: "__alloyId17002"
    });
    $.__views.__alloyId17001.add($.__views.__alloyId17002);
    $.__views.__alloyId17003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17003"
    });
    $.__views.__alloyId17002.add($.__views.__alloyId17003);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;