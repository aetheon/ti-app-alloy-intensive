function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_717";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_717 = Ti.UI.createView({
        id: "widget_717"
    });
    $.__views.widget_717 && $.addTopLevelView($.__views.widget_717);
    $.__views.__alloyId17888 = Ti.UI.createView({
        id: "__alloyId17888"
    });
    $.__views.widget_717.add($.__views.__alloyId17888);
    $.__views.__alloyId17889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17889"
    });
    $.__views.__alloyId17888.add($.__views.__alloyId17889);
    $.__views.__alloyId17890 = Ti.UI.createView({
        id: "__alloyId17890"
    });
    $.__views.__alloyId17890 && $.addTopLevelView($.__views.__alloyId17890);
    $.__views.__alloyId17891 = Ti.UI.createView({
        id: "__alloyId17891"
    });
    $.__views.__alloyId17890.add($.__views.__alloyId17891);
    $.__views.__alloyId17892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17892"
    });
    $.__views.__alloyId17891.add($.__views.__alloyId17892);
    $.__views.__alloyId17893 = Ti.UI.createView({
        id: "__alloyId17893"
    });
    $.__views.__alloyId17893 && $.addTopLevelView($.__views.__alloyId17893);
    $.__views.__alloyId17894 = Ti.UI.createView({
        id: "__alloyId17894"
    });
    $.__views.__alloyId17893.add($.__views.__alloyId17894);
    $.__views.__alloyId17895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17895"
    });
    $.__views.__alloyId17894.add($.__views.__alloyId17895);
    $.__views.__alloyId17896 = Ti.UI.createView({
        id: "__alloyId17896"
    });
    $.__views.__alloyId17896 && $.addTopLevelView($.__views.__alloyId17896);
    $.__views.__alloyId17897 = Ti.UI.createView({
        id: "__alloyId17897"
    });
    $.__views.__alloyId17896.add($.__views.__alloyId17897);
    $.__views.__alloyId17898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17898"
    });
    $.__views.__alloyId17897.add($.__views.__alloyId17898);
    $.__views.__alloyId17899 = Ti.UI.createView({
        id: "__alloyId17899"
    });
    $.__views.__alloyId17899 && $.addTopLevelView($.__views.__alloyId17899);
    $.__views.__alloyId17900 = Ti.UI.createView({
        id: "__alloyId17900"
    });
    $.__views.__alloyId17899.add($.__views.__alloyId17900);
    $.__views.__alloyId17901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17901"
    });
    $.__views.__alloyId17900.add($.__views.__alloyId17901);
    $.__views.__alloyId17902 = Ti.UI.createView({
        id: "__alloyId17902"
    });
    $.__views.__alloyId17902 && $.addTopLevelView($.__views.__alloyId17902);
    $.__views.__alloyId17903 = Ti.UI.createView({
        id: "__alloyId17903"
    });
    $.__views.__alloyId17902.add($.__views.__alloyId17903);
    $.__views.__alloyId17904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17904"
    });
    $.__views.__alloyId17903.add($.__views.__alloyId17904);
    $.__views.__alloyId17905 = Ti.UI.createView({
        id: "__alloyId17905"
    });
    $.__views.__alloyId17905 && $.addTopLevelView($.__views.__alloyId17905);
    $.__views.__alloyId17906 = Ti.UI.createView({
        id: "__alloyId17906"
    });
    $.__views.__alloyId17905.add($.__views.__alloyId17906);
    $.__views.__alloyId17907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17907"
    });
    $.__views.__alloyId17906.add($.__views.__alloyId17907);
    $.__views.__alloyId17908 = Ti.UI.createView({
        id: "__alloyId17908"
    });
    $.__views.__alloyId17908 && $.addTopLevelView($.__views.__alloyId17908);
    $.__views.__alloyId17909 = Ti.UI.createView({
        id: "__alloyId17909"
    });
    $.__views.__alloyId17908.add($.__views.__alloyId17909);
    $.__views.__alloyId17910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17910"
    });
    $.__views.__alloyId17909.add($.__views.__alloyId17910);
    $.__views.__alloyId17911 = Ti.UI.createView({
        id: "__alloyId17911"
    });
    $.__views.__alloyId17911 && $.addTopLevelView($.__views.__alloyId17911);
    $.__views.__alloyId17912 = Ti.UI.createView({
        id: "__alloyId17912"
    });
    $.__views.__alloyId17911.add($.__views.__alloyId17912);
    $.__views.__alloyId17913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17913"
    });
    $.__views.__alloyId17912.add($.__views.__alloyId17913);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;