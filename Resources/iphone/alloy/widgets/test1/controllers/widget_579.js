function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_579";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_579 = Ti.UI.createView({
        id: "widget_579"
    });
    $.__views.widget_579 && $.addTopLevelView($.__views.widget_579);
    $.__views.__alloyId13884 = Ti.UI.createView({
        id: "__alloyId13884"
    });
    $.__views.widget_579.add($.__views.__alloyId13884);
    $.__views.__alloyId13885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13885"
    });
    $.__views.__alloyId13884.add($.__views.__alloyId13885);
    $.__views.__alloyId13886 = Ti.UI.createView({
        id: "__alloyId13886"
    });
    $.__views.__alloyId13886 && $.addTopLevelView($.__views.__alloyId13886);
    $.__views.__alloyId13887 = Ti.UI.createView({
        id: "__alloyId13887"
    });
    $.__views.__alloyId13886.add($.__views.__alloyId13887);
    $.__views.__alloyId13888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13888"
    });
    $.__views.__alloyId13887.add($.__views.__alloyId13888);
    $.__views.__alloyId13889 = Ti.UI.createView({
        id: "__alloyId13889"
    });
    $.__views.__alloyId13889 && $.addTopLevelView($.__views.__alloyId13889);
    $.__views.__alloyId13890 = Ti.UI.createView({
        id: "__alloyId13890"
    });
    $.__views.__alloyId13889.add($.__views.__alloyId13890);
    $.__views.__alloyId13891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13891"
    });
    $.__views.__alloyId13890.add($.__views.__alloyId13891);
    $.__views.__alloyId13892 = Ti.UI.createView({
        id: "__alloyId13892"
    });
    $.__views.__alloyId13892 && $.addTopLevelView($.__views.__alloyId13892);
    $.__views.__alloyId13893 = Ti.UI.createView({
        id: "__alloyId13893"
    });
    $.__views.__alloyId13892.add($.__views.__alloyId13893);
    $.__views.__alloyId13894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13894"
    });
    $.__views.__alloyId13893.add($.__views.__alloyId13894);
    $.__views.__alloyId13895 = Ti.UI.createView({
        id: "__alloyId13895"
    });
    $.__views.__alloyId13895 && $.addTopLevelView($.__views.__alloyId13895);
    $.__views.__alloyId13896 = Ti.UI.createView({
        id: "__alloyId13896"
    });
    $.__views.__alloyId13895.add($.__views.__alloyId13896);
    $.__views.__alloyId13897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13897"
    });
    $.__views.__alloyId13896.add($.__views.__alloyId13897);
    $.__views.__alloyId13898 = Ti.UI.createView({
        id: "__alloyId13898"
    });
    $.__views.__alloyId13898 && $.addTopLevelView($.__views.__alloyId13898);
    $.__views.__alloyId13899 = Ti.UI.createView({
        id: "__alloyId13899"
    });
    $.__views.__alloyId13898.add($.__views.__alloyId13899);
    $.__views.__alloyId13900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13900"
    });
    $.__views.__alloyId13899.add($.__views.__alloyId13900);
    $.__views.__alloyId13901 = Ti.UI.createView({
        id: "__alloyId13901"
    });
    $.__views.__alloyId13901 && $.addTopLevelView($.__views.__alloyId13901);
    $.__views.__alloyId13902 = Ti.UI.createView({
        id: "__alloyId13902"
    });
    $.__views.__alloyId13901.add($.__views.__alloyId13902);
    $.__views.__alloyId13903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13903"
    });
    $.__views.__alloyId13902.add($.__views.__alloyId13903);
    $.__views.__alloyId13904 = Ti.UI.createView({
        id: "__alloyId13904"
    });
    $.__views.__alloyId13904 && $.addTopLevelView($.__views.__alloyId13904);
    $.__views.__alloyId13905 = Ti.UI.createView({
        id: "__alloyId13905"
    });
    $.__views.__alloyId13904.add($.__views.__alloyId13905);
    $.__views.__alloyId13906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13906"
    });
    $.__views.__alloyId13905.add($.__views.__alloyId13906);
    $.__views.__alloyId13907 = Ti.UI.createView({
        id: "__alloyId13907"
    });
    $.__views.__alloyId13907 && $.addTopLevelView($.__views.__alloyId13907);
    $.__views.__alloyId13908 = Ti.UI.createView({
        id: "__alloyId13908"
    });
    $.__views.__alloyId13907.add($.__views.__alloyId13908);
    $.__views.__alloyId13909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13909"
    });
    $.__views.__alloyId13908.add($.__views.__alloyId13909);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;