function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_648";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_648 = Ti.UI.createView({
        id: "widget_648"
    });
    $.__views.widget_648 && $.addTopLevelView($.__views.widget_648);
    $.__views.__alloyId15886 = Ti.UI.createView({
        id: "__alloyId15886"
    });
    $.__views.widget_648.add($.__views.__alloyId15886);
    $.__views.__alloyId15887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15887"
    });
    $.__views.__alloyId15886.add($.__views.__alloyId15887);
    $.__views.__alloyId15888 = Ti.UI.createView({
        id: "__alloyId15888"
    });
    $.__views.__alloyId15888 && $.addTopLevelView($.__views.__alloyId15888);
    $.__views.__alloyId15889 = Ti.UI.createView({
        id: "__alloyId15889"
    });
    $.__views.__alloyId15888.add($.__views.__alloyId15889);
    $.__views.__alloyId15890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15890"
    });
    $.__views.__alloyId15889.add($.__views.__alloyId15890);
    $.__views.__alloyId15891 = Ti.UI.createView({
        id: "__alloyId15891"
    });
    $.__views.__alloyId15891 && $.addTopLevelView($.__views.__alloyId15891);
    $.__views.__alloyId15892 = Ti.UI.createView({
        id: "__alloyId15892"
    });
    $.__views.__alloyId15891.add($.__views.__alloyId15892);
    $.__views.__alloyId15893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15893"
    });
    $.__views.__alloyId15892.add($.__views.__alloyId15893);
    $.__views.__alloyId15894 = Ti.UI.createView({
        id: "__alloyId15894"
    });
    $.__views.__alloyId15894 && $.addTopLevelView($.__views.__alloyId15894);
    $.__views.__alloyId15895 = Ti.UI.createView({
        id: "__alloyId15895"
    });
    $.__views.__alloyId15894.add($.__views.__alloyId15895);
    $.__views.__alloyId15896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15896"
    });
    $.__views.__alloyId15895.add($.__views.__alloyId15896);
    $.__views.__alloyId15897 = Ti.UI.createView({
        id: "__alloyId15897"
    });
    $.__views.__alloyId15897 && $.addTopLevelView($.__views.__alloyId15897);
    $.__views.__alloyId15898 = Ti.UI.createView({
        id: "__alloyId15898"
    });
    $.__views.__alloyId15897.add($.__views.__alloyId15898);
    $.__views.__alloyId15899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15899"
    });
    $.__views.__alloyId15898.add($.__views.__alloyId15899);
    $.__views.__alloyId15900 = Ti.UI.createView({
        id: "__alloyId15900"
    });
    $.__views.__alloyId15900 && $.addTopLevelView($.__views.__alloyId15900);
    $.__views.__alloyId15901 = Ti.UI.createView({
        id: "__alloyId15901"
    });
    $.__views.__alloyId15900.add($.__views.__alloyId15901);
    $.__views.__alloyId15902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15902"
    });
    $.__views.__alloyId15901.add($.__views.__alloyId15902);
    $.__views.__alloyId15903 = Ti.UI.createView({
        id: "__alloyId15903"
    });
    $.__views.__alloyId15903 && $.addTopLevelView($.__views.__alloyId15903);
    $.__views.__alloyId15904 = Ti.UI.createView({
        id: "__alloyId15904"
    });
    $.__views.__alloyId15903.add($.__views.__alloyId15904);
    $.__views.__alloyId15905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15905"
    });
    $.__views.__alloyId15904.add($.__views.__alloyId15905);
    $.__views.__alloyId15906 = Ti.UI.createView({
        id: "__alloyId15906"
    });
    $.__views.__alloyId15906 && $.addTopLevelView($.__views.__alloyId15906);
    $.__views.__alloyId15907 = Ti.UI.createView({
        id: "__alloyId15907"
    });
    $.__views.__alloyId15906.add($.__views.__alloyId15907);
    $.__views.__alloyId15908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15908"
    });
    $.__views.__alloyId15907.add($.__views.__alloyId15908);
    $.__views.__alloyId15909 = Ti.UI.createView({
        id: "__alloyId15909"
    });
    $.__views.__alloyId15909 && $.addTopLevelView($.__views.__alloyId15909);
    $.__views.__alloyId15910 = Ti.UI.createView({
        id: "__alloyId15910"
    });
    $.__views.__alloyId15909.add($.__views.__alloyId15910);
    $.__views.__alloyId15911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15911"
    });
    $.__views.__alloyId15910.add($.__views.__alloyId15911);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;